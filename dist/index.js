////////////////////////////////////////////////////
// Functions to work with the Migration Analyzer //
//////////////////////////////////////////////////


// analyseMigrationToNextProductReleases :: (String, Object, Object, [Object]) -> HTML
function analyseMigrationToNextProductReleases(el, currentComposer, currentComposerLock, currentFeatures) {
    return render(el, migrateToNextProductReleases(currentComposer, currentComposerLock, currentFeatures));
}

// analyseMigrationToNextProductReleases :: (String, Object, Object, [Object]) -> HTML
function analyseMigrationToNextModulesMajors(el, currentComposer, currentComposerLock, currentModules) {
    return render(el, migrateModuleToNextMajor(currentComposer, currentComposerLock, currentModules));
}

function sprykerFeaturesYouDoNotUse(el, currentComposer, currentFeatures) {
    return render(el, missingSprykerFeatures(currentFeatures, currentComposer));
}

function nextTarget(el, data) {
    return render(el, stepsToHitTarget(data));
}
