const express = require('express');
const fs = require('fs');
const R = require('ramda');
const app = express();
const port = 3000;

// log :: a -> a
function log(content) {
  console.log(...arguments);
  return content;
}

function cleanNodeInput(args) {
  return R.drop(2, args);
}

log(R.compose(
  writeComposerData,
  getComposerData,
  R.head,
  cleanNodeInput
)(process.argv));

function getComposerData(path) {
  const composerJson = fs.readFileSync(R.concat(path, '/composer.json'), 'utf8');
  const composerLock = fs.readFileSync(R.concat(path, '/composer.lock'), 'utf8');

  return [{
    path: './dist/my-composer-files/composerJSON.js',
    data: composerJson,
    stringStart: 'const myComposerJSON = ',
    stringEnd: ';'
  }, {
    path: './dist/my-composer-files/composerLOCK.js',
    data: composerLock,
    stringStart: 'const myComposerLOCK = ',
    stringEnd: ';'
  }];
}

function writeComposerData(listOfFiles) {
  R.forEach(cur => {
    const p = R.prop(R.__, cur);
    fs.writeFileSync(p('path'), `${p('stringStart')}${p('data')}${p('stringEnd')}`, 'utf8');
  }, listOfFiles);
}


app.use(express.static('dist'));

app.get('/', (req, res) => res.sendFile('index.html'));

app.listen(port, () => console.log(`Example app listening on port ${port}!`));
