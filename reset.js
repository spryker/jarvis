const {
  log,
  updateConfigFile
} = require('./utils.js');

const resetObject = {
  "lastCallToReleaseApp": null,
  "previousProjects": []
};

updateConfigFile(resetObject);
log('Your local configuration has been reset. To use it again please run -> node app.js <path to your spryker project folder>');
