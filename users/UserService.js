"use strict";

module.exports = class UserService {
    constructor(UserStorage) {
        this.UserStorage = UserStorage;
    }

    addUser(user) {
        return Promise.resolve(this.UserStorage.addUser(user))
            .then(() => user);
    }

    flush() {
        return Promise.resolve(this.UserStorage.close());
    }
};
