'use strict';

const contactService = require('./test-dummy-form/contactService');
const pluginApi = require('./test-dummy-form/pluginApi');

function isArray(value) {
    return value !== null &&
        typeof value === 'object' &&
        Object.prototype.toString.call(value) === '[object Array]';
}

function compareNames(name1, name2) {
    let result = name1 > name2 ? 1 : -1;
    return name1 === name2 ? 0 : result;
}

function compareContactRecords(record1, record2) {
    let result = compareNames(record1.lastName, record2.lastName);
    return result !== 0 ? result : compareNames(record1.firstName, record2.firstName);
}

function sortByContactName(contactRecords) {
    return isArray(contactRecords) ?
        contactRecords.sort(compareContactRecords) :
        [];
}

function getContactNames(callback) {
    let userId = pluginApi.getUserId();

    contactService.getContactNameList(userId, sortRecordsAndCallBack);

    function sortRecordsAndCallBack(error, contactNameRecords) {
        let sortedRecords = Boolean(error) ? null : sortByContactName(contactNameRecords);
        callback(error, sortedRecords);
    }
}

module.exports = {
    compareNames: compareNames,
    compareContactRecords: compareContactRecords,
    getContactNames: getContactNames,
    sortByContactName: sortByContactName
};
