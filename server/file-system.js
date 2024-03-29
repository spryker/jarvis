import { writeFileSync, readFileSync } from 'fs'
import moment from 'moment'
import { __, assoc, compose, concat, equals, forEach, identity, ifElse, isNil, lensProp, map, over, prop } from 'ramda'

export function updateConfigFile (data) {
  const newData = assoc('currentVersion', getCurrentVersion(), data)

  writeFileSync('config.json', JSON.stringify(newData), 'utf8')

  return newData
}

export function updateOnlyModuleFile (bool) {
  const newData = ifElse(
    equals(false),
    () => 'const noFeatures = false;',
    () => 'const noFeatures = true;'
  )(bool)

  writeFileSync('dist/release-app-data/no-features.js', newData, 'utf8')

  return bool
}

export function updateMissingFeaturesFile (bool) {
  const newData = ifElse(
    equals(false),
    () => 'const missingFeatures = false;',
    () => 'const missingFeatures = true;'
  )(bool)

  writeFileSync('dist/release-app-data/missing-features.js', newData, 'utf8')

  return bool
}

export function getConfig () {
  return JSON.parse(readFileSync('config.json', 'utf8'))
}

export function getCurrentVersion () {
  return prop('version', JSON.parse(readFileSync('package.json', 'utf8')))
}

export function updateLastApiCall (config) {
  const date = moment.utc()
  const newConfig = compose(
    over(
      lensProp('previousProjects'),
      map(ifElse(
        p => p.projectName === config.lastProjectUsed,
        assoc('lastCallToReleaseApp', date),
        identity
      ))),
    assoc('lastCallToReleaseApp', date)
  )(config)

  return updateConfigFile(newConfig)
}

// This function does some IO
// getComposerData :: string -> [object]
function getComposerData (path) {
  return [{
    path: './dist/my-composer-files/composerJSON.js',
    data: readFileSync(concat(path, '/composer.json'), 'utf8'),
    stringStart: 'const myComposerJSON = ',
    stringEnd: ';'
  }, {
    path: './dist/my-composer-files/composerLOCK.js',
    data: readFileSync(concat(path, '/composer.lock'), 'utf8'),
    stringStart: 'const myComposerLOCK = ',
    stringEnd: ';'
  }]
}

export function writeReleaseAppData (currentProject, data = undefined) {
  const newData = isNil(data) ? JSON.parse(readFileSync(`./tmp/${currentProject}.json`, 'utf8')) : data
  const p = prop(__, newData)
  const files = [{
    path: './dist/release-app-data/release-feature.js',
    data: JSON.stringify(p('features')),
    stringStart: 'const releaseFeatures = ',
    stringEnd: ';'
  }, {
    path: './dist/release-app-data/release-module.js',
    data: JSON.stringify(p('modules')),
    stringStart: 'const releaseModules = ',
    stringEnd: ';'
  }, {
    path: './dist/release-app-data/architecture-changes.js',
    data: JSON.stringify(p('architectureChanges')),
    stringStart: 'const architectureChanges = ',
    stringEnd: ';'
  }, {
    path: './dist/release-app-data/recommended-features.js',
    data: JSON.stringify(p('recommendedFeatures')),
    stringStart: 'const recommendedFeatures = ',
    stringEnd: ';'
  }, {
    path: './dist/release-app-data/detected-features.js',
    data: JSON.stringify(p('detectedFeatures')),
    stringStart: 'const detectedFeatures = ',
    stringEnd: ';'
  }, {
    path: './dist/release-app-data/onboarding.js',
    data: JSON.stringify(p('onboarding')),
    stringStart: 'const onboarding = ',
    stringEnd: ';'
  }, {
    path: './dist/release-app-data/current-version.js',
    data: JSON.stringify(p('currentVersion')),
    stringStart: 'const currentVersion = ',
    stringEnd: ';'
  }, {
    path: './dist/release-app-data/product-releases.js',
    data: JSON.stringify(p('productReleases')),
    stringStart: 'const productReleases = ',
    stringEnd: ';'
  }, {
    path: `./tmp/${currentProject}.json`,
    data: JSON.stringify(newData),
    stringStart: '',
    stringEnd: ''
  }]

  return writeFiles(files)
}

// This function does some IO
// writeFiles :: [object] -> [object]
function writeFiles (listOfFiles) {
  forEach(cur => writeFileSync(cur.path, `${cur.stringStart}${cur.data}${cur.stringEnd}`, 'utf8'), listOfFiles)

  return listOfFiles
}

export function getComposerFilesFromPath (path) {
  return compose(
    writeFiles,
    getComposerData
  )(path)
}
