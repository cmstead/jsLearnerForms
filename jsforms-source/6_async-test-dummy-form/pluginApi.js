// eslint-disable-next-line
function pluginApiService() {
    'use strict';

    function getUserId() {
        throw new Error('Unable to get UserId, API unavailable outside parent application');
    }

    return {
        getUserId: getUserId
    };
}
