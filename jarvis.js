import express from 'express'
import compression from 'compression'
import inquirer from 'inquirer'
import moment from 'moment'
import { always, append, assoc, compose, concat, cond, equals, evolve, F, find, findIndex, head, ifElse, isEmpty, isNil, last, lensPath, map, over, path, prop, propEq, T } from 'ramda'
import { cleanNodeInput, isNotNil, log, versionToNumber } from './server/utils.js'
import { getComposerFilesFromPath, getConfig, getCurrentVersion, updateConfigFile, updateLastApiCall, updateMissingFeaturesFile, updateOnlyModuleFile, writeReleaseAppData } from './server/file-system.js'
import { getReleaseAppData } from './server/api-call.js'

function run (newReleaseData = undefined) {
  const app = express()
  const port = 7777

  const config = getConfig()
  const currentVersion = getCurrentVersion()

  if (isNotNil(newReleaseData)) {
    if (versionToNumber(currentVersion) !== versionToNumber(newReleaseData.currentVersion)) {
      log('It looks like you do not use the latest version of Spryker Jarvis...')
      log(`You are currently using version ${currentVersion}. The latest version available is version ${newReleaseData.currentVersion}.`)
      return
    } else {
      updateLastApiCall(config)
      writeReleaseAppData(config.lastProjectUsed, newReleaseData)
    }
  } else {
    writeReleaseAppData(config.lastProjectUsed)
  }

  // Static files css/html/js
  app.use(express.static('dist'))
  // Compress for performance
  app.use(compression())

  // App has only 1 route
  app.get('/', (req, res) => res.sendFile('index.html'))

  // Web server is listening
  app.listen(port, () => {
    log(`I am listening on the URL http://localhost:${port}/`)
    log('When your migration will be over, could you share your feedback with us about Spryker Jarvis? https://forms.gle/FeBtHDFyAiFJVotr6')
    log('')
  })

  return app
}

function runWithApiCall (projectName, composerJson, composerLock) {
  return getReleaseAppData({ projectName, composerJson, composerLock, currentVersion: getCurrentVersion() }, failedToRetrieveReleaseAppData, run)
}

function failedToRetrieveReleaseAppData (data) {
  log('I am sorry to announce that something went wrong, I could not retrieve any information from Spryker...')
  log('Please verify that you are connected to the Internet. If yes, please send an email to support@spryker.com to notify them that you could not use my services today.')
  log('')

  return data
}

function checkLastApiCallAndRunApp (projectName, config, composerFiles) {
  log(`Welcome back project ${projectName}! I hope your project is not too outdated...`)
  log('First let me check if my information about Spryker Features and Modules are up to date.')
  log('')

  const project = findPreviousProject(projectName, config)
  const newConfig = assoc('lastProjectUsed', projectName, config)

  updateConfigFile(newConfig)

  if (lastApiCallLessThanADay(project.lastCallToReleaseApp)) {
    log('Yes, they are. Please follow me.')
    log('')

    return run()
  } else {
    log('No, they are not. Let me refresh them. This is take less than 1 minute I hope...')
    log('')

    return runWithApiCall(projectName, ...map(prop('data'), composerFiles))
  }
}

function lastApiCallLessThanADay (date) {
  return ifElse(
    isNil,
    F,
    date => moment().subtract(1, 'days') <= moment(date)
  )(date)
}

function application (args) {
  log('Welcome, my name is Spryker Jarvis. Today I will help you to migrate your Spryker project!')
  log('')
  log('As part of my services, I will store your composer.json and composer.lock files.')
  log('Those will allow my colleagues at Spryker to provide better tooling and support in the future.')
  log('If you do not agree with this, please hit Cmd + c or Ctr + c to cancel my services.')
  log('')

  const config = getConfig()
  const NOT_IN_THIS_LIST = 'Not in this list'
  const projectNameQuestionList = {
    type: 'list',
    name: 'projectName',
    choices: concat(
      map(prop('projectName'), config.previousProjects),
      [NOT_IN_THIS_LIST]
    ),
    message: 'Is the project name your are migrating inside this list?',
    when () {
      // Only ask the question if projects were used
      return config.previousProjects.length > 0
    }
  }
  const projectNameQuestionInput = {
    type: 'input',
    name: 'projectName',
    message: 'What is the project name you are migrating today?',
    when (previousAnswers) {
      if (isEmpty(previousAnswers)) {
        return true
      } else {
        return previousAnswers.projectName === NOT_IN_THIS_LIST
      }
    }
  }

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
  )(args)
  // Define if user will use the Features view or Only Modules view or Missing Features view
  compose(
    cond([
      [equals('--no-features'), () => {
        updateOnlyModuleFile(true)
        updateMissingFeaturesFile(false)
      }],
      [equals('--missing-features'), () => {
        updateOnlyModuleFile(false)
        updateMissingFeaturesFile(true)
      }],
      [T, () => {
        updateOnlyModuleFile(false)
        updateMissingFeaturesFile(false)
      }]
    ]),
    last,
    cleanNodeInput
  )(args)

  const JSONcomposerFiles = map(cur => {
    const transformations = {
      data: a => JSON.parse(a)
    }
    return evolve(transformations, cur)
  }, composerFiles)
  const previousProjectIsBack = find(
    propEq('composerLockHash', path(['data', 'content-hash'], last(JSONcomposerFiles))),
    config.previousProjects
  )

  if (isNotNil(previousProjectIsBack)) {
    return checkLastApiCallAndRunApp(previousProjectIsBack.projectName, config, composerFiles)
  } else {
    return inquirer.prompt([projectNameQuestionList, projectNameQuestionInput]).then(answers => {
      // Take the folder path and read/write the composer files
      const project = findPreviousProject(answers.projectName, config)

      if (isNil(project)) {
        const composerLockHash = path(['data', 'content-hash'], last(JSONcomposerFiles))
        const projectName = answers.projectName || `This project had no name: ${composerLockHash}`
        const newConfig = evolve({
          previousProjects: append(
            compose(
              assoc('lastCallToReleaseApp', null),
              assoc('composerLockHash', composerLockHash),
              assoc('projectName', projectName)
            )(answers)
          ),
          lastProjectUsed: always(projectName)
        }, config)

        updateConfigFile(newConfig)

        return runWithApiCall(newConfig.lastProjectUsed, ...map(prop('data'), composerFiles))
      } else {
        const projectIndex = findPreviousProjectIndex(project.projectName, config)
        const newConfig = over(
          lensPath(['previousProjects', projectIndex]),
          assoc('composerLockHash', path(['data', 'content-hash'], last(JSONcomposerFiles))),
          config
        )

        updateConfigFile(newConfig)

        if (path(['data', 'content-hash'], last(JSONcomposerFiles)) === project.composerLockHash) {
          return checkLastApiCallAndRunApp(newConfig.lastProjectUsed, newConfig, composerFiles)
        } else {
          return runWithApiCall(newConfig.lastProjectUsed, ...map(prop('data'), composerFiles))
        }
      }
    })
  }
}

function findPreviousProject (projectName, config) {
  return find(
    propEq('projectName', projectName),
    config.previousProjects
  )
}

function findPreviousProjectIndex (projectName, config) {
  return findIndex(
    propEq('projectName', projectName),
    config.previousProjects
  )
}

application(process.argv)
