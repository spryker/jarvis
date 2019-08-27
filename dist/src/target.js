/* globals
    converter:false,
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
    r:false,
    reconstruct:false,
    templateForProductRelease:false,
    templateToDisplayDetailsOfEachModule:false,
    topsort:false,
    transformTarget:false
    versionToNumber:false
*/

/* exported
    stepsToHitTarget
*/

function stepsToHitTarget(data) {
    const newData = R.compose(
        d => R.assoc('topsort', R.ifElse(
            d => R.isEmpty(R.prop('targets', d)) || R.equals(R.prop('onlyModules', d), true),
            topsortForModules,
            topsortForFeatures
        )(d), d),
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
                                                            R.map(reconstruct(['package', 'requiredVersion'])),
                                                            R.toPairs,
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
                                            R.map(reconstruct(['package', 'requiredVersion'])),
                                            R.toPairs
                                        )
                                    }
                                }
                            })
                        )),
                        R.filter(cur => R.path(['data', 'composer', 'name'], cur) !== 'spryker-feature/spryker-core')
                    )
                ),
                R.assoc('targetType', 'productRelease')
            )),
            releaseModules: R.map(cur => R.assoc('identifier', r(), cur))
        })
    )(data);

    return R.compose(
        R.cond([
            [d => R.isEmpty(R.prop('targets', d)) || R.equals(R.prop('onlyModules', d), true), logicForOnlyModules],
            [R.T, logicForProductReleases]
        ]),
        reduceToApplicableTargets
    )(newData);
}

function topsortForFeatures(data) {
    return R.compose(
        log,
        d => transformTarget(R.path(['targets', 0], d))
    )(data);
}

function topsortForModules(data) {
    return R.compose(
        topsort,
        R.reduce(R.concat, []),
        R.map(moduleToTopsort),
        R.filter(R.propEq('upToDate', false)),
        modulesWithTheirCount
    )(data);
}

function moduleToTopsort(mod) {
    return R.compose(
        m => R.map(cur => [R.head(m), cur], R.last(m)),
        R.adjust(1, R.compose(
            R.map(R.prop('package')),
            R.filter(cur => R.includes(R.head(R.split('/', R.prop('package', cur))), modulesForOrgs()) && R.prop('package', cur) !== 'spryker-feature/spryker-core'),
            R.map(reconstruct(['package', 'requiredVersion'])),
            R.toPairs,
            R.path(['dependencies', 'require']))),
        m => ([R.prop('module', m), R.find(R.propEq('name', R.prop('installedVersion', m)), R.path(['package', 'module_versions'], m))])
    )(mod);
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
                        p => R.assocPath(['data', 'composer', 'require'], p, cur),
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

function logicForProductReleases(data) {
    return `${R.compose(
                R.ifElse(
                    R.lt(1),
                    nbTargets => `<div class="margin-top-2 alert alert-primary" role="alert">
                                    <h4 class="alert-heading">Be brave! The journey is not over yet!</h4>
                                    <p>You still have <span class="badge badge-light">${nbTargets}</span> milestones to cover. When the last milestone will be covered, your Spryker project will be up to date.</p>
                                    <hr>
                                    <p>A milestone represent either a Spryker product release or an architecture change that improve the way Spryker works.</p>
                                </div>`,
                    nbTargets => `<div class="margin-top-2 alert alert-primary" role="alert">
                                    <h4 class="alert-heading">You are almose there!</h4>
                                    <p>You only have <span class="badge badge-light">${nbTargets}</span> milestone to cover. When this milestone will be covered, your Spryker project will be up to date.</p>
                                    <hr>
                                    <p>A milestone represent either a Spryker product release or an architecture change that improve the way Spryker works.</p>
                                </div>`
                ),
                R.length,
                R.prop('targets')
            )(data)}
            <section id="product-release">
                ${R.ifElse(
                    R.equals('productRelease'),
                    () => `<h2>Your next target is the Product Release: ${R.path(['targets', 0, 'version'], data)}</h2>`,
                    () => `<h2>Your next target is the architecture change: <em>${R.path(['targets', 0, 'title'], data)}</em></h2>
                            <div class="margin-bottom-2">
                                <p>${converter.makeHtml(R.path(['targets', 0, 'description'], data))}</p>
                                ${migrationGuideAvailable(R.path(['targets', 0, 'guide_url'], data))}
                            </div>`
                )(R.path(['targets', 0, 'targetType'],data))}
                <p>You have the following Spryker Features to migrate.</p>
                <div id="listOfProductReleases">${templateForProductRelease(R.path(['targets', 0], data))}</div>
            </section>
            <section>
                <h2>Spryker Features you are currently not using that might interest you 🍬🍭</h2>
                ${missingSprykerFeatures(R.prop('releaseFeatures', data), R.prop('recommendedFeatures', data))}
            </section>`;
}

function modulesWithTheirCount(data) {
    return R.compose(
        R.map(cur => R.assoc('nextVersionsCount', countVersionsForModule(cur), cur)),
        d => migrateModuleToLastVersionInMajor(R.prop('myComposerJSON', d), R.prop('myComposerLOCK', d), R.prop('releaseModules', d))
    )(data)
}

function logicForOnlyModules(data) {
    const p = R.prop(R.__, data);

    return `<div class="margin-top-2">${templateForTable(modulesWithTheirCount(data))}</div>
            <section>
                <div class="accordion margin-top-2 solo-accordion" id="modules-migration-order">
                    <div class="card">
                        <div class="card-header" id="modules-migration-order-header">
                            <button class="btn btn-link collapsed" type="button" data-toggle="collapse" data-target="#modules-migration-order-body" aria-expanded="false" aria-controls="modules-migration-order-body">
                                Click here to discover in which order you should migrate your modules!
                            </button>
                        </div>
                        <div id="modules-migration-order-body" class="collapse" aria-labelledby="modules-migration-order-1-header" data-parent="#modules-migration-order">
                            <div class="card-body">
                                <ol>
                                    ${R.join('', R.map(cur => `<li><code>${cur}</code></li>`,R.prop('topsort', data)))}
                                </ol>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <h3>The following modules are outdated</h3>
            <div>${templateToDisplayDetailsOfEachModule(p('myComposerJSON'), p('myComposerLOCK'), p('releaseModules'))}</div>`;
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

function templateForTable(listOfModules) {
    const groupingByMajor = R.compose(
        groupWithLevel('major'),
        R.sortWith([R.descend(R.path(['nextVersionsCount', 'major']))]),
        R.filter(cur => R.gt(R.path(['nextVersionsCount', 'major'], cur), 0))
    )(listOfModules);
    const groupingByMinor = R.compose(
        groupWithLevel('minor'),
        R.sortWith([R.descend(R.path(['nextVersionsCount', 'minor']))]),
        R.filter(cur => R.gt(R.path(['nextVersionsCount', 'minor'], cur), 0) && R.equals(R.path(['nextVersionsCount', 'major'], cur), 0))
    )(listOfModules);
    const finalList = R.filter(isNotEmpty, [groupingByMajor, groupingByMinor]);

    return `<div class="accordion" id="summary-table">
            ${templateForSummaryElement(finalList)}
          </div>`;
}

function count(list) {
    return R.reduce((prev, cur) => R.add(prev, R.length(cur)), 0, list);
}

function templateForSummaryElement(listOfElements) {
    function textForBoxTitle(isMajor, listOfElements) {
        if (isMajor) {
            return `Major versions are available for the following <span class="badge badge-dark">${count(listOfElements)}</span> module(s)`;
        } else {
            return `Minor versions are available for the following <span class="badge badge-dark">${count(listOfElements)}</span> module(s)`;
        }
    }

    const isActiveBool = index => index === 0 ? 'true' : 'false';
    const shouldBeCollapsed = index => index === 0 ? '' : 'collapsed';

    return R.compose(
        R.join(''),
        mapIndexed((cur, index) => {
            const isMajor = R.gt(R.path(['nextVersionsCount', 'major'], R.head(R.head(cur))), 0);
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
            return `Those <span class="badge badge-dark">${count}</span> module(s) are behind <span class="badge badge-primary">${R.path(['nextVersionsCount', 'major'], mod)}</span> major version(s).`;
        } else {
            return `Those <span class="badge badge-dark">${count}</span> module(s) are behind <span class="badge badge-primary">${R.path(['nextVersionsCount', 'minor'], mod)}</span> minor version(s).`;
        }
    }

    const isMajor = R.gt(R.path(['nextVersionsCount', 'major'], R.head(listOfModules)), 0);

    return `<div class="card margin-bottom">
                <div class="card-header">
                    <b>${textForBoxTitle(isMajor, R.length(listOfModules), R.head(listOfModules))}</b>
                </div>
                <div class="card-body">
                    <ul class="list-unstyled">
                        ${R.join('', R.map(cur => `<li><a href=#${R.path(['package', 'identifier'], cur)}><code>${R.prop('module', cur)}</code></a></li>`, listOfModules))}
                    <ul>
                </div>
            </div>`;
}

function countVersionsForModule(mod) {
    const versions = R.reverse(R.path(['package', 'module_versions'], mod));

    return R.reduce((prev, cur) => R.cond([
        [version => R.lte(versionToNumber(R.prop('name', version)), versionToNumber(R.prop('latestVersion', prev))), () => prev],
        [version => isNextMajor(R.prop('latestVersion', prev), R.prop('name', version)), version => R.evolve({ major: R.inc, minor: R.always(0), patch: R.always(0), latestVersion: R.always(R.prop('name', version)) }, prev)],
        [version => isNextMinor(R.prop('latestVersion', prev), R.prop('name', version)), version => R.evolve({ minor: R.inc, patch: R.always(0), latestVersion: R.always(R.prop('name', version)) }, prev)],
        [version => isNextPatched(R.prop('latestVersion', prev), R.prop('name', version)), version => R.evolve({ patch: R.inc, latestVersion: R.always(R.prop('name', version)) }, prev)],
        [R.T, () => prev]
    ])(cur), { major: 0, minor: 0, patch: 0, latestVersion: R.prop('installedVersion', mod) }, versions);
}
