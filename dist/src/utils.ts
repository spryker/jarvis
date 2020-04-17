import {
    addIndex,
    append,
    complement,
    compose,
    contains,
    filter,
    find,
    isEmpty,
    isNil,
    join,
    last,
    map,
    multiply,
    nth,
    path,
    prop,
    propEq,
    sortBy,
    split,
    sum,
    toPairs,
    trim,
    zipObj
} from 'ramda';
import showdown from 'showdown';
import {
    ComposerJson,
    ComposerLock,
    Module,
    orgPackage,
    semVer
} from './interfaces';


export function log(content: any): any {
    console.log(...arguments);
    return content;
}

// Write the migration analysis in the DOM
export function render(selector: string, content: string): string {
    if (isNotNil(document.getElementById(selector))) {
        document.getElementById(selector).innerHTML = content;
    }

    return selector;
}

export const isNotNil = complement(isNil);

export const isNotEmpty = complement(isEmpty);

// Used to parse Module markdown and process HTML
export const converter = new showdown.Converter({ simplifiedAutoLink: true });

// Check if the new version is a major
export function isNextMajor(last: string, newVersion: string): boolean {
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

export function isNextMinor(last: string, newVersion: string): boolean {
    if (semVerMajor(newVersion) === 0) {
        return semVerPatched(newVersion) > semVerPatched(last) ? true : false;
    } else {
        return semVerMinor(newVersion) > semVerMinor(last) ? true : false;
    }
}

function minorAvailable(mod: object): boolean {
    const installedVersion: [string, string, string] = split('.', prop('installedVersion', mod));
    const lastVersionAvailable: [string, string, string] = split('.', path(['package', 'version'], mod));

    // version = 0.x.z
    if (nth(0, installedVersion) === '0' && nth(0, lastVersionAvailable) === '0') {
        return nth(2, lastVersionAvailable) > nth(2, installedVersion) ? true : false;
    } else {
        return nth(1, lastVersionAvailable) > nth(1, installedVersion) ? true : false;
    }
}

function isNextPatched(last: string, newVersion: string): boolean {
    return semVerPatched(newVersion) > semVerPatched(last) ? true : false;
}

function versionToNumber(version: string): number {
    const major = multiply(semVerMajor(version), 1000000);
    const minor = multiply(semVerMinor(version), 1000);
    const patch = semVerPatched(version);

    return sum([major, minor, patch]);
}

// Used to generate random DOM id
function r(): string {
    return Math.random()
        .toString(36)
        .substring(7);
}

export function cleanDescription(description: string): string {
    return compose(
        join('.<br>'),
        split('.'),
        trim
    )(description);
}

function versionFromStringToArrayOfNumber(version: string): Array<number> {
    return compose(
        map(cur => Number(cur)),
        split('.')
    )(version);
}

function majorAvailable(mod: object): boolean {
    const installedVersion = R.compose(
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

function isSomething(trueVal: string, falseVal: string, index: number): string {
    return index === 0 ? trueVal : falseVal;
}

const isActive = (index: number): string => isSomething('active', '', index);

const isShow = (index: number): string => isSomething('show', '', index);

const isActiveBool = (index: number): string => isSomething('true', 'false', index);

const shouldBeCollapsed = (index: number): string => isSomething('', 'collapsed', index);

function semVer(index: number, version: semVer): number {
    return Number(nth(index, split('.', version)));
}

const semVerMajor = (version: string): number => semVer(0, version);

const semVerMinor = (version: string): number => semVer(1, version);

const semVerPatched = (version: string): number => semVer(2, version);

function properName(sep: string, prop: Array<string>, name: object): string {
    return compose(
        join(name.identifier),
        split(sep),
        path(prop)
    )(name);
}

export function modulesForOrgs(): Array<string> {
    return ['spryker', 'spryker-feature', 'spryker-shop', 'spryker-eco'];
}

function onlyModulesForOrgs(): Array<string> {
    return ['spryker', 'spryker-shop'];
}

export function keepOnlyModulesFromOrgs(composer: ComposerJson): Array<[orgPackage, semVer]> {
    return compose(
        sortBy(prop(0)),
        filter((cur: [orgPackage, semVer]) => contains(
            compose(
                head,
                split('/'),
                nth(0)
            )(cur),
            modulesForOrgs()
        ) ? true : false),
        toPairs,
        prop('require')
    )(composer);
}

interface packagesInstalled {
    name: orgPackage;
    version: semVer;
    require: {
        [propName: string]: semVer;
    }
}

function getNameAndVersionFromInstalledModules(composerLock: ComposerLock): Array<packagesInstalled> {
    return compose(
        map(pick(['name', 'version', 'require'])),
        prop('packages')
    )(composerLock);
}

const getModuleOrg = R.compose(
    R.head,
    R.split('/'),
    R.head
);

const specificTypeOfModules = types => moduleList => R.filter(cur => R.includes(getModuleOrg(cur), types), moduleList);

const findPackageForModule = currentList => mod => R.find(R.propEq('package', mod.module), currentList);

const reconstruct = (keys: Array<string>) => (values: Array<any>) => zipObj(keys, values);

export function findInstalledVersion(composerLock: ComposerLock) {
    const namesAndVersions: Array<packagesInstalled> = getNameAndVersionFromInstalledModules(composerLock);

    return function(moduleList) {
        function propToAppend(prop, cur) {
            return append(prop(prop, find(propEq('name', cur[0]), namesAndVersions)), cur);
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

function sortStrings(a: string, b: string): number {
    if (a < b) {
        return -1;
    } else if (a > b) {
        return 1;
    } else {
        return 0;
    }
}

const keepOnlyVersionsInMajor = (version: semVer) => listOfVersion => {
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
    log(version);
    return R.cond([
        [p => R.isNil(R.prop('guide_url', p)), R.always('')],
        [p => 'n/a' === p.guide_url, R.always('<div class="alert alert-warning" role="alert">⚠️ No migration needed ⚠️</div>')],
        [R.T, p => `<a rel="noopener" href="${p.guide_url}" target="_blank" class="btn btn-warning">Migration guide for version ${p.name || R.tail(p.requiredVersion)}</a>`]
    ])(version);
}

function migrationGuideExist(version: semVer, packageName: orgPackage) {
    return compose(
        conditionsForGuideURL,
        last,
        keepOnlyVersionsInMajor(version),
        prop('module_versions'),
        (p: orgPackage): Module => find(propEq('package', p), releaseModules)
    )(packageName);
}

function objectToArray(nameForKey: string, nameForVal: string, object: objectToBeTransformed): Array<object> {
    return compose(
        map(reconstruct([nameForKey, nameForVal])),
        toPairs
    )(object);
}

interface objectToBeTransformed {
    [propName: string]: semVer;
}

interface objectTransformedCurrentVersion {
    package: orgPackage;
    currentVersion: semVer;
}

export function packageAndCurrentVersion(object: objectToBeTransformed): Array<objectTransformedCurrentVersion> {
    return objectToArray('package', 'currentVersion', object);
}

interface objectTransformedRequiredVersion {
    package: orgPackage;
    currentVersion: semVer;
}

export function packageAndRequiredVersion(object: objectToBeTransformed): Array<objectTransformedRequiredVersion> {
    return objectToArray('package', 'requiredVersion', object);
}
