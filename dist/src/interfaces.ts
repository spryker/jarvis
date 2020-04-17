export interface JarvisData {
    architectureChanges: Array<ArchitectureChanges>;
    currentVersion: semVer;
    detectedFeatures: Array<Feature>;
    missingFeatures: boolean;
    myComposerJSON: ComposerJson;
    myComposerLOCK: ComposerLock;
    noFeatures: boolean;
    onboarding: [];
    productReleases: Array<ProductRelease>;
    releaseFeatures: Array<Feature>;
    releaseModules: Array<Module>;
    recommendedFeatures: Array<Feature>;
    targets: object | null;
}

export interface ArchitectureChanges {
    created: string;
    horizontal_barrier_title: string;
    horizontal_barrier_guide_url: string | null;
    horizontal_barrier_description: string;
    modules: Array<ModuleInArchitectureChange>;
    "title": "Float stock support rollback",
    "description": "Stock allocation is a key component of any Ecommerce system. Spryker’s engineering team has evaluated multiple approaches for adding support for stock values in the float format.\r\nOne of our main goal was to minimize migration efforts for our customers.\r\n\r\nThe initial solution was requiring changes in many key modules. After additional design efforts we have found a better, less invasive way to implement the  float stock support which will be released soon."
}

interface ModuleInArchitectureChange {
	type: versionType;
	moduleType: number;
	changelog: string;
	version: {
		before?: semVer;
		after?: semVer;
	};
	name: string;
	package: orgPackage;
}

export interface ComposerJson {
	name: orgPackage;
    description: string;
    require: {
       [propName: string]: semVer;
    };
    [propName: string]: any;
}

export interface ComposerLock {
	'content-hash': string;
	package: Array<Package>;
	[propName: string]: any;
}

interface Package {
    name: orgPackage;
    version: semVer;
    source: {
        [propName: string]: any;
    };
    dist: {
        [propName: string]: any;
    };
    require: {
        [propName: string]: semVer;
    };
    'require-dev': {
        [propName: string]: semVer;
    };
    'suggest': {
        [propName: string]: semVer;
    };
    [propName: string]: any;
}

export interface ProductRelease {
    key: productReleaseId;
    version: string;
    release_date: string;
    type: versionType;
    feature_versions: Array<FeatureVersionInProductRelease>;
    type_string: string;
}

interface FeatureVersionInProductRelease {
	feature_id: featureId;
	name: string;
	data: {
		composer: Composer;
	},
	guide_url: string | null;
	key: productReleaseId;
	feature: {
		id: featureId;
	    name: string;
	    description: string;
	    version: string;
	    slug: string;
	    status: number;
		package: orgPackage;
	    shop_type_string: string | null;
	    status_string: string;
	}
}

export interface Feature {
    id: featureId;
    name: string;
    description: string;
    version: string;
    slug: string;
    status: number;
    modules: Array<ModuleInFeature>;
    depending_features: Array<Feature>;
    feature_versions: Array<FeatureVersion>;
    modules_included: {
    	[propName: string]: semVer;
    };
    modules_missing: Array<Module>;
    package: orgPackage;
    shop_type_string: string | null;
    status_string: string;
}

interface FeatureVersion {
	id: featureVersionId;
	feature_id: featureId;
	name: string;
	key: productReleaseId;
	created: string;
	modified: string;
	data: {
		composer: Composer;
	};
	guide_url: string | null;
}

interface Composer {
	name: orgPackage;
	description: string;
	type: string;
	license: string;
	'minimum-stability': string;
	'prefer-stable': boolean;
	require: {
		[propName: string]: semVer;
	};
	extra: object;
}

interface ModuleInFeature {
	id: moduleId;
	name: string;
	version: semVer;
	type: number;
	deprecated: boolean;
	description: string;
	doc_url: string | null;
	_joinData: JoinData;
	FeaturesModules: {
		feature_id: featureId
	};
	tag_list: string;
	package: orgPackage;
	type_string: string;
    functional_type_string: string | null;
    is_functional_dependency: boolean | null;
    short_name: string;
    full_name: string;
}

interface JoinData {
	id: number;
	feature_id: featureId;
	module_id: moduleId;
	relation: number;
	version: semVer;
	relation_string: string;
	is_dependency_relation: boolean;
}

export interface Module {
    id: moduleId;
    name: string;
    version: semVer;
    type: number;
    deprecated: boolean;
    description: string;
    doc_url: string | null;
    module_versions: Array<ModuleVersion>;
    tag_list: string;
    package: orgPackage;
    type_string: string;
    functional_type_string: string | null;
    is_functional_dependency: boolean | null;
    short_name: string;
    full_name: string;
}

interface ModuleVersion {
	module_id: moduleId;
	name: semVer;
	description: string;
	dependencies: {
		require: {
			[propName: string]: semVer;
		};
		require_dev: {
			[propName: string]: semVer;
		};
		suggest: {
			[propName: string]: semVer;
		};
	};
}

export type semVer = string; // "x.y.z"
export type orgPackage = string; // "organisation/package"
export type featureId = number;
export type moduleId = number;
export type featureVersionId = number;
export type productReleaseId = string;
type versionType = "minor" | "patch" | "major";
export type DOM = string;
