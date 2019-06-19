/////////////////////////////////////////////
// Migration Analysis for Product Release //
///////////////////////////////////////////


function migrateToNextProductReleases(currentComposer, currentComposerLock, currentFeatures, nextTargets) {
    const featuresUsedInProject = featuresFromComposer(currentComposerLock, currentComposer);
    const productReleasesAvailable = featuresForProductReleases('2018.11.0', currentFeatures);
    const featuresToMigratePerProductRelease = R.map(keepForEachProductReleaseUsedFeatures(featuresUsedInProject), productReleasesAvailable);

    return R.cond([
        [list => R.isEmpty(R.nth(0, list)), R.always(templateUpToDate('You do not use any Spryker Features, soon we will help you migrate your Spryker modules to Spryker Features!'))],
        [list => R.isEmpty(R.nth(1, list)), R.always(templateUpToDate('You are up to date, nothing to do here!'))],
        [R.T, list => templateForProductReleases(currentComposer, currentFeatures, R.nth(2, list))]
    ])([featuresUsedInProject, productReleasesAvailable, featuresToMigratePerProductRelease]);
}

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
};

const availableProductReleases = currentProductReleaseVersion => currentFeatures => {
    return R.compose(
        keepMoreRecentVersion(currentProductReleaseVersion),
        reduceFeatureVersions
    )(currentFeatures);

};

const retrieveAllFeaturesInsideProductRelease = currentFeatures => productReleaseVersion => {
    return R.filter(cur => R.compose(
        l => R.gt(l, 0),
        R.length,
        feature => R.filter(
            c => R.and(
                R.equals(R.prop('name', c), R.prop('productRelease', productReleaseVersion)),
                R.equals(R.prop('status', feature), 1)
            ),
            R.prop('feature_versions', feature))
    )(cur), currentFeatures);
};

function cleanFeaturesInsideProductRelease(productRelease) {
    return R.over(R.lensProp('features'), R.compose(
        R.map(R.compose(
            pr => R.assoc('identifier', r(), pr),
            R.over(
                R.lensPath(['feature_versions', 'data', 'diff']),
                R.compose(
                    R.map(reconstruct(['package', 'beforeAfter'])),
                    R.toPairs
                )
            ),
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
            list => R.assoc('identifier', r(), list),
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
        // Keep only the features that had a new module major
        R.over(
            R.lensProp('features'),
            R.filter(cur => R.and(
                isNotEmpty(R.path(['feature_versions', 'data', 'diff'], cur)),
                isNotEmpty(R.reduce((prev, current) => R.ifElse(
                    c => R.or(
                        R.isNil(R.path(['beforeAfter', 'after'], c)),
                        R.isNil(R.path(['beforeAfter', 'before'], c))
                    ),
                    R.always(prev),
                    c => R.append(c, prev)
                )(current), [], R.path(['feature_versions', 'data', 'diff'], cur)))))
        ),
        // Keep only the features that the user uses currently
        R.over(
            R.lensProp('features'),
            R.filter(cur => R.equals(
                R.prop('package', cur),
                R.prop('package', R.find(R.propEq('package', R.prop('package', cur)), featuresUsed))
            ))
        )
    )(productReleases);
};

function templateForProductReleases(currentComposer, currentFeatures, productReleases) {
    function navigationForTabs(listOfVersions) {
        return R.compose(
            R.join(''),
            mapIndexed((cur, index) => `<a
                                    class="nav-item nav-link ${isActive(index)}"
                                    id="nav-${properName('.', 'productRelease', cur)}-tab"
                                    data-toggle="tab" href="#nav-tab-${properName('.', 'productRelease', cur)}"
                                    role="tab" aria-controls="nav-home"
                                    aria-selected="true">Version: ${R.prop('productRelease', cur)}
                                  </a>`)
        )(listOfVersions);
    }

    return `<nav>
            <div class="nav nav-tabs" id="nav-tab-product-release" role="tablist" style="margin-bottom: 1rem;">
              ${navigationForTabs(productReleases)}
            </div>
          </nav>
          <div class="tab-content" id="nav-tabContent-product-release">
            <h3 class="section-in-release">You need a migration for the following features</h3>
            ${contentForTabs(productReleases)}
          </div>`;
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
        // Keep only live features and hide draft and deprecated features
        R.filter(cur => R.prop('status', cur) === 1),
        R.differenceWith(diff, currentFeatures),
        R.map(reconstruct(['feature', 'requiredVersion'])),
        specificTypeOfModules(['spryker-feature']),
        keepOnlyModulesFromOrgs
    )(currentComposer);
}

function templateForMissingFeatures(feature) {
    const p = R.prop(R.__, feature);

    return `<dt><a rel="noopener" href="https://github.com/${p('package')}" target="_blank">${p('name')}</a> ${isNewFeature(p('feature_versions'))}</dt>
          <dd>${p('description')}</dd>`;
}

function isNewFeature(listOfVersions) {
    return R.ifElse(
        list => R.equals(1, R.length(list)),
        () => `<span class="badge badge-success">New feature</span>`,
        () => ''
    )(listOfVersions);
}

function templateForProductRelease(productRelease) {
    function leftPills(listOfMod) {
        return R.compose(
            R.join(''),
            mapIndexed((cur, index) => `<a
                                            class="nav-link ${isActive(index)}
                                            id="v-pills-${properName('/', ['feature', 'package'], cur)}-tab"
                                            data-toggle="pill"
                                            href="#v-pills-${properName('/', ['feature', 'package'], cur)}"
                                            role="tab"
                                            aria-controls="v-pills-${properName('/', ['feature', 'package'], cur)}"
                                            aria-selected="true">${R.path(['feature', 'name'], cur)}
                                        </a>`)
        )(listOfMod);
    }

    function rightPills(listOfMod) {
        return R.compose(
            R.join(''),
            mapIndexed((cur, index) => `<div class="tab-pane fade ${isShow(index)} ${isActive(index)}" id="v-pills-${properName('/', ['data', 'composer','name'], cur)}" role="tabpanel" aria-labelledby="v-pills-${properName('/', ['data', 'composer','name'], cur)}-tab">
                                            <div class="row">
                                                <div class="col-12">
                                                    <h4>Upgraded dependencies</h4>
                                                    <div class="row dependencies-upgraded">
                                                        ${dependenciesUpgraded(R.path(['data', 'composer', 'require'], cur))}
                                                    </div>
                                                </div>
                                                <div class="col-12">
                                                    <h4>Dependencies removed</h4>
                                                    <div class="row dependencies-upgraded">
                                                        ${dependenciesRemoved(R.path(['data','diff'], cur))}
                                                    </div>
                                                </div>
                                            </div>
                                        </div>`)
        )(listOfMod);
    }

    return R.compose(
        pr => `<div class="row">
                    <div class="col-3">
                        <div class="nav flex-column nav-pills" id="v-pills-tab" role="tablist" aria-orientation="vertical">
                            ${leftPills(pr)}
                        </div>
                    </div>
                    <div class="col-9">
                        <div class="tab-content" id="v-pills-tabContent">
                            ${rightPills(pr)}
                        </div>
                    </div>
                </div>`,
        R.filter(cur => isNotEmpty(R.path(['data', 'composer', 'require'], cur))),
        R.map(R.over(
            R.lensPath(['data', 'composer', 'require']),
            R.filter(cur => isNextMajor(R.prop('installedVersion', cur), R.tail(R.prop('requiredVersion', cur))))
        )),
        R.ifElse(
            R.isEmpty,
            R.always(R.prop('feature_versions', productRelease)),
            R.identity
        ),
        R.filter(cur => isNotEmpty(R.path(['data', 'diff'], cur), 0)),
        R.map(
            R.over(
                R.lensPath(['data', 'diff']),
                R.compose(
                    R.filter(cur => isNotNil(R.path(['beforeAfter', 'before'], cur))),
                    R.map(reconstruct(['package', 'beforeAfter'])),
                    R.toPairs
                )
            )
        ),
        R.prop('feature_versions')
    )(productRelease);
}

function dependenciesUpgraded(listOfDependencies = []) {
    return R.ifElse(
        R.isEmpty,
        () => `<p class="empty-result">No dependencies were added in this version.</p>`,
        R.compose(
            R.join(''),
            R.map(cur => `<div class="col-xs-12 col-sm-12 col-md-12 col-lg-12 col-xl-6">
                                <div class="card">
                                    <div class="card-header">
                                        <b>${R.prop('package', cur)}</b>
                                    </div>
                                    <div class="card-body">
                                        <dl>
                                            <dt>Version upgraded</dt>
                                            <dd><span class="badge badge-primary">${R.prop('installedVersion', cur)} -> ${R.tail(R.prop('requiredVersion', cur))}</span></dd>
                                        </dl>
                                        ${migrationGuideExist(R.tail(R.prop('requiredVersion', cur)), R.prop('package', cur))}
                                        <a
                                            rel="noopener"
                                            href="https://github.com/${R.prop('package', cur)}/releases/tag/${R.tail(R.prop('requiredVersion', cur))}"
                                            target="_blank"
                                            class="btn btn-secondary"
                                        >Github changelog</a>
                                        <a
                                            rel="noopener"
                                            href="https://github.com/${R.prop('package', cur)}/compare/${R.prop('installedVersion', cur)}...${R.tail(R.prop('requiredVersion', cur))}"
                                            target="_blank"
                                            class="btn btn-info"
                                        >Compare the versions</a>
                                    </div>
                                </div>
                            </div>`)
        )
    )(listOfDependencies);
}

function dependenciesRemoved(listOfDependencies = []) {
    return R.ifElse(
        list => R.isEmpty(R.filter(cur => R.isNil(R.path(['beforeAfter', 'after'], cur)), list)),
        () => `<p class="empty-result">No dependencies were removed in this version.</p>`,
        list => R.join('', R.map(cur => `<div class="col-xs-12 col-sm-12 col-md-12 col-lg-12 col-xl-6">
                                            <div class="card">
                                                <div class="card-header">
                                                    <b>${R.prop('package', cur)}</b>
                                                </div>
                                                <div class="card-body">
                                                    <dl>
                                                        <dt>Version removed</dt>
                                                        <dd><span class="badge badge-primary">${R.tail(R.path(['beforeAfter','before'], cur))}</span></dd>
                                                    </dl>
                                                    <p>⚠️ Check in your project code if you use/extend/customize <code>${pascalCase(R.prop('package', cur))}</code> namespace.</p>
                                                    <a
                                                        rel="noopener"
                                                        href="https://github.com/${R.prop('package', cur)}/releases/tag/${R.tail(R.path(['beforeAfter','before'], cur))}"
                                                        target="_blank"
                                                        class="btn btn-secondary"
                                                    >Github changelog</a>
                                                </div>
                                            </div>
                                        </div>`, R.filter(cur => R.isNil(R.path(['beforeAfter', 'after'], cur)), list)))
    )(listOfDependencies);
}

function pascalCase(packageName) {
    return R.compose(
        R.reduce((prev, cur) => R.concat(prev, R.concat(R.toUpper(R.head(cur)), R.tail(cur))), ''),
        R.split('-'),
        R.head,
        R.tail,
        R.split('/')
    )(packageName);
}

// useSprykerFeatures :: object -> boolean
function useSprykerFeatures(composerJson) {
    return R.compose(
        R.ifElse(R.isEmpty, R.F, R.T),
        getSprykerFeatures
    )(composerJson);

}

function getSprykerFeatures(composerJson) {
    return R.compose(
        specificTypeOfModules(['spryker-feature']),
        keepOnlyModulesFromOrgs
    )(composerJson);
}

function getNextSprykerProductReleases(feature, currentFeatures) {
    return R.compose(
        R.sortBy(R.prop('name')),
        f => R.filter(cur => R.gt(R.prop('name', cur), R.prop('requiredVersion', feature)), R.prop('feature_versions', f)),
        f => R.find(cur => R.propEq('package', R.prop('feature', f), cur), currentFeatures)
    )(feature);
}
