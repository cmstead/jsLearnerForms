'use strict';

function getUserId () {
    throw new Error('Unable to get UserId, API unavailable outside parent application');
}

module.exports = {
    getUserId: getUserId
};