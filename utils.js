const {
  complement,
  drop,
  isNil
} = require('ramda');

// This function does some IO
// log :: a -> a
function log(content) {
  console.log(...arguments);
  return content;
}

// This function does some IO
// cleanNodeInput :: [string] -> [string]
function cleanNodeInput(args) {
  return drop(2, args);
}


exports.cleanNodeInput = cleanNodeInput;
exports.log = log;
exports.isNotNil = complement(isNil);
