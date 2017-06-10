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
