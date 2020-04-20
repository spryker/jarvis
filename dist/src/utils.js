/* globals
    releaseModules
*/

/* exported
    addUniqueId,
    cleanDescription,
    conditionsForGuideURL,
    converter,
    findInstalledVersion,
    findPackageForModule,
    getOrgFromDependency,
    isActive,
    isActiveBool,
    isNextMajor,
    isNextMinor,
    isNotEmpty,
    isNotNil,
    isSomething,
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
    specificTypeOfModules,
    templateUpToDate,
    versionToNumber
*/


/////////////////////////////////////////////////
// UI & Content                               //
///////////////////////////////////////////////


// Write the migration analysis in the DOM
function render(selector, content) {
    document.getElementById(selector)
        .innerHTML = content;

    return selector;
}

// Used to parse Module markdown and process HTML
const converter = new showdown.Converter({ simplifiedAutoLink: true });

// cleanDescription :: String -> String
function cleanDescription(description) {
    return R.compose(
        R.join('.<br>'),
        R.split('.'),
        R.trim
    )(description);
}


/////////////////////////////////////////////////
// Semver version                             //
///////////////////////////////////////////////


function semVer(index, version) {
    return Number(R.nth(index, R.split('.', version)));
}

const semVerMajor = version => semVer(0, version);

const semVerMinor = version => semVer(1, version);

const semVerPatched = version => semVer(2, version);

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

function isNextMinor(last, newVersion) {
    if (semVerMajor(newVersion) === 0) {
        return semVerPatched(newVersion) > semVerPatched(last) ? true : false;
    } else {
        return semVerMinor(newVersion) > semVerMinor(last) ? true : false;
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

function versionFromStringToArrayOfNumber(version) {
    return R.compose(
        R.map(cur => Number(cur)),
        R.split('.')
    )(version);
}


/////////////////////////////////////////////////
// Content Utils                              //
///////////////////////////////////////////////


function isSomething(trueVal, falseVal, index) {
    return index === 0 ? trueVal : falseVal;
}

const isActive = index => isSomething('active', '', index);

const isShow = index => isSomething('show', '', index);

const properName = (sep, prop, name) => R.compose(
    R.join(name.identifier),
    R.split(sep),
    R.path(prop)
)(name);


const mapIndexed = R.addIndex(R.map);

const isNotNil = R.complement(R.isNil);

const isNotEmpty = R.complement(R.isEmpty);

// log :: a -> a
function log(content) {
    console.log(...arguments);
    return content;
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

// Used to generate random DOM id
// r :: Number
function r() {
    return Math.random()
        .toString(36)
        .substring(7);
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


/////////////////////////////////////////////////
// Spryker organisation & packages            //
///////////////////////////////////////////////


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

function getModuleOrg(orgPackage) {
    return R.compose(
        R.head,
        R.split('/'),
        R.head
    )(orgPackage);
}

function getOrgFromDependency(dependency) {
    return R.head(R.split('/', dependency));
}

function specificTypeOfModules(types) {
    return function(moduleList) {
        return R.filter(cur => R.includes(getModuleOrg(cur), types), moduleList);
    };
}

const reconstruct = keys => values => R.zipObj(keys, values);

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

function addUniqueId(object) {
    return R.assoc('identifier', r(), object);
}
