/* global analyzer, chai, jsforms */

'use strict';

const assert = chai.assert;

describe('Forms', function () {

    /*
     * Refactoring: the act of changing code for readability or maintainability
     *              without changing the external behavior
     * 
     * Key: Make sure tests continue to pass.
     */

    describe('greeter', function () {


        describe('Refactoring steps', function () {
            /*
             * Refactoring steps:
             * 1 - The else is actually not needed. Refactor it out
             * 2 - Eliminate the if block altogether by using a ternary expression
             *      which looks like this: boolean expression ? true value : false value
             * 3 - Test for string type with typeof value === 'string'
             */

            it('is refactored to remove the unnecessary else', function () {
                const analyzerOptions = {
                    formNumber: 2,
                    analyzerName: 'containsElse',
                    analyzerOptions: {
                        parentName: 'greet'
                    }
                }

                return analyzer
                    .analyze(analyzerOptions)
                    .then(function (response) {
                        const result = response.result;
                        assert.isFalse(result);
                    });
            });

            it('is refactored to remove if and replace with a ternary expression', function () {
                const analyzerIfOptions = {
                    formNumber: 2,
                    analyzerName: 'containsIf',
                    analyzerOptions: {
                        parentName: 'greet'
                    }
                }

                const analyzerTernaryOptions = {
                    formNumber: 2,
                    analyzerName: 'containsTernary',
                    analyzerOptions: {
                        name: 'greet'
                    }
                }

                return analyzer
                    .analyze(analyzerIfOptions)
                    .then(function (response) {
                        if (response.result === false) {
                            return analyzer.analyze(analyzerTernaryOptions);
                        } else {
                            return Promise.resolve({ result: false });
                        }
                    })
                    .then(function (response) {
                        const result = response.result;
                        assert.isTrue(result);
                    });
            });

            it('is refactored to use typeof comparison to "string"', function () {
                const analyzerTypeofOptions = {
                    formNumber: 2,
                    analyzerName: 'containsTypeofComparison',
                    analyzerOptions: {
                        parentName: 'greet'
                    }
                };

                return analyzer
                    .analyze(analyzerTypeofOptions)
                    .then(function (response) {
                        const result = response.result;
                        assert.isTrue(result);
                    });
            });
        });

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


        describe('Refactoring steps', function () {

            /*
             * Refactoring steps:
             * 1 - Create an add function
             * 2 - Replace the plus (+=) operator with a call to add
             *     result = add(value, value)
             * 3 - Replace for loop with array.forEach(function(value) { / * do stuff with value * / });
             * 4 - Replace function expression with a lambda expression like the following:
             *     value => result = add(value, value)
             */

            // Keep the tests passing!

            it('has an add function', function () {
                const analyzerOptions = {
                    formNumber: 2,
                    analyzerName: 'containsFunction',
                    analyzerOptions: {
                        parentName: null,
                        functionName: 'add'
                    }
                }

                return analyzer
                    .analyze(analyzerOptions)
                    .then(function (response) {
                        const result = response.result;
                        assert.isTrue(result);
                    });
            });

            it('is refactored to replace += with a call to the add function', function () {
                const analyzerMethodCallOptions = {
                    formNumber: 2,
                    analyzerName: 'containsCall',
                    analyzerOptions: {
                        parentName: 'sum',
                        methodName: 'add'
                    }
                };

                return analyzer
                    .analyze(analyzerMethodCallOptions)
                    .then(function (response) {
                        assert.isTrue(response.result);
                    });
            });

            it('is refactored to replace for loop with nums.forEach', function () {
                const analyzerMethodCallOptions = {
                    formNumber: 2,
                    analyzerName: 'containsCall',
                    analyzerOptions: {
                        parentName: 'sum',
                        objectName: 'nums',
                        methodName: 'forEach'
                    }
                };

                return analyzer
                    .analyze(analyzerMethodCallOptions)
                    .then(function (response) {
                        assert.isTrue(response.result);
                    });
            });

            it('is refactored to replace the function expression with an arrow function', function () {
                const analyzerMethodCallOptions = {
                    formNumber: 2,
                    analyzerName: 'containsArrowFunction',
                    analyzerOptions: {
                        parentName: 'sum'
                    }
                };

                return analyzer
                    .analyze(analyzerMethodCallOptions)
                    .then(function (response) {
                        assert.isTrue(response.result);
                    });
            });
        });

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

        describe('Refactoring steps', function () {
            /* 
             * Refactoring steps:
             * 1 - Replace for loop behavior with 
             *     array.map((value) => square(_something_))
             *     assign output to result variable
             * 2 - Remove wrapping function and pass square function directly
             * 3 - Return result from map operation without assigning to a variable
             */

            // Keep the tests passing!

            it('is refactored to replace for loop with nums.map', function () {
                const analyzerMethodCallOptions = {
                    formNumber: 2,
                    analyzerName: 'containsCall',
                    analyzerOptions: {
                        parentName: 'squareAll',
                        objectName: 'nums',
                        methodName: 'map'
                    }
                };

                return analyzer
                    .analyze(analyzerMethodCallOptions)
                    .then(function (response) {
                        assert.isTrue(response.result);
                    });
            });

            it('is refactored to remove function wrapping `square`', function () {
                const analyzerMethodCallOptions = {
                    formNumber: 2,
                    analyzerName: 'containsCall',
                    analyzerOptions: {
                        parentName: 'squareAll',
                        methodName: 'square'
                    }
                };

                return analyzer
                    .analyze(analyzerMethodCallOptions)
                    .then(function (response) {
                        assert.isFalse(response.result);
                    });
            });

            it('is refactored to return result of map operation without assigning output to result', function () {
                const analyzerAssignmentOptions = {
                    formNumber: 2,
                    analyzerName: 'containsAssignment',
                    analyzerOptions: {
                        parentName: 'squareAll'
                    }
                }

                return analyzer
                    .analyze(analyzerAssignmentOptions)
                    .then(function (response) {
                        assert.isFalse(response.result);
                    });
            });
        });

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

        describe('Refactoring steps', function () {
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

            it('contains a constructor for an object called Vector', function () {
                const analyzerFunctionOptions = {
                    formNumber: 2,
                    analyzerName: 'containsFunction',
                    analyzerOptions: {
                        parentName: null,
                        functionName: 'Vector'
                    }
                };

                return analyzer.analyze(analyzerFunctionOptions)
                    .then(function(response){
                        assert.isTrue(response.result);
                    });
            });
        });

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

