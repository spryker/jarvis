const fs = require('fs');

function updateConfigFile(data) {
  fs.writeFileSync('config.json', JSON.stringify(data), 'utf8');

  return data;
}

exports.updateConfigFile = updateConfigFile;
