const {
    addIndex,
    always,
    append,
    compose,
    complement,
    cond,
    contains,
    filter,
    find,
    head,
    includes,
    isEmpty,
    isNil,
    join,
    last,
    map,
    multiply,
    nth,
    path,
    pick,
    prop,
    propEq,
    sortBy,
    split,
    sum,
    T,
    tail,
    toPairs,
    trim,
    zipObj
} = require('ramda');
const showdown = require('showdown');

////////////
// Utils //
//////////


// log :: a -> a
function log(content) {
    console.log(...arguments);
    return content;
}

// Write the migration analysis in the DOM
function render(selector, content) {
    document.getElementById(selector)
        .innerHTML = content;

    return selector;
}

const isNotNil = complement(isNil);

const isNotEmpty = complement(isEmpty);

// Used to parse Module markdown and process HTML
const converter = new showdown.Converter({ simplifiedAutoLink: true });

// Check if the new version is a major
function isNextMajor(last, newVersion) {
    if (semVerMajor(newVersion) === 0) {
        if (semVerMinor(newVersion) === 0) {
            return isNextPatched(last, newVersion);
        } else {
            return semVerMinor(newVersion) > semVerMinor(last) ? true : false;
        }
    } else {
        return semVerMajor(newVersion) > semVerMajor(last) ? true : false;
    }
}

function isSameMajor(last, newVersion) {
    return semVerMajor(last) === semVerMajor(newVersion);
}

function isNextMinor(last, newVersion) {
    if (semVerMajor(newVersion) === 0) {
        return semVerPatched(newVersion) > semVerPatched(last) ? true : false;
    } else {
        return semVerMinor(newVersion) > semVerMinor(last) ? true : false;
    }
}

function minorAvailable(mod) {
    const installedVersion = split('.', prop('installedVersion', mod));
    const lastVersionAvailable = split('.', path(['package', 'version'], mod));

    // version = 0.x.z
    if (nth(0, installedVersion) === '0' && nth(0, lastVersionAvailable) === '0') {
        return nth(2, lastVersionAvailable) > nth(2, installedVersion) ? true : false;
    } else {
        return nth(1, lastVersionAvailable) > nth(1, installedVersion) ? true : false;
    }
}

function isNextPatched(last, newVersion) {
    return semVerPatched(newVersion) > semVerPatched(last) ? true : false;
}

function versionToNumber(version) {
    const major = multiply(semVerMajor(version), 1000000);
    const minor = multiply(semVerMinor(version), 1000);
    const patch = semVerPatched(version);

    return sum([major, minor, patch]);
}

// Used to generate random DOM id
// r :: Number
function r() {
    return Math.random()
        .toString(36)
        .substring(7);
}

// cleanDescription :: String -> String
const cleanDescription = description => compose(
    join('.<br>'),
    split('.'),
    trim
)(description);

function versionFromStringToArrayOfNumber(version) {
    return compose(
        map(cur => Number(cur)),
        split('.')
    )(version);
}

function majorAvailable(mod) {
    const installedVersion = compose(
        versionFromStringToArrayOfNumber,
        prop('installedVersion')
    )(mod);
    const lastVersionAvailable = compose(
        versionFromStringToArrayOfNumber,
        path(['package', 'version'])
    )(mod);

    // version = 0.x.z
    if (nth(0, installedVersion) === '0' && nth(0, lastVersionAvailable) === '0') {
        // version = 0.0.z
        if (nth(1, installedVersion) === '0' && nth(1, lastVersionAvailable) === '0') {
            return nth(2, lastVersionAvailable) > nth(2, installedVersion) ? true : false;
        } else {
            return nth(1, lastVersionAvailable) > nth(1, installedVersion) ? true : false;
        }
    } else {
        return nth(0, lastVersionAvailable) > nth(0, installedVersion) ? true : false;
    }
}

const mapIndexed = addIndex(map);

function isSomething(trueVal, falseVal, index) {
    return index === 0 ? trueVal : falseVal;
}

const isActive = index => isSomething('active', '', index);

const isShow = index => isSomething('show', '', index);

const isActiveBool = index => isSomething('true', 'false', index);

const shouldBeCollapsed = index => isSomething('', 'collapsed', index);

function semVer(index, version) {
    return Number(nth(index, split('.', version)));
}

const semVerMajor = version => semVer(0, version);

const semVerMinor = version => semVer(1, version);

const semVerPatched = version => semVer(2, version);

const properName = (sep, prop, name) => compose(
    join(name.identifier),
    split(sep),
    path(prop)
)(name);

function modulesForOrgs() {
    return ['spryker', 'spryker-feature', 'spryker-shop', 'spryker-eco'];
}

function onlyModulesForOrgs() {
    return ['spryker', 'spryker-shop'];
}

function keepOnlyModulesFromOrgs(composer) {
    return compose(
        sortBy(prop(0)),
        filter(cur => contains(compose(
            head,
            split('/'),
            nth(0)
        )(cur), modulesForOrgs()) ? true : false),
        toPairs,
        prop('require')
    )(composer);
}

const getNameAndVersionFromInstalledModules = compose(
    map(pick(['name', 'version', 'require'])),
    prop('packages')
);

const getModuleOrg = compose(
    head,
    split('/'),
    head
);

const specificTypeOfModules = types => moduleList => filter(cur => includes(getModuleOrg(cur), types), moduleList);

const findPackageForModule = currentList => mod => find(propEq('package', mod.module), currentList);

const reconstruct = keys => values => zipObj(keys, values);

function findInstalledVersion(composerLock) {
    const namesAndVersions = getNameAndVersionFromInstalledModules(composerLock);

    return function(moduleList) {
        function propToAppend(property, cur) {
            return append(prop(property, find(propEq('name', cur[0]), namesAndVersions)), cur);
        }

        return map(
            compose(
                cur => propToAppend('require', cur),
                cur => propToAppend('version', cur)
            ),
            moduleList
        );
    };
}

// sortStrings :: (String, String) => Number
function sortStrings(a, b) {
    if (a < b) {
        return -1;
    } else if (a > b) {
        return 1;
    } else {
        return 0;
    }
}

const keepOnlyVersionsInMajor = version => listOfVersion => {
    // version = 0.x.z
    if (semVerMajor(version) === 0) {
        // version = 0.0.z
        if (semVerMinor(version) === 0) {
            return filter(cur => isNotNil(prop('guide_url', cur)) && prop('name', cur) >= '0.0.0' && prop('name', cur) <= version, listOfVersion);
        } else {
            return filter(cur => isNotNil(prop('guide_url', cur)) && prop('name', cur) >= `0.${semVerMinor(version)}.0` && prop('name', cur) <= version, listOfVersion);
        }
    } else {
        return filter(cur => isNotNil(prop('guide_url', cur)) && prop('name', cur) >= `${semVerMajor(version)}.0.0` && prop('name', cur) <= version, listOfVersion);
    }
};

function conditionsForGuideURL(version) {
    return cond([
        [p => isNil(prop('guide_url', p)), always('')],
        [p => 'n/a' === p.guide_url, always('<div class="alert alert-warning" role="alert">⚠️ No migration needed ⚠️</div>')],
        [T, p => `<a rel="noopener" href="${p.guide_url}" target="_blank" class="btn btn-warning">Migration guide for version ${p.name || tail(p.requiredVersion)}</a>`]
    ])(version);
}

function migrationGuideExist(releaseModules, version, packageName) {
    return compose(
        conditionsForGuideURL,
        last,
        keepOnlyVersionsInMajor(version),
        prop('module_versions'),
        p => find(propEq('package', p), releaseModules)
    )(packageName);
}

function objectToArray(nameForKey, nameForVal, object) {
    return compose(
        map(reconstruct([nameForKey, nameForVal])),
        toPairs
    )(object);
}

function packageAndCurrentVersion(object) {
    return objectToArray('package', 'currentVersion', object);
}

function packageAndRequiredVersion(object) {
    return objectToArray('package', 'requiredVersion', object);
}


exports.cleanDescription = cleanDescription;
exports.conditionsForGuideURL = conditionsForGuideURL;
exports.converter = converter;
exports.findInstalledVersion = findInstalledVersion;
exports.findPackageForModule = findPackageForModule;
exports.isActive = isActive;
exports.isActiveBool = isActiveBool;
exports.isNextMajor = isNextMajor;
exports.isNextMinor = isNextMinor;
exports.isNextPatched = isNextPatched;
exports.isNotEmpty = isNotEmpty;
exports.isNotNil = isNotNil;
exports.isSameMajor = isSameMajor;
exports.isShow = isShow;
exports.keepOnlyModulesFromOrgs = keepOnlyModulesFromOrgs;
exports.log = log;
exports.majorAvailable = majorAvailable;
exports.mapIndexed = mapIndexed;
exports.migrationGuideExist = migrationGuideExist;
exports.minorAvailable = minorAvailable;
exports.modulesForOrgs = modulesForOrgs;
exports.onlyModulesForOrgs = onlyModulesForOrgs;
exports.packageAndCurrentVersion = packageAndCurrentVersion;
exports.packageAndRequiredVersion = packageAndRequiredVersion;
exports.properName = properName;
exports.r = r;
exports.reconstruct = reconstruct;
exports.render = render;
exports.semVerMajor = semVerMajor;
exports.semVerMinor = semVerMinor;
exports.semVerPatched = semVerPatched;
exports.shouldBeCollapsed = shouldBeCollapsed;
exports.sortStrings = sortStrings;
exports.specificTypeOfModules = specificTypeOfModules;
exports.versionToNumber = versionToNumber;
