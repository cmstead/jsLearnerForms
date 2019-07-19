/*
global

asyncContacts,
chai,
httpService,
pluginApi
*/

'use strict';

describe('Async Test Dummy Form', function () {

    let contactService;
    let responseData;

    beforeEach(function () {
        responseData = {};
        
        const httpInstance = httpService();
        const contactServiceInstance = contactService(httpInstance);
        const pluginApiInstance = pluginApi();

        asyncContacts(contactServiceInstance, pluginApiInstance);
    });

    describe('compareNames', function () {

        it('should return 0 when two values are equal');

        it('should return -1 when name1 comes before name2 alphabetically');

        it('should return 1 when name1 comes after name2 alphabetically');

    });

    describe('compareContactRecords', function () {

        it('should return 0 when first and last name are equal between two records');

        it('should return -1 when record1.lastName comes before record2.lastName alphabetically');

        it('should return 1 when record1.lastName comes after record2.lastName alphabetically');

        it('should return -1 when last names are equal and record1.firstName comes before record3.firstName alphabetically');

        it('should return 1 when last names are equal and record1.firstName comes after record3.firstName alphabetically');

    });

    describe('sortByContactName', function () {

        it('should return an array of records sorted by name');

        it('should return an empty array if passed argument is not an array');

    });

    describe('getContactNames', function () {

        it('should not throw error immediately when called');

        it('should correctly request contact names from a remote service');

        it('should call callback with error and a null value on failure');

        it('should call callback with a null error and an array of sorted names on success');

    });

});

