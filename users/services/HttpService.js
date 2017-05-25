const qs = require('qs');

module.exports = class HttpService {
    constructor() {

    }

    parseBody(body) {
        return Promise.resolve()
            .then(() => JSON.parse(body))
            .catch(() => null)
            .then((result) => {
                return result || Promise.resolve()
                        .then(() => qs.parse(body))
                        .catch(() => null)
            });
    }
};
