const {
  log,
  updateConfigFile
} = require('./utils.js');

const resetObject = {
  "lastCallToReleaseApp": null,
  "previousProjects": []
};

updateConfigFile(resetObject);
log('I have cleaned your local configuration. To use my services again please run -> node jarvis.js <path to your spryker project folder>');
