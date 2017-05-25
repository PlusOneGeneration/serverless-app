'use strict';

module.exports.create = (event, context, callback) => {
    const {UserService, HttpService} = require('./kits');

    const next = (err, body) => {
        console.log(err, body);

        if (err) {
            console.log(err, err.stack);

            return callback(null, {
                statusCode: 200,
                body: err.message
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

    console.log({HttpService});


    HttpService.parseBody(event.body)
        .then((body) => {
            console.log({event, body});

            next(null, body);
            // UserService.addUser(event)
            //     .then((user) => {
            //         next(null, body);
            //     }, next);
        });

};
