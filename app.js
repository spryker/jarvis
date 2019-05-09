const express = require('express');
const compression = require('compression');
const fs = require('fs');
const R = require('ramda');
const inquirer = require('inquirer');
const moment = require('moment');
const { updateConfigFile } = require('./utils.js');
const app = express();
const port = 3000;
const isNotNil = R.complement(R.isNil);

// This function does some IO
// log :: a -> a
function log(content) {
  console.log(...arguments);
  return content;
}

// This function does some IO
// cleanNodeInput :: [string] -> [string]
function cleanNodeInput(args) {
  return R.drop(2, args);
}

// This function does some IO
// getComposerData :: string -> [object]
function getComposerData(path) {
  return [{
    path: './dist/my-composer-files/composerJSON.js',
    data: fs.readFileSync(R.concat(path, '/composer.json'), 'utf8'),
    stringStart: 'const myComposerJSON = ',
    stringEnd: ';'
  }, {
    path: './dist/my-composer-files/composerLOCK.js',
    data: fs.readFileSync(R.concat(path, '/composer.lock'), 'utf8'),
    stringStart: 'const myComposerLOCK = ',
    stringEnd: ';'
  }];
}

// This function does some IO
// writeComposerData :: [object] -> [object]
function writeComposerData(listOfFiles) {
  R.forEach(cur => {
    const p = R.prop(R.__, cur);
    fs.writeFileSync(p('path'), `${p('stringStart')}${p('data')}${p('stringEnd')}`, 'utf8');
  }, listOfFiles);

  return listOfFiles;
}

function getComposerFilesFromPath(path) {
  return R.compose(
    writeComposerData,
    getComposerData
  )(path);
}

function run() {
  // Static files css/html/js
  app.use(express.static('dist'));
  // Compress for performance
  app.use(compression());

  // App has only 1 route
  app.get('/', (req, res) => res.sendFile('index.html'));

  // Web server is listening
  app.listen(port, () => console.log(`The application is listening on the URL http://localhost:${port}/`));

  return app;
}

function runWithApiCall(projectName, composerJson, composerLock) {
  return run();
}

function checkLastApiCallAndRunApp(projectName, config, composerFiles) {
  log(`Project ${projectName}, how nice to see you again! We will gladly help you migrating today.`);

  if (lasApiCallLessThanADay(R.prop('lastCallToReleaseApp', config))) {
    return run();
  } else {
    const newConfig = R.assoc('lastCallToReleaseApp', moment.utc(), config);
    updateConfigFile(newConfig);

    return runWithApiCall(projectName, ...R.map(R.prop('data'), composerFiles));
  }
}

function lasApiCallLessThanADay(date) {
  if (R.isNil(date)) {
    return false;
  } else {
    return moment().subtract(1, 'days') <= date;
  }
}

function application(args) {
  log('Welcome to the Spryker Migration Analyzer Tool, I hope you will enjoy our service!');

  const config = JSON.parse(fs.readFileSync('config.json', 'utf8'));
  const NOT_IN_THIS_LIST = 'Not in this list';
  const projectNameQuestionList = {
    type: "list",
    name: "projectName",
    choices: R.concat(R.map(R.prop('projectName'), R.prop('previousProjects', config)), [NOT_IN_THIS_LIST]),
    message: "What is your company/project name?",
    when() {
      // Only ask the question if projects were used
      return R.gt(R.length(R.prop('previousProjects', config)), 0);
    }
  };
  const projectNameQuestionInput = {
    type: "input",
    name: "projectName",
    message: "Nice to meet you! Which project are migrating today?",
    when(previousAnswers) {
      if (R.isEmpty(previousAnswers)) {
        return true;
      } else {
        return R.equals(R.prop('projectName', previousAnswers), NOT_IN_THIS_LIST);
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

  const composerFiles = R.compose(
    R.map(cur => {
      const transformations = {
        data: a => JSON.parse(a)
      };
      return R.evolve(transformations, cur);
    }),
    getComposerFilesFromPath,
    R.head,
    cleanNodeInput
  )(args);
  const previousProjectIsBack = R.find(
    R.propEq('composerLockHash', R.path(['data', 'content-hash'], R.last(composerFiles))),
    R.prop('previousProjects', config)
  );

  if (isNotNil(previousProjectIsBack)) {

    return checkLastApiCallAndRunApp(R.prop('projectName', previousProjectIsBack), config, composerFiles);

  } else {

    return inquirer.prompt([projectNameQuestionList, projectNameQuestionInput])
      .then(answers => {
        // Take the folder path and read/write the composer files
        const previousProjectsWithSameName = R.find(
          R.propEq('projectName', R.prop('projectName', answers)),
          R.prop('previousProjects', config)
        );

        if (R.isNil(previousProjectsWithSameName)) {
          const newConfig = R.assoc(
            'previousProjects',
            R.append(
              R.assoc('composerLockHash', R.path(['data', 'content-hash'], R.last(composerFiles)), answers),
              R.prop('previousProjects', config)
            ),
            config
          );

          updateConfigFile(newConfig);

          return runWithApiCall(R.prop('projectName', answers), ...R.map(R.prop('data'), composerFiles));

        } else {
          const projectIndex = R.findIndex(R.propEq('projectName', R.prop('projectName', answers)), R.prop('previousProjects', config));
          const newConfig = R.assoc(
            'previousProjects',
            R.adjust(
              projectIndex,
              () => R.assoc('composerLockHash', R.path(['data', 'content-hash'], R.last(composerFiles)), answers),
              R.prop('previousProjects', config)
            ),
            config
          );

          return checkLastApiCallAndRunApp(R.prop('projectName', answers), newConfig, composerFiles);
        }
      });
  }
}

application(process.argv);
