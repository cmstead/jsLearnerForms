/********************************************************************

Javascript Test Dummy Form

The test dummy student should feel confident with their skills in first
through third forms. Now is the time to apply that knowledge to 
begin writing deep, rich tests around code which may be trivial or
may be nearly inscrutable.

In the test dummy form, the student will start by understanding how 
to simply write a test case, but as the form progresses, the successful
student will learn to identify seams, create stubs and mocks and 
understand the dim of object reference manipulation.

A successful test dummy form student will be able to understand and
apply all of the previous form techniques and test them.  Test
dummy form will introduce the following:

- Defining a testable unit
- Stubs
- Spies
- Mocks
- Code seams
- Programming patterns
- Code deduplication

*********************************************************************/


// Movement 1

// Changes made:

it('should return 0 when two values are equal', function () {
    let result = testDummyForm.compareNames('name', 'name');
    assert.equal(result, 0);
});

// Did this test pass?


// Movement 2

// Changes made:

it('should return -1 when name1 comes before name2 alphabetically', function () {
    let result = testDummyForm.compareNames('Joe', 'Sally');
    assert.equal(result, -1);
});

// Did the test pass?


// Movement 3

// Changes made:

it('should return 1 when name1 comes after name2 alphabetically', function () {
    let result = testDummyForm.compareNames('Sally', 'Joe');
    assert.equal(result, 1);
});

// Did the test pass?


// Movement 4

// Changes made:

it('should return 0 when first and last name are equal between two records', function () {
    let record1 = { firstName: 'Joe', lastName: 'Smith' };
    let result = testDummyForm.compareContactRecords(record1, record1);
    assert.equal(result, 0);
});

// Did the test pass?


// Movement 5

// Changes made:

it('should return -1 when record1.lastName comes before record2.lastName alphabetically', function () {
    let record1 = { firstName: 'Joe', lastName: 'Smith' };
    let record2 = { firstName: 'Sally', lastName: 'Jensen' };
    let result = testDummyForm.compareContactRecords(record2, record1);

    assert.equal(result, -1);
});

// Did the test pass?


// Movement 6

// Changes made:

it('should return 1 when record1.lastName comes after record2.lastName alphabetically', function () {
    let record1 = { firstName: 'Joe', lastName: 'Smith' };
    let record2 = { firstName: 'Sally', lastName: 'Jensen' };
    let result = testDummyForm.compareContactRecords(record1, record2);

    assert.equal(result, 1);
});

// Did the test pass?


// Movement 7

// Changes made:

// describe('compareContactRecords', function () {

let record1;
let record2;

beforeEach(function () {
    record1 = { firstName: 'Joe', lastName: 'Smith' };
    record2 = { firstName: 'Sally', lastName: 'Jensen' };
});

// Did the tests still run?


// Movement 8

// Changes made:

it('should return 0 when first and last name are equal between two records', function () {
    let result = testDummyForm.compareContactRecords(record1, record1);
    assert.equal(result, 0);
});

it('should return -1 when record1.lastName comes before record2.lastName alphabetically', function () {
    let result = testDummyForm.compareContactRecords(record2, record1);
    assert.equal(result, -1);
});

it('should return 1 when record1.lastName comes after record2.lastName alphabetically', function () {
    let result = testDummyForm.compareContactRecords(record1, record2);
    assert.equal(result, 1);
});

// Did the tests still pass?


// Movement 9

// Changes made:

it('should return -1 when last names are equal and record1.firstName comes before record3.firstName alphabetically', function () {
    let record3 = { firstName: 'Nigel', lastName: 'Smith' };
    let result = testDummyForm.compareContactRecords(record1, record3);
    assert.equal(result, -1);
});

// Did the tests still pass?


// Movement 10

// Changes made:

it('should return 1 when last names are equal and record1.firstName comes after record3.firstName alphabetically', function () {
    let record3 = { firstName: 'Nigel', lastName: 'Smith' };
    let result = testDummyForm.compareContactRecords(record3, record1);
    assert.equal(result, 1);
});

// Did the tests still pass?


// Movement 11

// Changes made:

let record1;
let record2;
let record3;

beforeEach(function () {
    record1 = { firstName: 'Joe', lastName: 'Smith' };
    record2 = { firstName: 'Sally', lastName: 'Jensen' };
    record3 = { firstName: 'Nigel', lastName: 'Smith' };
});

it('should return -1 when last names are equal and record1.firstName comes before record3.firstName alphabetically', function () {
    let result = testDummyForm.compareContactRecords(record1, record3);
    assert.equal(result, -1);
});

it('should return 1 when last names are equal and record1.firstName comes after record3.firstName alphabetically', function () {
    let result = testDummyForm.compareContactRecords(record3, record1);
    assert.equal(result, 1);
});

// Do the tests still run?


// Movement 12

// Changes made:

it('should return an array of records sorted by name', function () {
    console.log(exploreFunction(verify));

    let result = testDummyForm.sortByContactName(contacts);
    verify(this, JSON.stringify(result, null, 4));
});

// Do the tests still pass?


// Movement 13

// Changes made:

it('should return an empty array if passed argument is not an array', function () {
    let result = testDummyForm.sortByContactName({});
    assert.equal(JSON.stringify(result), '[]');
});

// Do the tests still pass?


// Movement 14

// Changes made:

// First beforeEach looks like this:
beforeEach(function () {
    mockery.enable({
        warnOnReplace: false,
        warnOnUnregistered: false
    });

    let pluginApiFake = {
        getUserId: function () { }
    };

    mockery.registerMock('./test-dummy-form/pluginApi', pluginApiFake);

    testDummyForm = require('../src/4_test-dummy-form');
});

// The test looks like this:
it('should not throw error immediately when called', function () {
    assert.doesNotThrow(testDummyForm.getContactNames.bind(null, () => { }));
});

// Do the tests still pass?


// Movement 15

// Changes made:

// First beforeEach should now look like this:

let testDummyForm;
let httpFake = {};
let pluginApiFake;

beforeEach(function () {
    mockery.enable({
        warnOnReplace: false,
        warnOnUnregistered: false
    });

    pluginApiFake = {
        getUserId: function () {
            return 12345;
        }
    };

    httpFake.get = sinon.spy(function () {
        return {
            send: function () {
                return new Promise(function (resolve, reject) {
                    resolve([]);
                });
            }
        }
    });

    mockery.registerMock('./test-dummy-form/pluginApi', pluginApiFake);
    mockery.registerMock('./http', httpFake);

    testDummyForm = require('../src/4_test-dummy-form');
});

// The test should look like this:
it('should correctly request contact names from a remote service', function () {
    testDummyForm.getContactNames(function () { });
    verify(this, prettyJson(httpFake.get.args));
});

// Do the tests still pass?


// Movement 16

// Changes made:

// Changes to beforeEach:
let testDummyForm;
let httpFake = {};
// Added promise state here
let promiseState = {
    error: false
};
let pluginApiFake;

beforeEach(function () {
    mockery.enable({
        warnOnReplace: false,
        warnOnUnregistered: false
    });

    pluginApiFake = {
        getUserId: function () {
            return 12345;
        }
    };

    promiseState.error = false; // Always reset your values!

    httpFake.get = sinon.spy(function () {
        return {
            send: function () {
                return new Promise(function (resolve, reject) {
                    // Checking promise state here
                    if (promiseState.error) {
                        reject(new Error('Unable to complete request'));
                    } else {
                        resolve([]);
                    }
                });
            }
        }
    });

    mockery.registerMock('./test-dummy-form/pluginApi', pluginApiFake);
    mockery.registerMock('./http', httpFake);

    testDummyForm = require('../src/4_test-dummy-form');
});

// Changes to test:
it('should call callback with error and a null value on failure', function () {
    promiseState.error = true;
    let callbackSpy = sinon.spy(() => verify(this, prettyJson(callbackSpy.args)));
    testDummyForm.getContactNames(callbackSpy);
});

// Do the tests still pass?


// Movement 17

// Changes made:

// Changes to beforeEach:

let testDummyForm;
let httpFake = {};
let promiseState = {
    error: false,
    // Added records property here
    records: []
};
let pluginApiFake;

beforeEach(function () {
    mockery.enable({
        warnOnReplace: false,
        warnOnUnregistered: false
    });

    pluginApiFake = {
        getUserId: function () {
            return 12345;
        }
    };

    promiseState.error = false; // Always reset your values!
    promiseState.records = []; // setting records property to []

    httpFake.get = sinon.spy(function () {
        return {
            send: function () {
                return new Promise(function (resolve, reject) {
                    if (promiseState.error) {
                        reject(new Error('Unable to complete request'));
                    } else {
                        // resolving with records property here
                        resolve(promiseState.records);
                    }
                });
            }
        }
    });

    mockery.registerMock('./test-dummy-form/pluginApi', pluginApiFake);
    mockery.registerMock('./http', httpFake);

    testDummyForm = require('../src/4_test-dummy-form');
});

// Changes to test:

it('should call callback with a null error and an array of sorted names on success', function () {
    let contactRecords = [{ firstName: 'Joe', lastName: 'Smith' },
    { firstName: 'Sally', lastName: 'Jensen' },
    { firstName: 'Nigel', lastName: 'Smith' }];

    promiseState.error = false;
    promiseState.records = contactRecords;

    let callbackSpy = sinon.spy(() => verify(this, prettyJson(callbackSpy.args)));
    testDummyForm.getContactNames(callbackSpy);
});

// Do the tests still pass?

/****************************************************************
* 
* Though this will walk you through creating a passing test
* suite, this is not the end of your testing journey. What
* kinds of improvements could be made to this code in order
* to make the tests more reliable? Could you create helpers
* which might make the tests easier to write? Could you
* do something to make the promise structure more deterministic?
* These are the questions an accomplished Language Forms student
* might ask.
*
*****************************************************************/

// Final test code:

'use strict';

if (typeof exploreFunction !== 'function') {
    require('quokka-signet-explorer').before();
}

const assert = require('chai').assert;
const sinon = require('sinon');
const mockery = require('mockery');
const prettyJson = require('./helpers/prettyJson');

describe('Test Dummy Form', function () {

    require('./helpers/approvalsConfig');

    let testDummyForm;
    let httpFake = {};
    let promiseState = {
        error: false,
        records: []
    };
    let pluginApiFake;

    beforeEach(function () {
        mockery.enable({
            warnOnReplace: false,
            warnOnUnregistered: false
        });

        pluginApiFake = {
            getUserId: function () {
                return 12345;
            }
        };

        promiseState.error = false;
        promiseState.records = [];

        httpFake.get = sinon.spy(function () {
            return {
                send: function () {
                    return new Promise(function (resolve, reject) {
                        if (promiseState.error) {
                            reject(new Error('Unable to complete request'));
                        } else {
                            resolve(promiseState.records);
                        }
                    });
                }
            }
        });

        mockery.registerMock('./test-dummy-form/pluginApi', pluginApiFake);
        mockery.registerMock('./http', httpFake);

        testDummyForm = require('../src/4_test-dummy-form');
    });

    afterEach(function () {
        mockery.deregisterAll();
        mockery.disable();
    });

    describe('compareNames', function () {

        it('should return 0 when two values are equal', function () {
            let result = testDummyForm.compareNames('name', 'name');
            assert.equal(result, 0);
        });

        it('should return -1 when name1 comes before name2 alphabetically', function () {
            let result = testDummyForm.compareNames('Joe', 'Sally');
            assert.equal(result, -1);
        });

        it('should return 1 when name1 comes after name2 alphabetically', function () {
            let result = testDummyForm.compareNames('Sally', 'Joe');
            assert.equal(result, 1);
        });

    });

    describe('compareContactRecords', function () {

        let record1;
        let record2;
        let record3;

        beforeEach(function () {
            record1 = { firstName: 'Joe', lastName: 'Smith' };
            record2 = { firstName: 'Sally', lastName: 'Jensen' };
            record3 = { firstName: 'Nigel', lastName: 'Smith' };
        });

        it('should return 0 when first and last name are equal between two records', function () {
            let record1 = { firstName: 'Joe', lastName: 'Smith' };
            let result = testDummyForm.compareContactRecords(record1, record1);
            assert.equal(result, 0);
        });

        it('should return -1 when record1.lastName comes before record2.lastName alphabetically', function () {
            let result = testDummyForm.compareContactRecords(record2, record1);
            assert.equal(result, -1);
        });

        it('should return 1 when record1.lastName comes after record2.lastName alphabetically', function () {
            let result = testDummyForm.compareContactRecords(record1, record2);
            assert.equal(result, 1);
        });

        it('should return -1 when last names are equal and record1.firstName comes before record3.firstName alphabetically', function () {
            let result = testDummyForm.compareContactRecords(record1, record3);
            assert.equal(result, -1);
        });

        it('should return 1 when last names are equal and record1.firstName comes after record3.firstName alphabetically', function () {
            let result = testDummyForm.compareContactRecords(record3, record1);
            assert.equal(result, 1);
        });

    });

    describe('sortByContactName', function () {

        let contacts;

        beforeEach(function () {
            contacts = [
                { firstName: 'Nigel', lastName: 'Smith' },
                { firstName: 'Sally', lastName: 'Jensen' },
                { firstName: 'Joe', lastName: 'Smith' }
            ];
        });

        it('should return an array of records sorted by name', function () {
            console.log(exploreFunction(verify));

            let result = testDummyForm.sortByContactName(contacts);
            verify(this, prettyJson(result));
        });

        it('should return an empty array if passed argument is not an array', function () {
            let result = testDummyForm.sortByContactName({});
            assert.equal(prettyJson(result), '[]');
        });

    });

    describe('getContactNames', function () {

        it('should not throw error immediately when called', function () {
            assert.doesNotThrow(testDummyForm.getContactNames.bind(null, () => { }));
        });

        it('should correctly request contact names from a remote service', function () {
            testDummyForm.getContactNames(function () { });
            verify(this, prettyJson(httpFake.get.args));
        });

        it('should call callback with error and a null value on failure', function () {
            promiseState.error = true;
            let callbackSpy = sinon.spy(() => verify(this, prettyJson(callbackSpy.args)));
            testDummyForm.getContactNames(callbackSpy);
        });

        it('should call callback with a null error and an array of sorted names on success', function () {
            let contactRecords = [{ firstName: 'Joe', lastName: 'Smith' },
            { firstName: 'Sally', lastName: 'Jensen' },
            { firstName: 'Nigel', lastName: 'Smith' }];

            promiseState.error = false;
            promiseState.records = contactRecords;

            let callbackSpy = sinon.spy(() => verify(this, prettyJson(callbackSpy.args)));
            testDummyForm.getContactNames(callbackSpy);
        });

    });

});

if (typeof global.runQuokkaMochaBdd === 'function') {
    runQuokkaMochaBdd();
}
