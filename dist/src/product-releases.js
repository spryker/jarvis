/* globals
    conditionsForGuideURL,
    converter,
    isNotEmpty,
    isActive,
    isNextMajor,
    isNotEmpty,
    isNotNil,
    isShow,
    keepOnlyModulesFromOrgs,
    mapIndexed,
    migrationGuideExist,
    migrationGuideAvailable,
    missingSprykerFeatures,
    modulesForOrgs,
    onlyModulesForOrgs,
    packageAndCurrentVersion,
    packageAndRequiredVersion,
    properName,
    reconstruct,
    r,
    specificTypeOfModules,
    templateForProductRelease,
    versionToNumber
*/

/* exported
    missingSprykerFeatures,
    templateForProductRelease,
    prepareData,
    logicForProductReleases,
    logicForOnlyModules,
    prepareDataNoFeatures,
    prepareDataMissingFeatures
*/

/////////////////////////////////////////////
// Migration Analysis for Product Release //
///////////////////////////////////////////


function prepareData(data) {
    function prepareRequireForAFeature(feature) {
        const findModulesForFeature = retrieveModulesForAFeature(data.releaseFeatures);

        return R.compose(
            R.flatten,
            R.map(R.ifElse(
                cur => R.head(R.split('/', cur.package)) === 'spryker-feature',
                findModulesForFeature,
                R.identity
            )),
            // Keep only modules from Spryker organisations
            R.filter(cur => R.includes(R.head(R.split('/', cur.package)), modulesForOrgs()) && cur.package !== 'spryker-feature/spryker-core'),
            // Transform required modules from object to an Array of objects
            packageAndRequiredVersion
        )(feature);
    }

    return R.compose(
        reduceToApplicableTargets,
        d => R.assoc(
            'targets',
            R.compose(
                R.sort(R.descend(R.prop('release_date'))),
                d => R.concat(d.architectureChanges, d.productReleases)
            )(d),
            d
        ),
        R.evolve({
            architectureChanges: R.map(R.compose(
                a => R.over(
                    R.lensProp('feature_versions'),
                    R.compose(
                        R.filter(cur => isNotEmpty(R.prop('modules', cur))),
                        R.map(R.over(
                            R.lensProp('modules'),
                            R.compose(
                                R.filter(cur => R.prop('type', cur) !== 'patch' && isNotNil(R.prop('installedVersion', cur))),
                                R.map(R.compose(
                                    m => R.assoc('installedVersion', R.prop('version', R.find(
                                        cur => R.prop('name', cur) === R.prop('package', m),
                                        R.path(['myComposerLOCK', 'packages'], data))), m),
                                    m => R.assoc('requiredVersion', `^${R.path(['version', 'after'], m)}`, m)
                                )),
                                R.innerJoin(R.eqBy(R.prop('package')), R.prop('modules', a))
                            )
                        ))
                    ), a),
                a => R.assoc('feature_versions', data.detectedFeatures, a),
                a => R.assoc('identifier', r(), a),
                a => R.assoc('release_date', a.created, a),
                R.assoc('targetType', 'architectureChange')
            )),
            productReleases: R.map(
                R.compose(
                    R.over(
                        R.lensProp('feature_versions'),
                        R.compose(
                            R.map(
                                R.compose(
                                    f => R.assoc('identifier', r(), f),
                                    R.evolve({
                                        data: {
                                            composer: {
                                                require: prepareRequireForAFeature
                                            }
                                        }
                                    })
                                )
                            ),
                            // We remove spryker-core
                            R.filter(cur => cur.data.composer.name !== 'spryker-feature/spryker-core')
                        )
                    ),
                    R.assoc('targetType', 'productRelease')
                )
            )
        }),
        R.evolve({
            detectedFeatures: R.map(R.evolve({
                modules_included: packageAndCurrentVersion,
                modules_missing: packageAndCurrentVersion,
                feature_versions: R.map(R.over(
                    R.lensPath(['data', 'composer', 'require']),
                    R.compose(
                        R.filter(cur => R.includes(R.head(R.split('/', cur.package)), modulesForOrgs()) && cur.package !== 'spryker-feature/spryker-core'),
                        packageAndRequiredVersion
                    )
                ))
            }))
        })
    )(data);
}

function retrieveModulesForAFeature(listOfFeatures) {
    return function(mod) {
        return R.compose(
            // Retrieve the required modules of this version
            R.filter(cur => R.includes(R.head(R.split('/', cur.package)), onlyModulesForOrgs())),
            packageAndRequiredVersion,
            R.path(['data', 'composer', 'require']),
            // Find the right version of this feature
            feature => R.find(R.propEq('name', R.tail(mod.requiredVersion)), feature.feature_versions),
            // Find feature inside the Release app data
            m => R.find(R.propEq('package', m.package), listOfFeatures)
        )(mod);
    };
}

function logicForProductReleases(data) {
    return `${summaryHeader(data.targets.length)}
            ${R.ifElse(
                d => R.isEmpty(d.targets),
                R.always(''),
                templateLogicForTarget
            )(data)}`;
}

function templateLogicForTarget(data) {
    return `<section id="product-release">
                ${R.ifElse(
                    t => t.targetType === 'productRelease',
                    t => `<h2>Your next target is the Product Release: ${t.version}</h2>`,
                    t => `<h2>Your next target is the architecture change: <em>${t.title}</em></h2>
                            <div class="margin-bottom-2">
                                <p>${converter.makeHtml(t.description)}</p>
                                ${migrationGuideAvailable(t.guide_url)}
                            </div>`
                )(R.path(['targets', 0], data))}
                <p>You have the following Spryker Features to migrate.</p>
                <div id="listOfProductReleases">${templateForProductRelease(R.path(['targets', 0], data))}</div>
            </section>
            <section>
                <h2>Spryker Features you are currently not using that might interest you 🍬🍭</h2>
                ${missingSprykerFeatures(data.releaseFeatures, data.recommendedFeatures)}
            </section>`;
}

function summaryHeader(nbTargets) {
    return R.cond([
        [nbTargets => nbTargets > 1, templateMoreThanOneTarget],
        [nbTargets => nbTargets === 1, templateOneTarget],
        [R.T, templateUpToDateWithSpryker]
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
        return R.compose(
            R.ifElse(
                R.isNil,
                R.always([true]),
                R.compose(
                    pv => [
                        R.gte(versionToNumber(R.prop('installedVersion', pv)), versionToNumber(R.tail(R.prop('requiredVersion', pv)))),
                        pv
                    ],
                    pv => R.assoc('installedVersion', R.prop('version', pv), packageAndRequiredVersion)
                )
            ),
            R.find(
                R.propEq('name', R.prop('package', packageAndRequiredVersion))
            )
        )(R.prop('packages', composerLock));
    };
}

function findModuleByPackageName(packageName, releaseModules) {
    return R.find(R.propEq('package', packageName), releaseModules);
}

function reduceToApplicableTargets(data) {
    function isProjectOverProductRelease(productRelease) {
        return R.compose(
            // If at least one Spryker Feature is not totally covered, then the project must pass over it 
            R.ifElse(
                pr => R.gt(R.length(pr), 0),
                p => [false, p],
                R.always([true])
            ),
            R.reduce((prev, cur) => R.compose(
                // Keep only the modules that do not match the required versions 
                R.ifElse(
                    p => R.gt(R.length(p), 0),
                    p => R.compose(
                        p => R.append(p, prev),
                        R.compose(
                            p => R.over(
                                R.lensPath(['data', 'composer', 'require']),
                                R.map(cur => R.assoc('guide_url', R.compose(
                                    R.prop('guide_url'),
                                    m => R.find(R.propEq('name', R.tail(cur.requiredVersion)), m.module_versions),
                                    p => findModuleByPackageName(p.package, data.releaseModules)
                                )(cur), cur)),
                                p),
                            p => R.assocPath(['data', 'composer', 'require'], p, cur)
                        ),
                        R.map(R.last)
                    )(p),
                    R.always(prev)
                ),
                R.filter(cur => isNextMajor(R.prop('installedVersion', R.last(cur)), R.tail(R.prop('requiredVersion', R.last(cur))))),
                R.filter(cur => R.equals(false, R.head(cur))),
                // Check if project has the required version for each of them
                R.map(hasRequiredVersionForPackage(R.prop('myComposerLOCK', data))),
                // Get required modules for the Spryker Feature
                R.path(['data', 'composer', 'require'])
            )(cur), []),
            R.prop('feature_versions')
        )(productRelease);
    }

    function isProjectOverArchitectureChange(architectureChange) {
        return R.compose(
            // If at least one Spryker module major is not totally covered, then the project must pass over it 
            R.ifElse(
                ac => R.gt(R.length(ac), 0),
                p => [false, p],
                R.always([true])
            ),
            R.map(R.last),
            R.filter(cur => R.equals(false, R.head(cur))),
            R.map(R.compose(
                hasRequiredVersionForPackage(R.prop('myComposerLOCK', data)),
                p => R.assoc('requiredVersion', `^${R.path(['version', 'after'], p)}`, p)
            )),
            R.filter(R.propEq('type', 'major')),
            R.prop('modules')
        )(architectureChange);
    }

    return R.over(
        R.lensProp('targets'),
        R.compose(
            R.reverse,
            R.reduce((prev, cur) => R.compose(
                R.ifElse(
                    a => R.equals(true, R.head(a)),
                    R.always(prev),
                    a => R.ifElse(
                        () => R.equals('productRelease', R.prop('targetType', cur)),
                        () => R.append(R.assoc('feature_versions', R.last(a), cur), prev),
                        () => R.append(R.assoc('modules', R.last(a), cur), prev)
                    )(a)
                ),
                R.ifElse(
                    t => R.equals('productRelease', R.prop('targetType', t)),
                    isProjectOverProductRelease,
                    isProjectOverArchitectureChange
                )
            )(cur), [])
        )
    )(data);
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
                R.map(templateForFeaturesNotUsed),
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

function templateForFeaturesNotUsed(feature) {
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

function featureName(pkg) {
    return R.ifElse(
        cur => R.isNil(R.path(['feature', 'package'], cur)),
        cur => properName('/', ['package'], cur),
        cur => properName('/', ['feature', 'package'], cur)
    )(pkg);
}

function moduleName(mod) {
    return R.ifElse(
        cur => R.isNil(R.path(['data', 'composer', 'name'], cur)),
        cur => properName('/', ['package'], cur),
        cur => properName('/', ['data', 'composer', 'name'], cur)
    )(mod);
}

function templateForProductRelease(productRelease) {
    function leftPills(listOfMod) {
        return R.compose(
            R.join(''),
            mapIndexed((cur, index) => `<a
                                            class="nav-link ${isActive(index)}"
                                            id="v-pills-${featureName(cur)}-tab"
                                            data-toggle="pill"
                                            href="#v-pills-${featureName(cur)}"
                                            role="tab"
                                            aria-controls="v-pills-${featureName(cur)}"
                                            aria-selected="true">
                                            ${R.ifElse(
                                                cur => R.isNil(R.path(['feature', 'name'], cur)),
                                                R.prop('name'),
                                                R.path(['feature', 'name'])
                                            )(cur)}
                                        </a>`)
        )(listOfMod);
    }

    function rightPills(listOfMod) {
        return R.compose(
            R.join(''),
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
                                                        ${R.ifElse(
                                                            cur => R.isNil(R.path(['data', 'composer','require'], cur)),
                                                            cur => dependenciesUpgraded(cur.modules),
                                                            cur => dependenciesUpgraded(cur.data.composer.require)
                                                        )(cur)}
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
        R.ifElse(
            R.propEq('targetType', 'architectureChange'),
            logicArchitectureChangeBeforeTemplate,
            logicProductReleaseBeforeTemplate
        )
    )(productRelease);
}

// TODO: See to move this transformation to the prepareData function
function logicArchitectureChangeBeforeTemplate(target) {
    return R.compose(
        R.filter(cur => isNotEmpty(cur.modules)),
        R.map(R.compose(
            R.over(
                R.lensPath(['modules']),
                R.compose(
                    R.filter(cur => isNextMajor(cur.installedVersion, R.tail(cur.requiredVersion))),
                    R.map(cur => R.assoc('identifier', r(), cur))
                )
            ),
            fv => R.assoc('identifier', r(), fv)
        ))
    )(target.feature_versions);
}

// TODO: See to move this transformation to the prepareData function
function logicProductReleaseBeforeTemplate(target) {
    return R.compose(
        R.filter(cur => isNotEmpty(cur.data.diff) && isNotEmpty(cur.data.composer.require)),
        R.map(R.compose(
            R.evolve({
                data: {
                    composer: {
                        require: R.filter(cur => isNextMajor(cur.installedVersion, R.tail(cur.requiredVersion)))
                    },
                    diff: R.compose(
                        R.filter(cur => isNotNil(cur.beforeAfter.before)),
                        R.map(reconstruct(['package', 'beforeAfter'])),
                        R.toPairs
                    )
                }
            })
        ))
    )(target.feature_versions);
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
                                        <b>${cur.package}</b>
                                    </div>
                                    <div class="card-body">
                                        <dl>
                                            <dt>Version upgraded</dt>
                                            <dd><span class="badge badge-primary">${cur.installedVersion} -> ${R.tail(cur.requiredVersion)}</span></dd>
                                        </dl>
                                        ${R.ifElse(
                                            R.propEq('type','major'),
                                            cur => migrationGuideExist(R.tail(cur.requiredVersion), cur.package),
                                            conditionsForGuideURL
                                        )(cur)}
                                        ${githubChangelogLink(cur.package, cur.requiredVersion)}
                                        <a
                                            rel="noopener"
                                            href="https://github.com/${cur.package}/compare/${cur.installedVersion}...${R.tail(cur.requiredVersion)}"
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
                href="https://github.com/${orgAndRepo}/releases/tag/${R.tail(version)}"
                target="_blank"
                class="btn btn-secondary"
            >Github changelog</a>`;
}

function dependenciesRemoved(listOfDependencies = []) {
    return R.ifElse(
        list => R.isEmpty(R.filter(cur => R.isNil(R.path(['beforeAfter', 'after'], cur)), list)),
        () => `<p class="empty-result">No dependencies were removed in this version.</p>`,
        list => R.join('', R.map(
            cur => `<div class="col-xs-12 col-sm-12 col-md-12 col-lg-12 col-xl-6">
                        <div class="card">
                            <div class="card-header">
                                <b>${R.prop('package', cur)}</b>
                            </div>
                            <div class="card-body">
                                <dl>
                                    <dt>Version removed</dt>
                                    <dd><span class="badge badge-primary">${R.tail(cur.beforeAfter.before)}</span></dd>
                                </dl>
                                <p>⚠️ Check in your project code if you use/extend/customize <code>${pascalCase(cur.package)}</code> namespace.</p>
                                ${githubChangelogLink(cur.package, cur.beforeAfter.before)}
                            </div>
                        </div>
                    </div>`,
            R.filter(cur => R.isNil(R.path(['beforeAfter', 'after'], cur)), list)))
    )(listOfDependencies);
}

function pascalCase(packageName) {
    return R.compose(
        R.reduce((prev, cur) => R.concat(prev, R.concat(R.toUpper(R.head(cur)), R.tail(cur))), ''),
        R.split('-'),
        R.last,
        R.split('/')
    )(packageName);
}
