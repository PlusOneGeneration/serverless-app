const kits = require('kits');

module.exports = kits({
    config: () => require('./config'),
    firebase: ({config}) => {
        const firebase = require('firebase');
        firebase.initializeApp(config.firebase);
        return firebase;
    },
    UserService: ({UserStorage}) => {
        const UserService = require('./UserService');
        return new UserService(UserStorage);
    },
    UserStorage: ({firebase}) => {
        const Storage = require('./storage/FirebaseUserStorage');
        return new Storage(firebase);
    },
    HttpService: () => {
        const HttpService = require('./HttpService');
        return new HttpService();
    }
});