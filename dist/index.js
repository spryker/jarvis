////////////////////////////////////////////////////
// Functions to work with the Migration Analyzer //
//////////////////////////////////////////////////

function nextTarget(el, data) {
    return render(el, stepsToHitTarget(data));
}

nextTarget('next-target', { myComposerJSON, myComposerLOCK, releaseFeatures, releaseModules, architectureChanges, recommendedFeatures });
