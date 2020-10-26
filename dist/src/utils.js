/* globals
    releaseModules
*/

/* exported
    cleanDescription,
    conditionsForGuideURL,
    converter,
    findInstalledVersion,
    findPackageForModule,
    isActive,
    isActiveBool,
    isNextMajor,
    isNextMinor,
    isNotEmpty,
    isNotNil,
    isSameMajor,
    isShow,
    keepOnlyModulesFromOrgs,
    log,
    majorAvailable,
    mapIndexed,
    migrationGuideExist,
    minorAvailable,
    onlyModulesForOrgs,
    packageAndCurrentVersion,
    packageAndRequiredVersion,
    properName,
    r,
    reconstruct,
    render,
    semVerMajor,
    semVerMinor,
    semVerPatched,
    shouldBeCollapsed,
    sortStrings,
    specificTypeOfModules,
    templateUpToDate,
    versionToNumber
*/

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

const isNotNil = R.complement(R.isNil);

const isNotEmpty = R.complement(R.isEmpty);

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
    const installedVersion = R.split('.', R.prop('installedVersion', mod));
    const lastVersionAvailable = R.split('.', R.path(['package', 'version'], mod));

    // version = 0.x.z
    if (R.nth(0, installedVersion) === '0' && R.nth(0, lastVersionAvailable) === '0') {
        return R.nth(2, lastVersionAvailable) > R.nth(2, installedVersion) ? true : false;
    } else {
        return R.nth(1, lastVersionAvailable) > R.nth(1, installedVersion) ? true : false;
    }
}

function isNextPatched(last, newVersion) {
    return semVerPatched(newVersion) > semVerPatched(last) ? true : false;
}

function versionToNumber(version) {
    const major = R.multiply(semVerMajor(version), 1000000);
    const minor = R.multiply(semVerMinor(version), 1000);
    const patch = semVerPatched(version);

    return R.sum([major, minor, patch]);
}

// Used to generate random DOM id
// r :: Number
function r() {
    return Math.random()
        .toString(36)
        .substring(7);
}

// cleanDescription :: String -> String
const cleanDescription = description => R.compose(
    R.join('.<br>'),
    R.split('.'),
    R.trim
)(description);

function versionFromStringToArrayOfNumber(version) {
    return R.compose(
        R.map(cur => Number(cur)),
        R.split('.')
    )(version);
}

function majorAvailable(mod) {
    const installedVersion = R.compose(
        versionFromStringToArrayOfNumber,
        R.prop('installedVersion')
    )(mod);
    const lastVersionAvailable = R.compose(
        versionFromStringToArrayOfNumber,
        R.path(['package', 'version'])
    )(mod);

    // version = 0.x.z
    if (R.nth(0, installedVersion) === '0' && R.nth(0, lastVersionAvailable) === '0') {
        // version = 0.0.z
        if (R.nth(1, installedVersion) === '0' && R.nth(1, lastVersionAvailable) === '0') {
            return R.nth(2, lastVersionAvailable) > R.nth(2, installedVersion) ? true : false;
        } else {
            return R.nth(1, lastVersionAvailable) > R.nth(1, installedVersion) ? true : false;
        }
    } else {
        return R.nth(0, lastVersionAvailable) > R.nth(0, installedVersion) ? true : false;
    }
}

const mapIndexed = R.addIndex(R.map);

function isSomething(trueVal, falseVal, index) {
    return index === 0 ? trueVal : falseVal;
}

const isActive = index => isSomething('active', '', index);

const isShow = index => isSomething('show', '', index);

const isActiveBool = index => isSomething('true', 'false', index);

const shouldBeCollapsed = index => isSomething('', 'collapsed', index);

function semVer(index, version) {
    return Number(R.nth(index, R.split('.', version)));
}

const semVerMajor = version => semVer(0, version);

const semVerMinor = version => semVer(1, version);

const semVerPatched = version => semVer(2, version);

const properName = (sep, prop, name) => R.compose(
    R.join(name.identifier),
    R.split(sep),
    R.path(prop)
)(name);

function modulesForOrgs() {
    return ['spryker', 'spryker-feature', 'spryker-shop', 'spryker-eco'];
}

function onlyModulesForOrgs() {
    return ['spryker', 'spryker-shop'];
}

function keepOnlyModulesFromOrgs(composer) {
    return R.compose(
        R.sortBy(R.prop(0)),
        R.filter(cur => R.contains(R.compose(
            R.head,
            R.split('/'),
            R.nth(0)
        )(cur), modulesForOrgs()) ? true : false),
        R.toPairs,
        R.prop('require')
    )(composer);
}

const getNameAndVersionFromInstalledModules = R.compose(
    R.map(R.pick(['name', 'version', 'require'])),
    R.prop('packages')
);

const getModuleOrg = R.compose(
    R.head,
    R.split('/'),
    R.head
);

const specificTypeOfModules = types => moduleList => R.filter(cur => R.includes(getModuleOrg(cur), types), moduleList);

const findPackageForModule = currentList => mod => R.find(R.propEq('package', mod.module), currentList);

const reconstruct = keys => values => R.zipObj(keys, values);

function findInstalledVersion(composerLock) {
    const namesAndVersions = getNameAndVersionFromInstalledModules(composerLock);

    return function(moduleList) {
        function propToAppend(prop, cur) {
            return R.append(R.prop(prop, R.find(R.propEq('name', cur[0]), namesAndVersions)), cur);
        }

        return R.map(
            R.compose(
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
            return R.filter(cur => isNotNil(R.prop('guide_url', cur)) && R.prop('name', cur) >= '0.0.0' && R.prop('name', cur) <= version, listOfVersion);
        } else {
            return R.filter(cur => isNotNil(R.prop('guide_url', cur)) && R.prop('name', cur) >= `0.${semVerMinor(version)}.0` && R.prop('name', cur) <= version, listOfVersion);
        }
    } else {
        return R.filter(cur => isNotNil(R.prop('guide_url', cur)) && R.prop('name', cur) >= `${semVerMajor(version)}.0.0` && R.prop('name', cur) <= version, listOfVersion);
    }
};

function conditionsForGuideURL(version) {
    return R.cond([
        [p => R.isNil(R.prop('guide_url', p)), R.always('')],
        [p => 'n/a' === p.guide_url, R.always('<div class="alert alert-warning" role="alert">⚠️ No migration needed ⚠️</div>')],
        [R.T, p => `<a rel="noopener" href="${p.guide_url}" target="_blank" class="btn btn-warning">Migration guide for version ${p.name || R.tail(p.requiredVersion)}</a>`]
    ])(version);
}

function migrationGuideExist(version, packageName) {
    return R.compose(
        conditionsForGuideURL,
        R.last,
        keepOnlyVersionsInMajor(version),
        R.prop('module_versions'),
        p => R.find(R.propEq('package', p), releaseModules)
    )(packageName);
}

function objectToArray(nameForKey, nameForVal, object) {
    return R.compose(
        R.map(reconstruct([nameForKey, nameForVal])),
        R.toPairs
    )(object);
}

function packageAndCurrentVersion(object) {
    return objectToArray('package', 'currentVersion', object);
}

function packageAndRequiredVersion(object) {
    return objectToArray('package', 'requiredVersion', object);
}
