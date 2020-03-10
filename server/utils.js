const {
    complement,
    drop,
    isNil,
    multiply,
    nth,
    split,
    sum
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

const semVerMajor = version => Number(nth(0, split('.', version)));

const semVerMinor = version => Number(nth(1, split('.', version)));

const semVerPatched = version => Number(nth(2, split('.', version)));

function versionToNumber(version) {
    const major = multiply(semVerMajor(version), 1000000);
    const minor = multiply(semVerMinor(version), 1000);
    const patch = semVerPatched(version);

    return sum([major, minor, patch]);
}


exports.cleanNodeInput = cleanNodeInput;
exports.log = log;
exports.isNotNil = complement(isNil);
exports.versionToNumber = versionToNumber;
