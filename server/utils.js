const {
    complement,
    drop,
    isNil,
    nth,
    split
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

function semVer(index, version) {
    return Number(nth(index, split('.', version)));
}

const semVerMajor = version => semVer(0, version);

const semVerMinor = version => semVer(1, version);

const semVerPatched = version => semVer(2, version);

function versionToNumber(version) {
    const major = semVerMajor(version) * 1000000;
    const minor = semVerMinor(version) * 1000;
    const patch = semVerPatched(version);

    return major + minor + patch;
}


exports.cleanNodeInput = cleanNodeInput;
exports.log = log;
exports.isNotNil = complement(isNil);
exports.versionToNumber = versionToNumber;
