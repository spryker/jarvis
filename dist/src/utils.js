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

const isNotNil = R.complement(R.isNil);
const isNotEmpty = R.complement(R.isEmpty);

// Used to parse Module markdown and proce HTML
const converter = new showdown.Converter();

// Check if the new version is a major
function isNextMajor(last, newVersion) {
  if (semVerMajor(newVersion) === '0') {
    if (semVerMinor(newVersion) === '0') {
      return isNextPatched(last, newVersion);
    } else {
      return isNextMinor(last, newVersion);
    }
  } else {
    return semVerMajor(newVersion) > semVerMajor(last) ? true : false;
  }
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

const nextMajorLink = version => `migrate-to-version-${R.concat(R.head(R.split('.', version)), '-0-0')}`;

// cleanDescription :: String -> String
const cleanDescription = description => R.compose(
  R.join('.<br>'),
  R.split('.'),
  R.trim
)(description);

const migrationLinkForModule = (packageName, version) => `https://documentation.spryker.com/module_migration_guides/mg-${R.last(R.split('/', packageName))}.htm#${nextMajorLink(version)}`;

function majorAvailable(mod) {
  const installedVersion = R.split('.', R.prop('installedVersion', mod));
  const lastVersionAvailable = R.split('.', R.path(['package', 'version'], mod));

  // version = 0.x.z
  if (R.nth(0, installedVersion) === '0' && R.nth(0, lastVersionAvailable) === '0') {
    // version = 0.0.z
    if (R.nth(1, installedVersion) === '0' && R.nth(1, lastVersionAvailable) === '0') {
      return R.nth(2, lastVersionAvailable) > R.nth(2, installedVersion) ? true : false;
    } else {
      return R.nth(1, lastVersionAvailable) > R.nth(1, installedVersion) ? true : false;
    }
  } else {
    return R.nth(0, lastVersionAvailable) > R.nth(0, installedVersion) ? true : false;
  }
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

const keepOnlyVersionsInMajor = version => listOfVersion => {
  // version = 0.x.z
  if (semVerMajor(version) === 0) {
    // version = 0.0.z
    if (semVerMinor(version) === 0) {
      return R.filter(cur => isNotNil(R.prop('guide_url', cur)) && R.prop('name', cur) >= '0.0.0' && R.prop('name', cur) <= version, listOfVersion);
    } else {
      return R.filter(cur => isNotNil(R.prop('guide_url', cur)) && R.prop('name', cur) >= `0.${semVerMinor(version)}.0` && R.prop('name', cur) <= version, listOfVersion);
    }
  } else {
    return R.filter(cur => isNotNil(R.prop('guide_url', cur)) && R.prop('name', cur) >= `${semVerMajor(version)}.0.0` && R.prop('name', cur) <= version, listOfVersion);
  }
}

function migrationGuideExist(version, packageName) {
  return R.compose(
    R.cond([
      [p => R.isNil(p), R.always('')],
      [p => R.equals('n/a', R.prop('guide_url', p)), R.always('<div class="alert alert-warning" role="alert">⚠️ No migration needed ⚠️</div>')],
      [R.T, p => `<a rel="noopener" href="${R.prop('guide_url', p)}" target="_blank" class="btn btn-warning">Migration guide</a>`]
    ]),
    R.head,
    keepOnlyVersionsInMajor(version),
    R.prop('module_versions'),
    p => R.find(R.propEq('package', p), releaseModules)
  )(packageName);
}
