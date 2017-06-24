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

        testDummyForm = require('../src/4_test-dummy-form');
    });

    afterEach(function () {
        mockery.deregisterAll();
        mockery.disable();
    });

    describe('compareNames', function () {

        // Checking if two values are equal can be done with assert.equal.
        // Assert is part of the Chai testing package.
        it('should return 0 when two values are equal');

        // Equality checking is one of the most common ways to test
        // the results of code, so it's important to get comnfortable with it
        it('should return -1 when name1 comes before name2 alphabetically');

        // It's important to test all cases. The function, compareNames, has
        // three distinct outcomes. One of the core ideas in testing your code
        // is to test until you're bored. Ideally, being bored will come at
        // about the same time you've tested all cases.
        it('should return 1 when name1 comes after name2 alphabetically');

    });

    describe('compareContactRecords', function () {

        // Typically it's not necessary to test an extracted function, but it is useful to see
        // tests written in small steps at times. Let's write some tests like we would
        // normally do.
        it('should return 0 when first and last name are equal between two records');

        // Let's just get the next couple tests out of the way. They're like the first ones we wrote,
        // but comparing records.
        it('should return -1 when record1.lastName comes before record2.lastName alphabetically');

        // After completing this test, we will have repeated code. Let's do this in two parts:
        // - complete the test 
        // - lift the duplicated records into a beforeEach block
        it('should return 1 when record1.lastName comes after record2.lastName alphabetically');

        it('should return -1 when last names are equal and record1.firstName comes before record2.firstName alphabetically');
        it('should return 1 when last names are equal and record1.firstName comes after record2.firstName alphabetically');

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
