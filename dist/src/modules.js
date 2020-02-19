/* globals
    cleanDescription:false,
    converter:false,
    findInstalledVersion:false,
    findPackageForModule:false,
    isActive:false,
    isNextMajor:false,
    isNextMinor:false,
    isNextPatched:false,
    isNotNil:false,
    keepOnlyModulesFromOrgs:false,
    majorAvailable:false,
    mapIndexed:false,
    minorAvailable:false,
    properName:false,
    r:false,
    reconstruct:false,
    specificTypeOfModules:false,
    templateUpToDate:false,
    versionToNumber:false
*/

/* exported
    templateToDisplayDetailsOfEachModule
*/


//////////////////////////////////////////////////////////////
// Migration Analysis for Modules outside Spryker Features //
////////////////////////////////////////////////////////////

const templateUpToDate = content => `<div class="alert alert-primary" role="alert">${content}</div>`;

function templateToDisplayDetailsOfEachModule(currentComposer, currentComposerLock, currentModules) {
    return R.compose(
        R.join(''),
        R.ifElse(
            R.isEmpty,
            () => ([templateUpToDate('All your Spryker modules are up to date or you do not use any outside of the Spryker features!')]),
            R.map(templateForPackage)
        ),
        c => migrateModuleToLastVersionInMajor(c, currentComposerLock, currentModules)
    )(currentComposer);
}

function migrateModuleToLastVersionInMajor(currentComposer, currentComposerLock, currentModules) {
    return R.compose(
        // "spryker-eco/loggly" is the only module that is not part of the release app
        R.filter(cur => isNotNil(R.prop('package', cur)) && R.prop('module', cur) !== 'spryker-eco/loggly' && R.prop('upToDate', cur) === false && (minorAvailable(cur) || majorAvailable(cur)) && R.prop('requiredVersion', cur) !== '*'),
        c => prepareModules(c, currentComposerLock, currentModules)
    )(currentComposer);
}

function prepareModules(currentComposer, currentComposerLock, currentModules) {
    return R.compose(
        R.map(R.compose(
            R.assoc('identifier', r()),
            cur => R.assoc('upToDate', R.equals(R.prop('installedVersion', cur), R.path(['package', 'version'], cur)), cur),
            cur => R.assoc('package', findPackageForModule(currentModules)(cur), cur),
            reconstruct(['module', 'requiredVersion', 'installedVersion']))),
        findInstalledVersion(currentComposerLock),
        specificTypeOfModules(['spryker', 'spryker-eco', 'spryker-shop']),
        keepOnlyModulesFromOrgs
    )(currentComposer);
}

function onlyLastVersionInAMajor(listOfPreviousVersions, newVersion) {
    return R.cond([
        [version => R.lte(versionToNumber(R.prop('name', version)), versionToNumber(R.prop('name', R.last(listOfPreviousVersions)))), () => listOfPreviousVersions],
        [version => isNextMajor(R.prop('name', R.last(listOfPreviousVersions)), R.prop('name', version)), version => R.append(version, listOfPreviousVersions)],
        [version => isNextMinor(R.prop('name', R.last(listOfPreviousVersions)), R.prop('name', version)), version => R.ifElse(list => R.equals(R.length(list), 1), R.append(version), list => R.compose(R.append(version), R.dropLast(1))(list))(listOfPreviousVersions)],
        [version => isNextPatched(R.prop('name', R.last(listOfPreviousVersions)), R.prop('name', version)), version => R.compose(R.append(version), R.dropLast(1))(listOfPreviousVersions)],
        [R.T, () => listOfPreviousVersions]
    ])(newVersion);
}

function migrationGuideAvailable(guideUrl) {
    return R.ifElse(
        R.isNil,
        R.always(''),
        url => `<a rel="noopener" href="${url}" target="_blank" class="btn btn-warning">Migration guide</a>`
    )(guideUrl);
}

function onlyRelevantMajorVersions(data) {
    const currentVersion = R.prop('installedVersion', data);
    const allVersions = R.sortBy(R.prop('name'), R.path(['package', 'module_versions'], data));

    return R.compose(
        R.map(cur => R.assoc('identifier', r(), cur)),
        R.tail,
        R.reduce(onlyLastVersionInAMajor, [{ name: currentVersion }])
    )(allVersions);
}

function templateMajorOrMinorAvailable(data) {
    function tabsForModule(majorsAvailable) {
        return R.compose(
            R.join(''),
            mapIndexed((cur, index) => {
                const descriptionForAllVersions = R.compose(
                    R.join('<hr>'),
                    R.reverse,
                    R.map(R.compose(
                        cur => converter.makeHtml(cur),
                        R.prop('description')
                    )),
                    R.dropWhile(mod => R.gt(versionToNumber(R.prop('name', mod)), versionToNumber(R.prop('name', cur)))),
                    R.takeWhile(mod => R.gt(versionToNumber(R.prop('name', mod)), versionToNumber(currentVersion))),
                    R.path(['package', 'module_versions'])
                )(data);

                return `<div class="tab-pane fade show ${isActive(index)}" id="nav-${properName('.', ['name'], cur)}" role="tabpanel" aria-labelledby="nav-${properName('.', ['name'], cur)}-tab">
                          <div class="links">
                            ${migrationGuideAvailable(R.path(['dependencies', 'guide_url'], cur))}
                            <a
                              rel="noopener"
                              href="https://github.com/${packageName}/releases/tag/${R.prop('name', cur)}"
                              target="_blank"
                              class="btn btn-secondary"
                            >Github changelog</a>
                            <a
                              rel="noopener"
                              href="https://github.com/${packageName}/compare/${currentVersion}...${R.prop('name', cur)}"
                              target="_blank"
                              class="btn btn-info"
                            >Compare the versions</a>
                          </div>
                          <div class="alert alert-warning" role="alert">⚠️ The information below are only useful if you use/extend/customize the <code>${moduleName}</code> namespace.</div>
                            <h2>Changes between <em>v${currentVersion}</em> and <em>v${R.prop('name', cur)}</em></h2>
                            <section>${descriptionForAllVersions}</section>
                            ${isThereSuggestedModules(R.path(['dependencies', 'suggest'], cur))}
                        </div>`;
            }))(majorsAvailable);
    }

    function isThereSuggestedModules(objectWithModules) {
        return R.ifElse(
            o => R.gt(R.length(R.toPairs(o)), 0),
            o => R.compose(
                s => R.concat(s, '</ul></dd>'),
                s => R.concat('<h2>You might also be interested in the following modules</h2><dd><ul>', s),
                R.join(''),
                R.map(mod => `<li><a rel="noopener" href="https://github.com/${mod[0]}" target="_blank">${R.last(R.split('/', R.head(mod)))}</a> ${R.last(mod)}</li>`),
                R.toPairs
            )(o),
            () => ''
        )(objectWithModules);
    }

    function navigationForTabs(listOfVersions) {
        return R.compose(
            R.join(''),
            mapIndexed((cur, index) => `<a
                                          class="nav-item nav-link ${isActive(index)}"
                                          id="nav-${properName('.', ['name'], cur)}-tab"
                                          data-toggle="tab" href="#nav-${properName('.', ['name'], cur)}"
                                          role="tab" aria-controls="nav-home"
                                          aria-selected="true">Version: ${R.prop('name', cur)}
                                        </a>`)
        )(listOfVersions);
    }

    const p = R.prop(R.__, data);
    const packageName = p('module');
    const moduleName = R.path(['package', 'name'], data);
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
              <div class="card-body" id="${R.path(['package', 'identifier'], data)}">
                <h3 class="card-title">${R.path(['package', 'name'], data)}</h3>
                <h6 class="card-subtitle text-muted">${R.isNil(R.path(['package', 'description'], data)) ? '' : cleanDescription(R.path(['package', 'description'], data))}</h6>
                <p class="card-text">Installed version <span class="badge badge-secondary">${R.prop('installedVersion', data)}</span></p>
                ${templateMajorOrMinorAvailable(data)}
              </div>
              <div class="card-footer">
                <a href="#spryker-jarvis">Get back to the summary ☝️</a>
              </div>
            </div>`;
}
