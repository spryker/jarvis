/* jshint esversion:6, unused:true  */

/////////////////////////////////////////////
// Migration Analysis for Product Release //
///////////////////////////////////////////

// reduceFeatureVersions :: [Object] -> [String]
function reduceFeatureVersions(currentFeatures) {
    return R.compose(
        R.sort(sortStrings),
        R.uniq,
        R.reduce((prev, cur) => R.concat(prev, R.map(v => R.prop('name', v), R.prop('feature_versions', cur))), [])
    )(currentFeatures);
}

const keepMoreRecentVersion = currentProductReleaseVersion => listOfVersions => {
    return R.filter(cur => cur > currentProductReleaseVersion, listOfVersions);
}

const availableProductReleases = currentProductReleaseVersion => currentFeatures => {
    return R.compose(
        keepMoreRecentVersion(currentProductReleaseVersion),
        reduceFeatureVersions,
    )(currentFeatures);

}

const retrieveAllFeaturesInsideProductRelease = currentFeatures => productReleaseVersion => {
    return R.filter(cur => R.compose(
        l => R.gt(l, 0),
        R.length,
        feature => R.filter(c => R.equals(R.prop('name', c), R.prop('productRelease', productReleaseVersion)), R.prop('feature_versions', feature))
    )(cur), currentFeatures);
}

function cleanFeaturesInsideProductRelease(productRelease) {
    return R.over(R.lensProp('features'), R.compose(
        R.map(R.compose(
            R.over(
                R.lensPath(['feature_versions', 'data', 'composer', 'require']),
                R.compose(
                    R.map(reconstruct(['package', 'requiredVersion'])),
                    R.toPairs
                )
            ),
            R.over(
                R.lensProp('feature_versions'),
                R.find(R.propEq('name', R.prop('productRelease', productRelease)))
            ),
            R.pickAll(['feature_versions', 'name', 'package', 'slug'])
        ))
    ), productRelease);
}

function featuresFromComposer(currentComposerLock, currentComposer) {
    return R.compose(
        R.map(R.compose(
            R.over(
                R.lensProp('require'),
                R.compose(
                    R.map(reconstruct(['package', 'requiredVersion'])),
                    R.toPairs
                )
            ),
            reconstruct(['package', 'requiredVersion', 'installedVersion', 'require'])
        )),
        findInstalledVersion(currentComposerLock),
        specificTypeOfModules(['spryker-feature']),
        keepOnlyModulesFromOrgs
    )(currentComposer);
}

function featuresForProductReleases(currentProductReleaseVersion, currentFeatures) {
    return R.compose(
        // Keep only the right feature_version information for each product releases
        R.map(cleanFeaturesInsideProductRelease),
        // Assoc only the relevant feature for each product releases
        R.map(cur => R.compose(
            list => R.assoc('features', list, cur),
            retrieveAllFeaturesInsideProductRelease(currentFeatures)
        )(cur)),
        // Construct an object
        list => R.map(cur => reconstruct(['productRelease'])([cur]), list),
        // Only keep the relevant product releases
        availableProductReleases(currentProductReleaseVersion)
    )(currentFeatures);
}

const keepForEachProductReleaseUsedFeatures = featuresUsed => productReleases => {
    return R.compose(
        R.over(
            R.lensProp('features'),
            R.filter(cur => {
                log(cur);
                return cur;
            })
        ),
        R.over(
            R.lensProp('features'),
            R.filter(cur => R.not(R.equals(
                R.path(['feature_versions', 'data', 'composer', 'require'], cur),
                R.prop('require', R.find(R.propEq('package', R.prop('package', cur)), featuresUsed))
            )))
        ),
        R.over(
            R.lensProp('features'),
            R.filter(cur => R.equals(
                R.prop('package', cur),
                R.prop('package', R.find(R.propEq('package', R.prop('package', cur)), featuresUsed))
            ))
        )
    )(productReleases);
}


function migrateToNextProductReleases(currentProductReleaseVersion, currentComposer, currentComposerLock, currentFeatures, currentModules) {
    const featuresUsedInProject = featuresFromComposer(currentComposerLock, currentComposer);
    const productReleasesAvailable = featuresForProductReleases(currentProductReleaseVersion, currentFeatures);

    return log(R.map(keepForEachProductReleaseUsedFeatures(featuresUsedInProject), productReleasesAvailable));

    /*
    return R.compose(
        R.ifElse(
            R.isEmpty,
            () => templateUpToDate('All your Spryker features are up to date or you do not use any!'),
            R.compose(
                templateForContainerForProductRelease(currentComposer, currentComposerLock, currentModules, currentFeatures),
                R.sortBy(R.prop('name')),
                R.filter(cur => R.prop('name', cur) > currentProductReleaseVersion),
                groupByRelease
            )
        ),
        log,
        R.filter(cur => R.prop('upToDate', cur) === false),
        R.map(R.compose(
            R.assoc('identifier', r()),
            cur => R.assoc('upToDate', R.equals(R.prop('installedVersion', cur), R.path(['package', 'version'], cur)), cur),
            cur => R.assoc('package', findPackageForModule(currentFeatures)(cur), cur),
            reconstruct(['module', 'requiredVersion', 'installedVersion', 'require']))),
        findInstalledVersion(currentComposerLock),
        specificTypeOfModules(['spryker-feature']),
        keepOnlyModulesFromOrgs
    )(currentComposer);
    */
}

function templateForContainerForProductRelease(currentComposer, currentComposerLock, currentModules, currentFeatures) {
    return function(productRelease) {
        return `<nav>
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

    return `<dt><a href="https://github.com/${p('package')}" target="_blank">${p('name')}</a> ${isNewFeature(p('feature_versions'))}</dt>
            <dd>${p('description')}</dd>`;
}

function isNewFeature(listOfVersions) {
    return R.ifElse(
        list => R.equals(1, R.length(list)),
        () => `<span class="badge badge-success">New feature</span>`,
        () => ''
    )(listOfVersions);
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
        mapIndexed(templateForProductRelease(composerLock, currentModules))
    )(content);
}

function templateForProductRelease(composerLock, currentModules) {
    return function(cur, index) {
        return `<div class="tab-pane fade show ${isActive(index)}" id="nav-${properName('.', 'name', cur)}" role="tabpanel" aria-labelledby="nav-${properName('.', 'name', cur)}-tab">
                <h5 class="section-in-release">Modules that need a migration inside this Product Release</h5>
                <div class="row">
                    ${modulesThatNeedMigration(composerLock, currentModules)}
                </div>
                <h5 class="section-in-release">Diff for each feature inside this Product Release</h5>
                <div class="row">
                    ${groupModulesByFeature(composerLock, cur)}
                </div>
            </div>`;
    };
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
                            <span class="badge badge-pill float-right badge-light">${pp('version')} -> ${ph(['package', 'version'])}</span>
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
            R.find(R.propEq('name', R.prop('name', productRelease)))
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
