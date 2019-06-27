// eslint-disable-next-line
function httpService() {
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

    return {
        delete: () => httpApi,
        get: () => httpApi,
        post: () => httpApi,
        put: () => httpApi
    };

}
