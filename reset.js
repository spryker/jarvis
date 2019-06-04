const { log } = require('./utils.js');
const { updateConfigFile } = require('./file-system.js');

const resetObject = {
    "lastCallToReleaseApp": null,
    "previousProjects": [],
    "lastProjectUsed": null
};

updateConfigFile(resetObject);
log('I have cleaned your local configuration. To use my services again please run -> node jarvis.js <path to your spryker project folder>');
