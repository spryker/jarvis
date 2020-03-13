/* globals
    logicForNoFeatures:false,
    logicForMissingFeatures:false,
    logicForProductReleases:false,
    prepareData:false
*/

/* exported
    nextTarget
*/

////////////////////////////////////////////////////
// Functions to work with the Migration Analyzer //
//////////////////////////////////////////////////


function nextTarget(el, data) {
    return R.compose(
        d => render(el, d),
        R.cond([
            [d => d.noFeatures === true, R.compose(logicForNoFeatures, prepareDataNoFeatures)],
            [d => d.missingFeatures === true, R.compose(logicForMissingFeatures, prepareDataMissingFeatures)],
            [R.T, R.compose(logicForProductReleases, prepareData)]
        ])
    )(data);
}
