/* global httpService, pluginApi, asyncContacts */

'use strict';

describe('Test Dummy Form', function () {

    let contactService;

    beforeEach(function () {
        const httpInstance = httpService();
        const contactServiceInstance = contactService(httpInstance);
        const pluginApiInstance = pluginApi();
    
        return asyncContacts(contactServiceInstance, pluginApiInstance);
    });

    // For this first suite of tests, we are going to work with comparing strings
    // The goal is to test that our string compare function works as expected
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

    // Our second suite of tests will validate the behavior of a record comparison
    // function.  We will need to create records which look like the following:
    // { firstName: 'first name', lastName: 'last name' } 
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

        // We will need to introduce another record to test this next behavior.
        // By reading the description, what does this new record need to contain?
        it('should return -1 when last names are equal and record1.firstName comes before record3.firstName alphabetically');

        // We could use the same record from the previous test to run this test case as well
        // If this generates duplicate code, how would we resolve that?
        it('should return 1 when last names are equal and record1.firstName comes after record3.firstName alphabetically');

    });

    describe('sortByContactName', function () {

        // In this test we want to approve the output from the sort method.
        // the verify method available globally. Try the following to see how
        // to use it:
        // console.log(exploreFunction(verify));
        it('should return an array of records sorted by name');

        // We want to make sure that, even in the worst case scenario,
        // sortByContactName always returns an array, so a calling function
        // doesn't fail on a type error
        it('should return an empty array if passed argument is not an array');

    });

    describe('getContactNames', function () {

        // To fix this issue you will need to understand how the Mockery
        // library works. The beforeEach at the very top of this test will
        // give you a place to start.
        // Assert has a method "doesNothThrow." This would be quite useful here
        it('should not throw error immediately when called');

        // Sinon is a library built for handling cases where you want to get a view
        // of how functions are called within your tests. Let's spy on something and
        // approve the results.
        it('should correctly request contact names from a remote service');

        // We will need to modify our setup a little more to ensure we
        // get an error. It might be useful to know when an error occurs,
        // promises typically call the reject method.
        // - First get the test working
        // - Second remove the asynchronicity from the test
        it('should call callback with error and a null value on failure');

        // Be careful with this one, approvals within promises produces some really
        // strange output! This test will start almost the same as the error test.
        // - First set promiseState.error to true, then see what happens
        // - Add records to the promise state and verify on the full result
        it('should call callback with a null error and an array of sorted names on success');

    });

});

