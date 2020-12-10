const fs = require('fs');
const moment = require('moment');
const {
    __,
    assoc,
    compose,
    concat,
    equals,
    forEach,
    identity,
    ifElse,
    isNil,
    lensProp,
    map,
    over,
    prop
} = require('ramda');

function updateConfigFile(data) {
    const newData = assoc('currentVersion', getCurrentVersion(), data);

    fs.writeFileSync('config.json', JSON.stringify(newData), 'utf8');

    return newData;
}

function getTmpFile(projectName) {
    return JSON.parse(fs.readFileSync(concat('./tmp/', `${projectName}.json`), 'utf8'));
}

function updateOnlyModuleFile(bool) {
    const newData = ifElse(
        equals(false),
        () => `const noFeatures = false;`,
        () => `const noFeatures = true;`
    )(bool);

    fs.writeFileSync('dist/release-app-data/no-features.js', newData, 'utf8');

    return bool;
}

function updateMissingFeaturesFile(bool) {
    const newData = ifElse(
        equals(false),
        () => `const missingFeatures = false;`,
        () => `const missingFeatures = true;`
    )(bool);

    fs.writeFileSync('dist/release-app-data/missing-features.js', newData, 'utf8');

    return bool;
}

function getConfig() {
    return JSON.parse(fs.readFileSync('config.json', 'utf8'));
}

function getCurrentVersion() {
    return prop('version', JSON.parse(fs.readFileSync('package.json', 'utf8')));
}

function updateLastApiCall(config) {
    const date = moment.utc();
    const newConfig = compose(
        over(
            lensProp('previousProjects'),
            map(ifElse(
                p => p.projectName === config.lastProjectUsed,
                assoc('lastCallToReleaseApp', date),
                identity
            ))),
        assoc('lastCallToReleaseApp', date)
    )(config);

    return updateConfigFile(newConfig);
}

// This function does some IO
// getComposerDataFromDisc :: string -> [object]
function getComposerDataFromDisc(path) {
    return [{
        path: './dist/my-composer-files/composerJSON.js',
        data: fs.readFileSync(concat(path, '/composer.json'), 'utf8'),
        stringStart: 'const myComposerJSON = ',
        stringEnd: ';',
        name: 'composerJSON'
    }, {
        path: './dist/my-composer-files/composerLOCK.js',
        data: fs.readFileSync(concat(path, '/composer.lock'), 'utf8'),
        stringStart: 'const myComposerLOCK = ',
        stringEnd: ';',
        name: 'composerLOCK'
    }];
}

function writeReleaseAppData(currentProject, data = undefined) {
    const newData = isNil(data) ? JSON.parse(fs.readFileSync(`./tmp/${currentProject}.json`, 'utf8')) : data;
    const p = prop(__, newData);
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
    }];

    return writeFiles(files);

}

function writeFile(path, content) {
    fs.writeFileSync(path, content, 'utf8');

    return content;
}

// This function does some IO
// writeFiles :: [object] -> [object]
function writeFiles(listOfFiles) {
    forEach(cur => fs.writeFileSync(cur.path, `${cur.stringStart}${cur.data}${cur.stringEnd}`, 'utf8'), listOfFiles);

    return listOfFiles;
}

function getComposerFilesFromPath(path) {
    return compose(
        getComposerDataFromDisc
    )(path);
}

exports.getConfig = getConfig;
exports.getCurrentVersion = getCurrentVersion;
exports.getComposerFilesFromPath = getComposerFilesFromPath;
exports.getTmpFile = getTmpFile;
exports.updateConfigFile = updateConfigFile;
exports.updateLastApiCall = updateLastApiCall;
exports.updateMissingFeaturesFile = updateMissingFeaturesFile;
exports.updateOnlyModuleFile = updateOnlyModuleFile;
exports.writeFile = writeFile;
exports.writeReleaseAppData = writeReleaseAppData;
