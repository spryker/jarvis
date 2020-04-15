"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var ramda_1 = require("ramda");
var showdown_1 = __importDefault(require("showdown"));
function log(content) {
    console.log.apply(console, arguments);
    return content;
}
exports.log = log;
// Write the migration analysis in the DOM
function render(selector, content) {
    document.getElementById(selector).innerHTML = content;
    return selector;
}
exports.render = render;
exports.isNotNil = ramda_1.complement(ramda_1.isNil);
exports.isNotEmpty = ramda_1.complement(ramda_1.isEmpty);
// Used to parse Module markdown and process HTML
exports.converter = new showdown_1.default.Converter({ simplifiedAutoLink: true });
// Check if the new version is a major
function isNextMajor(last, newVersion) {
    if (semVerMajor(newVersion) === 0) {
        if (semVerMinor(newVersion) === 0) {
            return isNextPatched(last, newVersion);
        }
        else {
            return semVerMinor(newVersion) > semVerMinor(last) ? true : false;
        }
    }
    else {
        return semVerMajor(newVersion) > semVerMajor(last) ? true : false;
    }
}
exports.isNextMajor = isNextMajor;
function isNextMinor(last, newVersion) {
    if (semVerMajor(newVersion) === 0) {
        return semVerPatched(newVersion) > semVerPatched(last) ? true : false;
    }
    else {
        return semVerMinor(newVersion) > semVerMinor(last) ? true : false;
    }
}
exports.isNextMinor = isNextMinor;
function minorAvailable(mod) {
    var installedVersion = ramda_1.split('.', ramda_1.prop('installedVersion', mod));
    var lastVersionAvailable = ramda_1.split('.', ramda_1.path(['package', 'version'], mod));
    // version = 0.x.z
    if (ramda_1.nth(0, installedVersion) === '0' && ramda_1.nth(0, lastVersionAvailable) === '0') {
        return ramda_1.nth(2, lastVersionAvailable) > ramda_1.nth(2, installedVersion) ? true : false;
    }
    else {
        return ramda_1.nth(1, lastVersionAvailable) > ramda_1.nth(1, installedVersion) ? true : false;
    }
}
function isNextPatched(last, newVersion) {
    return semVerPatched(newVersion) > semVerPatched(last) ? true : false;
}
function versionToNumber(version) {
    var major = ramda_1.multiply(semVerMajor(version), 1000000);
    var minor = ramda_1.multiply(semVerMinor(version), 1000);
    var patch = semVerPatched(version);
    return ramda_1.sum([major, minor, patch]);
}
// Used to generate random DOM id
function r() {
    return Math.random()
        .toString(36)
        .substring(7);
}
function cleanDescription(description) {
    return ramda_1.compose(ramda_1.join('.<br>'), ramda_1.split('.'), ramda_1.trim)(description);
}
function versionFromStringToArrayOfNumber(version) {
    return ramda_1.compose(ramda_1.map(function (cur) { return Number(cur); }), ramda_1.split('.'))(version);
}
function majorAvailable(mod) {
    var installedVersion = R.compose(versionFromStringToArrayOfNumber, ramda_1.prop('installedVersion'))(mod);
    var lastVersionAvailable = ramda_1.compose(versionFromStringToArrayOfNumber, ramda_1.path(['package', 'version']))(mod);
    // version = 0.x.z
    if (ramda_1.nth(0, installedVersion) === '0' && ramda_1.nth(0, lastVersionAvailable) === '0') {
        // version = 0.0.z
        if (ramda_1.nth(1, installedVersion) === '0' && ramda_1.nth(1, lastVersionAvailable) === '0') {
            return ramda_1.nth(2, lastVersionAvailable) > ramda_1.nth(2, installedVersion) ? true : false;
        }
        else {
            return ramda_1.nth(1, lastVersionAvailable) > ramda_1.nth(1, installedVersion) ? true : false;
        }
    }
    else {
        return ramda_1.nth(0, lastVersionAvailable) > ramda_1.nth(0, installedVersion) ? true : false;
    }
}
var mapIndexed = ramda_1.addIndex(ramda_1.map);
function isSomething(trueVal, falseVal, index) {
    return index === 0 ? trueVal : falseVal;
}
var isActive = function (index) { return isSomething('active', '', index); };
var isShow = function (index) { return isSomething('show', '', index); };
var isActiveBool = function (index) { return isSomething('true', 'false', index); };
var shouldBeCollapsed = function (index) { return isSomething('', 'collapsed', index); };
function semVer(index, version) {
    return Number(ramda_1.nth(index, ramda_1.split('.', version)));
}
var semVerMajor = function (version) { return semVer(0, version); };
var semVerMinor = function (version) { return semVer(1, version); };
var semVerPatched = function (version) { return semVer(2, version); };
function properName(sep, prop, name) {
    return ramda_1.compose(ramda_1.join(name.identifier), ramda_1.split(sep), ramda_1.path(prop))(name);
}
function modulesForOrgs() {
    return ['spryker', 'spryker-feature', 'spryker-shop', 'spryker-eco'];
}
function onlyModulesForOrgs() {
    return ['spryker', 'spryker-shop'];
}
function keepOnlyModulesFromOrgs(composer) {
    return R.compose(R.sortBy(R.prop(0)), R.filter(function (cur) { return R.contains(R.compose(R.head, R.split('/'), R.nth(0))(cur), modulesForOrgs()) ? true : false; }), R.toPairs, R.prop('require'))(composer);
}
var getNameAndVersionFromInstalledModules = R.compose(R.map(R.pick(['name', 'version', 'require'])), R.prop('packages'));
var getModuleOrg = R.compose(R.head, R.split('/'), R.head);
var specificTypeOfModules = function (types) { return function (moduleList) { return R.filter(function (cur) { return R.includes(getModuleOrg(cur), types); }, moduleList); }; };
var findPackageForModule = function (currentList) { return function (mod) { return R.find(R.propEq('package', mod.module), currentList); }; };
var reconstruct = function (keys) { return function (values) { return R.zipObj(keys, values); }; };
function findInstalledVersion(composerLock) {
    var namesAndVersions = getNameAndVersionFromInstalledModules(composerLock);
    return function (moduleList) {
        function propToAppend(prop, cur) {
            return R.append(R.prop(prop, R.find(R.propEq('name', cur[0]), namesAndVersions)), cur);
        }
        return R.map(R.compose(function (cur) { return propToAppend('require', cur); }, function (cur) { return propToAppend('version', cur); }), moduleList);
    };
}
function sortStrings(a, b) {
    if (a < b) {
        return -1;
    }
    else if (a > b) {
        return 1;
    }
    else {
        return 0;
    }
}
var keepOnlyVersionsInMajor = function (version) { return function (listOfVersion) {
    // version = 0.x.z
    if (semVerMajor(version) === 0) {
        // version = 0.0.z
        if (semVerMinor(version) === 0) {
            return R.filter(function (cur) { return exports.isNotNil(R.prop('guide_url', cur)) && R.prop('name', cur) >= '0.0.0' && R.prop('name', cur) <= version; }, listOfVersion);
        }
        else {
            return R.filter(function (cur) { return exports.isNotNil(R.prop('guide_url', cur)) && R.prop('name', cur) >= "0." + semVerMinor(version) + ".0" && R.prop('name', cur) <= version; }, listOfVersion);
        }
    }
    else {
        return R.filter(function (cur) { return exports.isNotNil(R.prop('guide_url', cur)) && R.prop('name', cur) >= semVerMajor(version) + ".0.0" && R.prop('name', cur) <= version; }, listOfVersion);
    }
}; };
function conditionsForGuideURL(version) {
    log(version);
    return R.cond([
        [function (p) { return R.isNil(R.prop('guide_url', p)); }, R.always('')],
        [function (p) { return 'n/a' === p.guide_url; }, R.always('<div class="alert alert-warning" role="alert">⚠️ No migration needed ⚠️</div>')],
        [R.T, function (p) { return "<a rel=\"noopener\" href=\"" + p.guide_url + "\" target=\"_blank\" class=\"btn btn-warning\">Migration guide for version " + (p.name || R.tail(p.requiredVersion)) + "</a>"; }]
    ])(version);
}
function migrationGuideExist(version, packageName) {
    return ramda_1.compose(conditionsForGuideURL, ramda_1.last, keepOnlyVersionsInMajor(version), ramda_1.prop('module_versions'), function (p) { return ramda_1.find(ramda_1.propEq('package', p), releaseModules); })(packageName);
}
function objectToArray(nameForKey, nameForVal, object) {
    return ramda_1.compose(ramda_1.map(reconstruct([nameForKey, nameForVal])), ramda_1.toPairs)(object);
}
function packageAndCurrentVersion(object) {
    return objectToArray('package', 'currentVersion', object);
}
function packageAndRequiredVersion(object) {
    return objectToArray('package', 'requiredVersion', object);
}
