"use strict";
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
        var findModulesForFeature = retrieveModulesForAFeature(data.releaseFeatures);
        return R.compose(R.flatten, R.map(R.ifElse(function (cur) { return R.head(R.split('/', cur.package)) === 'spryker-feature'; }, findModulesForFeature, R.identity)), 
        // Keep only modules from Spryker organisations
        R.filter(function (cur) { return R.includes(R.head(R.split('/', cur.package)), modulesForOrgs()) && cur.package !== 'spryker-feature/spryker-core'; }), 
        // Transform required modules from object to an Array of objects
        packageAndRequiredVersion)(feature);
    }
    return R.compose(reduceToApplicableTargets, function (d) { return R.assoc('targets', R.compose(R.sort(R.descend(R.prop('release_date'))), function (d) { return R.concat(d.architectureChanges, d.productReleases); })(d), d); }, R.evolve({
        architectureChanges: R.map(R.compose(function (a) { return R.over(R.lensProp('feature_versions'), R.compose(R.filter(function (cur) { return isNotEmpty(cur.modules); }), R.map(R.over(R.lensProp('modules'), R.compose(R.filter(function (cur) { return cur.type !== 'patch' && isNotNil(cur.installedVersion); }), R.map(R.compose(function (m) { return R.assoc('installedVersion', R.prop('version', R.find(function (cur) { return cur.name === m.package; }, data.myComposerLOCK.packages)), m); }, function (m) { return R.assoc('requiredVersion', "^" + m.version.after, m); })), R.innerJoin(R.eqBy(R.prop('package')), a.modules))))), a); }, function (a) { return R.assoc('feature_versions', data.detectedFeatures, a); }, function (a) { return R.assoc('identifier', r(), a); }, function (a) { return R.assoc('release_date', a.created, a); }, R.assoc('targetType', 'architectureChange'))),
        productReleases: R.map(R.compose(R.over(R.lensProp('feature_versions'), R.compose(R.map(R.compose(function (f) { return R.assoc('identifier', r(), f); }, R.evolve({
            data: {
                composer: {
                    require: prepareRequireForAFeature
                }
            }
        }))), 
        // We remove spryker-core
        R.filter(function (cur) { return cur.data.composer.name !== 'spryker-feature/spryker-core'; }))), R.assoc('targetType', 'productRelease')))
    }), R.evolve({
        detectedFeatures: R.map(R.evolve({
            modules_included: packageAndCurrentVersion,
            modules_missing: packageAndCurrentVersion,
            feature_versions: R.map(R.over(R.lensPath(['data', 'composer', 'require']), R.compose(R.filter(function (cur) { return R.includes(R.head(R.split('/', cur.package)), modulesForOrgs()) && cur.package !== 'spryker-feature/spryker-core'; }), packageAndRequiredVersion)))
        }))
    }))(data);
}
function retrieveModulesForAFeature(listOfFeatures) {
    return function (mod) {
        return R.compose(
        // Retrieve the required modules of this version
        R.filter(function (cur) { return R.includes(R.head(R.split('/', cur.package)), onlyModulesForOrgs()); }), packageAndRequiredVersion, R.path(['data', 'composer', 'require']), 
        // Find the right version of this feature
        function (feature) { return R.find(R.propEq('name', R.tail(mod.requiredVersion)), feature.feature_versions); }, 
        // Find feature inside the Release app data
        function (m) { return R.find(R.propEq('package', m.package), listOfFeatures); })(mod);
    };
}
function logicForProductReleases(data) {
    return summaryHeader(data.targets.length) + "\n            " + R.ifElse(function (d) { return R.isEmpty(d.targets); }, R.always(''), templateLogicForTarget)(data);
}
function templateLogicForTarget(data) {
    return "<section id=\"product-release\">\n                " + R.ifElse(function (t) { return t.targetType === 'productRelease'; }, function (t) { return "<h2>Your next target is the Product Release: " + t.version + "</h2>"; }, function (t) { return "<h2>Your next target is the architecture change: <em>" + t.title + "</em></h2>\n                            <div class=\"margin-bottom-2\">\n                                <p>" + converter.makeHtml(t.description) + "</p>\n                                " + migrationGuideAvailable(t.guide_url) + "\n                            </div>"; })(R.path(['targets', 0], data)) + "\n                <p>You have the following Spryker Features to migrate.</p>\n                <div id=\"listOfProductReleases\">" + templateForProductRelease(R.path(['targets', 0], data)) + "</div>\n            </section>\n            <section>\n                <h2>Spryker Features you are currently not using that might interest you \uD83C\uDF6C\uD83C\uDF6D</h2>\n                " + missingSprykerFeatures(data.releaseFeatures, data.recommendedFeatures) + "\n            </section>";
}
function summaryHeader(nbTargets) {
    return R.cond([
        [function (nbTargets) { return nbTargets > 1; }, templateMoreThanOneTarget],
        [function (nbTargets) { return nbTargets === 1; }, templateOneTarget],
        [R.T, templateUpToDateWithSpryker]
    ])(nbTargets);
}
function templateMoreThanOneTarget(nbTargets) {
    return "<div class=\"margin-top-2 alert alert-primary\" role=\"alert\">\n                <h4 class=\"alert-heading\">Be brave! The journey is not over yet!</h4>\n                <p>You still have <span class=\"badge badge-light\">" + nbTargets + "</span> milestones to cover. When the last milestone will be covered, your Spryker project will be up to date.</p>\n                <hr>\n                <p>A milestone represent either a Spryker product release or an architecture change that improve the way Spryker works.</p>\n            </div>";
}
function templateOneTarget(nbTargets) {
    return "<div class=\"margin-top-2 alert alert-primary\" role=\"alert\">\n                <h4 class=\"alert-heading\">You are almose there!</h4>\n                <p>You only have <span class=\"badge badge-light\">" + nbTargets + "</span> milestone to cover. When this milestone will be covered, your Spryker project will be up to date.</p>\n                <hr>\n                <p>A milestone represent either a Spryker product release or an architecture change that improve the way Spryker works.</p>\n            </div>";
}
function templateUpToDateWithSpryker() {
    return "<div class=\"margin-top-2 alert alert-success\" role=\"alert\">\n                <h4 class=\"alert-heading\">Congrats, you are up to date with Spryker!</h4>\n            </div>";
}
function hasRequiredVersionForPackage(composerLock) {
    return function (packageAndRequiredVersion) {
        return R.compose(R.ifElse(R.isNil, R.always([true]), R.compose(function (pv) { return [
            versionToNumber(pv.installedVersion) >= versionToNumber(R.tail(pv.requiredVersion)),
            pv
        ]; }, function (pv) { return R.assoc('installedVersion', pv.version, packageAndRequiredVersion); })), R.find(R.propEq('name', packageAndRequiredVersion.package)), R.prop('packages'))(composerLock);
    };
}
function findModuleByPackageName(packageName, releaseModules) {
    return R.find(R.propEq('package', packageName), releaseModules);
}
function reduceToApplicableTargets(data) {
    function isProjectOverProductRelease(productRelease) {
        return R.compose(
        // If at least one Spryker Feature is not totally covered, then the project must pass over it 
        R.ifElse(function (pr) { return pr.length > 0; }, function (p) { return [false, p]; }, R.always([true])), R.reduce(function (prev, cur) { return R.compose(
        // Keep only the modules that do not match the required versions 
        R.ifElse(function (p) { return p.length > 0; }, function (p) { return R.compose(function (p) { return R.append(p, prev); }, R.over(R.lensPath(['data', 'composer', 'require']), R.map(function (cur) { return R.assoc('guide_url', R.compose(R.prop('guide_url'), function (m) { return R.find(R.propEq('name', R.tail(cur.requiredVersion)), m.module_versions); }, function (p) { return findModuleByPackageName(p.package, data.releaseModules); })(cur), cur); })), function (p) { return R.assocPath(['data', 'composer', 'require'], p, cur); }, R.map(R.last))(p); }, R.always(prev)), R.filter(function (cur) { return R.head(cur) === false && isNextMajor(R.prop('installedVersion', R.last(cur)), R.tail(R.prop('requiredVersion', R.last(cur)))); }), 
        // Check if project has the required version for each of them
        R.map(doesItRequireThePackage), 
        // Get required modules for the Spryker Feature
        R.path(['data', 'composer', 'require']))(cur); }, []), R.prop('feature_versions'))(productRelease);
    }
    function isProjectOverArchitectureChange(architectureChange) {
        return R.compose(
        // If at least one Spryker module major is not totally covered, then the project must pass over it 
        R.ifElse(function (ac) { return ac.length > 0; }, function (p) { return [false, p]; }, R.always([true])), R.map(R.last), R.filter(function (cur) { return R.head(cur) === false; }), R.map(R.compose(doesItRequireThePackage, function (p) { return R.assoc('requiredVersion', "^" + p.version.after, p); })), R.filter(R.propEq('type', 'major')), R.prop('modules'))(architectureChange);
    }
    var doesItRequireThePackage = hasRequiredVersionForPackage(data.myComposerLOCK);
    return R.evolve({
        targets: R.compose(R.reverse, R.reduce(function (prev, cur) { return R.compose(R.ifElse(function (a) { return R.head(a) === true; }, R.always(prev), function (a) { return R.ifElse(function () { return cur.targetType === 'productRelease'; }, function () { return R.append(R.assoc('feature_versions', R.last(a), cur), prev); }, function () { return R.append(R.assoc('modules', R.last(a), cur), prev); })(a); }), R.ifElse(function (t) { return t.targetType === 'productRelease'; }, isProjectOverProductRelease, isProjectOverArchitectureChange))(cur); }, []))
    })(data);
}
function missingSprykerFeatures(currentFeatures, currentComposer) {
    var diff = function (x, y) { return R.prop('package', x) === R.prop('feature', y); };
    return R.compose(R.ifElse(R.isEmpty, function () { return '<div class="alert alert-success" role="alert">Congrats you currently use all Spryker features available!</div>'; }, R.compose(R.concat('<dl>'), function (cur) { return R.concat(cur, '</dl>'); }, R.join(''), R.map(templateForFeaturesNotUsed), R.sortBy(R.prop('name')))), 
    // Keep only live features and hide draft and deprecated features
    R.filter(function (cur) { return R.prop('status', cur) === 1; }), R.differenceWith(diff, currentFeatures), R.map(reconstruct(['feature', 'requiredVersion'])), specificTypeOfModules(['spryker-feature']), keepOnlyModulesFromOrgs)(currentComposer);
}
function templateForFeaturesNotUsed(feature) {
    var p = R.prop(R.__, feature);
    return "<dt><a rel=\"noopener\" href=\"https://github.com/" + p('package') + "\" target=\"_blank\">" + p('name') + "</a> " + isNewFeature(p('feature_versions')) + "</dt>\n          <dd>" + p('description') + "</dd>";
}
function isNewFeature(listOfVersions) {
    return R.ifElse(function (list) { return R.equals(1, R.length(list)); }, function () { return "<span class=\"badge badge-success\">New feature</span>"; }, function () { return ''; })(listOfVersions);
}
function featureName(pkg) {
    return R.ifElse(function (cur) { return R.isNil(R.path(['feature', 'package'], cur)); }, function (cur) { return properName('/', ['package'], cur); }, function (cur) { return properName('/', ['feature', 'package'], cur); })(pkg);
}
function moduleName(mod) {
    return R.ifElse(function (cur) { return R.isNil(R.path(['data', 'composer', 'name'], cur)); }, function (cur) { return properName('/', ['package'], cur); }, function (cur) { return properName('/', ['data', 'composer', 'name'], cur); })(mod);
}
function templateForProductRelease(productRelease) {
    function leftPills(listOfMod) {
        return R.compose(R.join(''), mapIndexed(function (cur, index) { return "<a\n                                            class=\"nav-link " + isActive(index) + "\"\n                                            id=\"v-pills-" + featureName(cur) + "-tab\"\n                                            data-toggle=\"pill\"\n                                            href=\"#v-pills-" + featureName(cur) + "\"\n                                            role=\"tab\"\n                                            aria-controls=\"v-pills-" + featureName(cur) + "\"\n                                            aria-selected=\"true\">\n                                            " + R.ifElse(function (cur) { return R.isNil(R.path(['feature', 'name'], cur)); }, R.prop('name'), R.path(['feature', 'name']))(cur) + "\n                                        </a>"; }))(listOfMod);
    }
    function rightPills(listOfMod) {
        return R.compose(R.join(''), mapIndexed(function (cur, index) { return "<div\n                                            class=\"tab-pane fade " + isShow(index) + " " + isActive(index) + "\"\n                                            id=\"v-pills-" + moduleName(cur) + "\"\n                                            role=\"tabpanel\"\n                                            aria-labelledby=\"v-pills-" + moduleName(cur) + "-tab\"\n                                            >\n                                            <div class=\"row\">\n                                                <div class=\"col-12\">\n                                                    <h4>Upgraded dependencies</h4>\n                                                    <div class=\"row dependencies-upgraded\">\n                                                        " + R.ifElse(function (cur) { return R.isNil(R.path(['data', 'composer', 'require'], cur)); }, function (cur) { return dependenciesUpgraded(cur.modules); }, function (cur) { return dependenciesUpgraded(cur.data.composer.require); })(cur) + "\n                                                    </div>\n                                                </div>\n                                                <div class=\"col-12\">\n                                                    <h4>Dependencies removed</h4>\n                                                    <div class=\"row dependencies-upgraded\">\n                                                        " + dependenciesRemoved(R.path(['data', 'diff'], cur)) + "\n                                                    </div>\n                                                </div>\n                                            </div>\n                                        </div>"; }))(listOfMod);
    }
    return R.compose(function (pr) { return "<div class=\"row\">\n                    <div class=\"col-3\">\n                        <div class=\"nav flex-column nav-pills\" id=\"v-pills-tab\" role=\"tablist\" aria-orientation=\"vertical\">\n                            " + leftPills(pr) + "\n                        </div>\n                    </div>\n                    <div class=\"col-9\">\n                        <div class=\"tab-content\" id=\"v-pills-tabContent\">\n                            " + rightPills(pr) + "\n                        </div>\n                    </div>\n                </div>"; }, R.ifElse(R.propEq('targetType', 'architectureChange'), logicArchitectureChangeBeforeTemplate, logicProductReleaseBeforeTemplate))(productRelease);
}
// TODO: See to move this transformation to the prepareData function
function logicArchitectureChangeBeforeTemplate(target) {
    return R.compose(R.filter(function (cur) { return isNotEmpty(cur.modules); }), R.map(R.compose(R.over(R.lensPath(['modules']), R.compose(R.filter(function (cur) { return isNextMajor(cur.installedVersion, R.tail(cur.requiredVersion)); }), R.map(function (cur) { return R.assoc('identifier', r(), cur); }))), function (fv) { return R.assoc('identifier', r(), fv); })))(target.feature_versions);
}
// TODO: See to move this transformation to the prepareData function
function logicProductReleaseBeforeTemplate(target) {
    return R.compose(R.filter(function (cur) { return isNotEmpty(cur.data.diff) && isNotEmpty(cur.data.composer.require); }), R.map(R.compose(R.evolve({
        data: {
            composer: {
                require: R.filter(function (cur) { return isNextMajor(cur.installedVersion, R.tail(cur.requiredVersion)); })
            },
            diff: R.compose(R.filter(function (cur) { return isNotNil(cur.beforeAfter.before); }), R.map(reconstruct(['package', 'beforeAfter'])), R.toPairs)
        }
    }))))(target.feature_versions);
}
function dependenciesUpgraded(listOfDependencies) {
    if (listOfDependencies === void 0) { listOfDependencies = []; }
    return R.ifElse(R.isEmpty, function () { return "<p class=\"empty-result\">No dependencies were added in this version.</p>"; }, R.compose(R.join(''), R.map(function (cur) { return "<div class=\"col-xs-12 col-sm-12 col-md-12 col-lg-12 col-xl-6\">\n                                <div class=\"card\">\n                                    <div class=\"card-header\">\n                                        <b>" + cur.package + "</b>\n                                    </div>\n                                    <div class=\"card-body\">\n                                        <dl>\n                                            <dt>Version upgraded</dt>\n                                            <dd><span class=\"badge badge-primary\">" + cur.installedVersion + " -> " + R.tail(cur.requiredVersion) + "</span></dd>\n                                        </dl>\n                                        " + R.ifElse(R.propEq('type', 'major'), function (cur) { return migrationGuideExist(R.tail(cur.requiredVersion), cur.package); }, conditionsForGuideURL)(cur) + "\n                                        " + githubChangelogLink(cur.package, cur.requiredVersion) + "\n                                        <a\n                                            rel=\"noopener\"\n                                            href=\"https://github.com/" + cur.package + "/compare/" + cur.installedVersion + "..." + R.tail(cur.requiredVersion) + "\"\n                                            target=\"_blank\"\n                                            class=\"btn btn-info\"\n                                        >Compare the versions</a>\n                                    </div>\n                                </div>\n                            </div>"; })))(listOfDependencies);
}
function githubChangelogLink(orgAndRepo, version) {
    return "<a\n                rel=\"noopener\"\n                href=\"https://github.com/" + orgAndRepo + "/releases/tag/" + R.tail(version) + "\"\n                target=\"_blank\"\n                class=\"btn btn-secondary\"\n            >Github changelog</a>";
}
function dependenciesRemoved(listOfDependencies) {
    if (listOfDependencies === void 0) { listOfDependencies = []; }
    return R.ifElse(function (list) { return R.isEmpty(R.filter(function (cur) { return R.isNil(R.path(['beforeAfter', 'after'], cur)); }, list)); }, function () { return "<p class=\"empty-result\">No dependencies were removed in this version.</p>"; }, function (list) { return R.join('', R.map(function (cur) { return "<div class=\"col-xs-12 col-sm-12 col-md-12 col-lg-12 col-xl-6\">\n                        <div class=\"card\">\n                            <div class=\"card-header\">\n                                <b>" + R.prop('package', cur) + "</b>\n                            </div>\n                            <div class=\"card-body\">\n                                <dl>\n                                    <dt>Version removed</dt>\n                                    <dd><span class=\"badge badge-primary\">" + R.tail(cur.beforeAfter.before) + "</span></dd>\n                                </dl>\n                                <p>\u26A0\uFE0F Check in your project code if you use/extend/customize <code>" + pascalCase(cur.package) + "</code> namespace.</p>\n                                " + githubChangelogLink(cur.package, cur.beforeAfter.before) + "\n                            </div>\n                        </div>\n                    </div>"; }, R.filter(function (cur) { return R.isNil(R.path(['beforeAfter', 'after'], cur)); }, list))); })(listOfDependencies);
}
function pascalCase(packageName) {
    return R.compose(R.reduce(function (prev, cur) { return R.concat(prev, R.concat(R.toUpper(R.head(cur)), R.tail(cur))); }, ''), R.split('-'), R.last, R.split('/'))(packageName);
}
