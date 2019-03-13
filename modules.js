//////////////////////////////////////////////////////////////
// Migration Analysis for Modules outside Spryker Features //
////////////////////////////////////////////////////////////


function migrateModuleToNextMajor(currentComposer, currentComposerLock, currentModules) {
    return R.compose(
        R.join(''),
        R.ifElse(
            R.isEmpty,
            () => templateUpToDate('All your Spryker modules are up to date or you do not use any outside of the Spryker features!'),
            R.map(templateForPackage)
        ),
        // "spryker-eco/loggly" is the only module that is not part of the release app
        R.filter(cur => R.prop('module', cur) !== 'spryker-eco/loggly' && R.prop('upToDate', cur) === false && majorAvailable(cur) && R.prop('requiredVersion', cur) !== '*'),
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
        [version => R.lte(R.prop('name', version), R.prop('name', R.last(listOfPreviousVersions))), () => listOfPreviousVersions],
        [version => isNextMajor(R.prop('name', R.last(listOfPreviousVersions)), R.prop('name', version)), version => R.append(version, listOfPreviousVersions)],
        [version => isNextMinor(R.prop('name', R.last(listOfPreviousVersions)), R.prop('name', version)), version => R.compose(R.append(version), R.dropLast(1))(listOfPreviousVersions)],
        [version => isNextPatched(R.prop('name', R.last(listOfPreviousVersions)), R.prop('name', version)), version => R.compose(R.append(version), R.dropLast(1))(listOfPreviousVersions)],
        [R.T, () => listOfPreviousVersions]
    ])(newVersion);
}

function templateMajorAvailable(packageName, moduleName, currentVersion, allVersions) {
    const onlyRelevantMajorVersion = R.compose(
        R.tail,
        R.reduce(onlyLastVersionInAMajor, [{ name: currentVersion }])
    )(allVersions);

    function tabsForModule(majorsAvailable) {
        return R.compose(
            R.join(''),
            mapIndexed((cur, index) => `<div class="tab-pane fade show ${isActive(index)}" id="nav-${properName('.', 'name', cur)}" role="tabpanel" aria-labelledby="nav-${properName('.', 'name', cur)}-tab">
                                            <dt>Migration guide</dt>
                                            <dd><a href="${migrationLinkForModule(packageName, R.prop('name',cur))}" target="_blank">Read it on our documentation space</a></dd>
                                            <dt>This new version brings</dt>
                                            <dd>${converter.makeHtml(R.prop('description', cur))}</dd>
                                            ${isThereSuggestedModules(R.path(['dependencies', 'suggest'], cur))}
                                        </div>`),
            R.map(cur => R.assoc('identifier', r(), cur))
        )(majorsAvailable);
    }

    function isThereSuggestedModules(objectWithModules) {
        return R.ifElse(
            o => R.gt(R.length(R.toPairs(o)), 0),
            o => R.compose(
                s => R.concat(s, '<ul></dd>'),
                s => R.concat('<dt>You might also be interested in the following modules</dt><dd><ul>', s),
                R.join(''),
                R.map(mod => `<li><a href="https://github.com/${R.head(mod)}}" target="_blank">${R.last(R.split('/', R.head(mod)))}</a> ${R.last(mod)}</li>`),
                R.toPairs
            )(o),
            () => ''
        )(objectWithModules);
    }

    return `<nav>
                <div class="nav nav-tabs" id="nav-tab" role="tablist" style="margin-bottom: 1rem;">
                    ${navigationForTabs(onlyRelevantMajorVersion)}
                </div>
            </nav>
            <div class="tab-content" id="nav-tabContent">
                ${tabsForModule(onlyRelevantMajorVersion)}
            </div>`;
}

function templateForPackage(package) {
    const pp = R.prop(R.__, package);
    const ph = R.path(R.__, package);

    return `<div class="card">
                <div class="card-body">
                    <h3 class="card-title">${ph(['package', 'name'])}</h3>
                    <h6 class="card-subtitle mb-2 text-muted">${R.isNil(ph(['package', 'description'])) ? '' : cleanDescription(ph(['package', 'description']))}</h6>
                    <p class="card-text">Installed version <span class="badge badge-secondary">${pp('installedVersion')}</span></p>
                        ${templateMajorAvailable(pp('module') ,ph(['package', 'name']) ,pp('installedVersion'), R.sortBy(R.prop('name'), ph(['package', 'module_versions'])))}
                </div>
            </div>`;
}
