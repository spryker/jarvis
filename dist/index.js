/* globals
	logicForOnlyModules:false,
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
            [d => R.isEmpty(d.target) || d.onlyModules === true, logicForOnlyModules],
            [d => d.missingFeatures === true, logicForMissingFeatures],
            [R.T, logicForProductReleases]
        ]),
        prepareData
    )(data);
}
