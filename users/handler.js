'use strict';

module.exports.create = (event, context, callback) => {
    const {UserService, HttpService} = require('./kits');

    const next = (err, body) => {
        if (err) {
            console.log('error', err);

            return callback(null, {
                statusCode: 500,
                body: JSON.stringify(err)
            });
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
            // console.log({event, body});

            UserService.addUser(body)
                .then((user) => next(null, user))
                .catch(next);
        });

};
