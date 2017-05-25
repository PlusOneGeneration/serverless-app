const kits = require('kits');

module.exports = kits({
    config: () => require('config'),
    firebase: ({config}) => {
        const firebase = require('firebase');
        firebase.initializeApp(config.get('firebase'));
        return firebase;
    },
    UserService: ({UserStorage}) => {
        const UserService = require('./UserService');
        return new UserService(UserStorage);
    },
    UserStorage: ({config}) => {
        const Storage = require('./storage/GoogleSpreadsheetUserStorage');
        return new Storage(config.get('google'));
    },
    HttpService: () => {
        const HttpService = require('./HttpService');
        return new HttpService();
    }
});