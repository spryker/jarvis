"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var no_features_1 = require("./no-features");
var product_releases_1 = require("./product-releases");
var missing_features_1 = require("./missing-features");
var utils_1 = require("./utils");
var ramda_1 = require("ramda");
////////////////////////////////////////////////////
// Functions to work with the Migration Analyzer //
//////////////////////////////////////////////////
function nextTarget(el, data) {
    return ramda_1.compose(function (d) { return utils_1.render(el, d); }, ramda_1.cond([
        [function (d) { return d.noFeatures === true; }, ramda_1.compose(no_features_1.logicForNoFeatures, no_features_1.prepareDataNoFeatures)],
        [function (d) { return d.missingFeatures === true; }, ramda_1.compose(missing_features_1.logicForMissingFeatures, missing_features_1.prepareDataMissingFeatures)],
        [ramda_1.T, ramda_1.compose(product_releases_1.logicForProductReleases, product_releases_1.prepareData)]
    ]))(data);
}
exports.nextTarget = nextTarget;
