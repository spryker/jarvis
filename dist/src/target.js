function stepsToHitTarget(data) {
  return R.ifElse(
    d => useSprykerFeatures(R.prop('myComposerJSON', d)),
    logicForProductReleases,
    logicForOnlyModules
  )(data);
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
    [R.T, templateNeedMigrationToNewRelease]
  ])(nextTargets);
}

function logicForOnlyModules(data) {
  const p = R.prop(R.__, data);
  const modulesWithTheirCount = R.compose(
    R.map(cur => R.assoc('nextVersionsCount', countVersionsForModule(cur), cur))
  )(migrateModuleToLastVersionInMajor(p('myComposerJSON'), p('myComposerLOCK'), p('releaseModules')));

  log(modulesWithTheirCount);

  return `<h2>Here is a summary of your current state 👇</h2>
          <div>${templateForTable(modulesWithTheirCount)}</div>
          <h2>The following modules are outdated.</h2>
          <div>${templateToDisplayDetailsOfEachModule(p('myComposerJSON'), p('myComposerLOCK'), p('releaseModules'))}</div>`;
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
  log(listOfModules);
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

  log(finalList);

  return `<div class="accordion" id="accordionExample">
            ${templateForSummaryElement(finalList)}
          </div>`;
}

function templateForSummaryElement(listOfElements) {
  function textForBoxTitle(isMajor, listOfElements) {
    if (isMajor) {
      return `Major versions are available for the following <span class="badge badge-dark">${count(listOfElements)}</span> module(s)`
    } else {
      return `Minor versions are available for the following <span class="badge badge-dark">${count(listOfElements)}</span> module(s)`
    }
  }

  function count(list) {
    return R.reduce((prev, cur) => R.add(prev, R.length(cur)), 0, list);
  }
  return R.compose(
    R.join(''),
    mapIndexed((cur, index) => {
      const isMajor = R.gt(R.path(['nextVersionsCount', 'major'], R.head(R.head(cur))), 0);
      const id = r();

      return `<div class="card">
                <div class="card-header" id="headingOne">
                    <button class="btn btn-link" type="button" data-toggle="collapse" data-target="#${id}" aria-expanded="true" aria-controls="collapseOne">
                      ${textForBoxTitle(isMajor, cur)}
                    </button>
                </div>
                <div id="${id}" class="collapse ${isShow(index)}" aria-labelledby="headingOne" data-parent="#accordionExample">
                  <div class="card-body">
                    Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher vice lomo. Leggings occaecat craft beer farm-to-table, raw denim aesthetic synth nesciunt you probably haven't heard of them accusamus labore sustainable VHS.
                  </div>
                </div>
              </div>`;
    })
  )(listOfElements);
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

function templateNeedMigrationToNewRelease(nextTargets) {
  return `<h2>Your next target is the Product Release: ${R.prop('productRelease',R.head(nextTargets))}</h2>
          <p>You have the following Spryker Features to migrate.</p>
          <div id="listOfProductReleases">${templateForProductRelease(R.head(nextTargets))}</div>`
}

function templateUpToDateWithProductRelease() {
  return '<div class="alert alert-success" role="alert">🎉 Bravo! You are already up to date with Spryker! 🥳</div>';
}

function sprykerFeaturesToMigrate(data, currentProductRelease) {
  const p = R.prop(R.__, data);
  const featuresUsedInProject = featuresFromComposer(p('myComposerLOCK'), p('myComposerJSON'));
  const productReleasesAvailable = featuresForProductReleases(currentProductRelease, p('releaseFeatures'));
  const featuresToMigratePerProductRelease = R.map(keepForEachProductReleaseUsedFeatures(featuresUsedInProject), productReleasesAvailable);

  return featuresToMigratePerProductRelease;
}
