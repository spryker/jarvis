/* jshint esversion:6 */


////////////
// Utils //
//////////


function log(content) {
    console.log(content);
    return content;
}

const converter = new showdown.Converter();

function r() {
    return Math.random().toString(36).substring(7);
}

const isNotNil = R.complement(R.isNil);
const nextMajor = version => R.concat(R.head(R.split('.', version)), '.0.0');
const nextMajorLink = version => R.concat(R.head(R.split('.', version)), '-0-0');

const cleanDescription = description => R.compose(
    R.join('.<br>'),
    R.split('.'),
    R.trim
)(description);

const migrationLinkForModule = (packageName, version) => `https://documentation.spryker.com/module_migration_guides/mg-${R.last(R.split('/', packageName))}.htm#${nextMajorLink(version)}`;

function majorAvailable(mod) {
    const installedVersionMajor = R.head(R.split('.', R.prop('installedVersion', mod)));
    const lastVersionAvailableMajor = R.head(R.split('.', R.path(['package', 'version'], mod)));

    return lastVersionAvailableMajor > installedVersionMajor ? true : false;
}

function majorAvailableForModule(mod) {
    const installedVersionMajor = R.head(R.split('.', R.prop('version', mod)));
    const lastVersionAvailableMajor = R.head(R.split('.', R.path(['package', 'version'], mod)));

    return lastVersionAvailableMajor > installedVersionMajor ? true : false;
}

const modulesForOrgs = ['spryker', 'spryker-feature', 'spryker-shop', 'spryker-eco'];

const mapIndexed = R.addIndex(R.map);
const isActive = index => index === 0 ? 'active' : '';
const isShow = index => index === 0 ? 'show' : '';
const semVerMajor = version => R.nth(0, R.split('.', version));

const templateUpToDate = content => [`<div class="alert alert-primary" role="alert">${content}</div>`];

const properName = name => R.join(`${R.prop('identifier', name)}`, R.split('.', R.prop('name', name)));

const navigationForTabs = listOfVersions => R.compose(
    R.join(''),
    mapIndexed((cur, index) => `<a
                                    class="nav-item nav-link ${isActive(index)}"
                                    id="nav-${properName(cur)}-tab"
                                    data-toggle="tab" href="#nav-${properName(cur)}"
                                    role="tab" aria-controls="nav-home"
                                    aria-selected="true">${R.prop('name', cur)}
                                </a>`)
)(listOfVersions);

const render = (selector, content) => document.getElementById(selector).innerHTML = content;


const keepOnlyModulesFromOrgs = modulesForOrgs => R.compose(
    R.sortBy(R.prop(0)),
    R.filter(cur => R.contains(R.compose(
        R.head,
        R.split('/'),
        R.nth(0)
    )(cur), modulesForOrgs) ? true : false),
    R.toPairs,
    R.prop('require')
);

const getNameAndVersionFromInstalledModules = R.compose(
    R.map(R.pick(['name', 'version'])),
    R.prop('packages')
);

const getModuleOrg = R.compose(
    R.head,
    R.split('/'),
    R.head
);

const specificTypeOfModules = type => moduleList => R.filter(cur => R.equals(type, getModuleOrg(cur)), moduleList);

const findPackageForModule = currentList => mod => R.find(R.propEq('package', R.prop('module', mod)), currentList);
const findModuleForModule = currentList => mod => R.find(R.propEq('package', R.prop('name', mod)), currentList);

const reconstruct = keys => values => R.zipObj(keys, values);

const findInstalledVersion = composerLock => moduleList => R.map(
    cur => R.append(R.prop('version', R.find(R.propEq('name', R.nth(0, cur)), getNameAndVersionFromInstalledModules(composerLock))), cur),
    moduleList
);


/////////////////////////////////////////////
// Migration Analysis for Product Release //
///////////////////////////////////////////


function analyseMigrationToNextProductReleases(el, currentComposer, currentComposerLock, currentFeatures, currentModules) {
    return render(el, migrateToNextProductReleases(currentComposer, currentComposerLock, currentFeatures, currentModules));
}

function migrateToNextProductReleases(currentComposer, currentComposerLock, currentFeatures, currentModules) {
    function templateForModulesThatNeedMigration(listOfModules) {
        const properName = mod => R.join(`${R.prop('identifier', name)}`, R.split('/', R.prop('name', mod)));

        function leftPills(listOfMod) {
            const lengthForFeature = R.compose(
                R.length,
                R.toPairs,
                R.path(['data', 'composer', 'require']),
                R.find(R.propEq('name', R.prop('name', listOfModules))),
                R.path(['package', 'feature_versions'])
            );

            return R.join('', mapIndexed((cur, index) => {
                const pp = R.prop(R.__, cur);
                const ph = R.path(R.__, cur);
                return `<a
                            class="nav-link ${isActive(index)}
                            id="v-pills-${properName(cur)}-tab"
                            data-toggle="pill"
                            href="#v-pills-${properName(cur)}"
                            role="tab"
                            aria-controls="v-pills-${properName(cur)}"
                            aria-selected="true">${pp('name')}
                            <span class="badge badge-pill float-right badge-light">${pp('version')} -> ${nextMajor(ph(['package', 'version']))}</span>
                        </a>`;
            }, listOfMod));
        }

        function rightPills(features) {
            return R.join('', mapIndexed((cur, index) =>
                `<div class="tab-pane fade ${isShow(index)} ${isActive(index)}" id="v-pills-${properName(cur)}" role="tabpanel" aria-labelledby="v-pills-${properName(cur)}-tab">
                    <ul class="list-group">
                        <li class="list-group-item d-flex justify-content-between align-items-center">
                            <a href="${migrationLinkForModule(R.prop('name',cur), R.path(['package', 'version'], cur))}" target="_blank">Migration guide for module ${R.prop('name', cur)}</a>
                        </li>
                    </ul>
                </div>`, listOfModules));
        }

        return `<div class="col-6">
                    <div class="nav flex-column nav-pills" id="v-pills-tab" role="tablist" aria-orientation="vertical">
                        ${leftPills(listOfModules)}
                    </div>
                </div>
                <div class="col-6">
                    <div class="tab-content" id="v-pills-tabContent">
                        ${rightPills(listOfModules)}
                    </div>
                </div>`;
    }

    function templateForProductRelease(productRelease) {
        return `<p class="card-text">How to migrate to newer version?</p>
                <nav>
                    <div class="nav nav-tabs" id="nav-tab" role="tablist" style="margin-bottom: 1rem;">
                        ${navigationForTabs(productRelease)}
                    </div>
                </nav>
                <div class="tab-content" id="nav-tabContent">
                    ${contentForTabs(currentComposerLock, productRelease)}
                </div>
                <div class="features-not-used">
                    <h5>Spryker features you might be interested in</h5>
                    ${missingSprykerFeatures(currentFeatures, currentComposer)}
                </div>`;
    }

    function templateForMissingFeatures(feature) {
        const p = R.prop(R.__, feature);
        return `<dt><a href="https://github.com/${p('package')}" target="_blank">${p('name')}</a></dt>
                <dd>${p('description')}</dd>`;
    }

    function missingSprykerFeatures(currentFeatures, currentComposer) {
        const diff = (x, y) => R.prop('package', x) === R.prop('feature', y);

        return R.compose(
            R.ifElse(
                R.isEmpty,
                cur => '<div class="alert alert-success" role="alert">Congrats you currently use all Spryker features available!</div>',
                R.compose(
                    R.concat('<dl>'),
                    cur => R.concat(cur, '</dl>'),
                    R.join(''),
                    R.map(templateForMissingFeatures),
                    R.sortBy(R.prop('name'))
                )
            ),
            R.differenceWith(diff, currentFeatures),
            R.map(reconstruct(['feature', 'requiredVersion'])),
            specificTypeOfModules('spryker-feature'),
            keepOnlyModulesFromOrgs(modulesForOrgs)
        )(currentComposer);
    }

    function modulesThatNeedMigration(currentComposerLock, productRelease) {
        return R.compose(
            R.ifElse(
                R.isEmpty,
                cur => '<div class="alert alert-primary" role="alert">No module migrations needed for this Product Release.</div>',
                templateForModulesThatNeedMigration
            ),
            R.filter(cur => R.prop('upToDate', cur) === false && majorAvailableForModule(cur)),
            R.filter(cur => isNotNil(R.prop('package', cur))),
            list => R.filter(cur => isNotNil(R.prop('package', cur)), list),
            R.map(R.compose(
                cur => R.assoc('upToDate', R.equals(R.prop('version', cur), R.path(['package', 'version'], cur)), cur),
                cur => R.assoc('package', findModuleForModule(currentModules)(cur), cur),
                cur => R.assoc('identifier', r(), cur)
            )),
            R.prop('packages')
        )(currentComposerLock);
    }

    function groupByRelease(listOfFeatures) {
        return R.compose(
            R.map(R.compose(
                cur => R.assoc('featuresToMigrate', R.filter(feature => R.any(version => R.equals(R.prop('name', version), R.prop('name', cur)), R.path(['package', 'feature_versions'], feature)), listOfFeatures), cur),
                cur => ({ name: cur, featuresToMigrate: [], identifier: r() })
            )),
            R.uniq,
            R.reduce((prev, cur) => {
                return R.concat(prev, R.map(R.prop('name'), R.path(['package', 'feature_versions'], cur)));
            }, [])
        )(listOfFeatures);
    }

    function contentForTabs(composerLock, content) {
        return R.compose(
            R.join(''),
            mapIndexed((cur, index) => `<div class="tab-pane fade show ${isActive(index)}" id="nav-${properName(cur)}" role="tabpanel" aria-labelledby="nav-${properName(cur)}-tab">
                                            <h5 class="section-in-release">Modules that need a migration inside this Product Release</h5>
                                            <div class="row">
                                                ${modulesThatNeedMigration(composerLock, cur)}
                                            </div>
                                            <h5 class="section-in-release">Diff for each feature inside this Product Release</h5>
                                            <div class="row">
                                                ${groupModulesByFeature(cur)}
                                            </div>
                                        </div>`)
        )(content);
    }

    function groupModulesByFeature(productRelease) {
        const properName = feature => R.join(`${R.prop('identifier', name)}`, R.split('/', R.prop('module', feature)));

        function leftPills(features) {
            const lengthForFeature = R.compose(
                R.length,
                R.toPairs,
                R.path(['data', 'composer', 'require']),
                R.find(R.propEq('name', R.prop('name', productRelease))),
                R.path(['package', 'feature_versions'])
            );

            return R.join('', mapIndexed((cur, index) =>
                `<a
                    class="nav-link ${isActive(index)}
                    id="v-pills-${properName(cur)}-tab"
                    data-toggle="pill"
                    href="#v-pills-${properName(cur)}"
                    role="tab"
                    aria-controls="v-pills-${properName(cur)}"
                    aria-selected="true">${R.prop('module', cur)}
                    <span class="badge badge-pill float-right badge-light">${lengthForFeature(cur)}</span>
                </a>`, features));
        }

        function listGroupForFeature(featureVersions) {
            return R.compose(
                mod => `<li class="list-group-item d-flex justify-content-between align-items-center">
                            We will display here the code diff between versions.
                        </li>`,
                R.find(R.propEq('name', R.prop('name', productRelease)))
            )(featureVersions);
        }

        function rightPills(features) {
            return R.join('', mapIndexed((cur, index) =>
                `<div class="tab-pane fade ${isShow(index)} ${isActive(index)}" id="v-pills-${properName(cur)}" role="tabpanel" aria-labelledby="v-pills-${properName(cur)}-tab">
                    <ul class="list-group">
                        ${listGroupForFeature(R.path(['package', 'feature_versions'], cur))}
                    </ul>
                </div>`, R.prop('featuresToMigrate', productRelease)));
        }

        return `<div class="col-6">
                    <div class="nav flex-column nav-pills" id="v-pills-tab" role="tablist" aria-orientation="vertical">
                        ${leftPills(R.prop('featuresToMigrate', productRelease))}
                    </div>
                </div>
                <div class="col-6">
                    <div class="tab-content" id="v-pills-tabContent">
                        ${rightPills(R.prop('featuresToMigrate', productRelease))}
                    </div>
                </div>`;
    }

    return R.compose(
        R.ifElse(
            R.isEmpty,
            cur => templateUpToDate('All your Spryker features are up to date or you do not use any!'),
            R.compose(
                templateForProductRelease,
                R.sortBy(R.prop('name')),
                groupByRelease
            )
        ),
        R.filter(cur => R.prop('upToDate', cur) === false),
        R.map(R.compose(
            R.assoc('identifier', r()),
            cur => R.assoc('upToDate', R.equals(R.prop('installedVersion', cur), R.path(['package', 'version'], cur)), cur),
            cur => R.assoc('package', findPackageForModule(currentFeatures)(cur), cur),
            reconstruct(['module', 'requiredVersion', 'installedVersion']))),
        findInstalledVersion(currentComposerLock),
        specificTypeOfModules('spryker-feature'),
        keepOnlyModulesFromOrgs(modulesForOrgs)
    )(currentComposer);
}


//////////////////////////////////////////////////////////////
// Migration Analysis for Modules outside Spryker Features //
////////////////////////////////////////////////////////////


function analyseMigrationToNextModulesMajors(el, currentComposer, currentComposerLock, currentModules) {
    return render(el, migrateModuleToNextMajor(currentComposer, currentComposerLock, currentModules));
}

function migrateModuleToNextMajor(currentComposer, currentComposerLock, currentModules) {
    return R.compose(
        R.join(''),
        R.ifElse(
            R.isEmpty,
            cur => templateUpToDate('All your Spryker modules are up to date or you do not use any outside of the Spryker features!'),
            R.map(templateForPackage(currentComposerLock))
        ),
        log,
        R.filter(cur => R.prop('upToDate', cur) === false && majorAvailable(cur)),
        R.filter(cur => R.prop('requiredVersion', cur) !== '*'),
        R.map(R.compose(
            R.assoc('identifier', r()),
            cur => R.assoc('upToDate', R.equals(R.prop('installedVersion', cur), R.path(['package', 'version'], cur)), cur),
            cur => R.assoc('package', findPackageForModule(currentModules)(cur), cur),
            reconstruct(['module', 'requiredVersion', 'installedVersion']))),
        findInstalledVersion(currentComposerLock),
        specificTypeOfModules('spryker'),
        keepOnlyModulesFromOrgs(modulesForOrgs)
    )(currentComposer);
}

function assignRightFunctionalType(dependency) {
    const result = R.head(R.split('/', R.prop('module', cur)));
    return 'spryker-feature';
}

function groupModulesByFunctionalType(objectWithModules) {
    const listOfModules = R.compose(
        R.map(cur => R.append(r(), cur)),
        R.toPairs,
        R.groupBy(R.prop('type')),
        R.filter(cur => R.prop('type', cur) !== 'Other'),
        R.map(R.compose(
            R.cond([
                [cur => R.equals('spryker-feature', R.head(R.split('/', R.prop('module', cur)))), R.assoc('type', 'Features')],
                [cur => R.equals('spryker-eco', R.head(R.split('/', R.prop('module', cur)))), R.assoc('type', 'Eco')],
                [cur => R.equals('spryker-shop', R.head(R.split('/', R.prop('module', cur)))), R.assoc('type', 'Shop elements')],
                [cur => R.equals('spryker', R.head(R.split('/', R.prop('module', cur)))), R.assoc('type', 'Modules')],
                [R.T, R.assoc('type', 'Other')]
            ]),
            cur => R.assoc('type', R.prop('functional_type_string', R.find(R.propEq('package', R.prop('module', cur)), currentModules)), cur),
            reconstruct(['module', 'requiredVersion']))),
        R.toPairs
    )(objectWithModules);

    return `<div class="col-3">
                    <div class="nav flex-column nav-pills" id="v-pills-tab" role="tablist" aria-orientation="vertical">
                        ${R.join('', mapIndexed((cur, index) => `<a class="nav-link ${isActive(index)} id="v-pills-${R.nth(2,cur)}-tab" data-toggle="pill" href="#v-pills-${R.nth(2,cur)}" role="tab" aria-controls="v-pills-${R.nth(2,cur)}" aria-selected="true">${R.nth(0,cur)}
                            <span class="badge badge-pill float-right badge-light">${R.length(R.nth(1,cur))}</span>
                        </a>`, listOfModules))}
                    </div>
                </div>
                <div class="col-9">
                    <div class="tab-content" id="v-pills-tabContent">
                        ${R.join('', mapIndexed((cur, index) => `<div class="tab-pane fade ${isShow(index)} ${isActive(index)}" id="v-pills-${R.nth(2,cur)}" role="tabpanel" aria-labelledby="v-pills-${R.nth(2,cur)}-tab">
                            <ul class="list-group">
                                ${R.join('',R.map(mod => `<li class="list-group-item d-flex justify-content-between align-items-center">
                                    ${R.prop('module', mod)}
                                    <span class="badge badge-primary badge-pill">${R.prop('requiredVersion', mod)}</span>
                                </li>`, R.nth(1,cur)))}
                            </ul>
                        </div>`, listOfModules))}
                    </div>
                </div>`;
}

function isNextMajor(last, newVersion) {
    return semVerMajor(newVersion) > semVerMajor(last) ? true : false;
}

function templateMajorAvailable(moduleName, currentVersion, allVersions) {
    const onlyRelevantMajorVersion = R.compose(
        R.tail,
        R.reduce((prev, cur) => R.ifElse(
            newVersion => isNextMajor(R.prop('name', R.last(prev)), R.prop('name', newVersion)),
            newVersion => R.append(newVersion, prev),
            () => prev
        )(cur), [{ name: currentVersion }])
    )(allVersions);

    function tabsForModule(majorsAvailable) {
        return R.compose(
            R.join(''),
            mapIndexed((cur, index) => `<div class="tab-pane fade show ${isActive(index)}" id="nav-${properName(cur)}" role="tabpanel" aria-labelledby="nav-${properName(cur)}-tab">
                                            <dt>Migration guide</dt>
                                            <dd><a href="https://github.com/spryker/${moduleName}/releases/tag/${R.prop('name',cur)}" target="_blank">Read it on our documentation space</a></dd>
                                            <dt>This new version brings</dt>
                                            <dd>${converter.makeHtml(R.prop('description', cur))}</dd>
                                        </div>`),
            log,
            R.map(cur => R.assoc('identifier', r(), cur))
        )(majorsAvailable);
    }

    return `<p class="card-text">How to migrate to newer version?</p>
            <nav>
                <div class="nav nav-tabs" id="nav-tab" role="tablist" style="margin-bottom: 1rem;">
                    ${navigationForTabs(onlyRelevantMajorVersion)}
                </div>
            </nav>
            <div class="tab-content" id="nav-tabContent">
                ${tabsForModule(onlyRelevantMajorVersion)}
            </div>`;
}


const templateForPackage = composerLock => package => {
    const pp = R.prop(R.__, package);
    const ph = R.path(R.__, package);

    return `<div class="card">
                <div class="card-body">
                    <h3 class="card-title">${ph(['package', 'name'])}</h3>
                    <h6 class="card-subtitle mb-2 text-muted">${R.isNil(ph(['package', 'description'])) ? '' : cleanDescription(ph(['package', 'description']))}</h6>
                    <p class="card-text">Installed version <span class="badge badge-secondary">${pp('installedVersion')}</span></p>
                        ${templateMajorAvailable(ph(['package', 'name']) ,pp('installedVersion'), R.sortBy(R.prop('name'), ph(['package', 'module_versions'])))}
                </div>
            </div>`;
}
