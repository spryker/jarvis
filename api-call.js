const request = require('request');
const {
  equals,
  prop
} = require('ramda');

function getReleaseAppData(data, errorCallback, callback) {
  const options = {
    url: 'https://release.spryker.com/migration-analysis',
    method: 'POST',
    body: data,
    json: true
  };

  return request(options, (error, response, body) => {
    if (error || equals(prop('code', body), 404) || equals(prop('code', body), 500)) {

      return errorCallback(error);

    } else {

      return callback(prop('result', body));

    }
  });
}


exports.getReleaseAppData = getReleaseAppData;
