////////////
// Utils //
//////////


// log :: a -> a
function log(content) {
    console.log(...arguments);
    return content;
}

// Write the migration analysis in the DOM
function render(selector, content) {
    document.getElementById(selector)
        .innerHTML = content;

    return selector;
}

// Used to parse Module markdown and proce HTML
const converter = new showdown.Converter();

function isNextMajor(last, newVersion) {
    return semVerMajor(newVersion) > semVerMajor(last) ? true : false;
}

function isNextMinor(last, newVersion) {
    return semVerMinor(newVersion) > semVerMinor(last) ? true : false;
}

function isNextPatched(last, newVersion) {
    return semVerPatched(newVersion) > semVerPatched(last) ? true : false;
}

// Used to generate random DOM id
// r :: Number
function r() {
    return Math.random()
        .toString(36)
        .substring(7);
}

const isNotNil = R.complement(R.isNil);

const nextMajorLink = version => `migrate-to-version-${R.concat(R.head(R.split('.', version)), '-0-0')}`;

// cleanDescription :: String -> String
const cleanDescription = description => R.compose(
    R.join('.<br>'),
    R.split('.'),
    R.trim
)(description);

const migrationLinkForModule = (packageName, version) => `https://documentation.spryker.com/module_migration_guides/mg-${R.last(R.split('/', packageName))}.htm#${nextMajorLink(version)}`;

function majorAvailable(mod) {
    const installedVersionMajor = R.head(R.split('.', R.prop('installedVersion', mod)));
    const lastVersionAvailableMajor = R.head(R.split('.', R.path(['package', 'version'], mod)));

    return lastVersionAvailableMajor > installedVersionMajor ? true : false;
}

function majorAvailableForModule(mod) {
    const installedVersionMajor = R.head(R.split('.', R.prop('version', mod)));
    const lastVersionAvailableMajor = R.head(R.split('.', R.path(['package', 'version'], mod)));

    return lastVersionAvailableMajor > installedVersionMajor ? true : false;
}

const mapIndexed = R.addIndex(R.map);

const isActive = index => index === 0 ? 'active' : '';

const isShow = index => index === 0 ? 'show' : '';

const semVerMajor = version => R.nth(0, R.split('.', version));

const semVerMinor = version => R.nth(1, R.split('.', version));

const semVerPatched = version => R.nth(2, R.split('.', version));

const templateUpToDate = content => [`<div class="alert alert-primary" role="alert">${content}</div>`];

const properName = (sep, prop, name) => R.join(`${R.prop('identifier', name)}`, R.split(sep, R.prop(prop, name)));

function navigationForTabs(listOfVersions) {
    return R.compose(
        R.join(''),
        mapIndexed((cur, index) => `<a
                                        class="nav-item nav-link ${isActive(index)}"
                                        id="nav-${properName('.', 'name', cur)}-tab"
                                        data-toggle="tab" href="#nav-${properName('.', 'name', cur)}"
                                        role="tab" aria-controls="nav-home"
                                        aria-selected="true">Version: ${R.prop('name', cur)}
                                    </a>`)
    )(listOfVersions);
}

function keepOnlyModulesFromOrgs(composer) {
    const modulesForOrgs = ['spryker', 'spryker-feature', 'spryker-shop', 'spryker-eco'];

    return R.compose(
        R.sortBy(R.prop(0)),
        R.filter(cur => R.contains(R.compose(
            R.head,
            R.split('/'),
            R.nth(0)
        )(cur), modulesForOrgs) ? true : false),
        R.toPairs,
        R.prop('require')
    )(composer);
}

const getNameAndVersionFromInstalledModules = R.compose(
    R.map(R.pick(['name', 'version', 'require'])),
    R.prop('packages')
);

const getModuleOrg = R.compose(
    R.head,
    R.split('/'),
    R.head
);

const specificTypeOfModules = types => moduleList => R.filter(cur => R.includes(getModuleOrg(cur), types), moduleList);

const findPackageForModule = currentList => mod => R.find(R.propEq('package', R.prop('module', mod)), currentList);

const findModuleForModule = currentList => mod => R.find(R.propEq('package', R.prop('name', mod)), currentList);

const reconstruct = keys => values => R.zipObj(keys, values);

const findInstalledVersion = composerLock => moduleList => R.map(
    R.compose(
        cur => R.append(R.prop('require', R.find(R.propEq('name', R.nth(0, cur)), getNameAndVersionFromInstalledModules(composerLock))), cur),
        cur => R.append(R.prop('version', R.find(R.propEq('name', R.nth(0, cur)), getNameAndVersionFromInstalledModules(composerLock))), cur)
    ),
    moduleList
);

// sortStrings :: (String, String) => Number
function sortStrings(a, b) {
    if (a < b) {
        return -1;
    } else if (a > b) {
        return 1;
    } else {
        return 0;
    }
}
