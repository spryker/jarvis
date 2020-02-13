/* globals
    cleanDescription,
    isNextMajor
*/

/* exported
    logicForMissingFeatures
*/

function logicForMissingFeatures(data) {
    return `<h2>We identified that your project could use the following Spryker features</h2>
            ${R.ifElse(
                d => R.isEmpty(d.detectedFeatures),
                () => '<div class="alert alert-primary" role="alert">We did not detect any Spryker features that your project could use.</div>',
                templateForMissingFeatures
            )(data)}`;
}

function templateForMissingFeatures(data) {
    return R.join('', R.map(cur => {
        return `<div class="card margin-bottom">
                    <div class="card-body">
                        <h3 class="card-title">${cur.name}</h3>
                        <h6 class="card-subtitle margin-bottom text-muted">${R.isNil(cur.description) ? '' : cleanDescription(cur.description)}</h6>
                        ${R.ifElse(
                            R.isNil,
                            R.always(''),
                            fv => {
                                return `<div class="alert alert-success" role="alert">
                                          We identified that your can safely replace those module by this Spryker feature with the version <a rel="noopener" href="https://github.com/${fv.data.composer.name}/releases/tag/${fv.name}" target="_blank">${fv.name}</a>.<br>
                                          Please follow our <a rel="noopener" href="${fv.guide_url}" target="_blank">feature integration guide</a> during this process.
                                        </div>`;
                            }
                        )(compatibleFeatureVersions(cur))}
                        <ul class="list-group margin-bottom">
                            <li class="list-group-item list-group-item-primary">Modules already installed</li>
                            ${R.join('',R.map(cur => `<li class="list-group-item">${cur.package}: ${cur.currentVersion}</li>`, cur.modules_included))}
                        </ul>
                        ${R.ifElse(
                            R.isEmpty,
                            () => `<div class="alert alert-success" role="alert">
                                        <p>You are using all the modules of this feature! To replace those modules by the Spryker feature, just run this command.</p>
                                        <code>composer</code>
                                    </div>`,
                            templateMissingModulesInMissingFeature
                        )(cur.modules_missing)}
                    </div>
                    <div class="card-footer">
                        <a href="#spryker-jarvis">Get back to the top ☝️</a>
                    </div>
                </div>`;
    }, data.detectedFeatures));
}

function templateMissingModulesInMissingFeature(missingModules) {
    return `<ul class="list-group">
                <li class="list-group-item list-group-item-warning">Modules missing</li>
                ${R.join('',R.map(cur => `<li class="list-group-item">${cur.package} -> ${cur.currentVersion}</li>`, missingModules))}
            </ul>`;
}

function compatibleFeatureVersions(feature) {
    const installedModules = feature.modules_included;

    return R.compose(
        R.head,
        R.filter(cur => R.length(cur.data.composer.require) > 0),
        R.map(R.over(
            R.lensPath(['data', 'composer', 'require']),
            R.compose(
                R.reduce((prev, cur) => {
                    if (prev === false) {
                        return [];
                    } else {
                        if (isNextMajor(R.prop('currentVersion', R.find(R.propEq('package', cur.package), installedModules)), R.tail(cur.requiredVersion))) {
                            return false;
                        } else {
                            return R.append(cur, prev);
                        }
                    }
                }, []),
                R.filter(cur => cur.package === R.prop('package', R.find(R.propEq('package', cur.package), installedModules)))
            )
        )),
        R.prop('feature_versions')
    )(feature);
}