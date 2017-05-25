'use strict';

module.exports.create = (event, context, callback) => {
    const {UserService, HttpService} = require('./kits');

    const next = (err, body) => {
        if (err) {
            return callback(err);
        }

        const response = {
            statusCode: 200,
            body: JSON.stringify(body),
        };

        UserService.flush().then(() => {
            callback(null, response);
        }, callback);
    };

    let user = {};

    try {
        user = JSON.parse(event.body)
    } catch (err) {
        // nothing for now
    }

    UserService.addUser(event)
        .then((user) => {
            next(null, user);
        }, next);
};
