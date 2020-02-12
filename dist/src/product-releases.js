/* globals
    isNotEmpty:false,
    isActive:false,
    isNextMajor:false,
    isNotNil:false,
    isShow:false,
    keepOnlyModulesFromOrgs:false,
    mapIndexed:false,
    migrationGuideExist:false,
    properName:false,
    reconstruct:false,
    specificTypeOfModules:false
*/

/* exported
    missingSprykerFeatures,
    templateForProductRelease
*/

/////////////////////////////////////////////
// Migration Analysis for Product Release //
///////////////////////////////////////////


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
                                            class="nav-link ${isActive(index)}
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
        R.map(R.over(
            R.lensPath(['modules']),
            R.filter(cur => isNextMajor(R.prop('installedVersion', cur), R.tail(R.prop('requiredVersion', cur))))
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
                                        ${R.ifElse(
                                            R.propEq('type','major'),
                                            cur => migrationGuideExist(R.tail(R.prop('requiredVersion', cur)), R.prop('package', cur)),
                                            R.always('')
                                        )(cur)}
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
