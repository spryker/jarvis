const { updateConfigFile } = require('./utils.js');

const resetObject = {
  "lastCallToReleaseApp": null,
  "previousProjects": []
};

updateConfigFile(resetObject);
