const fs = require('fs');
const {
  __,
  compose,
  concat,
  forEach,
  prop
} = require('ramda');

function updateConfigFile(data) {
  fs.writeFileSync('config.json', JSON.stringify(data), 'utf8');

  return data;
}

function getConfig() {
  return JSON.parse(fs.readFileSync('config.json', 'utf8'));
}

// This function does some IO
// getComposerData :: string -> [object]
function getComposerData(path) {
  return [{
    path: './dist/my-composer-files/composerJSON.js',
    data: fs.readFileSync(concat(path, '/composer.json'), 'utf8'),
    stringStart: 'const myComposerJSON = ',
    stringEnd: ';'
  }, {
    path: './dist/my-composer-files/composerLOCK.js',
    data: fs.readFileSync(concat(path, '/composer.lock'), 'utf8'),
    stringStart: 'const myComposerLOCK = ',
    stringEnd: ';'
  }];
}

function writeReleaseAppData(data) {
  const p = prop(__, data);
  const files = [{
    path: './dist/release-app-data/release-feature.js',
    data: p('features'),
    stringStart: 'const releaseFeatures = ',
    stringEnd: ';'
  }, {
    path: './dist/release-app-data/release-module.js',
    data: p('modules'),
    stringStart: 'const releaseModules = ',
    stringEnd: ';'
  }, {
    path: './dist/release-app-data/horizontal-barriers.js',
    data: p('horizontalBarriers'),
    stringStart: 'const horizontalBarriers = ',
    stringEnd: ';'
  }, {
    path: './dist/release-app-data/unused-features.js',
    data: p('unusedFeatures'),
    stringStart: 'const unusedFeatures = ',
    stringEnd: ';'
  }];

  return writeFiles(files);
}

// This function does some IO
// writeFiles :: [object] -> [object]
function writeFiles(listOfFiles) {
  forEach(cur => {
    const p = prop(__, cur);
    fs.writeFileSync(p('path'), `${p('stringStart')}${p('data')}${p('stringEnd')}`, 'utf8');
  }, listOfFiles);

  return listOfFiles;
}

function getComposerFilesFromPath(path) {
  return compose(
    writeFiles,
    getComposerData
  )(path);
}

exports.getConfig = getConfig;
exports.getComposerFilesFromPath = getComposerFilesFromPath;
exports.updateConfigFile = updateConfigFile;
exports.writeReleaseAppData = writeReleaseAppData;
