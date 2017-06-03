'use strict';

const assert = require('chai').assert;
const sinon = require('sinon');
const mockery = require('mockery');
const jsonHelper = require('./helpers/jsonHelper');

// This is a self-running configuration
require('./helpers/approvalsConfig');

describe('Test Dummy Form', function () {

    let testDummyForm;

    beforeEach(function () {
        mockery.enable({
            warnOnReplace: false,
            warnOnUnregistered: false
        });

        testDummyForm = require('../src/test-dummy-form');
    });

    afterEach(function () {
        mockery.deregisterAll();
        mockery.disable();
    });

    describe('range', function () {

        it('should create a range, 1 to 10, without an increment specified');
        it('should create a range, 1 to 20, with an increment of 2');
        it('should create a single-value array when a > b');
        it('should throw an error when inccrement is negative');

    });

});

if (typeof global.runQuokkaMochaBdd === 'function') {
    runQuokkaMochaBdd();
}