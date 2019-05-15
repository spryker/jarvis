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
  log(data);

  return `<h2>The following modules are outdated.</h2>
          <div>${migrateModuleToNextMajor(p('myComposerJSON'), p('myComposerLOCK'), p('releaseModules'))}</div>`;
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
