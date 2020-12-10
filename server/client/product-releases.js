const {
    __,
    always,
    append,
    assoc,
    assocPath,
    compose,
    concat,
    cond,
    descend,
    differenceWith,
    evolve,
    equals,
    eqBy,
    filter,
    find,
    flatten,
    head,
    identity,
    ifElse,
    includes,
    innerJoin,
    isEmpty,
    isNil,
    join,
    last,
    length,
    lensPath,
    lensProp,
    map,
    over,
    path,
    prop,
    propEq,
    reduce,
    reverse,
    sort,
    sortBy,
    split,
    T,
    tail,
    toPairs,
    toUpper
} = require('ramda');
const {
    conditionsForGuideURL,
    converter,
    isActive,
    isNextMajor,
    isNotEmpty,
    isNotNil,
    isShow,
    keepOnlyModulesFromOrgs,
    mapIndexed,
    migrationGuideExist,
    migrationGuideAvailable,
    modulesForOrgs,
    onlyModulesForOrgs,
    packageAndCurrentVersion,
    packageAndRequiredVersion,
    properName,
    reconstruct,
    r,
    specificTypeOfModules,
    versionToNumber
} = require('./utils.js');

/////////////////////////////////////////////
// Migration Analysis for Product Release //
///////////////////////////////////////////


function prepareDataForProductReleases(data) {
    function prepareRequireForAFeature(feature) {
        const findModulesForFeature = retrieveModulesForAFeature(data.releaseFeatures);

        return compose(
            flatten,
            map(ifElse(
                cur => head(split('/', cur.package)) === 'spryker-feature',
                findModulesForFeature,
                identity
            )),
            // Keep only modules from Spryker organisations
            filter(cur => includes(head(split('/', cur.package)), modulesForOrgs()) && cur.package !== 'spryker-feature/spryker-core'),
            // Transform required modules from object to an Array of objects
            packageAndRequiredVersion
        )(feature);
    }

    return compose(
        reduceToApplicableTargets,
        d => assoc(
            'targets',
            compose(
                sort(descend(prop('release_date'))),
                d => concat(d.architectureChanges, d.productReleases)
            )(d),
            d
        ),
        evolve({
            architectureChanges: map(compose(
                a => over(
                    lensProp('feature_versions'),
                    compose(
                        filter(cur => isNotEmpty(cur.modules)),
                        map(over(
                            lensProp('modules'),
                            compose(
                                filter(cur => cur.type !== 'patch' && isNotNil(cur.installedVersion)),
                                map(compose(
                                    m => assoc(
                                        'installedVersion',
                                        prop('version', find(cur => cur.name === m.package, data.myComposerLOCK.packages)),
                                        m
                                    ),
                                    m => assoc('requiredVersion', `^${m.version.after}`, m)
                                )),
                                innerJoin(eqBy(prop('package')), a.modules)
                            )
                        ))
                    ), a),
                a => assoc('feature_versions', data.detectedFeatures, a),
                a => assoc('identifier', r(), a),
                a => assoc('release_date', a.created, a),
                assoc('targetType', 'architectureChange')
            )),
            productReleases: map(
                compose(
                    over(
                        lensProp('feature_versions'),
                        compose(
                            map(
                                compose(
                                    f => assoc('identifier', r(), f),
                                    evolve({
                                        data: {
                                            composer: {
                                                require: prepareRequireForAFeature
                                            }
                                        }
                                    })
                                )
                            ),
                            // We remove spryker-core
                            filter(cur => cur.data.composer.name !== 'spryker-feature/spryker-core')
                        )
                    ),
                    assoc('targetType', 'productRelease')
                )
            )
        }),
        evolve({
            detectedFeatures: map(evolve({
                modules_included: packageAndCurrentVersion,
                modules_missing: packageAndCurrentVersion,
                feature_versions: map(over(
                    lensPath(['data', 'composer', 'require']),
                    compose(
                        filter(cur => includes(head(split('/', cur.package)), modulesForOrgs()) && cur.package !== 'spryker-feature/spryker-core'),
                        packageAndRequiredVersion
                    )
                ))
            }))
        })
    )(data);
}

function retrieveModulesForAFeature(listOfFeatures) {
    return function(mod) {
        return compose(
            // Retrieve the required modules of this version
            filter(cur => includes(head(split('/', cur.package)), onlyModulesForOrgs())),
            packageAndRequiredVersion,
            path(['data', 'composer', 'require']),
            // Find the right version of this feature
            feature => find(propEq('name', tail(mod.requiredVersion)), feature.feature_versions),
            // Find feature inside the Release app data
            m => find(propEq('package', m.package), listOfFeatures)
        )(mod);
    };
}

function logicForProductReleases(data) {
    return `${summaryHeader(data.targets.length)}
            ${ifElse(
                d => isEmpty(d.targets),
                always(''),
                templateLogicForTarget
            )(data)}`;
}

function templateLogicForTarget(data) {
    return `<section id="product-release">
                ${ifElse(
                    t => t.targetType === 'productRelease',
                    t => `<h2>Your next target is the Product Release: ${t.version}</h2>`,
                    t => `<h2>Your next target is the architecture change: <em>${t.title}</em></h2>
                            <div class="margin-bottom-2">
                                <p>${converter.makeHtml(t.description)}</p>
                                ${migrationGuideAvailable(t.guide_url)}
                            </div>`
                )(path(['targets', 0], data))}
                <p>You have the following Spryker Features to migrate.</p>
                <div id="listOfProductReleases">${templateForProductRelease(path(['targets', 0], data), data.releaseModules)}</div>
            </section>
            <section>
                <h2>Spryker Features you are currently not using that might interest you 🍬🍭</h2>
                ${missingSprykerFeatures(data.releaseFeatures, data.myComposerJSON)}
            </section>`;
}

function summaryHeader(nbTargets) {
    return cond([
        [nbTargets => nbTargets > 1, templateMoreThanOneTarget],
        [nbTargets => nbTargets === 1, templateOneTarget],
        [T, templateUpToDateWithSpryker]
    ])(nbTargets);
}

function templateMoreThanOneTarget(nbTargets) {
    return `<div class="margin-top-2 alert alert-primary" role="alert">
                <h4 class="alert-heading">Be brave! The journey is not over yet!</h4>
                <p>You still have <span class="badge badge-light">${nbTargets}</span> milestones to cover. When the last milestone will be covered, your Spryker project will be up to date.</p>
                <hr>
                <p>A milestone represent either a Spryker product release or an architecture change that improve the way Spryker works.</p>
            </div>`;
}

function templateOneTarget(nbTargets) {
    return `<div class="margin-top-2 alert alert-primary" role="alert">
                <h4 class="alert-heading">You are almose there!</h4>
                <p>You only have <span class="badge badge-light">${nbTargets}</span> milestone to cover. When this milestone will be covered, your Spryker project will be up to date.</p>
                <hr>
                <p>A milestone represent either a Spryker product release or an architecture change that improve the way Spryker works.</p>
            </div>`;
}

function templateUpToDateWithSpryker() {
    return `<div class="margin-top-2 alert alert-success" role="alert">
                <h4 class="alert-heading">Congrats, you are up to date with Spryker!</h4>
            </div>`;
}

function hasRequiredVersionForPackage(composerLock) {
    return function(packageAndRequiredVersion) {
        return compose(
            ifElse(
                isNil,
                always([true]),
                compose(
                    pv => [
                        versionToNumber(pv.installedVersion) >= versionToNumber(tail(pv.requiredVersion)),
                        pv
                    ],
                    pv => assoc('installedVersion', pv.version, packageAndRequiredVersion)
                )
            ),
            find(propEq('name', packageAndRequiredVersion.package)),
            prop('packages')
        )(composerLock);
    };
}

function findModuleByPackageName(packageName, releaseModules) {
    return find(propEq('package', packageName), releaseModules);
}

function reduceToApplicableTargets(data) {
    function isProjectOverProductRelease(productRelease) {
        return compose(
            // If at least one Spryker Feature is not totally covered, then the project must pass over it 
            ifElse(
                pr => pr.length > 0,
                p => [false, p],
                always([true])
            ),
            reduce((prev, cur) => compose(
                // Keep only the modules that do not match the required versions 
                ifElse(
                    p => p.length > 0,
                    p => compose(
                        p => append(p, prev),
                        over(
                            lensPath(['data', 'composer', 'require']),
                            map(cur => assoc('guide_url', compose(
                                prop('guide_url'),
                                m => find(propEq('name', tail(cur.requiredVersion)), m.module_versions),
                                p => findModuleByPackageName(p.package, data.releaseModules)
                            )(cur), cur))),
                        p => assocPath(['data', 'composer', 'require'], p, cur),
                        map(last)
                    )(p),
                    always(prev)
                ),
                filter(cur => head(cur) === false && isNextMajor(prop('installedVersion', last(cur)), tail(prop('requiredVersion', last(cur))))),
                // Check if project has the required version for each of them
                map(doesItRequireThePackage),
                // Get required modules for the Spryker Feature
                path(['data', 'composer', 'require'])
            )(cur), []),
            prop('feature_versions')
        )(productRelease);
    }

    function isProjectOverArchitectureChange(architectureChange) {
        return compose(
            // If at least one Spryker module major is not totally covered, then the project must pass over it 
            ifElse(
                ac => ac.length > 0,
                p => [false, p],
                always([true])
            ),
            map(last),
            filter(cur => head(cur) === false),
            map(compose(
                doesItRequireThePackage,
                p => assoc('requiredVersion', `^${p.version.after}`, p)
            )),
            filter(propEq('type', 'major')),
            prop('modules')
        )(architectureChange);
    }

    const doesItRequireThePackage = hasRequiredVersionForPackage(data.myComposerLOCK);

    return evolve({
        targets: compose(
            reverse,
            reduce((prev, cur) => compose(
                ifElse(
                    a => head(a) === true,
                    always(prev),
                    a => ifElse(
                        () => cur.targetType === 'productRelease',
                        () => append(assoc('feature_versions', last(a), cur), prev),
                        () => append(assoc('modules', last(a), cur), prev)
                    )(a)
                ),
                ifElse(
                    t => t.targetType === 'productRelease',
                    isProjectOverProductRelease,
                    isProjectOverArchitectureChange
                ))(cur), [])
        )
    })(data);
}

function missingSprykerFeatures(currentFeatures, currentComposer) {
    const diff = (x, y) => prop('package', x) === prop('feature', y);

    return compose(
        ifElse(
            isEmpty,
            () => '<div class="alert alert-success" role="alert">Congrats you currently use all Spryker features available!</div>',
            compose(
                concat('<dl>'),
                cur => concat(cur, '</dl>'),
                join(''),
                map(templateForFeaturesNotUsed),
                sortBy(prop('name'))
            )
        ),
        // Keep only live features and hide draft and deprecated features
        filter(cur => prop('status', cur) === 1),
        differenceWith(diff, currentFeatures),
        map(reconstruct(['feature', 'requiredVersion'])),
        specificTypeOfModules(['spryker-feature']),
        keepOnlyModulesFromOrgs
    )(currentComposer);
}

function templateForFeaturesNotUsed(feature) {
    const p = prop(__, feature);

    return `<dt><a rel="noopener" href="https://github.com/${p('package')}" target="_blank">${p('name')}</a> ${isNewFeature(p('feature_versions'))}</dt>
          <dd>${p('description')}</dd>`;
}

function isNewFeature(listOfVersions) {
    return ifElse(
        list => equals(1, length(list)),
        () => `<span class="badge badge-success">New feature</span>`,
        () => ''
    )(listOfVersions);
}

function featureName(pkg) {
    return ifElse(
        cur => isNil(path(['feature', 'package'], cur)),
        cur => properName('/', ['package'], cur),
        cur => properName('/', ['feature', 'package'], cur)
    )(pkg);
}

function moduleName(mod) {
    return ifElse(
        cur => isNil(path(['data', 'composer', 'name'], cur)),
        cur => properName('/', ['package'], cur),
        cur => properName('/', ['data', 'composer', 'name'], cur)
    )(mod);
}

function templateForProductRelease(productRelease, releaseModules) {
    function leftPills(listOfMod) {
        return compose(
            join(''),
            mapIndexed((cur, index) => `<a
                                            class="nav-link ${isActive(index)}"
                                            id="v-pills-${featureName(cur)}-tab"
                                            data-toggle="pill"
                                            href="#v-pills-${featureName(cur)}"
                                            role="tab"
                                            aria-controls="v-pills-${featureName(cur)}"
                                            aria-selected="true">
                                            ${ifElse(
                                                cur => isNil(path(['feature', 'name'], cur)),
                                                prop('name'),
                                                path(['feature', 'name'])
                                            )(cur)}
                                        </a>`)
        )(listOfMod);
    }

    function rightPills(listOfMod) {
        return compose(
            join(''),
            mapIndexed((cur, index) => `<div
                                            class="tab-pane fade ${isShow(index)} ${isActive(index)}"
                                            id="v-pills-${moduleName(cur)}"
                                            role="tabpanel"
                                            aria-labelledby="v-pills-${moduleName(cur)}-tab"
                                            >
                                            <div class="row">
                                                <div class="col-12">
                                                    <h4>Upgraded dependencies</h4>
                                                    <div class="row dependencies-upgraded">
                                                        ${ifElse(
                                                            cur => isNil(path(['data', 'composer','require'], cur)),
                                                            cur => dependenciesUpgraded(releaseModules, cur.modules),
                                                            cur => dependenciesUpgraded(releaseModules, cur.data.composer.require)
                                                        )(cur)}
                                                    </div>
                                                </div>
                                                <div class="col-12">
                                                    <h4>Dependencies removed</h4>
                                                    <div class="row dependencies-upgraded">
                                                        ${dependenciesRemoved(path(['data','diff'], cur))}
                                                    </div>
                                                </div>
                                            </div>
                                        </div>`)
        )(listOfMod);
    }

    return compose(
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
        ifElse(
            propEq('targetType', 'architectureChange'),
            logicArchitectureChangeBeforeTemplate,
            logicProductReleaseBeforeTemplate
        )
    )(productRelease);
}

// TODO: See to move this transformation to the prepareData function
function logicArchitectureChangeBeforeTemplate(target) {
    return compose(
        filter(cur => isNotEmpty(cur.modules)),
        map(compose(
            over(
                lensPath(['modules']),
                compose(
                    filter(cur => isNextMajor(cur.installedVersion, tail(cur.requiredVersion))),
                    map(cur => assoc('identifier', r(), cur))
                )
            ),
            fv => assoc('identifier', r(), fv)
        ))
    )(target.feature_versions);
}

// TODO: See to move this transformation to the prepareData function
function logicProductReleaseBeforeTemplate(target) {
    return compose(
        filter(cur => isNotEmpty(cur.data.diff) && isNotEmpty(cur.data.composer.require)),
        map(compose(
            evolve({
                data: {
                    composer: {
                        require: filter(cur => isNextMajor(cur.installedVersion, tail(cur.requiredVersion)))
                    },
                    diff: compose(
                        filter(cur => isNotNil(cur.beforeAfter.before)),
                        map(reconstruct(['package', 'beforeAfter'])),
                        toPairs
                    )
                }
            })
        ))
    )(target.feature_versions);
}

function dependenciesUpgraded(releaseModules, listOfDependencies = []) {
    return ifElse(
        isEmpty,
        () => `<p class="empty-result">No dependencies were added in this version.</p>`,
        compose(
            join(''),
            map(cur => `<div class="col-xs-12 col-sm-12 col-md-12 col-lg-12 col-xl-6">
                                <div class="card">
                                    <div class="card-header">
                                        <b>${cur.package}</b>
                                    </div>
                                    <div class="card-body">
                                        <dl>
                                            <dt>Version upgraded</dt>
                                            <dd><span class="badge badge-primary">${cur.installedVersion} -> ${tail(cur.requiredVersion)}</span></dd>
                                        </dl>
                                        ${ifElse(
                                            propEq('type','major'),
                                            cur => migrationGuideExist(releaseModules, tail(cur.requiredVersion), cur.package),
                                            conditionsForGuideURL
                                        )(cur)}
                                        ${githubChangelogLink(cur.package, cur.requiredVersion)}
                                        <a
                                            rel="noopener"
                                            href="https://github.com/${cur.package}/compare/${cur.installedVersion}...${tail(cur.requiredVersion)}"
                                            target="_blank"
                                            class="btn btn-info"
                                        >Compare the versions</a>
                                    </div>
                                </div>
                            </div>`)
        )
    )(listOfDependencies);
}

function githubChangelogLink(orgAndRepo, version) {
    return `<a
                rel="noopener"
                href="https://github.com/${orgAndRepo}/releases/tag/${tail(version)}"
                target="_blank"
                class="btn btn-secondary"
            >Github changelog</a>`;
}

function dependenciesRemoved(listOfDependencies = []) {
    return ifElse(
        list => isEmpty(filter(cur => isNil(path(['beforeAfter', 'after'], cur)), list)),
        () => `<p class="empty-result">No dependencies were removed in this version.</p>`,
        list => join('', map(
            cur => `<div class="col-xs-12 col-sm-12 col-md-12 col-lg-12 col-xl-6">
                        <div class="card">
                            <div class="card-header">
                                <b>${prop('package', cur)}</b>
                            </div>
                            <div class="card-body">
                                <dl>
                                    <dt>Version removed</dt>
                                    <dd><span class="badge badge-primary">${tail(cur.beforeAfter.before)}</span></dd>
                                </dl>
                                <p>⚠️ Check in your project code if you use/extend/customize <code>${pascalCase(cur.package)}</code> namespace.</p>
                                ${githubChangelogLink(cur.package, cur.beforeAfter.before)}
                            </div>
                        </div>
                    </div>`,
            filter(cur => isNil(path(['beforeAfter', 'after'], cur)), list)))
    )(listOfDependencies);
}

function pascalCase(packageName) {
    return compose(
        reduce((prev, cur) => concat(prev, concat(toUpper(head(cur)), tail(cur))), ''),
        split('-'),
        last,
        split('/')
    )(packageName);
}

exports.missingSprykerFeatures = missingSprykerFeatures;
exports.templateForProductRelease = templateForProductRelease;
exports.prepareDataForProductReleases = prepareDataForProductReleases;
exports.logicForProductReleases = logicForProductReleases;
