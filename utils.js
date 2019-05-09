const fs = require('fs');
const {
  __,
  complement,
  compose,
  concat,
  drop,
  forEach,
  isNil,
  prop
} = require('ramda');

function updateConfigFile(data) {
  fs.writeFileSync('config.json', JSON.stringify(data), 'utf8');

  return data;
}

// This function does some IO
// log :: a -> a
function log(content) {
  console.log(...arguments);
  return content;
}

function getConfig() {
  return JSON.parse(fs.readFileSync('config.json', 'utf8'));
}

// This function does some IO
// cleanNodeInput :: [string] -> [string]
function cleanNodeInput(args) {
  return drop(2, args);
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

// This function does some IO
// writeComposerData :: [object] -> [object]
function writeComposerData(listOfFiles) {
  forEach(cur => {
    const p = prop(__, cur);
    fs.writeFileSync(p('path'), `${p('stringStart')}${p('data')}${p('stringEnd')}`, 'utf8');
  }, listOfFiles);

  return listOfFiles;
}

function getComposerFilesFromPath(path) {
  return compose(
    writeComposerData,
    getComposerData
  )(path);
}

exports.cleanNodeInput = cleanNodeInput;
exports.getConfig = getConfig;
exports.getComposerFilesFromPath = getComposerFilesFromPath;
exports.log = log;
exports.updateConfigFile = updateConfigFile;
exports.isNotNil = complement(isNil);
