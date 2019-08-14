/* global analyzer, chai, jsforms */
'use strict';

const assert = chai.assert;

describe('Forms - First Form', function () {

    describe('variables and operations', function () {
        describe('declaration and initialization', function () {
            it('should have a variable called "a"', function () {
                const variableDefinition = {
                    kinds: ['let', 'var'],
                    name: 'a'
                };

                const analyzerOptions = {
                    formNumber: 1,
                    analyzerName: 'containsVariable',
                    analyzerOptions: variableDefinition
                }

                return analyzer
                    .analyze(analyzerOptions)
                    .then(function (response) {
                        const result = response.result;
                        assert.isTrue(result, 'Be sure you use "var" or "let" to declare your variable');
                    });
            });

            it('should initialize "a" with the value 5', function () {
                const variableDefinition = {
                    kinds: ['let', 'var'],
                    name: 'a',
                    value: 5
                };

                const analyzerOptions = {
                    formNumber: 1,
                    analyzerName: 'containsVariable',
                    analyzerOptions: variableDefinition
                }

                return analyzer
                    .analyze(analyzerOptions)
                    .then(function (response) {
                        const result = response.result;
                        assert.isTrue(result, 'Initialize a variable with equals: "var a = ..."');
                    });
            });
        });

        describe('assignment and operators', function () {
            it('should assign the sum of 3 and 7 (3 + 7) to "a"', function () {
                const variableDefinition = {
                    kinds: ['let', 'var'],
                    name: 'a',
                    expression: [3, '+', 7]
                };

                const analyzerOptions = {
                    formNumber: 1,
                    analyzerName: 'containsAssignment',
                    analyzerOptions: variableDefinition
                }

                return analyzer
                    .analyze(analyzerOptions)
                    .then(function (response) {
                        const result = response.result;
                        assert.isTrue(result, 'Add two numbers using the plus (+) operator');
                    });

            });

            it('should have a variable "b" initialized to "Hello, World!"', function () {
                const variableDefinition = {
                    kinds: ['const', 'let', 'var'],
                    name: 'b',
                    value: 'Hello, World!'
                };

                const analyzerOptions = {
                    formNumber: 1,
                    analyzerName: 'containsVariable',
                    analyzerOptions: variableDefinition
                }

                return analyzer
                    .analyze(analyzerOptions)
                    .then(function (response) {
                        const result = response.result;
                        assert.isTrue(result, 'Assignment uses equals, like initialization does');
                    });
            });
        });

        describe('method call', function () {
            it('should log variable "b" to the console', function () {
                const methodCall = {
                    objectName: 'console',
                    methodName: 'log',
                    variableName: 'b'
                };

                const analyzerOptions = {
                    formNumber: 1,
                    analyzerName: 'containsCall',
                    analyzerOptions: methodCall
                }

                return analyzer
                    .analyze(analyzerOptions)
                    .then(function (response) {
                        const result = response.result;
                        assert.isTrue(result, 'Console.log might be just the ticket...');
                    });
            });
        });

        describe('exposing values', function () {
            it('should expose variable "b" to be read outside of the module', function () {
                assert.equal(jsforms.b, 'Hello, World!', 'Find "return {};" add a "b" -> "return {b};"');
            });
        });

    });

    describe('function creation [function declaration, return statement]', function () {

        describe('** greeter function **', function () {

            it('should say "Hello!" by default', function () {
                // Create function called greet

                /*
                 * function greet() {
                 *      return _string_;
                 * }
                 */

                assert.equal(typeof jsforms.greet, 'function', 'Try "function _name_(){}" don\'t forget to expose it, like "b"')
                assert.equal(jsforms.greet(), 'Hello!', 'Make sure you use a "return" statement');
            });

            describe('conditional logic [if/else]', function () {
                it('should say "Salutations!" when Salutations is passed', function () {
                    // Add condition to greet to handle custom greeting case
                    // (Try using an "if/else" structure. "If" is a control structure)

                    /*
                     * function greet (greeting) {
                     *      if (_something_ === undefined) {
                     *          return _string_;
                     *      } else {
                     *          return _something_ + '!';
                     *      }
                     * }
                     */

                    assert.equal(jsforms.greet('Salutations'), 'Salutations!', 'Maybe an "if" would help here');
                });
            });

        });

        describe('function calls and mathematical operations [Math library]', function () {
            describe('** square function **', function () {

                it('should square 1', function () {
                    // Add cheated-out square function
                    // (Cheating out means just passing the current tests, don't go crazy!)

                    /*
                     * function (value) {
                     *      return _number_;
                     * }
                     */

                    assert.equal(jsforms.square(1), 1);
                });

                it('should square 3', function () {
                    // 1 - Add logic to correctly square a number (remember n^2 <=> n * n)
                    // 2 - Move to library function to perform square operation
                    //      (Math is a built in library...)

                    assert.equal(jsforms.square(3), 9);
                });
            });


            describe('** squareRoot function **', function () {

                it('should take the square root of 1', function () {
                    // Add cheated-out square root function

                    assert.equal(jsforms.squareRoot(1), 1);
                });

                it('should take the square root of 4', function () {
                    // Add logic to properly take square root
                    // (There is more than one way to solve this in one line, maybe with Math)

                    assert.equal(jsforms.squareRoot(4), 2);
                });

            });
        });

    });


    describe('arrays, loops, and function calls', function () {
        describe('** sum function **', function () {

            it('should take the sum of one number', function () {
                // Add cheated out sum function

                assert.equal(jsforms.sum([1]), 1);
            });

            it('should add two numbers', function () {
                // Add logic to sum 1 or two numbers
                // (An if structure might help here)

                /*
                 * if(_array_.length === 1) {
                 *      return _array_[0];
                 * } else {
                 *      return _array_[0] + _array_[1];
                 * }
                 */

                assert.equal(jsforms.sum([2, 3]), 5);
            });

            it('should add multiple numbers', function () {
                // Add logic to sum an arbitrary length array of numbers
                // (A for loop might help to accomplish this
                //  loops, like ifs, are control structures)

                /*
                 * for(let index = _number_; _number_ < _number_; index += 1) {
                 *      result[index] += _something_;
                 * }
                 */

                assert.equal(jsforms.sum([1, 3, 5, 7]), 16);
            });
        });

        describe('** squareAll function **', function () {

            it('should square all numbers in a single-value array', function () {
                // 1 - Add a cheated-out squareAll function
                // 2 - Perform square computation on array value

                /*
                 * function squareAll (values) {
                 *      let result = square(_array_[_number_]);
                 *      return [_something_];
                 * }
                 */

                assert.equal(jsforms.squareAll([2]).toString(), '4');
            });

            it('should square multiple numbers', function () {
                // Add logic to square all numbers in array
                // (How did you solve sum?)

                assert.equal(jsforms.squareAll([1, 2, 3, 5]).toString(), '1,4,9,25');
            });

        });
    });

    describe('combining complex functions', function () {
        describe('** sumOfSquares function **', function () {

            it('should square number in a 1-length array and return it', function () {
                // 1 - Add cheated-out function sumOfSquares
                // 2 - Add sumOfSquares function with logic to square a single number

                assert.equal(jsforms.sumOfSquares([2]), 4);
            });

            it('should take the sum of squares of multiple numbers', function () {
                // Add logic to square all numbers and return the sum
                // (squareAll and sum might be useful to accomplish this)

                assert.equal(jsforms.sumOfSquares([1, 2, 3]), 14);
            });

        });
    });

    describe('copying arrays [array.slice]', function () {
        describe('** buildVector function **', function () {

            // A vector is an ordered set of points which 
            // describes a "directed line segment," in other
            // words, a vector is a line segment with an arrow

            it('returns a vector (array) containing the same numbers as the original -- try returning the array you get in your function', function () {
                // Add buildVector function
                // (Would it be possible to just return something?)

                let initialArray = [1, 2];
                let vector = jsforms.buildVector(initialArray);
                let resultValues = [vector[0], vector[1]];

                assert.equal(resultValues.toString(), initialArray.toString());
            });

            it('returns a copy of the original vector', function () {
                // Add logic to return a copy of vector array
                // (Slice will create a new array just like the old one...)

                /*
                 * let vector = _array_.slice(_number_);
                 */

                let initialArray = [3, 4, 5];
                let vector = jsforms.buildVector(initialArray);

                assert.notEqual(initialArray, vector);
            });
        });
    });


    describe('Combining existing code to solve new problems', function () {
        describe('** magnitude function **', function () {

            // A magnitude is the length of a vector. We will explore
            // computing the magnitude in the following tests

            // the magnitude of a vector is computed by:
            // 1 - Square all numbers in the array
            // 2 - Add all squared values together
            // 3 - Take the square root of the sum of squares

            it('returns the magnitude of a vector with only one number', function () {
                // Add cheated-out magnitude function

                assert.equal(jsforms.magnitude([5]), 5);
            });

            it('returns only positive numbers -- all magnitudes are positive', function () {
                // Add logic to ensure magnitude is always positive
                // (Hint: squaring a negative number makes it positive)

                assert.equal(jsforms.magnitude([-3]), 3);
            });

            it('should return the magnitude of a vector with two values', function () {
                // Add logic to perform proper magnitude calculation for length 1 and 2 vectors
                // (A length 2 vector's magnitude can be computed by squareRoot(vector[0]^2 + vector[1]^2))

                assert.equal(jsforms.magnitude([6, 8]), 10);
            });

            it('should return the magnitude of a vector with multiple values', function () {
                // Add logic to compute the magnitude of an arbitrary length vector.
                // (The general magnitude formula is the square root of the sum of the squares
                //  Can we apply functions we have already created?)

                assert.equal(jsforms.magnitude([0, 12, 3, 4]), 13);
            });

        });
    });


    describe('Looping and inequality comparison', function () {
        describe('** getVectorsShorterThan **', function () {

            function vectorToString(vector) {
                return '<' + vector.toString() + '>';
            }

            // We will now compare the length (magnitude) of a vector to a value.

            it('returns an array of one vector when the vector is shorter than 5 -- arguments are: length, arrayOfVectors', function () {
                // Add cheated-out getVectorsShorterThan function

                let vectors = [jsforms.buildVector([1, 2])];
                let result = jsforms.getVectorsShorterThan(5, vectors);

                assert.equal(result.length, 1);
                assert.equal(vectorToString(result[0]), '<1,2>');
            });

            it('returns an empty array when all vectors are too long -- tests one vector', function () {
                // Add logic to handle the case where a vector is too long
                // (How might we compare the magnitude of a vector to a length value?)

                let length = 4;
                let vectors = [jsforms.buildVector([3, 4])];
                let result = jsforms.getVectorsShorterThan(length, vectors);

                assert.equal(result.length, 0)
            });

            it('returns an array of more than one vector when all are short enough', function () {
                // Add logic to handle 0, 1 or 2 vector cases

                let length = 10;
                let vectors = [
                    jsforms.buildVector([10, 10]),
                    jsforms.buildVector([3, 4])
                ];

                let result = jsforms.getVectorsShorterThan(length, vectors);

                assert.equal(result.length, 1);
                assert.equal(vectorToString(result[0]), '<3,4>');
            });

            it('returns only vectors which are not too long', function () {
                // Move to general code for filtering vecctors
                // (Is there a way we can use a known control structure
                //  to check all vectors?)

                let vectors = [
                    jsforms.buildVector([1, 2, 2]),
                    jsforms.buildVector([10, 20]),
                    jsforms.buildVector([3, 4]),
                    jsforms.buildVector([1, 2, 10, 100])
                ];

                let result = jsforms.getVectorsShorterThan(10, vectors);

                let resultValues = [
                    vectorToString(result[0]),
                    vectorToString(result[1]),
                ];

                assert.equal(resultValues.toString(), '<1,2,2>,<3,4>');
            });
        });
    });


    // You're done!
    // Good job! I like what you got.

});

