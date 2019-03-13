/* jshint esversion:6, unused:true, undef:true  */
/* globals console:false, showdown:false, R:false, document:false */
/* exported analyseMigrationToNextProductReleases, analyseMigrationToNextModulesMajors, log */


////////////////////////////////////////////////////
// Functions to work with the Migration Analyzer //
//////////////////////////////////////////////////


// analyseMigrationToNextProductReleases :: (String, String, Object, Object, [Object], [Object]) -> HTML
function analyseMigrationToNextProductReleases(el, currentProductReleaseVersion, currentComposer, currentComposerLock, currentFeatures, currentModules) {
    return render(el, migrateToNextProductReleases(currentProductReleaseVersion, currentComposer, currentComposerLock, currentFeatures, currentModules));
}

// analyseMigrationToNextProductReleases :: (String, Object, Object, [Object]) -> HTML
function analyseMigrationToNextModulesMajors(el, currentComposer, currentComposerLock, currentModules) {
    return render(el, migrateModuleToNextMajor(currentComposer, currentComposerLock, currentModules));
}
