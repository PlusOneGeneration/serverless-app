module.exports = class FirebaseUserStorage {
    constructor(firebase) {
        this.firebase = firebase;
    }

    addUser(user) {
        return Promise.resolve()
            .then(() => {
                return this.firebase.database()
                    .ref('users')
                    .push()
                    .set(user)
                    .then(() => user)
            })
    }

    close() {
        return Promise.resolve(this.firebase.database().goOffline());
    }
};
