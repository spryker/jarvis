const fs = require('fs');

const resetObject = {
  "lastCallToReleaseApp": null,
  "previousProjects": []
};

function updateConfigFile(data) {
  fs.writeFileSync('config.json', JSON.stringify(data), 'utf8');

  return data;
}

updateConfigFile(resetObject);
