"use strict";
/* globals
    cleanDescription,
    converter,
    findInstalledVersion,
    findPackageForModule,
    isActive,
    isActiveBool,
    isNextMajor,
    isNextMinor,
    isNextPatched,
    isNotEmpty,
    isNotNil,
    isShow,
    keepOnlyModulesFromOrgs,
    majorAvailable,
    mapIndexed,
    minorAvailable,
    properName,
    r,
    reconstruct,
    shouldBeCollapsed,
    specificTypeOfModules,
    versionToNumber
*/
/* exported
    logicForNoFeatures,
    prepareDataNoFeatures
*/
//////////////////////////////////////////////////////////////
// Migration Analysis for Modules outside Spryker Features //
////////////////////////////////////////////////////////////
function prepareDataNoFeatures(data) {
    return R.compose(function (data) { return R.assoc('modulesWithTheirCount', R.compose(function (d) { return R.filter(isNotEmpty, [groupingByMajor(d), groupingByMinor(d)]); }, R.map(function (cur) { return R.assoc('nextVersionsCount', countVersionsForModule(cur), cur); }), function (d) { return migrateModuleToLastVersionInMajor(d.myComposerJSON, d.myComposerLOCK, d.releaseModules); })(data), data); }, R.evolve({
        releaseModules: R.map(function (cur) { return R.assoc('identifier', r(), cur); })
    }), R.pick(['myComposerJSON', 'myComposerLOCK', 'releaseModules']))(data);
}
function templateForSummaryElement(listOfElements) {
    function textForBoxTitle(isMajor, listOfElements) {
        if (isMajor) {
            return "Major versions are available for the following <span class=\"badge badge-dark\">" + count(listOfElements) + "</span> module(s)";
        }
        else {
            return "Minor versions are available for the following <span class=\"badge badge-dark\">" + count(listOfElements) + "</span> module(s)";
        }
    }
    return R.compose(R.join(''), mapIndexed(function (cur, index) {
        var isMajor = R.compose(function (n) { return n > 0; }, R.path(['nextVersionsCount', 'major']), R.head, R.head)(cur);
        var id = r();
        return "<div class=\"card\">\n                        <div class=\"card-header\" id=\"heading-" + id + "\">\n                            <button class=\"btn btn-link " + shouldBeCollapsed(index) + "\" type=\"button\" data-toggle=\"collapse\" data-target=\"#summary-" + id + "\" aria-expanded=\"" + isActiveBool(index) + "\" aria-controls=\"summary-" + id + "\">\n                                " + textForBoxTitle(isMajor, cur) + "\n                            </button>\n                        </div>\n                        <div id=\"summary-" + id + "\" class=\"collapse " + isShow(index) + "\" aria-labelledby=\"heading-" + id + "\" data-parent=\"#summary-table\">\n                            <div class=\"card-body\">\n                                <div class=\"card-columns\">\n                                    " + R.join('', R.map(templateForEachGroupOfMigration, cur)) + "\n                                </div>\n                            </div>\n                        </div>\n                    </div>";
    }))(listOfElements);
}
function groupWithLevel(level) {
    return function (a, b) {
        return R.groupWith(function (a, b) {
            var countForA = R.path(['nextVersionsCount', level], a);
            var countForB = R.path(['nextVersionsCount', level], b);
            return R.equals(countForA, countForB);
        })(a, b);
    };
}
function groupingByMajor(listOfModules) {
    return R.compose(groupWithLevel('major'), R.sortWith([R.descend(R.path(['nextVersionsCount', 'major']))]), R.filter(function (cur) { return R.gt(R.path(['nextVersionsCount', 'major'], cur), 0); }))(listOfModules);
}
function groupingByMinor(listOfModules) {
    return R.compose(groupWithLevel('minor'), R.sortWith([R.descend(R.path(['nextVersionsCount', 'minor']))]), R.filter(function (cur) { return R.gt(R.path(['nextVersionsCount', 'minor'], cur), 0) && R.equals(R.path(['nextVersionsCount', 'major'], cur), 0); }))(listOfModules);
}
function count(list) {
    return R.reduce(function (prev, cur) { return prev + cur.length; }, 0, list);
}
function countVersionsForModule(mod) {
    return R.reduce(function (prev, cur) { return R.cond([
        [function (version) { return versionToNumber(version.name) <= versionToNumber(prev.latestVersion); }, function () { return prev; }],
        [function (version) { return isNextMajor(prev.latestVersion, version.name); }, function (version) { return R.evolve({ major: R.inc, minor: R.always(0), patch: R.always(0), latestVersion: R.always(version.name) }, prev); }],
        [function (version) { return isNextMinor(prev.latestVersion, version.name); }, function (version) { return R.evolve({ minor: R.inc, patch: R.always(0), latestVersion: R.always(version.name) }, prev); }],
        [function (version) { return isNextPatched(prev.latestVersion, version.name); }, function (version) { return R.evolve({ patch: R.inc, latestVersion: R.always(version.name) }, prev); }],
        [R.T, function () { return prev; }]
    ])(cur); }, { major: 0, minor: 0, patch: 0, latestVersion: mod.installedVersion }, R.reverse(mod.package.module_versions));
}
function templateForEachGroupOfMigration(listOfModules) {
    function textForBoxTitle(isMajor, count, mod) {
        if (isMajor) {
            return "Those <span class=\"badge badge-dark\">" + count + "</span> module(s) are behind <span class=\"badge badge-primary\">" + mod.nextVersionsCount.major + "</span> major version(s).";
        }
        else {
            return "Those <span class=\"badge badge-dark\">" + count + "</span> module(s) are behind <span class=\"badge badge-primary\">" + mod.nextVersionsCount.minor + "</span> minor version(s).";
        }
    }
    var isMajor = listOfModules[0].nextVersionsCount.major > 0;
    return "<div class=\"card margin-bottom\">\n                <div class=\"card-header\">\n                    <b>" + textForBoxTitle(isMajor, listOfModules.length, listOfModules[0]) + "</b>\n                </div>\n                <div class=\"card-body\">\n                    <ul class=\"list-unstyled\">\n                        " + R.join('', R.map(function (cur) { return "<li><a href=#" + R.path(['package', 'identifier'], cur) + "><code>" + cur.module + "</code></a></li>"; }, listOfModules)) + "\n                    <ul>\n                </div>\n            </div>";
}
function logicForNoFeatures(data) {
    return "<div class=\"margin-top-2\">\n                <div class=\"accordion\" id=\"summary-table\">\n                    " + templateForSummaryElement(data.modulesWithTheirCount) + "\n                </div>\n            </div>\n            <h3>The following modules are outdated</h3>\n            <div>" + templateToDisplayDetailsOfEachModule(data.myComposerJSON, data.myComposerLOCK, data.releaseModules) + "</div>";
}
function templateToDisplayDetailsOfEachModule(currentComposer, currentComposerLock, currentModules) {
    return R.compose(R.join(''), R.ifElse(R.isEmpty, function () { return ([templateUpToDate('All your Spryker modules are up to date or you do not use any outside of the Spryker features!')]); }, R.map(templateForPackage)), function (c) { return migrateModuleToLastVersionInMajor(c, currentComposerLock, currentModules); })(currentComposer);
}
function migrateModuleToLastVersionInMajor(currentComposer, currentComposerLock, currentModules) {
    return R.compose(
    // "spryker-eco/loggly" is the only module that is not part of the release app
    R.filter(function (cur) { return isNotNil(R.prop('package', cur)) && R.prop('module', cur) !== 'spryker-eco/loggly' && R.prop('upToDate', cur) === false && (minorAvailable(cur) || majorAvailable(cur)) && R.prop('requiredVersion', cur) !== '*'; }), function (c) { return prepareModules(c, currentComposerLock, currentModules); })(currentComposer);
}
function prepareModules(currentComposer, currentComposerLock, currentModules) {
    return R.compose(R.map(R.compose(R.assoc('identifier', r()), function (cur) { return R.assoc('upToDate', R.equals(R.prop('installedVersion', cur), R.path(['package', 'version'], cur)), cur); }, function (cur) { return R.assoc('package', findPackageForModule(currentModules)(cur), cur); }, reconstruct(['module', 'requiredVersion', 'installedVersion']))), findInstalledVersion(currentComposerLock), specificTypeOfModules(['spryker', 'spryker-eco', 'spryker-shop']), keepOnlyModulesFromOrgs)(currentComposer);
}
function onlyLastVersionInAMajor(listOfPreviousVersions, newVersion) {
    return R.cond([
        [function (version) { return R.lte(versionToNumber(R.prop('name', version)), versionToNumber(R.prop('name', R.last(listOfPreviousVersions)))); }, function () { return listOfPreviousVersions; }],
        [function (version) { return isNextMajor(R.prop('name', R.last(listOfPreviousVersions)), R.prop('name', version)); }, function (version) { return R.append(version, listOfPreviousVersions); }],
        [function (version) { return isNextMinor(R.prop('name', R.last(listOfPreviousVersions)), R.prop('name', version)); }, function (version) { return R.ifElse(function (list) { return R.equals(R.length(list), 1); }, R.append(version), function (list) { return R.compose(R.append(version), R.dropLast(1))(list); })(listOfPreviousVersions); }],
        [function (version) { return isNextPatched(R.prop('name', R.last(listOfPreviousVersions)), R.prop('name', version)); }, function (version) { return R.compose(R.append(version), R.dropLast(1))(listOfPreviousVersions); }],
        [R.T, function () { return listOfPreviousVersions; }]
    ])(newVersion);
}
function migrationGuideAvailable(guideUrl) {
    return R.ifElse(R.isNil, R.always(''), function (url) { return "<a rel=\"noopener\" href=\"" + url + "\" target=\"_blank\" class=\"btn btn-warning\">Migration guide</a>"; })(guideUrl);
}
function onlyRelevantMajorVersions(data) {
    var currentVersion = R.prop('installedVersion', data);
    var allVersions = R.sortBy(R.prop('name'), R.path(['package', 'module_versions'], data));
    return R.compose(R.map(function (cur) { return R.assoc('identifier', r(), cur); }), R.tail, R.reduce(onlyLastVersionInAMajor, [{ name: currentVersion }]))(allVersions);
}
function templateMajorOrMinorAvailable(data) {
    function tabsForModule(majorsAvailable) {
        return R.compose(R.join(''), mapIndexed(function (cur, index) {
            var descriptionForAllVersions = R.compose(R.join('<hr>'), R.reverse, R.map(R.compose(function (cur) { return converter.makeHtml(cur); }, R.prop('description'))), R.dropWhile(function (mod) { return R.gt(versionToNumber(R.prop('name', mod)), versionToNumber(R.prop('name', cur))); }), R.takeWhile(function (mod) { return R.gt(versionToNumber(R.prop('name', mod)), versionToNumber(currentVersion)); }), R.path(['package', 'module_versions']))(data);
            return "<div class=\"tab-pane fade show " + isActive(index) + "\" id=\"nav-" + properName('.', ['name'], cur) + "\" role=\"tabpanel\" aria-labelledby=\"nav-" + properName('.', ['name'], cur) + "-tab\">\n                          <div class=\"links\">\n                            " + migrationGuideAvailable(R.prop('guide_url', cur)) + "\n                            <a\n                              rel=\"noopener\"\n                              href=\"https://github.com/" + packageName + "/releases/tag/" + R.prop('name', cur) + "\"\n                              target=\"_blank\"\n                              class=\"btn btn-secondary\"\n                            >Github changelog</a>\n                            <a\n                              rel=\"noopener\"\n                              href=\"https://github.com/" + packageName + "/compare/" + currentVersion + "..." + R.prop('name', cur) + "\"\n                              target=\"_blank\"\n                              class=\"btn btn-info\"\n                            >Compare the versions</a>\n                          </div>\n                          <div class=\"alert alert-warning\" role=\"alert\">\u26A0\uFE0F The information below are only useful if you use/extend/customize the <code>" + moduleName + "</code> namespace.</div>\n                            <h2>Changes between <em>v" + currentVersion + "</em> and <em>v" + R.prop('name', cur) + "</em></h2>\n                            <section>" + descriptionForAllVersions + "</section>\n                            " + isThereSuggestedModules(R.path(['dependencies', 'suggest'], cur)) + "\n                        </div>";
        }))(majorsAvailable);
    }
    function isThereSuggestedModules(objectWithModules) {
        return R.ifElse(function (o) { return R.gt(R.length(R.toPairs(o)), 0); }, function (o) { return R.compose(function (s) { return R.concat(s, '</ul></dd>'); }, function (s) { return R.concat('<h2>You might also be interested in the following modules</h2><dd><ul>', s); }, R.join(''), R.map(function (mod) { return "<li><a rel=\"noopener\" href=\"https://github.com/" + mod[0] + "\" target=\"_blank\">" + R.last(R.split('/', R.head(mod))) + "</a> " + R.last(mod) + "</li>"; }), R.toPairs)(o); }, function () { return ''; })(objectWithModules);
    }
    function navigationForTabs(listOfVersions) {
        return R.compose(R.join(''), mapIndexed(function (cur, index) { return "<a\n                                          class=\"nav-item nav-link " + isActive(index) + "\"\n                                          id=\"nav-" + properName('.', ['name'], cur) + "-tab\"\n                                          data-toggle=\"tab\" href=\"#nav-" + properName('.', ['name'], cur) + "\"\n                                          role=\"tab\" aria-controls=\"nav-home\"\n                                          aria-selected=\"true\">Version: " + R.prop('name', cur) + "\n                                        </a>"; }))(listOfVersions);
    }
    var p = R.prop(R.__, data);
    var packageName = p('module');
    var moduleName = R.path(['package', 'name'], data);
    var currentVersion = p('installedVersion');
    var relevantMajorVersions = onlyRelevantMajorVersions(data);
    return "<nav>\n              <div class=\"nav nav-tabs\" id=\"nav-tab-modules\" role=\"tablist\" style=\"margin-bottom: 1rem;\">\n                  " + navigationForTabs(relevantMajorVersions) + "\n              </div>\n            </nav>\n            <div class=\"tab-content\" id=\"nav-tabContent-modules\">\n              " + tabsForModule(relevantMajorVersions) + "\n            </div>";
}
function templateForPackage(data) {
    return "<div class=\"card margin-bottom\">\n              <div class=\"card-body\" id=\"" + R.path(['package', 'identifier'], data) + "\">\n                <h3 class=\"card-title\">" + R.path(['package', 'name'], data) + "</h3>\n                <h6 class=\"card-subtitle text-muted\">" + (R.isNil(R.path(['package', 'description'], data)) ? '' : cleanDescription(R.path(['package', 'description'], data))) + "</h6>\n                <p class=\"card-text\">Installed version <span class=\"badge badge-secondary\">" + R.prop('installedVersion', data) + "</span></p>\n                " + templateMajorOrMinorAvailable(data) + "\n              </div>\n              <div class=\"card-footer\">\n                <a href=\"#spryker-jarvis\">Get back to the summary \u261D\uFE0F</a>\n              </div>\n            </div>";
}
function templateUpToDate(content) {
    return "<div class=\"alert alert-primary\" role=\"alert\">" + content + "</div>";
}
