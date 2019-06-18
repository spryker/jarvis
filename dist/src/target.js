function stepsToHitTarget(data) {
    const newData = R.compose(
        R.evolve({
            targets: R.sort(R.descend(R.prop('release_date')))
        }),
        d => R.assoc('targets', R.concat(R.prop('architectureChanges', d), R.prop('productReleases', d)), d),
        R.evolve({
            architectureChanges: R.map(R.compose(
                a => R.assoc('release_date', R.prop('created', a), a),
                R.assoc('targetType', 'architectureChange')
            )),
            productReleases: R.map(R.compose(
                R.over(
                    R.lensProp('feature_versions'),
                    R.compose(
                        R.map(R.compose(
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
        }),
    )(data);

    return R.compose(
        log,
        reduceToApplicableTargets
    )(newData);
}

function hasRequiredVersionForPackage(composerLock) {
    return function(packageAndRequiredVersion) {
        return R.compose(
            R.ifElse(
                R.isNil,
                R.T,
                p => R.compose(
                    rv => R.gte(versionToNumber(R.prop('version', p)), versionToNumber(rv)),
                    p => R.tail(R.prop('requiredVersion', p))
                )(packageAndRequiredVersion)
            ),
            R.find(
                R.propEq('name', R.prop('package', packageAndRequiredVersion))
            )
        )(R.prop('packages', composerLock));
    }
}

function reduceToApplicableTargets(data) {
    function isProjectOverProductRelease(productRelease) {
        return R.compose(
            // If at least one Spryker Feature is totally covered, then the project must pass over it 
            R.ifElse(
                pr => R.gt(R.length(pr), 0),
                R.F,
                R.T
            ),
            pr => R.reduce((prev, cur) => R.compose(
                // Keep only the modules that do not match the required versions 
                R.ifElse(
                    p => R.gt(R.length(p), 0),
                    R.always(R.append(cur, prev)),
                    R.always(prev)
                ),
                R.filter(R.equals(false)),
                // Check if project has the required version for each of them
                R.map(hasRequiredVersionForPackage(R.prop('myComposerLOCK', data))),
                // Get required modules for the Spryker Feature
                R.path(['data', 'composer', 'require'])
            )(cur), [], R.prop('feature_versions', pr))
        )(productRelease);
    }

    function isProjectOverArchitectureChange(architectureChange) {
        return true;
    }

    return R.over(
        R.lensProp('targets'),
        R.reduce((prev, cur) => R.compose(
            R.ifElse(
                R.equals(true),
                R.always(prev),
                R.always(R.append(cur, prev))
            ),
            R.ifElse(
                t => R.equals('productRelease', R.prop('targetType', t)),
                isProjectOverProductRelease,
                isProjectOverArchitectureChange
            )
        )(cur), []),
        data);
}

function logicForProductReleases(data) {
    const p = R.prop(R.__, data);
    const sprykerFeatures = getSprykerFeatures(p('myComposerJSON'));
    const nextTargets = R.compose(
        feature => sprykerFeaturesToMigrate(data, R.prop('requiredVersion', feature)),
        R.evolve({ requiredVersion: R.tail }),
        reconstruct(['feature', 'requiredVersion'])
    )(R.head(sprykerFeatures));

    return R.cond([
        [R.isEmpty, templateUpToDateWithProductRelease],
        [t => R.isEmpty(R.prop('features', R.head(t))), templateSaveMigrationToNewRelease],
        [R.T, templateNeedMigrationToNewRelease(data)]
    ])(nextTargets);
}

function logicForOnlyModules(data) {
    return R.cond([
        //[isNotEmpty, l => templatePassNextArchitectureChanges(R.head(l))],
        [R.T, () => templateUpToDateWithArchitectureChanges(modulesWithTheirCount(data), data)]
    ])(findNextTargetForArchitectureChanges(R.prop('architectureChanges', data), R.prop('myComposerLOCK', data)));
}

function findNextTargetForArchitectureChanges(architectureChanges, myComposerLOCK) {
    return R.compose(
        R.filter(cur => isNotEmpty(R.prop('modules', cur))),
        R.map(R.over(R.lensProp('modules'), R.filter(R.propEq('compliant', false)))),
        R.reduce((prev, cur) => {
            return R.append(compliantWithArchitectureChange(myComposerLOCK, cur), prev);
        }, [])
    )(architectureChanges);
}

function compliantWithArchitectureChange(myComposerLOCK, architectureChange) {
    const modulesLens = R.lensProp('modules');

    return R.over(modulesLens, R.map(cur => {
        const hasIt = R.find(R.propEq('name', R.prop('package', cur)), R.prop('packages', myComposerLOCK));

        if (R.isNil(hasIt)) {
            return R.compose(
                R.assoc('installedVersion', undefined),
                R.assoc('compliant', true)
            )(cur);
        } else if (versionToNumber(R.prop('version', hasIt)) >= versionToNumber(R.path(['version', 'after'], cur))) {
            return R.compose(
                R.assoc('installedVersion', R.prop('version', hasIt)),
                R.assoc('compliant', true)
            )(cur);
        } else {
            return R.compose(
                R.assoc('installedVersion', R.prop('version', hasIt)),
                R.assoc('compliant', false)
            )(cur);
        }
    }), architectureChange);
}

function modulesWithTheirCount(data) {
    const p = R.prop(R.__, data);

    return R.compose(
        R.map(cur => R.assoc('nextVersionsCount', countVersionsForModule(cur), cur))
    )(migrateModuleToLastVersionInMajor(p('myComposerJSON'), p('myComposerLOCK'), p('releaseModules')));
}

function templateUpToDateWithArchitectureChanges(modulesWithTheirCount, data) {
    const p = R.prop(R.__, data);

    return `<h2>Here is a summary of your Spryker modules current state 👇</h2>
            <div>${templateForTable(modulesWithTheirCount)}</div>
            <h3>The following modules are outdated</h3>
            <div>${templateToDisplayDetailsOfEachModule(p('myComposerJSON'), p('myComposerLOCK'), p('releaseModules'))}</div>`;
}

function templatePassNextArchitectureChanges(architectureChange) {
    const majorsToOvercome = R.compose(
        R.filter(R.propEq('type', 'major')),
        R.prop('modules')
    )(architectureChange);

    return R.ifElse(
        isNotEmpty,
        m => `<h2>You need to migrate the following modules to enjoy the full power of Spryker!</h2>
            ${R.join('',R.map(templateForModuleToUpdateArchitectureChange, R.prop('modules', architectureChange)))}`,
        m => `<h2>👍 You can enjoy the next Spryker architecture Change with just one command 👏</h2>
              <div class="alert alert-success">You just need to run <code>composer update</code> and you are good to go!</div>
              ${R.join('',R.map(templateForModuleToUpdateArchitectureChange, R.prop('modules', architectureChange)))}`
    )(majorsToOvercome);
}

function templateForModuleToUpdateArchitectureChange(data) {
    return `<div class="card margin-bottom">
                <div class="card-body">
                    <h3 class="card-title">${R.prop('name', data)}</h3>
                    <p class="card-text">Installed version <span class="badge badge-secondary">${R.prop('installedVersion', data)}</span></p>
                    <p class="card-text">Required version <span class="badge badge-primary">${R.path(['version', 'after'], data)}</span></p>
                    <div class="links">
                        <a
                          rel="noopener"
                          href="https://github.com/${R.prop('package', data)}/releases/tag/${R.path(['version', 'after'], data)}"
                          target="_blank"
                          class="btn btn-secondary"
                        >Github changelog</a>
                        <a
                          rel="noopener"
                          href="https://github.com/${R.prop('package', data)}/compare/${R.prop('installedVersion', data)}...${R.path(['version', 'after'], data)}"
                          target="_blank"
                          class="btn btn-info"
                        >Compare the versions</a>
                    </div>
                    <h6 class="card-subtitle mb-2 text-muted">${R.isNil(R.prop('changelog', data)) ? '' : converter.makeHtml((R.prop('changelog', data)))}</h6>
                </div>
                <div class="card-footer">
                    <a href="#spryker-jarvis">Get back to the top ☝️</a>
                </div>
            </div>`;
}

function groupWithLevel(level) {
    return function(a, b) {
        return R.groupWith((a, b) => {
            const countForA = R.path(['nextVersionsCount', level], a);
            const countForB = R.path(['nextVersionsCount', level], b);

            return R.equals(countForA, countForB);
        })(a, b);
    }
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
            return `Major versions are available for the following <span class="badge badge-dark">${count(listOfElements)}</span> module(s)`
        } else {
            return `Minor versions are available for the following <span class="badge badge-dark">${count(listOfElements)}</span> module(s)`
        }
    }

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
            return `Those <span class="badge badge-dark">${count}</span> module(s) are behind <span class="badge badge-primary">${R.path(['nextVersionsCount', 'major'], mod)}</span> major version(s).`
        } else {
            return `Those <span class="badge badge-dark">${count}</span> module(s) are behind <span class="badge badge-primary">${R.path(['nextVersionsCount', 'minor'], mod)}</span> minor version(s).`
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

function featuresToMigrateIsEmpty(productRelease) {
    return R.compose(
        R.isEmpty,
        R.prop('features')
    )(productRelease);
}

function templateSaveMigrationToNewRelease(nextTargets) {
    return `<h2>👍 Congrats! You can safely migrate to Spryker Product Release ${R.prop('productRelease',R.head(nextTargets))} 👏</h2>
            <p>No migrations are needed to use this new Product Release.</p>
            <div class="alert alert-success">Switch all your <code>spryker-feature/xxx</code> package to the version <code>~${R.prop('productRelease',R.head(nextTargets))}</code></div>`;
}

function templateNeedMigrationToNewRelease(data) {
    return function(nextTargets) {
        return `<section id="product-release">
                    <h2>Your next target is the Product Release: ${R.prop('productRelease',R.head(nextTargets))}</h2>
                    <p>You have the following Spryker Features to migrate.</p>
                    <div id="listOfProductReleases">${templateForProductRelease(R.head(nextTargets))}</div>
                </section>
                <section>${logicForOnlyModules(data)}</section>
                <section>
                    <h2>Spryker Features you are currently not using that might interest you 🍬🍭</h2>
                    ${missingSprykerFeatures(R.prop('releaseFeatures', data), R.prop('myComposerJSON', data))}
                </section>`;
    }
}

function templateUpToDateWithProductRelease() {
    return '<div class="alert alert-success margin-top-2" role="alert">🎉 Bravo! You are already up to date with Spryker! 🥳 Just run <code>composer update</code> to get the latest patches and minors.</div>';
}

function sprykerFeaturesToMigrate(data, currentProductRelease) {
    const p = R.prop(R.__, data);
    const featuresUsedInProject = featuresFromComposer(p('myComposerLOCK'), p('myComposerJSON'));
    const productReleasesAvailable = featuresForProductReleases(currentProductRelease, p('releaseFeatures'));
    const featuresToMigratePerProductRelease = R.map(keepForEachProductReleaseUsedFeatures(featuresUsedInProject), productReleasesAvailable);

    return featuresToMigratePerProductRelease;
}
