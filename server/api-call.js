const request = require('request');

function getReleaseAppData(data, errorCallback, callback) {
    const options = {
        url: 'https://api.release.spryker.com/migration-analysis.json',
        method: 'POST',
        body: data,
        json: true
    };

    return request(options, (error, response, body) => {
        const errorCode = body.code;

        if (error || errorCode === 404 || errorCode === 500) {

            return errorCallback(error);

        } else {
            return callback(body.result);

        }
    });
}


exports.getReleaseAppData = getReleaseAppData;
