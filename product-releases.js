/////////////////////////////////////////////
// Migration Analysis for Product Release //
///////////////////////////////////////////


function migrateToNextProductReleases(currentProductReleaseVersion, currentComposer, currentComposerLock, currentFeatures) {
    const featuresUsedInProject = featuresFromComposer(currentComposerLock, currentComposer);
    const productReleasesAvailable = featuresForProductReleases(currentProductReleaseVersion, currentFeatures);
    const featuresToMigratePerProductRelease = R.map(keepForEachProductReleaseUsedFeatures(featuresUsedInProject), productReleasesAvailable);

    log(featuresUsedInProject, productReleasesAvailable, featuresToMigratePerProductRelease);

    return R.cond([
        [list => R.isEmpty(R.nth(0, list)), R.always(templateUpToDate('You do not use any features, need the mapping tool here!'))],
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
        feature => R.filter(c => R.equals(R.prop('name', c), R.prop('productRelease', productReleaseVersion)), R.prop('feature_versions', feature))
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
                    c => R.isNil(R.path(['beforeAfter', 'after'], c)),
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
                                        data-toggle="tab" href="#nav-${properName('.', 'productRelease', cur)}"
                                        role="tab" aria-controls="nav-home"
                                        aria-selected="true">Version: ${R.prop('productRelease', cur)}
                                    </a>`)
        )(listOfVersions);
    }

    return `<nav>
                <div class="nav nav-tabs" id="nav-tab" role="tablist" style="margin-bottom: 1rem;">
                    ${navigationForTabs(productReleases)}
                </div>
            </nav>
            <div class="tab-content" id="nav-tabContent">
                <h3 class="section-in-release">You need a migration for the following features</h3>
                ${contentForTabs(productReleases)}
            </div>
            <div class="features-not-used">
                <h3>Spryker features you might be interested in</h3>
                ${missingSprykerFeatures(currentFeatures, currentComposer)}
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

function contentForTabs(productReleases) {
    return R.compose(
        R.join(''),
        mapIndexed(templateForProductRelease)
    )(productReleases);
}

function templateForProductRelease(productRelease, index) {
    function leftPills(listOfMod) {
        return R.join('', mapIndexed((cur, index) => `<a
                                                        class="nav-link ${isActive(index)}
                                                        id="v-pills-${properName('/', 'package', cur)}-tab"
                                                        data-toggle="pill"
                                                        href="#v-pills-${properName('/', 'package', cur)}"
                                                        role="tab"
                                                        aria-controls="v-pills-${properName('/', 'package', cur)}"
                                                        aria-selected="true">${R.prop('name', cur)}
                                                    </a>`, listOfMod));
    }

    function rightPills(listOfMod) {
        return R.join('', mapIndexed((cur, index) => {
            return `<div class="tab-pane fade ${isShow(index)} ${isActive(index)}" id="v-pills-${properName('/', 'package', cur)}" role="tabpanel" aria-labelledby="v-pills-${properName('/', 'package', cur)}-tab">
                        <div class="row">
                            <div class="col-12">
                                <h4>Dependencies added</h4>
                                <div class="row">
                                    ${dependenciesAdded(cur)}
                                </div>
                            </div>
                            <div class="col-12">
                                <h4>Upgraded dependencies</h4>
                                <div class="row">
                                    ${dependenciesUpgraded(R.path(['feature_versions', 'data','diff'], cur))}
                                </div>
                            </div>
                            <div class="col-12">
                                <h4>Dependencies removed</h4>
                                <div class="row">
                                    ${dependenciesRemoved(R.path(['feature_versions', 'data','diff'], cur))}
                                </div>
                            </div>
                        </div>
                    </div>`;
        }, listOfMod));

        // <a href="${migrationLinkForModule(R.prop('package',cur), R.path(['feature_versions', 'name'], cur))}" target="_blank">Migration guide for module ${R.prop('name', cur)}</a>
    }

    return `<div class="tab-pane fade show ${isActive(index)}" id="nav-${properName('.', 'productRelease', productRelease)}" role="tabpanel" aria-labelledby="nav-${properName('.', 'productRelease', productRelease)}-tab">
                <div class="row">
                    <div class="col-3">
                        <div class="nav flex-column nav-pills" id="v-pills-tab" role="tablist" aria-orientation="vertical">
                            ${leftPills(R.prop('features', productRelease), index)}
                        </div>
                    </div>
                    <div class="col-9">
                        <div class="tab-content" id="v-pills-tabContent">
                            ${rightPills(R.prop('features', productRelease), index)}
                        </div>
                    </div>
                </div>
            </div>`;
}

function dependenciesAdded(feature) {
    log(feature);
    return R.ifElse(
        list => R.isEmpty(R.filter(cur => R.isNil(R.path(['beforeAfter', 'before'], cur)), list)),
        () => `<p class="empty-result">No dependencies were added in this version.</p>`,
        list => R.join('', R.map(cur => `<div class="card col-12">
                                            <div class="card-body">
                                                <h5 class="card-title">${R.prop('package', cur)}</h5>
                                                <dl>
                                                    <dt>Version added</dt>
                                                    <dd><span class="badge badge-primary">${R.path(['beforeAfter','after'], cur)}</span></dd>
                                                </dl>
                                                <a
                                                    href="https://github.com/${R.prop('package', cur)}/releases/tag/${R.tail(R.path(['beforeAfter','after'], cur))}"
                                                    target="_blank"
                                                    class="btn btn-secondary"
                                                >Github repository</a>
                                                ${integrationGuideExist(R.path(['feature_versions','guide_url'], cur))}
                                            </div>
                                        </div>`, list))
    )(R.path(['feature_versions', 'data', 'diff'], feature));
}

function integrationGuideExist(guideUrl) {
    return R.ifElse(
        R.isNil,
        R.always(''),
        url => `<a href="${url}" target="_blank" class="btn btn-info">Integration guide</a>`
    )(guideUrl);
}

function dependenciesRemoved(listOfDependencies) {
    return R.ifElse(
        list => R.isEmpty(R.filter(cur => R.isNil(R.path(['beforeAfter', 'after'], cur)), list)),
        () => `<p class="empty-result">No dependencies were removed in this version.</p>`,
        list => R.join('', R.map(cur => `<div class="card col-12">
                                            <div class="card-body">
                                                <h5 class="card-title">${R.prop('package', cur)}</h5>
                                                <dl>
                                                    <dt>Version removed</dt>
                                                    <dd><span class="badge badge-primary">${R.path(['beforeAfter','before'], cur)}</span></dd>
                                                </dl>
                                                <a
                                                    href="https://github.com/${R.prop('package', cur)}/releases/tag/${R.tail(R.path(['beforeAfter','before'], cur))}"
                                                    target="_blank"
                                                    class="btn btn-secondary"
                                                >Github repository</a>
                                                ${integrationGuideExist(R.path(['feature_versions','guide_url'], cur))}
                                            </div>
                                        </div>`, list))
    )(listOfDependencies);
}

function dependenciesUpgraded(listOfDependencies) {
    return R.ifElse(
        list => R.isEmpty(R.filter(cur => R.and(isNotNil(R.path(['beforeAfter', 'after'], cur)), isNotNil(R.path(['beforeAfter', 'before'], cur))), list)),
        () => `<p class="empty-result">No dependencies were upgraded in this version.</p>`,
        list => R.join('', R.map(cur => `<a
                                            href="https://github.com/${R.prop('package', cur)}/releases/tag/${R.tail(R.path(['beforeAfter','after'], cur))}"
                                            target="_blank"
                                            class="list-group-item list-group-item-action d-flex justify-content-between align-items-center"
                                            >${R.prop('package', cur)} <span class="badge badge-primary badge-pill">${R.path(['beforeAfter','before'], cur)} -> ${R.path(['beforeAfter','after'], cur)}</span>
                                        </a
                                        <div class="card col-12">
                                            <div class="card-body">
                                                <h5 class="card-title">${R.prop('package', cur)}</h5>
                                                <dl>
                                                    <dt>Version removed</dt>
                                                    <dd><span class="badge badge-primary">${R.path(['beforeAfter','before'], cur)} -> ${R.path(['beforeAfter','after'], cur)}</span></dd>
                                                </dl>
                                                <a
                                                    href="https://github.com/${R.prop('package', cur)}/releases/tag/${R.tail(R.path(['beforeAfter','after'], cur))}"
                                                    target="_blank"
                                                    class="btn btn-secondary"
                                                >Github repository</a>
                                                ${integrationGuideExist(R.path(['feature_versions','guide_url'], cur))}
                                            </div>
                                        </div>`, list))
    )(listOfDependencies);
}
