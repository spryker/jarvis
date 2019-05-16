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
  log(R.compose(R.map(cur => R.assoc('nextVersionsCount', countVersionsForModule(cur), cur)))(migrateModuleToLastVersionInMajor(p('myComposerJSON'), p('myComposerLOCK'), p('releaseModules'))));

  return `<h2>Here a summary of your current state 👇</h2>
          <h2>The following modules are outdated.</h2>
          <div>${templateToDisplayDetailsOfEachModule(p('myComposerJSON'), p('myComposerLOCK'), p('releaseModules'))}</div>`;
}

function countVersionsForModule(mod) {
  const installedVersion = R.prop('installedVersion', mod);
  const versions = R.path(['package', 'module_versions'], mod);

  return R.reduce((prev, cur) => R.cond([
    [version => R.lte(versionToNumber(R.prop('name', version)), versionToNumber(installedVersion)), () => prev],
    [version => isNextMajor(installedVersion, R.prop('name', version)), version => R.evolve({ major: R.inc, minor: R.always(0), patch: R.always(0) }, prev)],
    [version => isNextMinor(installedVersion, R.prop('name', version)), version => R.evolve({ minor: R.inc, patch: R.always(0) }, prev)],
    [version => isNextPatched(installedVersion, R.prop('name', version)), version => R.evolve({ patch: R.inc }, prev)],
    [R.T, () => prev]
  ])(cur), { major: 0, minor: 0, patch: 0 }, versions);
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
