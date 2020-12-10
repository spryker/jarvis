const {
    always,
    append,
    compose,
    evolve,
    filter,
    find,
    head,
    ifElse,
    includes,
    isEmpty,
    isNil,
    join,
    length,
    lensPath,
    map,
    over,
    pick,
    prop,
    propEq,
    reduce,
    split,
    tail
} = require('ramda');
const {
    cleanDescription,
    isNextMajor,
    packageAndCurrentVersion,
    packageAndRequiredVersion,
    modulesForOrgs
} = require('./utils');

function prepareDataMissingFeatures(data) {
    return compose(
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
        }),
        pick(['detectedFeatures'])
    )(data);
}

function logicForMissingFeatures(data) {
    return `<h2>We identified that your project could use the following Spryker features</h2>
            ${ifElse(
                d => isEmpty(d.detectedFeatures),
                () => '<div class="alert alert-primary" role="alert">We did not detect any Spryker features that your project could use.</div>',
                templateForMissingFeatures
            )(data)}`;
}

function templateForMissingFeatures(data) {
    return join('', map(cur => {
        return `<div class="card margin-bottom">
                    <div class="card-body">
                        <h3 class="card-title">${cur.name}</h3>
                        <h6 class="card-subtitle margin-bottom text-muted">${isNil(cur.description) ? '' : cleanDescription(cur.description)}</h6>
                        ${ifElse(
                            isNil,
                            always(''),
                            fv => {
                                return `<div class="alert alert-success" role="alert">
                                          We identified you use part or all the modules from the Spryker feature <i>${cur.name}</i>. Your project can safely replace those modules by the version <a rel="noopener" href="https://github.com/${fv.data.composer.name}/releases/tag/${fv.name}" target="_blank">${fv.name}</a> of this feature.<br>
                                          Please follow our <a rel="noopener" href="${fv.guide_url}" target="_blank">feature integration guide</a> during this process.
                                        </div>`;
                            }
                        )(compatibleFeatureVersions(cur))}
                        <ul class="list-group margin-bottom">
                            <li class="list-group-item list-group-item-primary">Modules already installed</li>
                            ${join('',map(cur => `<li class="list-group-item">${cur.package}: ${cur.currentVersion}</li>`, cur.modules_included))}
                        </ul>
                        ${ifElse(
                            isEmpty,
                            () => `<div class="alert alert-success" role="alert">
                                        <p>You are already using all the modules of this feature! To replace those modules by the Spryker feature, please remove all of them from your <code>composer.json</code>. After this action, run this command.</p>
                                        <code>composer require ${cur.package}:"^${cur.version}" --update-with-dependencies</code>
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
                ${join('',map(cur => `<li class="list-group-item">${cur.package} -> ${cur.currentVersion}</li>`, missingModules))}
            </ul>`;
}

function compatibleFeatureVersions(feature) {
    const installedModules = feature.modules_included;

    return compose(
        head,
        filter(cur => length(cur.data.composer.require) > 0),
        map(over(
            lensPath(['data', 'composer', 'require']),
            compose(
                reduce((prev, cur) => {
                    if (prev === false) {
                        return [];
                    } else {
                        if (isNextMajor(prop('currentVersion', find(propEq('package', cur.package), installedModules)), tail(cur.requiredVersion))) {
                            return false;
                        } else {
                            return append(cur, prev);
                        }
                    }
                }, []),
                filter(cur => cur.package === prop('package', find(propEq('package', cur.package), installedModules)))
            )
        )),
        prop('feature_versions')
    )(feature);
}

exports.logicForMissingFeatures = logicForMissingFeatures;
exports.prepareDataMissingFeatures = prepareDataMissingFeatures;
