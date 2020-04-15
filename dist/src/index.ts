import {
	logicForNoFeatures,
	prepareDataNoFeatures
} from './no-features';
import {
	logicForProductReleases,
	prepareData
} from './product-releases';
import {
	logicForMissingFeatures,
	prepareDataMissingFeatures
} from './missing-features';
import { render } from './utils';
import {
	compose,
	cond,
	T
} from 'ramda';
import { JarvisData } from './interfaces';

////////////////////////////////////////////////////
// Functions to work with the Migration Analyzer //
//////////////////////////////////////////////////

export function nextTarget(el: string, data: JarvisData): string {
    return compose(
        (d: string): string => render(el, d),
        cond([
            [(d: JarvisData): boolean => d.noFeatures === true, compose(logicForNoFeatures, prepareDataNoFeatures)],
            [(d: JarvisData): boolean => d.missingFeatures === true, compose(logicForMissingFeatures, prepareDataMissingFeatures)],
            [T, compose(logicForProductReleases, prepareData)]
        ])
    )(data);
}
