"use strict";
/* globals
    cleanDescription,
    isNextMajor,
    packageAndCurrentVersion,
    packageAndRequiredVersion,
    modulesForOrgs
*/
/* exported
    logicForMissingFeatures,
    prepareDataMissingFeatures
*/
function prepareDataMissingFeatures(data) {
    return R.compose(R.evolve({
        detectedFeatures: R.map(R.evolve({
            modules_included: packageAndCurrentVersion,
            modules_missing: packageAndCurrentVersion,
            feature_versions: R.map(R.over(R.lensPath(['data', 'composer', 'require']), R.compose(R.filter(function (cur) { return R.includes(R.head(R.split('/', cur.package)), modulesForOrgs()) && cur.package !== 'spryker-feature/spryker-core'; }), packageAndRequiredVersion)))
        }))
    }), R.pick(['detectedFeatures']))(data);
}
function logicForMissingFeatures(data) {
    return "<h2>We identified that your project could use the following Spryker features</h2>\n            " + R.ifElse(function (d) { return R.isEmpty(d.detectedFeatures); }, function () { return '<div class="alert alert-primary" role="alert">We did not detect any Spryker features that your project could use.</div>'; }, templateForMissingFeatures)(data);
}
function templateForMissingFeatures(data) {
    return R.join('', R.map(function (cur) {
        return "<div class=\"card margin-bottom\">\n                    <div class=\"card-body\">\n                        <h3 class=\"card-title\">" + cur.name + "</h3>\n                        <h6 class=\"card-subtitle margin-bottom text-muted\">" + (R.isNil(cur.description) ? '' : cleanDescription(cur.description)) + "</h6>\n                        " + R.ifElse(R.isNil, R.always(''), function (fv) {
            return "<div class=\"alert alert-success\" role=\"alert\">\n                                          We identified you use part or all the modules from the Spryker feature <i>" + cur.name + "</i>. Your project can safely replace those modules by the version <a rel=\"noopener\" href=\"https://github.com/" + fv.data.composer.name + "/releases/tag/" + fv.name + "\" target=\"_blank\">" + fv.name + "</a> of this feature.<br>\n                                          Please follow our <a rel=\"noopener\" href=\"" + fv.guide_url + "\" target=\"_blank\">feature integration guide</a> during this process.\n                                        </div>";
        })(compatibleFeatureVersions(cur)) + "\n                        <ul class=\"list-group margin-bottom\">\n                            <li class=\"list-group-item list-group-item-primary\">Modules already installed</li>\n                            " + R.join('', R.map(function (cur) { return "<li class=\"list-group-item\">" + cur.package + ": " + cur.currentVersion + "</li>"; }, cur.modules_included)) + "\n                        </ul>\n                        " + R.ifElse(R.isEmpty, function () { return "<div class=\"alert alert-success\" role=\"alert\">\n                                        <p>You are already using all the modules of this feature! To replace those modules by the Spryker feature, please remove all of them from your <code>composer.json</code>. After this action, run this command.</p>\n                                        <code>composer require " + cur.package + ":\"^" + cur.version + "\" --update-with-dependencies</code>\n                                    </div>"; }, templateMissingModulesInMissingFeature)(cur.modules_missing) + "\n                    </div>\n                    <div class=\"card-footer\">\n                        <a href=\"#spryker-jarvis\">Get back to the top \u261D\uFE0F</a>\n                    </div>\n                </div>";
    }, data.detectedFeatures));
}
function templateMissingModulesInMissingFeature(missingModules) {
    return "<ul class=\"list-group\">\n                <li class=\"list-group-item list-group-item-warning\">Modules missing</li>\n                " + R.join('', R.map(function (cur) { return "<li class=\"list-group-item\">" + cur.package + " -> " + cur.currentVersion + "</li>"; }, missingModules)) + "\n            </ul>";
}
function compatibleFeatureVersions(feature) {
    var installedModules = feature.modules_included;
    return R.compose(R.head, R.filter(function (cur) { return R.length(cur.data.composer.require) > 0; }), R.map(R.over(R.lensPath(['data', 'composer', 'require']), R.compose(R.reduce(function (prev, cur) {
        if (prev === false) {
            return [];
        }
        else {
            if (isNextMajor(R.prop('currentVersion', R.find(R.propEq('package', cur.package), installedModules)), R.tail(cur.requiredVersion))) {
                return false;
            }
            else {
                return R.append(cur, prev);
            }
        }
    }, []), R.filter(function (cur) { return cur.package === R.prop('package', R.find(R.propEq('package', cur.package), installedModules)); })))), R.prop('feature_versions'))(feature);
}
