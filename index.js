////////////////////////////////////////////////////
// Functions to work with the Migration Analyzer //
//////////////////////////////////////////////////


// analyseMigrationToNextProductReleases :: (String, String, Object, Object, [Object], [Object]) -> HTML
function analyseMigrationToNextProductReleases(el, currentProductReleaseVersion, currentComposer, currentComposerLock, currentFeatures) {
    return render(el, migrateToNextProductReleases(currentProductReleaseVersion, currentComposer, currentComposerLock, currentFeatures));
}

// analyseMigrationToNextProductReleases :: (String, Object, Object, [Object]) -> HTML
function analyseMigrationToNextModulesMajors(el, currentComposer, currentComposerLock, currentModules) {
    return render(el, migrateModuleToNextMajor(currentComposer, currentComposerLock, currentModules));
}
