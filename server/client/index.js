const {
    compose,
    cond,
    T
} = require('ramda');
const {
    logicForNoFeatures,
    prepareDataNoFeatures
 } = require('./no-features.js');
const {
    logicForMissingFeatures,
    prepareDataMissingFeatures
} = require('./missing-features.js');
const {
    logicForProductReleases,
    prepareDataForProductReleases
} = require('./product-releases.js');

////////////////////////////////////////////////////
// Functions to work with the Migration Analyzer //
//////////////////////////////////////////////////
function jarvisTemplate(data) {
    // Data format
    // {
    //     architectureChanges,
    //     currentVersion,
    //     detectedFeatures,
    //     missingFeatures,
    //     myComposerJSON,
    //     myComposerLOCK,
    //     noFeatures,
    //     onboarding,
    //     productReleases,
    //     releaseFeatures,
    //     releaseModules,
    //     recommendedFeatures,
    //     targets: null
    // }
    return `<!DOCTYPE html>
            <html lang="en" dir="ltr">

                <head>
                    <meta charset="utf-8">
                    <meta name="Description" content="Spryker tool that helps you migrate your project to the last available versions.">
                    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
                    <title>Spryker Jarvis</title>
                    <link rel="stylesheet" type="text/css" href="https://cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/4.3.1/css/bootstrap.min.css">
                    <link rel="stylesheet" type="text/css" href="index.css">
                </head>

                <body class="container">
                    <section>
                        <h1 id="spryker-jarvis">Spryker Jarvis <span class="badge badge-secondary">Beta</span></h1>
                        <div class="accordion" id="explain-jarvis">
                            <div class="card">
                                <div class="card-header" id="explain-jarvis-1-header">
                                    <button class="btn btn-link collapsed" type="button" data-toggle="collapse" data-target="#explain-jarvis-1" aria-expanded="false" aria-controls="explain-jarvis-1">
                                        What is Jarvis? 🤔
                                    </button>
                                </div>
                                <div id="explain-jarvis-1" class="collapse" aria-labelledby="explain-jarvis-1-header" data-parent="#explain-jarvis">
                                    <div class="card-body">
                                        <dl>
                                            <dt>What is the mission of Spryker Jarvis?</dt>
                                            <dd>To help you understand what is needed to keep your Spryker project up to date with our Product releases.</dd>
                                            <dt>To who Spryker Jarvis is useful?</dt>
                                            <dd>Developer, IT Manager, Product Owner/Manager that wants to understand the migration path for their Spryker project.</dd>
                                        </dl>
                                        <div class="alert alert-warning" role="alert">
                                            ⚠️ I am merely a tool to help you migrate your Spryker project, you are still responsible of your Spryker project when using my services.
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                    <section id="next-target">${nextTarget(data)}</section>
                    <!-- Libraries -->
                    <script type="text/javascript" src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.4.1/jquery.slim.min.js"></script>
                    <script type="text/javascript" src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.16.0/umd/popper.min.js"></script>
                    <script type="text/javascript" src="https://cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/4.4.1/js/bootstrap.min.js"></script>
                </body>

            </html>`;
}

function nextTarget(data) {
    return compose(
        cond([
            [d => d.noFeaturesMode === true, compose(logicForNoFeatures, prepareDataNoFeatures)],
            [d => d.missingFeaturesMode === true, compose(logicForMissingFeatures, prepareDataMissingFeatures)],
            [T, compose(logicForProductReleases, prepareDataForProductReleases)]
        ])
    )(data);
}

exports.jarvisTemplate = jarvisTemplate;
