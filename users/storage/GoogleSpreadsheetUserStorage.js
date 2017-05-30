module.exports = class GoogleSpreadsheetUserStorage {
    constructor(googleConfig) {
        this.googleConfig = googleConfig;
    }

    addUser(user) {
        return new Promise((resolve, reject) => {
            const GoogleSpreadsheet = require('google-spreadsheet');
            const doc = new GoogleSpreadsheet(this.googleConfig.spreadsheet.key);

            doc.useServiceAccountAuth(this.googleConfig.serviceKey, function (err) {
                if (err) return reject(err);

                const json = JSON.stringify(user);
                const fields = Object.assign({JSON: json}, user);
                doc.addRow(1, fields, function (err) {
                    if (err) return reject(err);
                    resolve();
                });
            });
        })
    }

    close() {
        return Promise.resolve();
    }
};
