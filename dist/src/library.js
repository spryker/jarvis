function prepareDataLibrary(data) {
    return R.evolve({
        releaseModules: R.map(cur => R.assoc('identifier', r(), cur))
    })(data);
}

function logicForLibrary(data) {
    return R.compose(
        templateForLibrary(data),
        R.join(''),
        R.map(templateForModule)
    )(data.releaseModules);
}

function templateForLibrary(data) {
    return function(content) {
        return `<h2>Welcome to Spryker Library</h2>
                <form class="margin-bottom">
                    <div class="form-row">
                        <div class="form-group col-md-6">
                          <label for="moduleSearch">Search for a module 🔍</label>
                          <input list="listOfModules" id="moduleSearch" name="moduleSearch" type="text" class="form-control">
                        </div>
                    </div>
                </form>
                <div>${content}</div>
                <datalist id="listOfModules">
                    ${R.join('', R.map(cur => `<option value="${cur.name}">${cur.name}</option>`, data.releaseModules))}
                </datalist>`;
    }
}

function searchEvents(releaseModules) {
    const input = document.querySelector('#moduleSearch');
    input.addEventListener('input', whatToDoOnEvent(releaseModules), false);
}

function whatToDoOnEvent(releaseModules) {
    return function(event) {
        log(event.target.value);
        const result = releaseModules.find(cur => cur.name === event.target.value);
        log(result);

        if (result) {
            document.querySelectorAll('.module-card').forEach(function(card) {
                card.classList.add('hidden');
            });
            document.querySelectorAll(`.mod-${result.name}`).forEach(function(card) {
                card.classList.remove('hidden');
            });
        }

        if (event.target.value === '') {
            document.querySelectorAll('.module-card').forEach(function(card) {
                card.classList.remove('hidden');
            });
        }
    };
}

function templateForModule(mod) {
    //log(mod);
    return `<div class="card margin-bottom module-card mod-${mod.name}">
                ${R.ifElse(
                    d => d === true,
                    () => `<div class="card-header">🚨 This module is deprecated ⚠️</div>`,
                    () => ''
                )(mod.deprecated)}
                <div class="card-body">
                    <h5 class="card-title">${mod.name}</h5>
                    <div class="row">
                        <div class="col-sm-12 col-md-6">
                            <p class="card-text">${cleanDescription(mod.description)}</p>
                        </div>
                        <div class="col-sm-12 col-md-6">
                            <dl>
                                <dt>Latest version</dt>
                                <dd>${mod.version}</dd>
                                <dt>Github repository</dt>
                                <dd><a rel="noopener" href="https://www.github.com/${mod.package}" target="_blank">${mod.package}</a></dd>
                                <dt>Documentation</dt>
                                <dd>${documentationLink(mod.doc_url)}</dd>
                                <dt>Version count</dt>
                                <dd>${mod.module_versions.length}</dd>
                            </dl>
                        </div>
                    </div>
                </div>
                ${R.ifElse(
                    d => d === true,
                    () => `<div class="card-footer">🚨 This module is deprecated ⚠️</div>`,
                    () => ''
                )(mod.deprecated)}
            </div>`;
}

function documentationLink(docUrl) {
    return R.ifElse(
        R.isNil,
        () => '-',
        docUrl => `<a rel="noopener" href="${docUrl}" target="_blank">Read the module documentation</a>`
    )(docUrl);
}
