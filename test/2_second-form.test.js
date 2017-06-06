'use strict';

const jsforms = require('../src/2_second-form');
const assert = require('chai').assert;

require('./helpers/global-helper');


describe('Forms', function () {

    /*
     * Refactoring: the act of changing code for readability or maintainability
     *              without changing the external behavior
     * 
     * Key: Make sure tests continue to pass.
     */

    describe('greeter', function () {
        /*
         * Refactoring steps:
         * 1 - The else is actually not needed. Refactor it out
         * 2 - Eliminate the if block altogether by using a ternary expression
         *      which looks like this: boolean expression ? true value : false value
         * 3 - Test for string type with typeof value === 'string'
         */

        // Keep the tests passing!

        it('should say "Hello!" by default', function () {
            assert.equal(jsforms.greet(), 'Hello!');
        });

        it('should say "Salutations!" when Salutations is passed', function () {
            assert.equal(jsforms.greet('Salutations'), 'Salutations!');
        });

    });

    describe('square', function () {

        // Keep the tests passing!

        it('should square 1', function () {
            assert.equal(jsforms.square(1), 1);
        });

        it('should square 3', function () {
            assert.equal(jsforms.square(3), 9);
        });

    });

    describe('squareRoot', function () {

        // Keep the tests passing!

        it('should take the square root of 1', function () {
            assert.equal(jsforms.squareRoot(1), 1);
        });

        it('should take the square root of 4', function () {
            assert.equal(jsforms.squareRoot(4), 2);
        });

    });

    describe('sum', function () {

        /*
         * Refactoring steps:
         * 1 - Create an add function and replace the plus (+) operator with a call to add
         * 2 - Replace for loop with array.forEach(function(value) { / * do stuff with value * / });
         * 3 - Replace function expression with a lambda expression like the following:
         *     value => result = doStuff(value)
         */

        // Keep the tests passing!

        it('should take the sum of one number', function () {
            assert.equal(jsforms.sum([1]), 1);
        });

        it('should add two numbers', function () {
            assert.equal(jsforms.sum([2, 3]), 5);
        });

        it('should add multiple numbers', function () {
            assert.equal(jsforms.sum([1, 3, 5, 7]), 16);
        });
    });

    describe('squareAll', function () {

        /* 
         * Refactoring steps:
         * 1 - Use array.push(value) to eliminate explicit setting of values to result array
         * 2 - Replace for loop with forEach
         * 3 - Replace forEach/push behavior with 
         *     array.map((value) => square(_something_))
         *     assign output to result variable
         * 4 - Remove wrapping function and pass square function directly
         * 5 - Return result from map operation without assigning to a variable
         */

        // Keep the tests passing!

        it('should square all numbers in a single-value array', function () {
            assert.equal(jsforms.squareAll([2]).toString(), '4');
        });

        it('should square multiple numbers', function () {
            assert.equal(jsforms.squareAll([1, 2, 3, 5]).toString(), '1,4,9,25');
        });

    });

    describe('sumOfSquares', function () {

        // Keep the tests passing!

        it('should square number in a 1-length array and return it', function () {
            assert.equal(jsforms.sumOfSquares([2]), 4);
        });

        it('should take the sum of squares of multiple numbers', function () {
            assert.equal(jsforms.sumOfSquares([1, 2, 3]), 14);
        });

    });

    describe('buildVector', function () {

        /*
         * Refactoring steps:
         * 1 - Create Vector object with attached prototype:
         *     (This top function is called a constructor)
         *     function Vector (points) {
         *         this.points = _something_;
         *         points.forEach((value, index) => _something_);
         *     }
         *
         *     Vector.prototype = {
         *         valueOf: function () { return _something_; },
         *         toString: function () { return _something_ }
         *     };
         *
         * 2 - a. Update squareAll to use array.valueOf()
         *     b. Update buildVector to return a new Vector()
         *        (This is called instantiating or constructing)
         */

        // Keep the tests passing!

        it('should return a vector matching original values', function () {
            let initialArray = [1, 2];
            let vector = jsforms.buildVector(initialArray);
            let resultValues = [vector[0], vector[1]];

            assert.equal(resultValues.toString(), initialArray.toString());
        });

        it('should return a vector given an array which is not the original array', function () {
            let initialArray = [1, 2];
            let vector = jsforms.buildVector(initialArray);

            assert.equal(initialArray !== vector, true);
        });

        it('should return vector with valueOf function which does not return vector', function () {
            let vector = jsforms.buildVector([1, 2, 3]);

            assert.equal(vector.valueOf() !== vector, true);
        });

        it('should return a vector where toString returns a vector string', function () {
            let vector = jsforms.buildVector([1, 2, 3]);

            assert.equal(vector.toString(), '<1,2,3>');
        });

    });

    describe('magnitude', function () {

        // Keep the tests passing!

        it('should return the magnitude of a one-value vector', function () {
            assert.equal(jsforms.magnitude([5]), 5);
        });

        it('should return only positive magnitude values', function () {
            assert.equal(jsforms.magnitude([-3]), 3);
        });

        it('should return the magnitude of a two-value vector', function () {
            assert.equal(jsforms.magnitude([6, 8]), 10);
        });

        it('should return the magnitude of a multi-value vector', function () {
            assert.equal(jsforms.magnitude([0, 12, 3, 4]), 13);
        });

    });

    describe('getVectorsShorterThan', function () {

        /*
         * Refactoring steps:
         * 1 - Refactor for loop to forEach with an inner if (conditional) block,
         *     Push values into result array.
         *
         *     array.forEach(function (value) {
         *          if(_boolean_) {
         *              result.push(_something_);
         *          }
         *     });
         *
         * 2 - Refactor forEach to filter and assign output to result variable
         *
         *     array.filter((value) => return _something_);
         *
         * 3 - Return filter output directly
         */

        // Keep the tests passing!

        it('should return single vector when the only vector magnitude is acceptably short', function () {
            let vectors = [jsforms.buildVector([1, 2])];
            let result = jsforms.getVectorsShorterThan(5, vectors);

            assert.equal(result.length, 1);
            assert.equal(result[0].toString(), '<1,2>');
        });

        it('should return an empty array when the only vector magnitude is too long', function () {
            let length = 4;
            let vectors = [jsforms.buildVector([3, 4])];
            let result = jsforms.getVectorsShorterThan(length, vectors);

            assert.equal(result.length, 0)
        });

        it('should only filter vectors which are too long', function () {
            let length = 10;
            let vectors = [
                jsforms.buildVector([10, 10]),
                jsforms.buildVector([3, 4])
            ];

            let result = jsforms.getVectorsShorterThan(length, vectors);

            assert.equal(result.length, 1);
            assert.equal(result[0].toString(), '<3,4>');
        });

        it('should filter all vectors which are too long', function () {
            let vectors = [
                jsforms.buildVector([1, 2, 2]),
                jsforms.buildVector([10, 20]),
                jsforms.buildVector([3, 4]),
                jsforms.buildVector([1, 2, 10, 100])
            ];

            let result = jsforms.getVectorsShorterThan(10, vectors);

            let resultValues = [
                result[0].toString(),
                result[1].toString()
            ];

            assert.equal(resultValues.toString(), '<1,2,2>,<3,4>');
        });

    });

    // You're done!
    // Good job! I like what you got.

});

if (typeof global.runQuokkaMochaBdd === 'function') {
    runQuokkaMochaBdd();
}