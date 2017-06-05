'use strict';

function send(callback) {
    return new Promise(function (resolve, reject) {
        setTimeout(function () {
            throw new Error('Unable to establish network connection!');
        }, 75);
    });
}

module.exports = {
    delete: () => () => send(),
    get: () => () => send(),
    post: () => () => send(),
    put: () => () => send()
};