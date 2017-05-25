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

    HttpService.parseBody(event.body)
        .then((body) => {
            UserService.addUser(event)
                .then((user) => {
                    next(null, body);
                }, next);
        });

};
