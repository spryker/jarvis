const express = require('express');
const compression = require('compression');
const fs = require('fs');
const R = require('ramda');
const app = express();
const port = 3000;

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

// Take the folder path and read/write the composer files
R.compose(
  writeComposerData,
  getComposerData,
  R.head,
  cleanNodeInput
)(process.argv);

// Static files css/html/js
app.use(express.static('dist'));
// Compress for performance
app.use(compression());

// App has only 1 route
app.get('/', (req, res) => res.sendFile('index.html'));

// Web server is listening
app.listen(port, () => console.log(`Spryker Migration Analyzer is listening on http://localhost:${port}/`));
