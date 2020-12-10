const {
    __,
    always,
    append,
    assoc,
    compose,
    concat,
    cond,
    descend,
    dropLast,
    dropWhile,
    equals,
    evolve,
    filter,
    gt,
    groupWith,
    head,
    ifElse,
    inc,
    isEmpty,
    isNil,
    join,
    last,
    length,
    lte,
    map,
    path,
    pick,
    prop,
    reduce,
    reverse,
    sortBy,
    sortWith,
    split,
    T,
    tail,
    takeWhile,
    toPairs
} = require('ramda');
const {
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
    isSameMajor,
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
} = require('./utils.js');


//////////////////////////////////////////////////////////////
// Migration Analysis for Modules outside Spryker Features //
////////////////////////////////////////////////////////////

function prepareDataNoFeatures(data) {
    return compose(
        data => assoc('modulesWithTheirCount', compose(
            d => filter(isNotEmpty, [groupingByMajor(d), groupingByMinor(d)]),
            map(cur => assoc('nextVersionsCount', countVersionsForModule(cur), cur)),
            d => migrateModuleToLastVersionInMajor(d.myComposerJSON, d.myComposerLOCK, d.releaseModules)
        )(data), data),
        evolve({
            releaseModules: map(cur => assoc('identifier', r(), cur))
        }),
        pick(['myComposerJSON', 'myComposerLOCK', 'releaseModules'])
    )(data);
}

function templateForSummaryElement(listOfElements) {
    function textForBoxTitle(isMajor, listOfElements) {
        if (isMajor) {
            return `Major versions are available for the following <span class="badge badge-dark">${count(listOfElements)}</span> module(s)`;
        } else {
            return `Minor versions are available for the following <span class="badge badge-dark">${count(listOfElements)}</span> module(s)`;
        }
    }

    return compose(
        join(''),
        mapIndexed((cur, index) => {
            const isMajor = compose(
                n => n > 0,
                path(['nextVersionsCount', 'major']),
                head,
                head
            )(cur);
            const id = r();

            return `<div class="card">
                        <div class="card-header" id="heading-${id}">
                            <button class="btn btn-link ${shouldBeCollapsed(index)}" type="button" data-toggle="collapse" data-target="#summary-${id}" aria-expanded="${isActiveBool(index)}" aria-controls="summary-${id}">
                                ${textForBoxTitle(isMajor, cur)}
                            </button>
                        </div>
                        <div id="summary-${id}" class="collapse ${isShow(index)}" aria-labelledby="heading-${id}" data-parent="#summary-table">
                            <div class="card-body">
                                <div class="card-columns">
                                    ${join('',map(templateForEachGroupOfMigration, cur))}
                                </div>
                            </div>
                        </div>
                    </div>`;
        })
    )(listOfElements);
}

function groupWithLevel(level) {
    return function(a, b) {
        return groupWith((a, b) => {
            const countForA = path(['nextVersionsCount', level], a);
            const countForB = path(['nextVersionsCount', level], b);

            return equals(countForA, countForB);
        })(a, b);
    };
}

function groupingByMajor(listOfModules) {
    return compose(
        groupWithLevel('major'),
        sortWith([descend(path(['nextVersionsCount', 'major']))]),
        filter(cur => gt(path(['nextVersionsCount', 'major'], cur), 0))
    )(listOfModules);
}

function groupingByMinor(listOfModules) {
    return compose(
        groupWithLevel('minor'),
        sortWith([descend(path(['nextVersionsCount', 'minor']))]),
        filter(cur => gt(path(['nextVersionsCount', 'minor'], cur), 0) && equals(path(['nextVersionsCount', 'major'], cur), 0))
    )(listOfModules);
}

function count(list) {
    return reduce((prev, cur) => prev + cur.length, 0, list);
}

function countVersionsForModule(mod) {
    return reduce((prev, cur) => cond([
            [version => versionToNumber(version.name) <= versionToNumber(prev.latestVersion), () => prev],
            [version => isNextMajor(prev.latestVersion, version.name), version => evolve({ major: inc, minor: always(0), patch: always(0), latestVersion: always(version.name) }, prev)],
            [version => isNextMinor(prev.latestVersion, version.name), version => evolve({ minor: inc, patch: always(0), latestVersion: always(version.name) }, prev)],
            [version => isNextPatched(prev.latestVersion, version.name), version => evolve({ patch: inc, latestVersion: always(version.name) }, prev)],
            [T, () => prev]
        ])(cur), { major: 0, minor: 0, patch: 0, latestVersion: mod.installedVersion },
        reverse(mod.package.module_versions)
    );
}

function templateForEachGroupOfMigration(listOfModules) {
    function textForBoxTitle(isMajor, count, mod) {
        if (isMajor) {
            return `Those <span class="badge badge-dark">${count}</span> module(s) are behind <span class="badge badge-primary">${mod.nextVersionsCount.major}</span> major version(s).`;
        } else {
            return `Those <span class="badge badge-dark">${count}</span> module(s) are behind <span class="badge badge-primary">${mod.nextVersionsCount.minor}</span> minor version(s).`;
        }
    }

    const isMajor = listOfModules[0].nextVersionsCount.major > 0;

    return `<div class="card margin-bottom">
                <div class="card-header">
                    <b>${textForBoxTitle(isMajor, listOfModules.length, listOfModules[0])}</b>
                </div>
                <div class="card-body">
                    <ul class="list-unstyled">
                        ${join('', map(cur => `<li><a href=#${path(['package', 'identifier'], cur)}><code>${cur.module}</code></a></li>`, listOfModules))}
                    <ul>
                </div>
            </div>`;
}

function logicForNoFeatures(data) {
    return `<div class="margin-top-2">
                <div class="accordion" id="summary-table">
                    ${templateForSummaryElement(data.modulesWithTheirCount)}
                </div>
            </div>
            <h3>The following modules are outdated</h3>
            <div>${templateToDisplayDetailsOfEachModule(data.myComposerJSON, data.myComposerLOCK, data.releaseModules)}</div>`;
}

function templateToDisplayDetailsOfEachModule(currentComposer, currentComposerLock, currentModules) {
    return compose(
        join(''),
        ifElse(
            isEmpty,
            () => ([templateUpToDate('All your Spryker modules are up to date or you do not use any outside of the Spryker features!')]),
            map(templateForPackage)
        ),
        c => migrateModuleToLastVersionInMajor(c, currentComposerLock, currentModules)
    )(currentComposer);
}

function migrateModuleToLastVersionInMajor(currentComposer, currentComposerLock, currentModules) {
    return compose(
        // "spryker-eco/loggly" is the only module that is not part of the release app
        filter(cur => isNotNil(prop('package', cur)) && prop('module', cur) !== 'spryker-eco/loggly' && prop('upToDate', cur) === false && (minorAvailable(cur) || majorAvailable(cur)) && prop('requiredVersion', cur) !== '*'),
        c => prepareModules(c, currentComposerLock, currentModules)
    )(currentComposer);
}

function prepareModules(currentComposer, currentComposerLock, currentModules) {
    return compose(
        map(compose(
            assoc('identifier', r()),
            cur => assoc('upToDate', equals(prop('installedVersion', cur), path(['package', 'version'], cur)), cur),
            cur => assoc('package', findPackageForModule(currentModules)(cur), cur),
            reconstruct(['module', 'requiredVersion', 'installedVersion']))),
        findInstalledVersion(currentComposerLock),
        specificTypeOfModules(['spryker', 'spryker-eco', 'spryker-shop']),
        keepOnlyModulesFromOrgs
    )(currentComposer);
}

function onlyLastVersionInAMajor(listOfPreviousVersions, newVersion) {
    return cond([
        [version => lte(versionToNumber(prop('name', version)), versionToNumber(prop('name', last(listOfPreviousVersions)))), () => listOfPreviousVersions],
        [version => isNextMajor(prop('name', last(listOfPreviousVersions)), prop('name', version)), version => append(version, listOfPreviousVersions)],
        [version => isNextMinor(prop('name', last(listOfPreviousVersions)), prop('name', version)), version => ifElse(list => equals(length(list), 1), append(version), list => compose(append(version), dropLast(1))(list))(listOfPreviousVersions)],
        [version => isNextPatched(prop('name', last(listOfPreviousVersions)), prop('name', version)), version => compose(append(version), dropLast(1))(listOfPreviousVersions)],
        [T, () => listOfPreviousVersions]
    ])(newVersion);
}

function migrationGuideAvailable(guideUrl) {
    return ifElse(
        isNil,
        always(''),
        url => `<a rel="noopener" href="${url}" target="_blank" class="btn btn-warning">Migration guide</a>`
    )(guideUrl);
}

function onlyRelevantMajorVersions(data) {
    const currentVersion = prop('installedVersion', data);
    const allVersions = sortBy(prop('name'), path(['package', 'module_versions'], data));
    const allMigrationGuides = filter(cur => isNotNil(cur.guide_url) && isNextMajor(currentVersion, cur.name), allVersions);

    return compose(
        map(compose(
            cur => reduce((prev, next) => {
                if(isSameMajor(next.name, cur.name)) {
                    return assoc('guide_url', next.guide_url, cur);
                } else {
                    return prev;
                }
            }, cur, allMigrationGuides),
            cur => assoc('identifier', r(), cur)
        )),
        tail,
        reduce(onlyLastVersionInAMajor, [{ name: currentVersion }])
    )(allVersions);
}

function templateMajorOrMinorAvailable(data) {
    function tabsForModule(majorsAvailable) {
        return compose(
            join(''),
            mapIndexed((cur, index) => {
                const descriptionForAllVersions = compose(
                    join('<hr>'),
                    reverse,
                    map(compose(
                        cur => converter.makeHtml(cur),
                        prop('description')
                    )),
                    dropWhile(mod => gt(versionToNumber(prop('name', mod)), versionToNumber(prop('name', cur)))),
                    takeWhile(mod => gt(versionToNumber(prop('name', mod)), versionToNumber(currentVersion))),
                    path(['package', 'module_versions'])
                )(data);

                return `<div class="tab-pane fade show ${isActive(index)}" id="nav-${properName('.', ['name'], cur)}" role="tabpanel" aria-labelledby="nav-${properName('.', ['name'], cur)}-tab">
                          <div class="links">
                            ${migrationGuideAvailable(prop('guide_url', cur))}
                            <a
                              rel="noopener"
                              href="https://github.com/${packageName}/releases/tag/${prop('name', cur)}"
                              target="_blank"
                              class="btn btn-secondary"
                            >Github changelog</a>
                            <a
                              rel="noopener"
                              href="https://github.com/${packageName}/compare/${currentVersion}...${prop('name', cur)}"
                              target="_blank"
                              class="btn btn-info"
                            >Compare the versions</a>
                          </div>
                          <div class="alert alert-warning" role="alert">⚠️ The information below are only useful if you use/extend/customize the <code>${moduleName}</code> namespace.</div>
                            <h2>Changes between <em>v${currentVersion}</em> and <em>v${prop('name', cur)}</em></h2>
                            <section>${descriptionForAllVersions}</section>
                            ${isThereSuggestedModules(path(['dependencies', 'suggest'], cur))}
                        </div>`;
            }))(majorsAvailable);
    }

    function isThereSuggestedModules(objectWithModules) {
        return ifElse(
            o => gt(length(toPairs(o)), 0),
            o => compose(
                s => concat(s, '</ul></dd>'),
                s => concat('<h2>You might also be interested in the following modules</h2><dd><ul>', s),
                join(''),
                map(mod => `<li><a rel="noopener" href="https://github.com/${mod[0]}" target="_blank">${last(split('/', head(mod)))}</a> ${last(mod)}</li>`),
                toPairs
            )(o),
            () => ''
        )(objectWithModules);
    }

    function navigationForTabs(listOfVersions) {
        return compose(
            join(''),
            mapIndexed((cur, index) => `<a
                                          class="nav-item nav-link ${isActive(index)}"
                                          id="nav-${properName('.', ['name'], cur)}-tab"
                                          data-toggle="tab" href="#nav-${properName('.', ['name'], cur)}"
                                          role="tab" aria-controls="nav-home"
                                          aria-selected="true">Version: ${prop('name', cur)}
                                        </a>`)
        )(listOfVersions);
    }

    const p = prop(__, data);
    const packageName = p('module');
    const moduleName = path(['package', 'name'], data);
    const currentVersion = p('installedVersion');
    const relevantMajorVersions = onlyRelevantMajorVersions(data);

    return `<nav>
              <div class="nav nav-tabs" id="nav-tab-modules" role="tablist" style="margin-bottom: 1rem;">
                  ${navigationForTabs(relevantMajorVersions)}
              </div>
            </nav>
            <div class="tab-content" id="nav-tabContent-modules">
              ${tabsForModule(relevantMajorVersions)}
            </div>`;
}

function templateForPackage(data) {
    return `<div class="card margin-bottom">
              <div class="card-body" id="${path(['package', 'identifier'], data)}">
                <h3 class="card-title">${path(['package', 'name'], data)}</h3>
                <h6 class="card-subtitle text-muted">${isNil(path(['package', 'description'], data)) ? '' : cleanDescription(path(['package', 'description'], data))}</h6>
                <p class="card-text">Installed version <span class="badge badge-secondary">${prop('installedVersion', data)}</span></p>
                ${templateMajorOrMinorAvailable(data)}
              </div>
              <div class="card-footer">
                <a href="#spryker-jarvis">Get back to the summary ☝️</a>
              </div>
            </div>`;
}

function templateUpToDate(content) {
    return `<div class="alert alert-primary" role="alert">${content}</div>`;
}

exports.logicForNoFeatures = logicForNoFeatures;
exports.prepareDataNoFeatures = prepareDataNoFeatures;
