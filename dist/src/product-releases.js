/* globals
    conditionsForGuideURL:false,
    isNotEmpty:false,
    isActive:false,
    isNextMajor:false,
    isNotEmpty:false,
    isNotNil:false,
    isShow:false,
    keepOnlyModulesFromOrgs:false,
    mapIndexed:false,
    migrationGuideExist:false,
    properName:false,
    reconstruct:false,
    r:false,
    specificTypeOfModules:false,
    converter:false,
    isActiveBool:false,
    isNextMajor:false,
    isNextMinor:false,
    isNextPatched:false,
    isNotEmpty:false,
    isNotNil:false,
    isShow:false,
    mapIndexed:false,
    migrateModuleToLastVersionInMajor:false,
    migrationGuideAvailable:false,
    missingSprykerFeatures:false,
    modulesForOrgs:false,
    onlyModulesForOrgs:false,
    packageAndCurrentVersion:false,
    packageAndRequiredVersion:false,
    r:false,
    shouldBeCollapsed:false,
    templateForProductRelease:false,
    templateToDisplayDetailsOfEachModule:false,
    versionToNumber:false
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
    return R.compose(
        reduceToApplicableTargets,
        R.evolve({
            targets: R.sort(R.descend(R.prop('release_date')))
        }),
        d => R.assoc('targets', R.concat(R.prop('architectureChanges', d), R.prop('productReleases', d)), d),
        R.evolve({
            architectureChanges: R.map(R.compose(
                a => R.assoc('release_date', R.prop('created', a), a),
                R.assoc('targetType', 'architectureChange'),
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
                a => R.assoc(
                    'feature_versions',
                    R.prop('detectedFeatures', data), a),
                a => R.assoc('identifier', r(), a)
            )),
            productReleases: R.map(R.compose(
                R.over(
                    R.lensProp('feature_versions'),
                    R.compose(
                        R.map(R.compose(
                            f => R.assoc('identifier', r(), f),
                            R.evolve({
                                data: {
                                    composer: {
                                        require: R.compose(
                                            // Keep only modules from Spryker organisations
                                            R.flatten,
                                            R.map(cur => {
                                                if (R.head(R.split('/', R.prop('package', cur))) === 'spryker-feature') {

                                                    return R.compose(
                                                        // Retrieve the required modules of this version
                                                        R.compose(
                                                            R.filter(cur => R.includes(R.head(R.split('/', R.prop('package', cur))), onlyModulesForOrgs())),
                                                            packageAndRequiredVersion,
                                                            R.path(['data', 'composer', 'require'])
                                                        ),
                                                        // Find the right version of this feature
                                                        feature => R.find(R.propEq('name', R.tail(R.prop('requiredVersion', cur))), R.prop('feature_versions', feature)),
                                                        // Find feature inside the Release app data
                                                        p => R.find(R.propEq('package', R.prop('package', p)), R.prop('releaseFeatures', data))
                                                    )(cur);

                                                } else {

                                                    return cur;

                                                }
                                            }),
                                            R.filter(cur => R.includes(R.head(R.split('/', R.prop('package', cur))), modulesForOrgs()) && R.prop('package', cur) !== 'spryker-feature/spryker-core'),
                                            // Transform required modules from object to an Array of objects
                                            packageAndRequiredVersion
                                        )
                                    }
                                }
                            })
                        )),
                        R.filter(cur => cur.data.composer.name !== 'spryker-feature/spryker-core')
                    )
                ),
                R.assoc('targetType', 'productRelease')
            )),
            releaseModules: R.map(cur => R.assoc('identifier', r(), cur)),
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

function logicForProductReleases(data) {
    return `${summaryHeader(data.targets.length)}
            <section id="product-release">
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
        [R.T, templateUpToDate]
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

function templateUpToDate() {
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

function groupWithLevel(level) {
    return function(a, b) {
        return R.groupWith((a, b) => {
            const countForA = R.path(['nextVersionsCount', level], a);
            const countForB = R.path(['nextVersionsCount', level], b);

            return R.equals(countForA, countForB);
        })(a, b);
    };
}

function groupingByMajor(listOfModules) {
    return R.compose(
        groupWithLevel('major'),
        R.sortWith([R.descend(R.path(['nextVersionsCount', 'major']))]),
        R.filter(cur => R.gt(R.path(['nextVersionsCount', 'major'], cur), 0))
    )(listOfModules);
}

function groupingByMinor(listOfModules) {
    return R.compose(
        groupWithLevel('minor'),
        R.sortWith([R.descend(R.path(['nextVersionsCount', 'minor']))]),
        R.filter(cur => R.gt(R.path(['nextVersionsCount', 'minor'], cur), 0) && R.equals(R.path(['nextVersionsCount', 'major'], cur), 0))
    )(listOfModules);
}

function count(list) {
    return R.reduce((prev, cur) => prev + cur.length, 0, list);
}

function templateForSummaryElement(listOfElements) {
    function textForBoxTitle(isMajor, listOfElements) {
        if (isMajor) {
            return `Major versions are available for the following <span class="badge badge-dark">${count(listOfElements)}</span> module(s)`;
        } else {
            return `Minor versions are available for the following <span class="badge badge-dark">${count(listOfElements)}</span> module(s)`;
        }
    }

    return R.compose(
        R.join(''),
        mapIndexed((cur, index) => {
            const isMajor = R.compose(
                n => n > 0,
                R.path(['nextVersionsCount', 'major']),
                R.head,
                R.head
            )(cur);
            const id = r();

            return `<div class="card">
                        <div class="card-header" id="heading-${id}">
                            <button class="btn btn-link ${shouldBeCollapsed(index)}" type="button" data-toggle="collapse" data-target="#summary-${id}" aria-expanded="${isActiveBool(index)}" aria-controls="summary-${id}">
                                ${textForBoxTitle(isMajor, cur)}
                            </button>
                        </div>
                        <div id="summary-${id}" class="collapse ${isShow(index)}" aria-labelledby="heading-${id}" data-parent="#summary-table">
                            <div class="card-body">
                                <div class="card-columns">
                                    ${R.join('',R.map(templateForEachGroupOfMigration, cur))}
                                </div>
                            </div>
                        </div>
                    </div>`;
        })
    )(listOfElements);
}

function templateForEachGroupOfMigration(listOfModules) {
    function textForBoxTitle(isMajor, count, mod) {
        if (isMajor) {
            return `Those <span class="badge badge-dark">${count}</span> module(s) are behind <span class="badge badge-primary">${mod.nextVersionsCount.major}</span> major version(s).`;
        } else {
            return `Those <span class="badge badge-dark">${count}</span> module(s) are behind <span class="badge badge-primary">${mod.nextVersionsCount.minor}</span> minor version(s).`;
        }
    }

    const isMajor = listOfModules[0].nextVersionsCount.major > 0;

    return `<div class="card margin-bottom">
                <div class="card-header">
                    <b>${textForBoxTitle(isMajor, listOfModules.length, listOfModules[0])}</b>
                </div>
                <div class="card-body">
                    <ul class="list-unstyled">
                        ${R.join('', R.map(cur => `<li><a href=#${R.path(['package', 'identifier'], cur)}><code>${cur.module}</code></a></li>`, listOfModules))}
                    <ul>
                </div>
            </div>`;
}

function countVersionsForModule(mod) {
    return R.reduce((prev, cur) => R.cond([
            [version => versionToNumber(version.name) <= versionToNumber(prev.latestVersion), () => prev],
            [version => isNextMajor(prev.latestVersion, version.name), version => R.evolve({ major: R.inc, minor: R.always(0), patch: R.always(0), latestVersion: R.always(version.name) }, prev)],
            [version => isNextMinor(prev.latestVersion, version.name), version => R.evolve({ minor: R.inc, patch: R.always(0), latestVersion: R.always(version.name) }, prev)],
            [version => isNextPatched(prev.latestVersion, version.name), version => R.evolve({ patch: R.inc, latestVersion: R.always(version.name) }, prev)],
            [R.T, () => prev]
        ])(cur), { major: 0, minor: 0, patch: 0, latestVersion: mod.installedVersion },
        R.reverse(mod.package.module_versions)
    );
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

function templateForProductRelease(productRelease) {
    function leftPills(listOfMod) {
        return R.compose(
            R.join(''),
            mapIndexed((cur, index) => `<a
                                            class="nav-link ${isActive(index)}"
                                            id="v-pills-${R.ifElse(
                                                cur => R.isNil(R.path(['feature', 'package'], cur)),
                                                cur => properName('/', ['package'], cur),
                                                cur => properName('/', ['feature', 'package'], cur)
                                            )(cur)}-tab"
                                            data-toggle="pill"
                                            href="#v-pills-${R.ifElse(
                                                cur => R.isNil(R.path(['feature', 'package'], cur)),
                                                cur => properName('/', ['package'], cur),
                                                cur => properName('/', ['feature', 'package'], cur)
                                            )(cur)}"
                                            role="tab"
                                            aria-controls="v-pills-${R.ifElse(
                                                cur => R.isNil(R.path(['feature', 'package'], cur)),
                                                cur => properName('/', ['package'], cur),
                                                cur => properName('/', ['feature', 'package'], cur)
                                            )(cur)}"
                                            aria-selected="true">${R.ifElse(
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
                                            id="v-pills-${R.ifElse(
                                                cur => R.isNil(R.path(['data', 'composer','name'], cur)),
                                                cur => properName('/', ['package'], cur),
                                                cur => properName('/', ['data', 'composer','name'], cur)
                                            )(cur)}"
                                            role="tabpanel"
                                            aria-labelledby="v-pills-${R.ifElse(
                                                cur => R.isNil(R.path(['data', 'composer','name'], cur)),
                                                cur => properName('/', ['package'], cur),
                                                cur => properName('/', ['data', 'composer','name'], cur)
                                            )(cur)}-tab"
                                            >
                                            <div class="row">
                                                <div class="col-12">
                                                    <h4>Upgraded dependencies</h4>
                                                    <div class="row dependencies-upgraded">
                                                        ${R.ifElse(
                                                            cur => R.isNil(R.path(['data', 'composer','require'], cur)),
                                                            cur => dependenciesUpgraded(R.path(['modules'], cur)),
                                                            cur => dependenciesUpgraded(R.path(['data', 'composer', 'require'], cur))
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

function logicArchitectureChangeBeforeTemplate(target) {
    return R.compose(
        R.filter(cur => isNotEmpty(R.prop('modules', cur))),
        R.map(R.compose(
            R.over(
                R.lensPath(['modules']),
                R.compose(
                    R.filter(cur => isNextMajor(cur.installedVersion, R.tail(cur.requiredVersion))),
                    R.map(cur => R.assoc('identifier', r(), cur))
                )
            ),
            fv => R.assoc('identifier', r(), fv)
        )),
        R.prop('feature_versions')
    )(target);
}

function logicProductReleaseBeforeTemplate(target) {
    return R.compose(
        R.filter(cur => isNotEmpty(R.path(['data', 'composer', 'require'], cur))),
        R.map(R.over(
            R.lensPath(['data', 'composer', 'require']),
            R.filter(cur => isNextMajor(R.prop('installedVersion', cur), R.tail(R.prop('requiredVersion', cur))))
        )),
        R.ifElse(
            R.isEmpty,
            R.always(R.prop('feature_versions', target)),
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
    )(target);
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
                                        ${R.cond([
                                            [R.propEq('type','major'), cur => migrationGuideExist(R.tail(R.prop('requiredVersion', cur)), R.prop('package', cur))],
                                            [R.T, conditionsForGuideURL]
                                        ])(cur)}
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
