/* jshint esversion:6, unused:true, undef:true  */
/* globals console:false, showdown:false, R:false, document:false */
/* exported analyseMigrationToNextProductReleases, analyseMigrationToNextModulesMajors, log */


////////////////////////////////////////////////////
// Functions to work with the Migration Analyzer //
//////////////////////////////////////////////////


// analyseMigrationToNextProductReleases :: (String, Object, Object, [Object], [Object]) -> HTML
function analyseMigrationToNextProductReleases(el, currentComposer, currentComposerLock, currentFeatures, currentModules) {
    return render(el, migrateToNextProductReleases(currentComposer, currentComposerLock, currentFeatures, currentModules));
}

// analyseMigrationToNextProductReleases :: (String, Object, Object, [Object]) -> HTML
function analyseMigrationToNextModulesMajors(el, currentComposer, currentComposerLock, currentModules) {
    return render(el, migrateModuleToNextMajor(currentComposer, currentComposerLock, currentModules));
}


////////////
// Utils //
//////////


// log :: a -> a
function log(content) {
    console.log(content);
    return content;
}

// Write the migration analysis in the DOM
function render(selector, content) {
    document.getElementById(selector)
        .innerHTML = content;

    return selector;
}

// Used to parse Module markdown and proce HTML
const converter = new showdown.Converter();

function isNextMajor(last, newVersion) {
    return semVerMajor(newVersion) > semVerMajor(last) ? true : false;
}

// Used to generate random DOM id
// r :: Number
function r() {
    return Math.random()
        .toString(36)
        .substring(7);
}

const isNotNil = R.complement(R.isNil);

const nextMajor = version => R.concat(R.head(R.split('.', version)), '.0.0');

const nextMajorLink = version => R.concat(R.head(R.split('.', version)), '-0-0');

// cleanDescription :: String -> String
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

const mapIndexed = R.addIndex(R.map);

const isActive = index => index === 0 ? 'active' : '';

const isShow = index => index === 0 ? 'show' : '';

const semVerMajor = version => R.nth(0, R.split('.', version));

const templateUpToDate = content => [`<div class="alert alert-primary" role="alert">${content}</div>`];

const properName = (sep, prop, name) => R.join(`${R.prop('identifier', name)}`, R.split(sep, R.prop(prop, name)));

function navigationForTabs(listOfVersions) {
    return R.compose(
        R.join(''),
        mapIndexed((cur, index) => `<a
                                        class="nav-item nav-link ${isActive(index)}"
                                        id="nav-${properName('.', 'name', cur)}-tab"
                                        data-toggle="tab" href="#nav-${properName('.', 'name', cur)}"
                                        role="tab" aria-controls="nav-home"
                                        aria-selected="true">${R.prop('name', cur)}
                                    </a>`)
    )(listOfVersions);
}

function keepOnlyModulesFromOrgs(composer) {
    const modulesForOrgs = ['spryker', 'spryker-feature', 'spryker-shop', 'spryker-eco'];

    return R.compose(
        R.sortBy(R.prop(0)),
        R.filter(cur => R.contains(R.compose(
            R.head,
            R.split('/'),
            R.nth(0)
        )(cur), modulesForOrgs) ? true : false),
        R.toPairs,
        R.prop('require')
    )(composer);
}

const getNameAndVersionFromInstalledModules = R.compose(
    R.map(R.pick(['name', 'version'])),
    R.prop('packages')
);

const getModuleOrg = R.compose(
    R.head,
    R.split('/'),
    R.head
);

const specificTypeOfModules = types => moduleList => R.filter(cur => R.includes(getModuleOrg(cur), types), moduleList);

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


function migrateToNextProductReleases(currentComposer, currentComposerLock, currentFeatures, currentModules) {
    return R.compose(
        R.ifElse(
            R.isEmpty,
            () => templateUpToDate('All your Spryker features are up to date or you do not use any!'),
            R.compose(
                templateForProductRelease(currentComposer, currentComposerLock, currentModules, currentFeatures),
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
        specificTypeOfModules(['spryker-feature']),
        keepOnlyModulesFromOrgs
    )(currentComposer);
}

function templateForProductRelease(currentComposer, currentComposerLock, currentModules, currentFeatures) {
    return function(productRelease) {
        return `<p class="card-text">How to migrate to newer version?</p>
                <nav>
                    <div class="nav nav-tabs" id="nav-tab" role="tablist" style="margin-bottom: 1rem;">
                        ${navigationForTabs(productRelease)}
                    </div>
                </nav>
                <div class="tab-content" id="nav-tabContent">
                    ${contentForTabs(currentComposerLock, currentModules, productRelease)}
                </div>
                <div class="features-not-used">
                    <h5>Spryker features you might be interested in</h5>
                    ${missingSprykerFeatures(currentFeatures, currentComposer)}
                </div>`;
    };
}

function missingSprykerFeatures(currentFeatures, currentComposer) {
    const diff = (x, y) => R.prop('package', x) === R.prop('feature', y);

    return R.compose(
        R.ifElse(
            R.isEmpty,
            () => '<div class="alert alert-success" role="alert">Congrats you currently use all Spryker features available!</div>',
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
        specificTypeOfModules(['spryker-feature']),
        keepOnlyModulesFromOrgs
    )(currentComposer);
}

function templateForMissingFeatures(feature) {
    const p = R.prop(R.__, feature);
    return `<dt><a href="https://github.com/${p('package')}" target="_blank">${p('name')}</a></dt>
            <dd>${p('description')}</dd>`;
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

function contentForTabs(composerLock, currentModules, content) {
    return R.compose(
        R.join(''),
        mapIndexed((cur, index) => `<div class="tab-pane fade show ${isActive(index)}" id="nav-${properName('.', 'name', cur)}" role="tabpanel" aria-labelledby="nav-${properName('.', 'name', cur)}-tab">
                                        <h5 class="section-in-release">Modules that need a migration inside this Product Release</h5>
                                        <div class="row">
                                            ${modulesThatNeedMigration(composerLock, currentModules)}
                                        </div>
                                        <h5 class="section-in-release">Diff for each feature inside this Product Release</h5>
                                        <div class="row">
                                            ${groupModulesByFeature(composerLock, cur)}
                                        </div>
                                    </div>`)
    )(content);
}

function modulesThatNeedMigration(currentComposerLock, currentModules) {
    return R.compose(
        R.ifElse(
            R.isEmpty,
            () => '<div class="alert alert-primary" role="alert">No module migrations needed for this Product Release.</div>',
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

function templateForModulesThatNeedMigration(listOfModules) {
    function leftPills(listOfMod) {
        return R.join('', mapIndexed((cur, index) => {
            const pp = R.prop(R.__, cur);
            const ph = R.path(R.__, cur);
            return `<a
                            class="nav-link ${isActive(index)}
                            id="v-pills-${properName('/', 'name', cur)}-tab"
                            data-toggle="pill"
                            href="#v-pills-${properName('/', 'name', cur)}"
                            role="tab"
                            aria-controls="v-pills-${properName('/', 'name', cur)}"
                            aria-selected="true">${pp('name')}
                            <span class="badge badge-pill float-right badge-light">${pp('version')} -> ${nextMajor(ph(['package', 'version']))}</span>
                        </a>`;
        }, listOfMod));
    }

    function rightPills(listOfMod) {
        return R.join('', mapIndexed((cur, index) => `<div class="tab-pane fade ${isShow(index)} ${isActive(index)}" id="v-pills-${properName('/', 'name', cur)}" role="tabpanel" aria-labelledby="v-pills-${properName('/', 'name', cur)}-tab">
                                                        <ul class="list-group">
                                                            <li class="list-group-item d-flex justify-content-between align-items-center">
                                                                <a href="${migrationLinkForModule(R.prop('name',cur), R.path(['package', 'version'], cur))}" target="_blank">Migration guide for module ${R.prop('name', cur)}</a>
                                                            </li>
                                                        </ul>
                                                    </div>`, listOfMod));
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

function groupModulesByFeature(currentComposerLock, productRelease) {
    function leftPills(productRelease) {
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
                    id="v-pills-${properName('/', 'module', cur)}-tab"
                    data-toggle="pill"
                    href="#v-pills-${properName('/', 'module', cur)}"
                    role="tab"
                    aria-controls="v-pills-${properName('/', 'module', cur)}"
                    aria-selected="true">${R.prop('module', cur)}
                </a>`, R.prop('featuresToMigrate', productRelease)));
    }

    function listGroupForFeature(currentComposerLock, featureVersions) {
        return R.compose(
            cur => `<li class="list-group-item d-flex justify-content-between align-items-center">
                        <a href="https://github.com/${R.path(['data', 'composer', 'name'], cur)}/compare/${R.prop('installedVersion', cur)}%E2%80%A6${R.prop('name', cur)}" target="_blank">Check the diff between both versions</a>
                    </li>`,
            cur => R.assoc('installedVersion', findInstalledFeatureByName(currentComposerLock, R.path(['data', 'composer', 'name'], cur)), cur),
            R.find(R.propEq('name', R.prop('name', productRelease))),
        )(featureVersions);
    }

    function rightPills(productRelease) {
        return R.join('', mapIndexed((cur, index) =>
            `<div class="tab-pane fade ${isShow(index)} ${isActive(index)}" id="v-pills-${properName('/', 'module', cur)}" role="tabpanel" aria-labelledby="v-pills-${properName('/', 'module', cur)}-tab">
                    <ul class="list-group">
                        ${listGroupForFeature(currentComposerLock, R.path(['package', 'feature_versions'], cur))}
                    </ul>
                </div>`, R.prop('featuresToMigrate', productRelease)));
    }

    return `<div class="col-6">
                <div class="nav flex-column nav-pills" id="v-pills-tab" role="tablist" aria-orientation="vertical">
                    ${leftPills(productRelease)}
                </div>
            </div>
            <div class="col-6">
                <div class="tab-content" id="v-pills-tabContent">
                    ${rightPills(productRelease)}
                </div>
            </div>`;
}

function findInstalledFeatureByName(currentComposerLock, featureName) {
    return R.prop('version', R.find(R.propEq('name', featureName), R.prop('packages', currentComposerLock)));
}


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
            mapIndexed((cur, index) => `<div class="tab-pane fade show ${isActive(index)}" id="nav-${properName('.', 'name', cur)}" role="tabpanel" aria-labelledby="nav-${properName('.', 'name', cur)}-tab">
                                            <dt>Migration guide</dt>
                                            <dd><a href="https://github.com/spryker/${moduleName}/releases/tag/${R.prop('name',cur)}" target="_blank">Read it on our documentation space</a></dd>
                                            <dt>This new version brings</dt>
                                            <dd>${converter.makeHtml(R.prop('description', cur))}</dd>
                                        </div>`),
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

function templateForPackage(package) {
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
