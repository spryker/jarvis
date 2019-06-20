const express = require('express');
const compression = require('compression');
const inquirer = require('inquirer');
const moment = require('moment');
const {
    adjust,
    and,
    always,
    append,
    assoc,
    compose,
    concat,
    equals,
    evolve,
    find,
    findIndex,
    gt,
    head,
    isEmpty,
    isNil,
    keys,
    last,
    length,
    lensPath,
    map,
    over,
    path,
    prop,
    propEq
} = require('ramda');
const {
    cleanNodeInput,
    isNotNil,
    log
} = require('./utils.js');
const {
    getComposerFilesFromPath,
    getConfig,
    getCurrentVersion,
    updateConfigFile,
    updateLastApiCall,
    writeReleaseAppData
} = require('./file-system.js');
const { getReleaseAppData } = require('./api-call.js');


function run(newReleaseData = undefined) {
    const app = express();
    const port = 7777;

    const config = getConfig();

    if (isNotNil(newReleaseData)) {
        updateLastApiCall(config);
        writeReleaseAppData(prop('lastProjectUsed', config), newReleaseData);
    } else {
        writeReleaseAppData(prop('lastProjectUsed', config));
    }

    // Static files css/html/js
    app.use(express.static('dist'));
    // Compress for performance
    app.use(compression());

    // App has only 1 route
    app.get('/', (req, res) => res.sendFile('index.html'));

    // Web server is listening
    app.listen(port, () => {
        log(`I am listening on the URL http://localhost:${port}/`);
        log('When your migration will be over, could you share your feedback with us about Spryker Jarvis? https://spryker.typeform.com/to/Qzw9lg');
    });

    return app;
}

function runWithApiCall(projectName, composerJson, composerLock) {
    return getReleaseAppData({ projectName, composerJson, composerLock, currentVersion: getCurrentVersion() }, failedToRetrieveReleaseAppData, run);
}

function failedToRetrieveReleaseAppData(data) {
    log('I am sorry to announce that something went wrong, I could not retrieve any information from Spryker...');
    log('Please verify that you are connected to the Internet. If yes, please send an email to support@spryker.com to notify them that you could not use my services today.');
    return data;
}

function checkLastApiCallAndRunApp(projectName, config, composerFiles) {
    log(`Welcome back project ${projectName}! I hope your project is not too outdated...`);
    log('First let me check if my information about Spryker Features and Modules are up to date.');

    const project = findPreviousProject(projectName, config);
    const newConfig = assoc('lastProjectUsed', projectName, config);

    if (lastApiCallLessThanADay(prop('lastCallToReleaseApp', project))) {
        log('Yes, they are. Please follow me.');

        updateConfigFile(newConfig);

        return run();

    } else {

        log('No, they are not. Let me refresh them. This is take less than 1 minute I hope...');

        updateLastApiCall(newConfig);

        return runWithApiCall(projectName, ...map(prop('data'), composerFiles));
    }
}

function isLastProjectBack(projectName, lastProjectUsed) {
    return equals(projectName, lastProjectUsed);
}

function lastApiCallLessThanADay(date) {
    if (isNil(date)) {
        return false;
    } else {
        return moment().subtract(1, 'days') <= moment(date);
    }
}

function application(args) {
    log('Welcome, my name is Spryker Jarvis. Today I will help you to migrate your Spryker project!');

    const config = getConfig();
    const NOT_IN_THIS_LIST = 'Not in this list';
    const projectNameQuestionList = {
        type: "list",
        name: "projectName",
        choices: concat(map(prop('projectName'), prop('previousProjects', config)), [NOT_IN_THIS_LIST]),
        message: "Is the project name your are migrating inside this list?",
        when() {
            // Only ask the question if projects were used
            return gt(length(prop('previousProjects', config)), 0);
        }
    };
    const projectNameQuestionInput = {
        type: "input",
        name: "projectName",
        message: "What is the project name you are migrating today?",
        when(previousAnswers) {
            if (isEmpty(previousAnswers)) {
                return true;
            } else {
                return equals(prop('projectName', previousAnswers), NOT_IN_THIS_LIST);
            }
        }
    };

    /*
    0. Retrieve composer.json and composer.lock
      write them locally
      if hash from composer.lock equals to 1 on the previous project used -> 3
      if new hash -> 1
    1. check against customer input for project name or previous
        if same -> 3
        if different -> 2
    2. Run with API call
    3. Check last API is less than 1 day
      if true -> 4
      if false -> 2
    4. Run locally
    */

    const composerFiles = compose(
        getComposerFilesFromPath,
        head,
        cleanNodeInput
    )(args);
    const JSONcomposerFiles = map(cur => {
        const transformations = {
            data: a => JSON.parse(a)
        };
        return evolve(transformations, cur);
    }, composerFiles);
    const previousProjectIsBack = find(
        propEq('composerLockHash', path(['data', 'content-hash'], last(JSONcomposerFiles))),
        prop('previousProjects', config)
    );


    if (isNotNil(previousProjectIsBack)) {

        return checkLastApiCallAndRunApp(prop('projectName', previousProjectIsBack), config, composerFiles);

    } else {

        return inquirer.prompt([projectNameQuestionList, projectNameQuestionInput]).then(answers => {
            // Take the folder path and read/write the composer files
            const project = findPreviousProject(prop('projectName', answers), config);

            if (isNil(project)) {
                const newConfig = evolve({
                    previousProjects: append(
                        compose(
                            assoc('lastCallToReleaseApp', null),
                            assoc('composerLockHash', path(['data', 'content-hash'], last(JSONcomposerFiles)))
                        )(answers)
                    ),
                    lastProjectUsed: always(prop('projectName', answers))
                }, config);

                updateConfigFile(newConfig);

                return runWithApiCall(prop('lastProjectUsed', newConfig), ...map(prop('data'), composerFiles));

            } else {
                const projectIndex = findPreviousProjectIndex(prop('projectName', project), config);
                const newConfig = over(
                    lensPath(['previousProjects', projectIndex]),
                    assoc('composerLockHash', path(['data', 'content-hash'], last(JSONcomposerFiles))),
                    config
                );

                updateConfigFile(newConfig);

                if (path(['data', 'content-hash'], last(JSONcomposerFiles) === prop('composerLockHash', project))) {

                    return checkLastApiCallAndRunApp(prop('lastProjectUsed', newConfig), newConfig, composerFiles);

                } else {

                    return runWithApiCall(prop('lastProjectUsed', newConfig), ...map(prop('data'), composerFiles));

                }

            }
        });
    }
}

function findPreviousProject(projectName, config) {
    return find(
        propEq('projectName', projectName),
        prop('previousProjects', config)
    );
}

function findPreviousProjectIndex(projectName, config) {
    return findIndex(
        propEq('projectName', projectName),
        prop('previousProjects', config)
    );
}

application(process.argv);
