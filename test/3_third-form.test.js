'use strict';

const assert = require('chai').assert;
const jsforms = require('../src/3_third-form');

require('./helpers/global-helper');

describe('Forms', function () {

    describe('greeter', function () {

        /*
         * 1 - Refactor typeof in greet:
         *      a. Extract typeof expression to a function:
         *      b. Refactor greet to use isType
         * 
         *     function isType (typeName, value) {
         *          return typeof _something_ === _string_;
         *     }
         * 
         * 
         *     function greet (greeting) {
         *          return isType(_string_, _something_) ? _something_ : _something_;
         *     }
         * 
         * 2 - Refactor ternary in greet:
         *      a. Extract ternary to function
         *      b. Refactor greet to use eitherType
         * 
         *     function eitherType (typeName, defaultValue, actualValue) {
         *          return _string_ ? _something_ : _something_;
         *     }
         * 
         *     function greet (greeting) {
         *          return eitherType(_string_, _something_, _something_) + '!';
         *     }
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
         * 1 - Refactor forEach loop to reduce and return
         * 
         *     function (values) {
         *          return _array_.reduce((result, value) => _function_(_number_, _number_), _number_);
         *     }
         * 
         * 2 - Remove wrapping function
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
         * 1 - Make the Vector constructor into a constructor/factory
         *      function Vector (points) {
         *          let vector = this instanceof Vector ? _object_ : new _function_;
         *          
         *          vector.points = _array_;
         *          _array_.forEach((value, index) => _object_[_number_] = _something_);
         * 
         *          return vector;
         *      }
         * 
         * 2 - Replace buildVector in the module exports object and delete buildVector function
         * 
         * 3 - Extract value attachment into a function
         *     (Note: static methods are NOT attached to the prototype)
         *      Vector.attachValues = function (vector, points) {
         *          _object_.points = _array_;
         *          _array_.forEach((value, index) => _object_[_number_] = _something_);
         *      }
         * 
         *      function Vector (points) {
         *          let vector = this instanceof Vector ? _object_ : new _function_;
         *          Vector.attachValues(_object_, _array_);
         *          return vector;
         *      }
         * 
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

    describe('Immutable Object Properties and Data Hiding', function () {

        it('should not be possible to modify values in a vector', function () {
            /*
             * // Setting an immutable property on an object:
             * Object.defineProperty(obj, key, {
             *      writeable: false,
             *      value: value
             * });
             */

            let vector = jsforms.buildVector([1, 2, 3]);
            assert.throws(() => vector[2] = 5);
        });

        it('should not be possible to access vector.points', function () {
            // Closures are a means for data hiding...

            let vector = jsforms.buildVector([1, 2, 3]);
            assert.equal(vector.points, undefined);
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

    describe('Vector construction check', function () {

        // Add value type check to ensure points is an array of numbers

        /*
         * 1 - Test if value is an array of numbers:
         *      a. test if value is an object and not null
         *      b. test if value is an array
         *      c. test if each element is a number
         * 
         * // Checking value is an array:
         * Object.prototype.toString.call(value) === '[object Array]'
         * 
         * 2 - Refactor to evaluate chained type checks
         *     (Making type relation and order explicit)
         *      b. reduce over predicate array
         *         (A predicate is a function which returns a boolean value)
         *      c. construct isArrayOfNumbers with type check reducer
         */

        it('should throw an error if constructor is called with bad array', function () {
            assert.throws(
                jsforms.buildVector.bind(null, [1, 2, 3, 'bad', {}]),
                'Points must be an array of numbers'
            );
        });

    });

    // You're done!
    // Good job! I like what you got.

});

if (typeof global.runQuokkaMochaBdd === 'function') {
    runQuokkaMochaBdd();
}