'use strict';

function send() {
    return new Promise(function (resolve, reject) {
        setTimeout(function () {
            reject('Unable to establish network connection!');
        }, 75);
    });
}

const httpApi = {
    send: send
}

module.exports = {
    delete: () => httpApi,
    get: () => httpApi,
    post: () => httpApi,
    put: () => httpApi
};
