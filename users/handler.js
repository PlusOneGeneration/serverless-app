'use strict';

const firebase = require('firebase');

function getApp() {
    const config = {
        apiKey: "AIzaSyBtKInuDDQs-gx9P99RLbfaAnew8BhxMOA",
        authDomain: "serverless-app-6014d.firebaseapp.com",
        databaseURL: "https://serverless-app-6014d.firebaseio.com",
        projectId: "serverless-app-6014d",
        storageBucket: "serverless-app-6014d.appspot.com",
        messagingSenderId: "373661540340"
    };
    return firebase.initializeApp(config)
}

module.exports.create = (event, context, callback) => {
    const next = (err, body) => {
        if (err) {
            return callback(err);
        }

        const response = {
            statusCode: 200,
            body: JSON.stringify(body),
        };

        database.goOffline();
        callback(null, response);
    };

    let database = getApp().database();

    let user = {};

    try {
        user = JSON.parse(event.body)
    } catch (err) {
        // nothing for now
    }

    database
        .ref('users')
        .push()
        .set(event)
        .then(() => {
            next(null, user);
        })
        .catch((error) => {
            next(null, {
                error: error.message
            });
        })
};
