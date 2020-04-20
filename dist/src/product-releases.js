/* globals
    addUniqueId,
    converter,
    getOrgFromDependency,
    isNotEmpty,
    isActive,
    isNextMajor,
    isNotEmpty,
    isNotNil,
    isShow,
    keepOnlyModulesFromOrgs,
    mapIndexed,
    migrationGuideAvailable,
    missingSprykerFeatures,
    modulesForOrgs,
    onlyModulesForOrgs,
    packageAndCurrentVersion,
    packageAndRequiredVersion,
    properName,
    reconstruct,
    semVerMajor,
    semVerMinor,
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
                cur => getOrgFromDependency(cur.package) === 'spryker-feature',
                findModulesForFeature,
                R.identity
            )),
            keepOnlyModulesFromSprykerOrg,
            // Transform required modules from object to an Array of objects
            packageAndRequiredVersion
        )(feature);
    }

    return R.compose(
        reduceToApplicableTargets,
        data => R.assoc(
            'targets',
            R.compose(
                R.sort(R.descend(R.prop('release_date'))),
                data => R.concat(data.architectureChanges, data.productReleases)
            )(data),
            data
        ),
        R.evolve({
            architectureChanges: R.map(R.compose(
                architectureChange => R.over(
                    R.lensProp('feature_versions'),
                    R.compose(
                        R.filter(cur => isNotEmpty(cur.modules)),
                        R.map(R.over(
                            R.lensProp('modules'),
                            R.compose(
                                R.filter(cur => cur.type !== 'patch' && isNotNil(cur.installedVersion)),
                                R.map(R.compose(
                                    mod => R.assoc(
                                        'installedVersion',
                                        R.prop('version', R.find(cur => cur.name === mod.package, data.myComposerLOCK.packages)),
                                        mod
                                    ),
                                    mod => R.assoc('requiredVersion', `^${mod.version.after}`, mod)
                                )),
                                R.innerJoin(R.eqBy(R.prop('package')), architectureChange.modules),
                            )
                        ))
                    ),
                    architectureChange
                ),
                architectureChange => R.assoc('feature_versions', data.detectedFeatures, architectureChange),
                addUniqueId,
                architectureChange => R.assoc('release_date', architectureChange.created, architectureChange),
                R.assoc('targetType', 'architectureChange')
            )),
            productReleases: R.map(R.compose(
                R.over(
                    R.lensProp('feature_versions'),
                    R.compose(
                        R.map(R.compose(
                            addUniqueId,
                            R.evolve({
                                data: {
                                    composer: {
                                        require: prepareRequireForAFeature
                                    }
                                }
                            })
                        )),
                        // We remove spryker-core
                        R.filter(cur => cur.data.composer.name !== 'spryker-feature/spryker-core')
                    )
                ),
                R.assoc('targetType', 'productRelease')
            ))
        }),
        R.evolve({
            detectedFeatures: R.map(R.evolve({
                modules_included: packageAndCurrentVersion,
                modules_missing: packageAndCurrentVersion,
                feature_versions: R.map(R.over(
                    R.lensPath(['data', 'composer', 'require']),
                    R.compose(
                        keepOnlyModulesFromSprykerOrg,
                        packageAndRequiredVersion
                    )
                ))
            }))
        })
    )(data);
}

function keepOnlyModulesFromSprykerOrg(requireList) {
    return R.filter(dependency => R.includes(getOrgFromDependency(dependency.package), modulesForOrgs()) && dependency.package !== 'spryker-feature/spryker-core', requireList);
}

function retrieveModulesForAFeature(listOfFeatures) {
    return function(mod) {
        return R.compose(
            // Retrieve the required modules of this version
            R.filter(cur => R.includes(getOrgFromDependency(cur.package), onlyModulesForOrgs())),
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
                        versionToNumber(pv.installedVersion) >= versionToNumber(R.tail(pv.requiredVersion)),
                        pv
                    ],
                    pv => R.assoc('installedVersion', pv.version, packageAndRequiredVersion)
                )
            ),
            R.find(R.propEq('name', packageAndRequiredVersion.package)),
            R.prop('packages')
        )(composerLock);
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
                pr => pr.length > 0,
                p => [false, p],
                R.always([true])
            ),
            R.reduce((prev, cur) => R.compose(
                // Keep only the modules that do not match the required versions 
                R.ifElse(
                    p => p.length > 0,
                    p => R.compose(
                        p => R.append(p, prev),
                        R.over(
                            R.lensPath(['data', 'composer', 'require']),
                            R.map(cur => R.assoc(
                                'guide_url',
                                R.compose(
                                    R.prop('guide_url'),
                                    m => R.find(R.propEq('name', R.tail(cur.requiredVersion)), m.module_versions),
                                    p => findModuleByPackageName(p.package, data.releaseModules)
                                )(cur),
                                cur
                            ))
                        ),
                        p => R.assocPath(['data', 'composer', 'require'], p, cur),
                        R.map(R.last)
                    )(p),
                    R.always(prev)
                ),
                R.filter(cur =>
                    cur[0] === false &&
                    isNextMajor(
                        R.prop('installedVersion', R.last(cur)),
                        R.tail(R.prop('requiredVersion', R.last(cur)))
                    )
                ),
                // Check if project has the required version for each of them
                R.map(doesItRequireThePackage),
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
                ac => ac.length > 0,
                p => [false, p],
                R.always([true])
            ),
            R.map(R.last),
            R.filter(cur => R.head(cur) === false),
            R.map(R.compose(
                doesItRequireThePackage,
                p => R.assoc('requiredVersion', `^${p.version.after}`, p)
            )),
            R.filter(R.propEq('type', 'major')),
            R.prop('modules')
        )(architectureChange);
    }

    const doesItRequireThePackage = hasRequiredVersionForPackage(data.myComposerLOCK);

    return R.evolve({
        targets: R.compose(
            R.reverse,
            R.reduce((prev, target) => R.compose(
                R.ifElse(
                    a => R.head(a) === true,
                    R.always(prev),
                    a => R.ifElse(
                        () => target.targetType === 'productRelease',
                        () => R.append(R.assoc('feature_versions', R.last(a), target), prev),
                        () => R.append(R.assoc('modules', R.last(a), target), prev)
                    )(a)
                ),
                R.ifElse(
                    target => target.targetType === 'productRelease',
                    isProjectOverProductRelease,
                    isProjectOverArchitectureChange
                ))(target), [])
        )
    })(data);
}

function missingSprykerFeatures(currentFeatures, currentComposer) {
    const diff = (x, y) => x.package === y.feature;
    const allFeaturesAreUsed = () => '<div class="alert alert-success" role="alert">Congrats you currently use all Spryker features available!</div>';

    return R.compose(
        R.ifElse(
            R.isEmpty,
            allFeaturesAreUsed,
            logicForFeaturesNotUsed
        ),
        // Keep only live features and hide draft and deprecated features
        R.filter(cur => cur.status === 1),
        R.differenceWith(diff, currentFeatures),
        R.map(reconstruct(['feature', 'requiredVersion'])),
        specificTypeOfModules(['spryker-feature']),
        keepOnlyModulesFromOrgs
    )(currentComposer);
}

function logicForFeaturesNotUsed(listOfFeatures) {
    return R.compose(
        R.concat('<dl>'),
        cur => R.concat(cur, '</dl>'),
        R.join(''),
        R.map(templateForFeaturesNotUsed),
        R.sortBy(R.prop('name'))
    )(listOfFeatures);
}

function templateForFeaturesNotUsed(feature) {
    const p = R.prop(R.__, feature);

    return `<dt>
                <a rel="noopener" href="https://github.com/${p('package')}" target="_blank">${p('name')}</a>
                ${isNewFeature(p('feature_versions'))}
            </dt>
            <dd>${p('description')}</dd>`;
}

function isNewFeature(listOfVersions) {
    return R.ifElse(
        list => list.length === 1,
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
            mapIndexed(leftPillsTemplate)
        )(listOfMod);
    }

    function leftPillsTemplate(cur, index) {
        return `<a
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
                </a>`;
    }

    function rightPills(listOfMod) {
        return R.compose(
            R.join(''),
            mapIndexed(rightPillsTemplate)
        )(listOfMod);
    }

    function rightPillsTemplate(cur, index) {
        return `<div
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
                </div>`;
    }

    function productReleaseTemplate(productRelease) {
        return `<div class="row">
                    <div class="col-3">
                        <div class="nav flex-column nav-pills" id="v-pills-tab" role="tablist" aria-orientation="vertical">
                            ${leftPills(productRelease)}
                        </div>
                    </div>
                    <div class="col-9">
                        <div class="tab-content" id="v-pills-tabContent">
                            ${rightPills(productRelease)}
                        </div>
                    </div>
                </div>`;
    }

    return R.compose(
        productReleaseTemplate,
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
                    R.map(addUniqueId)
                )
            ),
            addUniqueId
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
            R.map(dependenciesUpgradedTemplate)
        )
    )(listOfDependencies);
}

function dependenciesUpgradedTemplate(dependency) {
    return `<div class="col-xs-12 col-sm-12 col-md-12 col-lg-12 col-xl-6">
                <div class="card">
                    <div class="card-header">
                        <b>${dependency.package}</b>
                    </div>
                    <div class="card-body">
                        <dl>
                            <dt>Version upgraded</dt>
                            <dd><span class="badge badge-primary">${dependency.installedVersion} -> ${R.tail(dependency.requiredVersion)}</span></dd>
                        </dl>
                        ${R.ifElse(
                            R.propEq('type','major'),
                            dependency => migrationGuideExist(R.tail(dependency.requiredVersion), dependency.package),
                            conditionsForGuideURL
                        )(dependency)}
                        ${githubChangelogLink(dependency.package, dependency.requiredVersion)}
                        <a
                            rel="noopener"
                            href="https://github.com/${dependency.package}/compare/${dependency.installedVersion}...${R.tail(dependency.requiredVersion)}"
                            target="_blank"
                            class="btn btn-info"
                        >Compare the versions</a>
                    </div>
                </div>
            </div>`;
}

function conditionsForGuideURL(version) {
    return R.cond([
        [p => R.isNil(R.prop('guide_url', p)), R.always('')],
        [p => 'n/a' === p.guide_url, R.always('<div class="alert alert-warning" role="alert">⚠️ No migration needed ⚠️</div>')],
        [R.T, p => `<a rel="noopener" href="${p.guide_url}" target="_blank" class="btn btn-warning">Migration guide for version ${p.name || R.tail(p.requiredVersion)}</a>`]
    ])(version);
}

function migrationGuideExist(version, packageName) {
    return R.compose(
        conditionsForGuideURL,
        R.last,
        keepOnlyVersionsInMajor(version),
        R.prop('module_versions'),
        p => R.find(R.propEq('package', p), releaseModules)
    )(packageName);
}

function keepOnlyVersionsInMajor(version) {
    return function(listOfVersion) {
        // version = 0.x.z
        if (semVerMajor(version) === 0) {
            // version = 0.0.z
            if (semVerMinor(version) === 0) {
                return R.filter(cur => isNotNil(R.prop('guide_url', cur)) && cur.name >= '0.0.0' && cur.name <= version, listOfVersion);
            } else {
                return R.filter(cur => isNotNil(R.prop('guide_url', cur)) && cur.name >= `0.${semVerMinor(version)}.0` && cur.name <= version, listOfVersion);
            }
        } else {
            return R.filter(cur => isNotNil(R.prop('guide_url', cur)) && cur.name >= `${semVerMajor(version)}.0.0` && cur.name <= version, listOfVersion);
        }
    };
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
            dependenciesRemovedTemplate,
            R.filter(cur => R.isNil(R.path(['beforeAfter', 'after'], cur)), list)))
    )(listOfDependencies);
}

function dependenciesRemovedTemplate(dependency) {
    return `<div class="col-xs-12 col-sm-12 col-md-12 col-lg-12 col-xl-6">
                <div class="card">
                    <div class="card-header">
                        <b>${dependency.package}</b>
                    </div>
                    <div class="card-body">
                        <dl>
                            <dt>Version removed</dt>
                            <dd><span class="badge badge-primary">${R.tail(dependency.beforeAfter.before)}</span></dd>
                        </dl>
                        <p>⚠️ Check in your project code if you use/extend/customize <code>${pascalCase(dependency.package)}</code> namespace.</p>
                        ${githubChangelogLink(dependency.package, dependency.beforeAfter.before)}
                    </div>
                </div>
            </div>`;
}

function pascalCase(packageName) {
    return R.compose(
        R.reduce((prev, cur) => R.concat(prev, R.concat(R.toUpper(R.head(cur)), R.tail(cur))), ''),
        R.split('-'),
        R.last,
        R.split('/')
    )(packageName);
}
