/*
global

chai,
jsforms,
analyzer
*/
'use strict';

const assert = chai.assert;

describe('Forms - Third Form', function () {

    describe('greeter', function () {

        it('should say "Hello!" by default', function () {
            assert.equal(jsforms.greet(), 'Hello!');
        });

        it('should say "Salutations!" when Salutations is passed', function () {
            assert.equal(jsforms.greet('Salutations'), 'Salutations!');
        });

        describe('Refactoring steps', function () {
            /*
            1 - Create function called isTypeOf
            2 - Replace typeof check in greet function with isTypeOf
            3 - Create function called eitherOnType
            4 - Replace ternary in greet function with eitherOnType
            */

            // Keep the tests passing!

            it('has a function called "isTypeOf" which takes parameters "type" and "value"', function () {
                const analyzerFunctionOptions = {
                    formNumber: 3,
                    analyzerName: 'containsFunction',
                    analyzerOptions: {
                        functionName: 'isTypeOf',
                        parameters: ['type', 'value']
                    }
                };

                return analyzer
                    .analyze(analyzerFunctionOptions)
                    .then(function ({ result }) {
                        assert.isTrue(result);
                    });
            });

            it('calls isTypeOf from greet', function () {
                const analyzerCallOptions = {
                    formNumber: 3,
                    analyzerName: 'containsCall',
                    analyzerOptions: {
                        parentName: 'greet',
                        methodName: 'isTypeOf'
                    }
                };

                const analyzerRefactorCallOptions = {
                    formNumber: 3,
                    analyzerName: 'containsCall',
                    analyzerOptions: {
                        parentName: 'eitherOnType',
                        methodName: 'isTypeOf'
                    }
                };

                return analyzer
                    .analyze(analyzerRefactorCallOptions)
                    .then(function ({ result }) {
                        if (!result) {
                            return analyzer
                                .analyze(analyzerCallOptions);
                        } else {
                            return Promise.resolve({ result: true });
                        }
                    })
                    .then(function ({ result }) {
                        assert.isTrue(result);
                    });
            });

            it('has a function called "eitherOnType" with parameters "type", "testValue", "defaultValue" -- return testValue if it matches type, otherwise return defaultValue', function () {
                const analyzerFunctionOptions = {
                    formNumber: 3,
                    analyzerName: 'containsFunction',
                    analyzerOptions: {
                        functionName: 'eitherOnType',
                        parameters: ['type', 'testValue', 'defaultValue']
                    }
                };

                return analyzer
                    .analyze(analyzerFunctionOptions)
                    .then(function ({ result }) {
                        assert.isTrue(result);
                    });
            });

            it('calls eitherOnType from greet', function () {
                const analyzerCallOptions = {
                    formNumber: 3,
                    analyzerName: 'containsCall',
                    analyzerOptions: {
                        parentName: 'greet',
                        methodName: 'eitherOnType'
                    }
                };

                return analyzer
                    .analyze(analyzerCallOptions)
                    .then(function ({ result }) {
                        assert.isTrue(result);
                    });
            });

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

        it('should take the sum of one number', function () {
            assert.equal(jsforms.sum([1]), 1);
        });

        it('should add two numbers', function () {
            assert.equal(jsforms.sum([2, 3]), 5);
        });

        it('should add multiple numbers', function () {
            assert.equal(jsforms.sum([1, 3, 5, 7]), 16);
        });

        describe('Refactoring steps', function () {

            /*
            1 - Replace forEach with reduce -- assign calculated sum to "result" variable
            2 - Remove wrapping function from reduce -- pass add function directly to reduce
            3 - Remove assignment and return calculated result directly to caller
            */

            // Keep the tests passing!

            it('has been refactored to use reduce in the place of forEach, assigning the output to result', function () {
                const analyzerReduceOptions = {
                    formNumber: 3,
                    analyzerName: 'containsCall',
                    analyzerOptions: {
                        parentName: 'sum',
                        objectName: 'nums',
                        methodName: 'reduce'
                    }
                };

                const analyzerForEachOptions = {
                    formNumber: 3,
                    analyzerName: 'containsCall',
                    analyzerOptions: {
                        parentName: 'sum',
                        objectName: 'nums',
                        methodName: 'forEach'
                    }
                };

                return analyzer
                    .analyze(analyzerReduceOptions)
                    .then(function ({ result }) {
                        assert.isTrue(result, 'Reduce is not being used in the sum function.');
                        return analyzer
                            .analyze(analyzerForEachOptions);
                    })
                    .then(function ({ result }) {
                        assert.isFalse(result, 'ForEach is still being used in the sum function.')
                    });
            });

            it('has been refactored to pass the add function directly to reduce', function () {
                const analyzerReduceOptions = {
                    formNumber: 3,
                    analyzerName: 'containsCall',
                    analyzerOptions: {
                        parentName: 'sum',
                        objectName: 'nums',
                        methodName: 'reduce',
                        variableName: 'add'
                    }
                };

                return analyzer
                    .analyze(analyzerReduceOptions)
                    .then(function ({ result }) {
                        assert.isTrue(result, 'Add is not being passed directly to reduce, yet.');
                    });
            });

            it('has been refactored to not assign the sum before returning it', function () {
                const analyzerAssignmentOptions = {
                    formNumber: 3,
                    analyzerName: 'containsAssignment',
                    analyzerOptions: {
                        parentName: 'sum'
                    }
                };

                return analyzer
                    .analyze(analyzerAssignmentOptions)
                    .then(function ({ result }) {
                        assert.isFalse(result, 'Sum still contains an assignment. Is the reduced value being returned directly?');
                    });
            });

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

        // Keep the tests passing!

        it('should return vector with valueOf function which does not return vector', function () {
            let vector = jsforms.buildVector([1, 2, 3]);

            assert.equal(vector.valueOf() !== vector, true);
        });

        it('should return a vector where toString returns a vector string', function () {
            let vector = jsforms.buildVector([1, 2, 3]);

            assert.equal(vector.toString(), '<1,2,3>');
        });

        describe('Immutable object properties and values', function () {

            it('should not be possible to modify vector.points', function () {
                /*
                 * // Setting an immutable property on an object:
                 * Object.defineProperty(obj, key, {
                 *      writeable: false,
                 *      value: value
                 * });
                 */

                let vector = jsforms.buildVector([1, 2, 3]);
                assert.throws(() => vector.points = [4, 5, 6]);
            });

            it('should not be possible to modify vector.points', function () {
                let vector = jsforms.buildVector([1, 2, 3]);
                assert.throws(() => vector.points.push(4));
            });

        });

        describe('Constructor type check', function () {

            it('throws an error if constructor is called with a value which is not an array', function () {
                assert.throws(() => jsforms.buildVector('not an array'));
            });

            it('throws an error if constructor is called with an array of one value which is not a number', function () {
                assert.throws(() => jsforms.buildVector(['bad value']));
            });

            it('throws an error if constructor is called with an array which contains values other than numbers', function () {
                assert.throws(() => jsforms.buildVector([1, '2', 5, {}]));
            });

            describe('Refactoring steps', function () {
                it('has a function called "isArrayOfNumbers" with a parameter "values"', function () {
                    const analyzerFunction = {
                        formNumber: 3,
                        analyzerName: 'containsFunction',
                        analyzerOptions: {
                            functionName: 'isArrayOfNumbers',
                            parameters: ['values']
                        }
                    }

                    return analyzer
                        .analyze(analyzerFunction)
                        .then(function ({ result }) {
                            assert.isTrue(result, 'Cannot find a function  called "isArrayOfNumbers"');
                        });
                });

                it('has a call in Vector constructor to "isArrayOfNumbers" with "points" as an argument', function() {
                    const analyzerCallOptions = {
                        formNumber: 3,
                        analyzerName: 'containsCall',
                        analyzerOptions: {
                            parentName: 'Vector',
                            methodName: 'isArrayOfNumbers',
                            variableName: 'points'
                        }
                    };

                    return analyzer
                        .analyze(analyzerCallOptions)
                        .then(function({result}){
                            assert.isTrue(result, 'Cannot find call to isArrayOfNumbers');
                        });
                });
            });

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


    // You're done!
    // Good job! I like what you got.

});

