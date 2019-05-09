const express = require('express');
const compression = require('compression');
const inquirer = require('inquirer');
const moment = require('moment');
const {
  adjust,
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
  last,
  length,
  map,
  path,
  prop,
  propEq
} = require('ramda');
const {
  cleanNodeInput,
  getComposerFilesFromPath,
  getConfig,
  isNotNil,
  log,
  updateConfigFile
} = require('./utils.js');


function run() {
  const app = express();
  const port = 3000;

  // Static files css/html/js
  app.use(express.static('dist'));
  // Compress for performance
  app.use(compression());

  // App has only 1 route
  app.get('/', (req, res) => res.sendFile('index.html'));

  // Web server is listening
  app.listen(port, () => {
    log(`The application is listening on the URL http://localhost:${port}/`);
    log('When you migrationg will be over, could you share your experience with us by answering some survey questions https://spryker.typeform.com/to/Qzw9lg');
  });

  return app;
}

function runWithApiCall(projectName, composerJson, composerLock) {
  return run();
}

function checkLastApiCallAndRunApp(projectName, config, composerFiles) {
  log(`Project ${projectName}, how nice to see you again! We will gladly help you migrating today.`);

  if (lasApiCallLessThanADay(prop('lastCallToReleaseApp', config))) {
    return run();
  } else {
    const newConfig = assoc('lastCallToReleaseApp', moment.utc(), config);
    updateConfigFile(newConfig);

    return runWithApiCall(projectName, ...map(prop('data'), composerFiles));
  }
}

function lasApiCallLessThanADay(date) {
  if (isNil(date)) {
    return false;
  } else {
    return moment().subtract(1, 'days') <= date;
  }
}

function application(args) {
  log('Welcome to the Spryker Migration Analyzer Tool, I hope you will enjoy our service!');

  const config = getConfig();
  const NOT_IN_THIS_LIST = 'Not in this list';
  const projectNameQuestionList = {
    type: "list",
    name: "projectName",
    choices: concat(map(prop('projectName'), prop('previousProjects', config)), [NOT_IN_THIS_LIST]),
    message: "What is your company/project name?",
    when() {
      // Only ask the question if projects were used
      return gt(length(prop('previousProjects', config)), 0);
    }
  };
  const projectNameQuestionInput = {
    type: "input",
    name: "projectName",
    message: "Nice to meet you! Which project are migrating today?",
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
    map(cur => {
      const transformations = {
        data: a => JSON.parse(a)
      };
      return evolve(transformations, cur);
    }),
    getComposerFilesFromPath,
    head,
    cleanNodeInput
  )(args);
  const previousProjectIsBack = find(
    propEq('composerLockHash', path(['data', 'content-hash'], last(composerFiles))),
    prop('previousProjects', config)
  );

  if (isNotNil(previousProjectIsBack)) {

    return checkLastApiCallAndRunApp(prop('projectName', previousProjectIsBack), config, composerFiles);

  } else {

    return inquirer.prompt([projectNameQuestionList, projectNameQuestionInput])
      .then(answers => {
        // Take the folder path and read/write the composer files
        const previousProjectsWithSameName = find(
          propEq('projectName', prop('projectName', answers)),
          prop('previousProjects', config)
        );

        if (isNil(previousProjectsWithSameName)) {
          const newConfig = assoc(
            'previousProjects',
            append(
              assoc('composerLockHash', path(['data', 'content-hash'], last(composerFiles)), answers),
              prop('previousProjects', config)
            ),
            config
          );

          updateConfigFile(newConfig);

          return runWithApiCall(prop('projectName', answers), ...map(prop('data'), composerFiles));

        } else {
          const projectIndex = findIndex(propEq('projectName', prop('projectName', answers)), prop('previousProjects', config));
          const newConfig = assoc(
            'previousProjects',
            adjust(
              projectIndex,
              () => assoc('composerLockHash', path(['data', 'content-hash'], last(composerFiles)), answers),
              prop('previousProjects', config)
            ),
            config
          );

          return checkLastApiCallAndRunApp(prop('projectName', answers), newConfig, composerFiles);
        }
      });
  }
}

application(process.argv);
