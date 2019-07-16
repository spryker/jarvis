/* globals
	stepsToHitTarget:false,
	render:false
*/

/* exported
	nextTarget
*/

////////////////////////////////////////////////////
// Functions to work with the Migration Analyzer //
//////////////////////////////////////////////////


function nextTarget(el, data) {
    return render(el, stepsToHitTarget(data));
}
