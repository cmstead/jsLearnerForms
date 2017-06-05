'use strict';

const assert = require('chai').assert;
const sinon = require('sinon');
const mockery = require('mockery');
const prettyJson = require('./helpers/prettyJson');


describe('Test Dummy Form', function () {

    require('./helpers/approvalsConfig');

    let testDummyForm;

    beforeEach(function () {
        mockery.enable({
            warnOnReplace: false,
            warnOnUnregistered: false
        });

        testDummyForm = require('../src/test-dummy-form/codeUnderTest');
    });

    afterEach(function () {
        mockery.deregisterAll();
        mockery.disable();
    });

    describe('compareNames', function () {

        it('should return 0 when two values are equal');
        it('should return -1 when name 1 comes before name 2 alphabetically');
        it('should return 1 when name 1 comes after name 2 alphabetically');

    });

    describe('compareContactRecords', function () {
        
        it('should return 0 when first and last name are equal between two records');
        it('should return -1 when record1.firstName comes before record2.firstName alphabetically');
        it('should return 1 when record1.firstName comes after record2.firstName alphabetically');
        it('should return -1 when first names are equal and record1.lastName comes before record2.lastName alphabetically');
        it('should return 1 when first names are equal and record1.lastName comes after record2.lastName alphabetically');

    });

    describe('sortByContactName', function () {
        
        it('should return an array of records sorted by name');
        it('should return null if passed argument is not an array');

    });

    describe('getContactNames', function () {
        
        it('should not throw error immediately when called');
        it('should call callback with a null error and an array of sorted names on success');
        it('should call callback with error and a null value on failure');

    });

});

if (typeof global.runQuokkaMochaBdd === 'function') {
    runQuokkaMochaBdd();
}