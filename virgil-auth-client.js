var request = require('request');

var BASE_URL = process.env.VIRGIL_AUTH_URL;

exports.obtainToken = function (grant, done) {
    return request.post({
        url: BASE_URL + '/authorization/actions/obtain-access-token',
        body: grant,
        json: true
    }, function(err, res, body) {
        if (err) {
            return done(err);
        }

        done(null, body);
    });
};

exports.refreshToken = function (grant, done) {
    return request.post({
        url: BASE_URL + '/authorization/actions/refresh-access-token',
        body: grant,
        json: true
    }, function(err, res, body) {
        if (err) {
            return done(err);
        }

        done(null, body);
    });
};