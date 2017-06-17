/********************************************************************

Javascript First Form

The Javascript first form student should aim to follow the movements
outlined below to pass all unit tests. The process is outlined
precisely because the goal is not to muddle your way through passing
tests though trial and error, but instead to grow fluencey through
language immersion.

A first form student can come to this process without ever having
programmed before, or as a desciple of another language, looking
to broaden their exposure to programming languages in general.

A first form student who is ready to progress to second form should
be able to, without aid of the provided movements, pass all tests in
the unit test suites in order using the principles used in the
movements provided below.

Movements are intended to develop muscle memory at the keyboard
and strenghten a core concept in the dictionary of Javascript
actions. Movements should be done with clarity and understanding.
All movements can and should be repeated to help develop a deeper
understanding and connection with the code.

A successful first form student should be able to demonstrate
proficiency with the following concepts:

- Strict mode Javascript
- Immediately Invoked Function Expressions
- Exporting a module
- Exporting a function

- Function creation
- Returning a value
- Conditional statements
- Calling a function
- Interaction and use of function parameters
- String concatenation
- Mathematical operations and operators
- Built in modules such as the Math module
- Built in functions such as toString and valueOf
- Adding or overriding functions on objects
- Looping
- Arrays
- Nested logic

If you are new to these topics, it is expected that upon touching 
anything unfamiliar, you will search the web and research the
functions and behaviors of the topic you are struggling with.

This process is intended to provide a streamlined path to go from
inexperience to first form understanding. Once the first form student
is comfortable with the movement in this exercise, it will
be useful to use tools like Exercism and code katas to enhance your
understanding and improve your skills.

Even the longest journey begins with a single step. Good luck!

*********************************************************************/

// Movement 1

// Concepts in this movement:
// - function creation
// - returning a value
// - exporting a function

// Changes to make:
// Create function called greet

// function greet() {
//     return 'Hello!';
// }

// module.exports = {
//     greet: greet
// };

(function () {
    'use strict';

    function greet() {
        return 'Hello!';
    }

    module.exports = {
        greet: greet
    };

})();

// Run the tests!


// Movement 2

// Concepts in this movement:
// - conditional statements
// - string concatenation

// Changes to make:
// Add condition to greet to handle custom greeting case

// function greet(greeting) {
//     if (greeting !== undefined) {
//         return greeting + '!';
//     } else {
//         return 'Hello!';
//     }
// }

(function () {
    'use strict';

    function greet(greeting) {
        if (greeting !== undefined) {
            return greeting + '!';
        } else {
            return 'Hello!';
        }
    }

    module.exports = {
        greet: greet
    };

})();

// Run the tests!


// Movement 3

// Concepts in this movement:
// - Simplest thing that passes the test
// - returning a value
// - exporting a function

// Changes to make:
// Add cheated-out square function

// function square (){
//     return 1;
// }

// module.exports = {
//     greet: greet,
//     square: square
// };

(function () {
    'use strict';

    function greet(greeting) {
        if (greeting !== undefined) {
            return greeting + '!';
        } else {
            return 'Hello!';
        }
    }

    function square() {
        return 1;
    }

    module.exports = {
        greet: greet,
        square: square
    };

})();

// Run the tests!


// Movement 4

// Concepts in this movement
// - simple mathematical computation

// Changes to make:
// Add logic to correctly square a number

// function square (x){
//     return x * x;
// }

(function () {
    'use strict';

    function greet(greeting) {
        if (greeting !== undefined) {
            return greeting + '!';
        } else {
            return 'Hello!';
        }
    }

    function square(x) {
        return x * x;
    }

    module.exports = {
        greet: greet,
        square: square
    };

})();

// Run the tests!


// Movement 5

// Concepts in this movement
// - built-in modules (Math)
// - build-in functions (pow)

// Changes to make:
// Move to library function to perform square operation

// function square(x) {
//     return Math.pow(x, 2);
// }

(function () {
    'use strict';

    function greet(greeting) {
        if (greeting !== undefined) {
            return greeting + '!';
        } else {
            return 'Hello!';
        }
    }

    function square(x) {
        return Math.pow(x, 2);
    }

    module.exports = {
        greet: greet,
        square: square
    };

})();

// Run the tests!


// Movement 6

// Concepts in this movement:
// - simplest thing to pass the test
// - export a function

// Changes to make:
// Add cheated-out square root function

// function squareRoot() {
//     return 1;
// }

// module.exports = {
//     squareRoot: squareRoot,
//     ...
// };

(function () {
    'use strict';

    function greet(greeting) {
        if (greeting !== undefined) {
            return greeting + '!';
        } else {
            return 'Hello!';
        }
    }

    function square(x) {
        return Math.pow(x, 2);
    }

    function squareRoot() {
        return 1;
    }

    module.exports = {
        greet: greet,
        square: square,
        squareRoot: squareRoot
    };

})();

// Run the tests!


// Movement 7

// Concepts in this movement
// - built-in modules (Math)
// - build-in functions (sqrt)

// Changes to make:
// Add logic to properly take square root

// function squareRoot(x) {
//     return Math.sqrt(x);
// }

(function () {
    'use strict';

    function greet(greeting) {
        if (greeting !== undefined) {
            return greeting + '!';
        } else {
            return 'Hello!';
        }
    }

    function square(x) {
        return Math.pow(x, 2);
    }

    function squareRoot(x) {
        return Math.sqrt(x);
    }

    module.exports = {
        greet: greet,
        square: square,
        squareRoot: squareRoot
    };

})();

// Run the tests!


// Movement 8

// Changes to make:
// Add cheated out sum function

// function sum () {
//     return 1;
// }

// module.exports = {
//     greet: greet,
//     square: square,
//     squareRoot: squareRoot,
//     sum: sum
// };

(function () {
    'use strict';

    function greet(greeting) {
        if (greeting !== undefined) {
            return greeting + '!';
        } else {
            return 'Hello!';
        }
    }

    function square(x) {
        return Math.pow(x, 2);
    }

    function squareRoot(x) {
        return Math.sqrt(x);
    }

    function sum() {
        return 1;
    }

    module.exports = {
        greet: greet,
        square: square,
        squareRoot: squareRoot,
        sum: sum
    };

})();

// Run the tests!


// Movement 9

// Concepts in this movement:
// - Conditional statements
// - mathematical operations
// - arrays

// Changes to make:
// Add logic to sum 1 or two numbers

// function sum (nums) {
//     if(nums.length === 1) {
//         return nums[0];
//     } else {
//         return nums[0] + nums[1];
//     }
// }

(function () {
    'use strict';

    function greet(greeting) {
        if (greeting !== undefined) {
            return greeting + '!';
        } else {
            return 'Hello!';
        }
    }

    function square(x) {
        return Math.pow(x, 2);
    }

    function squareRoot(x) {
        return Math.sqrt(x);
    }

    function sum(nums) {
        if (nums.length === 1) {
            return nums[0];
        } else {
            return nums[0] + nums[1];
        }
    }

    module.exports = {
        greet: greet,
        square: square,
        squareRoot: squareRoot,
        sum: sum
    };

})();

// Run the tests!


// Movement 10

// Concepts introduced in this movement:
// - looping
// - arrays

// Changes to make:
// Add logic to sum an arbitrary length array of numbers

// function sum (nums) {
//     let result = 0;

//     for(let index = 0; index < nums.length; index += 1) {
//         result += nums[index];
//     }

//     return result;
// }

(function () {
    'use strict';

    function greet(greeting) {
        if (greeting !== undefined) {
            return greeting + '!';
        } else {
            return 'Hello!';
        }
    }

    function square(x) {
        return Math.pow(x, 2);
    }

    function squareRoot(x) {
        return Math.sqrt(x);
    }

    function sum(nums) {
        let result = 0;

        for (let index = 0; index < nums.length; index += 1) {
            result += nums[index];
        }

        return result;
    }

    module.exports = {
        greet: greet,
        square: square,
        squareRoot: squareRoot,
        sum: sum
    };

})();

// Run the tests!


// Movement 11

// Changes to make:
// Add a cheated-out squareAll function

// function squareAll (nums) {
//     let result = square(nums[0]);
//     return [result];
// }

// module.exports = {
//     greet: greet,
//     square: square,
//     squareAll: squareAll,
//     squareRoot: squareRoot,
//     sum: sum
// };

(function () {
    'use strict';

    function greet(greeting) {
        if (greeting !== undefined) {
            return greeting + '!';
        } else {
            return 'Hello!';
        }
    }

    function square(x) {
        return Math.pow(x, 2);
    }

    function squareRoot(x) {
        return Math.sqrt(x);
    }

    function sum(nums) {
        let result = 0;

        for (let index = 0; index < nums.length; index += 1) {
            result += nums[index];
        }

        return result;
    }

    function squareAll(nums) {
        let result = square(nums[0]);
        return [result];
    }

    module.exports = {
        greet: greet,
        square: square,
        squareAll: squareAll,
        squareRoot: squareRoot,
        sum: sum
    };

})();

// Run the tests!


// Movement 12

// Changes to make:
// Add logic to square all numbers in array

// function squareAll (nums) {
//     let result = [];

//     for(let index = 0; index < nums.length; index += 1) {
//         result[index] = square(nums[index]);
//     }

//     return result;
// }

(function () {
    'use strict';

    function greet(greeting) {
        if (greeting !== undefined) {
            return greeting + '!';
        } else {
            return 'Hello!';
        }
    }

    function square(x) {
        return Math.pow(x, 2);
    }

    function squareRoot(x) {
        return Math.sqrt(x);
    }

    function sum(nums) {
        let result = 0;

        for (let index = 0; index < nums.length; index += 1) {
            result += nums[index];
        }

        return result;
    }

    function squareAll(nums) {
        let result = [];

        for (let index = 0; index < nums.length; index += 1) {
            result[index] = square(nums[index]);
        }

        return result;
    }

    module.exports = {
        greet: greet,
        square: square,
        squareAll: squareAll,
        squareRoot: squareRoot,
        sum: sum
    };

})();

// Run the tests!


// Movement 13

// Changes to make:
// Add sumOfSquares function with logic to square a single number

// function sumOfSquares (nums) {
//     return square(nums[0]);
// }

// module.exports = {
//     greet: greet,
//     square: square,
//     squareAll: squareAll,
//     squareRoot: squareRoot,
//     sum: sum,
//     sumOfSquares: sumOfSquares
// };

(function () {
    'use strict';

    function greet(greeting) {
        if (greeting !== undefined) {
            return greeting + '!';
        } else {
            return 'Hello!';
        }
    }

    function square(x) {
        return Math.pow(x, 2);
    }

    function squareRoot(x) {
        return Math.sqrt(x);
    }

    function sum(nums) {
        let result = 0;

        for (let index = 0; index < nums.length; index += 1) {
            result += nums[index];
        }

        return result;
    }

    function squareAll(nums) {
        let result = [];

        for (let index = 0; index < nums.length; index += 1) {
            result[index] = square(nums[index]);
        }

        return result;
    }

    function sumOfSquares(nums) {
        return square(nums[0]);
    }

    module.exports = {
        greet: greet,
        square: square,
        squareAll: squareAll,
        squareRoot: squareRoot,
        sum: sum,
        sumOfSquares: sumOfSquares
    };

})();

// Run the tests!


// Movement 14

// Changes to make:
// Add logic to square all numbers and return the sum

// function sumOfSquares (nums) {
//     let squares = squareAll(nums);
//     return sum(squares);
// }

(function () {
    'use strict';

    function greet(greeting) {
        if (greeting !== undefined) {
            return greeting + '!';
        } else {
            return 'Hello!';
        }
    }

    function square(x) {
        return Math.pow(x, 2);
    }

    function squareRoot(x) {
        return Math.sqrt(x);
    }

    function sum(nums) {
        let result = 0;

        for (let index = 0; index < nums.length; index += 1) {
            result += nums[index];
        }

        return result;
    }

    function squareAll(nums) {
        let result = [];

        for (let index = 0; index < nums.length; index += 1) {
            result[index] = square(nums[index]);
        }

        return result;
    }

    function sumOfSquares(nums) {
        let squares = squareAll(nums);
        return sum(squares);
    }

    module.exports = {
        greet: greet,
        square: square,
        squareAll: squareAll,
        squareRoot: squareRoot,
        sum: sum,
        sumOfSquares: sumOfSquares
    };

})();

// Run the tests!


// Movement 15

// Changes to make:
// Add buildVector function

// function buildVector (points) {
//     return points;
// }

// module.exports = {
//     buildVector: buildVector,
//     greet: greet,
//     square: square,
//     squareAll: squareAll,
//     squareRoot: squareRoot,
//     sum: sum,
//     sumOfSquares: sumOfSquares
// };

(function () {
    'use strict';

    function greet(greeting) {
        if (greeting !== undefined) {
            return greeting + '!';
        } else {
            return 'Hello!';
        }
    }

    function square(x) {
        return Math.pow(x, 2);
    }

    function squareRoot(x) {
        return Math.sqrt(x);
    }

    function sum(nums) {
        let result = 0;

        for (let index = 0; index < nums.length; index += 1) {
            result += nums[index];
        }

        return result;
    }

    function squareAll(nums) {
        let result = [];

        for (let index = 0; index < nums.length; index += 1) {
            result[index] = square(nums[index]);
        }

        return result;
    }

    function sumOfSquares(nums) {
        let squares = squareAll(nums);
        return sum(squares);
    }

    function buildVector(points) {
        return points;
    }

    module.exports = {
        buildVector: buildVector,
        greet: greet,
        square: square,
        squareAll: squareAll,
        squareRoot: squareRoot,
        sum: sum,
        sumOfSquares: sumOfSquares
    };

})();

// Run the tests!


// Movement 16

// Changes to make:
// Add logic to return a copy of vector array

// function buildVector (points) {
//     return points.slice(0);
// }

(function () {
    'use strict';

    function greet(greeting) {
        if (greeting !== undefined) {
            return greeting + '!';
        } else {
            return 'Hello!';
        }
    }

    function square(x) {
        return Math.pow(x, 2);
    }

    function squareRoot(x) {
        return Math.sqrt(x);
    }

    function sum(nums) {
        let result = 0;

        for (let index = 0; index < nums.length; index += 1) {
            result += nums[index];
        }

        return result;
    }

    function squareAll(nums) {
        let result = [];

        for (let index = 0; index < nums.length; index += 1) {
            result[index] = square(nums[index]);
        }

        return result;
    }

    function sumOfSquares(nums) {
        let squares = squareAll(nums);
        return sum(squares);
    }

    function buildVector(points) {
        return points.slice(0);
    }

    module.exports = {
        buildVector: buildVector,
        greet: greet,
        square: square,
        squareAll: squareAll,
        squareRoot: squareRoot,
        sum: sum,
        sumOfSquares: sumOfSquares
    };

})();

// Run the tests!

// Movement 17

// Changes to make:
// Add custom valueOf function to array

// function buildVector (points) {
//     let vector = points.slice(0);

//     vector.valueOf = function () { return points.slice(0); };

//     return vector;
// }

(function () {
    'use strict';

    function greet(greeting) {
        if (greeting !== undefined) {
            return greeting + '!';
        } else {
            return 'Hello!';
        }
    }

    function square(x) {
        return Math.pow(x, 2);
    }

    function squareRoot(x) {
        return Math.sqrt(x);
    }

    function sum(nums) {
        let result = 0;

        for (let index = 0; index < nums.length; index += 1) {
            result += nums[index];
        }

        return result;
    }

    function squareAll(nums) {
        let result = [];

        for (let index = 0; index < nums.length; index += 1) {
            result[index] = square(nums[index]);
        }

        return result;
    }

    function sumOfSquares(nums) {
        let squares = squareAll(nums);
        return sum(squares);
    }

    function buildVector(points) {
        let vector = points.slice(0);

        vector.valueOf = function () { return points.slice(0); };

        return vector;
    }

    module.exports = {
        buildVector: buildVector,
        greet: greet,
        square: square,
        squareAll: squareAll,
        squareRoot: squareRoot,
        sum: sum,
        sumOfSquares: sumOfSquares
    };

})();

// Run the tests!

// Movement 18

// Changes to make:
// Add custom toString function to array

// function buildVector (points) {
//     let vector = points.slice(0);

//     vector.valueOf = function () { return points.slice(0); };
//     vector.toString = function () { return '<' + points.join(',') + '>'; };

//     return vector;
// }

(function () {
    'use strict';

    function greet(greeting) {
        if (greeting !== undefined) {
            return greeting + '!';
        } else {
            return 'Hello!';
        }
    }

    function square(x) {
        return Math.pow(x, 2);
    }

    function squareRoot(x) {
        return Math.sqrt(x);
    }

    function sum(nums) {
        let result = 0;

        for (let index = 0; index < nums.length; index += 1) {
            result += nums[index];
        }

        return result;
    }

    function squareAll(nums) {
        let result = [];

        for (let index = 0; index < nums.length; index += 1) {
            result[index] = square(nums[index]);
        }

        return result;
    }

    function sumOfSquares(nums) {
        let squares = squareAll(nums);
        return sum(squares);
    }

    function buildVector(points) {
        let vector = points.slice(0);

        vector.valueOf = function () { return points.slice(0); };
        vector.toString = function () { return '<' + points.join(',') + '>'; };

        return vector;
    }

    module.exports = {
        buildVector: buildVector,
        greet: greet,
        square: square,
        squareAll: squareAll,
        squareRoot: squareRoot,
        sum: sum,
        sumOfSquares: sumOfSquares
    };

})();

// Run the tests!

// Movement 19

// Changes to make:
// Add cheated-out magnitude function

// function magnitude (vector) {
//     return vector[0];
// }

// module.exports = {
//     buildVector: buildVector,
//     greet: greet,
//     magnitude: magnitude,
//     square: square,
//     squareAll: squareAll,
//     squareRoot: squareRoot,
//     sum: sum,
//     sumOfSquares: sumOfSquares
// };

(function () {
    'use strict';

    function greet(greeting) {
        if (greeting !== undefined) {
            return greeting + '!';
        } else {
            return 'Hello!';
        }
    }

    function square(x) {
        return Math.pow(x, 2);
    }

    function squareRoot(x) {
        return Math.sqrt(x);
    }

    function sum(nums) {
        let result = 0;

        for (let index = 0; index < nums.length; index += 1) {
            result += nums[index];
        }

        return result;
    }

    function squareAll(nums) {
        let result = [];

        for (let index = 0; index < nums.length; index += 1) {
            result[index] = square(nums[index]);
        }

        return result;
    }

    function sumOfSquares(nums) {
        let squares = squareAll(nums);
        return sum(squares);
    }

    function buildVector(points) {
        let vector = points.slice(0);

        vector.valueOf = function () { return points.slice(0); };
        vector.toString = function () { return '<' + points.join(',') + '>'; };

        return vector;
    }

    function magnitude(vector) {
        return vector[0];
    }

    module.exports = {
        buildVector: buildVector,
        greet: greet,
        magnitude: magnitude,
        square: square,
        squareAll: squareAll,
        squareRoot: squareRoot,
        sum: sum,
        sumOfSquares: sumOfSquares
    };

})();

// Run the tests!

// Movement 20

// Changes to make:
// Add logic to ensure magnitude is always positive

// function magnitude (vector) {
//     let squaredMagnitude = square(vector[0]);
//     return squareRoot(squaredMagnitude);
// }

(function () {
    'use strict';

    function greet(greeting) {
        if (greeting !== undefined) {
            return greeting + '!';
        } else {
            return 'Hello!';
        }
    }

    function square(x) {
        return Math.pow(x, 2);
    }

    function squareRoot(x) {
        return Math.sqrt(x);
    }

    function sum(nums) {
        let result = 0;

        for (let index = 0; index < nums.length; index += 1) {
            result += nums[index];
        }

        return result;
    }

    function squareAll(nums) {
        let result = [];

        for (let index = 0; index < nums.length; index += 1) {
            result[index] = square(nums[index]);
        }

        return result;
    }

    function sumOfSquares(nums) {
        let squares = squareAll(nums);
        return sum(squares);
    }

    function buildVector(points) {
        let vector = points.slice(0);

        vector.valueOf = function () { return points.slice(0); };
        vector.toString = function () { return '<' + points.join(',') + '>'; };

        return vector;
    }

    function magnitude(vector) {
        let squaredMagnitude = square(vector[0]);
        return squareRoot(squaredMagnitude);
    }

    module.exports = {
        buildVector: buildVector,
        greet: greet,
        magnitude: magnitude,
        square: square,
        squareAll: squareAll,
        squareRoot: squareRoot,
        sum: sum,
        sumOfSquares: sumOfSquares
    };

})();

// Run the tests!


// Movement 21

// Changes to make:
// Add logic to perform proper magnitude calculation for length 1 and 2 vectors

// function magnitude (vector) {
//     let squaredMagnitude = square(vector[0]);

//     if(vector.length === 2) {
//         squaredMagnitude += square(vector[1]);
//     }

//     return squareRoot(squaredMagnitude);
// }

(function () {
    'use strict';

    function greet(greeting) {
        if (greeting !== undefined) {
            return greeting + '!';
        } else {
            return 'Hello!';
        }
    }

    function square(x) {
        return Math.pow(x, 2);
    }

    function squareRoot(x) {
        return Math.sqrt(x);
    }

    function sum(nums) {
        let result = 0;

        for (let index = 0; index < nums.length; index += 1) {
            result += nums[index];
        }

        return result;
    }

    function squareAll(nums) {
        let result = [];

        for (let index = 0; index < nums.length; index += 1) {
            result[index] = square(nums[index]);
        }

        return result;
    }

    function sumOfSquares(nums) {
        let squares = squareAll(nums);
        return sum(squares);
    }

    function buildVector(points) {
        let vector = points.slice(0);

        vector.valueOf = function () { return points.slice(0); };
        vector.toString = function () { return '<' + points.join(',') + '>'; };

        return vector;
    }

    function magnitude(vector) {
        let squaredMagnitude = square(vector[0]);

        if (vector.length === 2) {
            squaredMagnitude += square(vector[1]);
        }

        return squareRoot(squaredMagnitude);
    }

    module.exports = {
        buildVector: buildVector,
        greet: greet,
        magnitude: magnitude,
        square: square,
        squareAll: squareAll,
        squareRoot: squareRoot,
        sum: sum,
        sumOfSquares: sumOfSquares
    };

})();

// Run the tests!


// Movement 22

// Changes to make:
// Add logic to compute the magnitude of an arbitrary length vector.

// function magnitude (vector) {
//     let squaredMagnitude = sumOfSquares(vector);
//     return squareRoot(squaredMagnitude);
// }

(function () {
    'use strict';

    function greet(greeting) {
        if (greeting !== undefined) {
            return greeting + '!';
        } else {
            return 'Hello!';
        }
    }

    function square(x) {
        return Math.pow(x, 2);
    }

    function squareRoot(x) {
        return Math.sqrt(x);
    }

    function sum(nums) {
        let result = 0;

        for (let index = 0; index < nums.length; index += 1) {
            result += nums[index];
        }

        return result;
    }

    function squareAll(nums) {
        let result = [];

        for (let index = 0; index < nums.length; index += 1) {
            result[index] = square(nums[index]);
        }

        return result;
    }

    function sumOfSquares(nums) {
        let squares = squareAll(nums);
        return sum(squares);
    }

    function buildVector(points) {
        let vector = points.slice(0);

        vector.valueOf = function () { return points.slice(0); };
        vector.toString = function () { return '<' + points.join(',') + '>'; };

        return vector;
    }

    function magnitude(vector) {
        let squaredMagnitude = sumOfSquares(vector);
        return squareRoot(squaredMagnitude);
    }

    module.exports = {
        buildVector: buildVector,
        greet: greet,
        magnitude: magnitude,
        square: square,
        squareAll: squareAll,
        squareRoot: squareRoot,
        sum: sum,
        sumOfSquares: sumOfSquares
    };

})();

// Run the tests!


// Movement 23

// Changes to make:
// Add cheated-out getVectorsShorterThan function

// function getVectorsShorterThan (length, vectors) {
//     return vectors;
// }

// module.exports = {
//     buildVector: buildVector,
//     getVectorsShorterThan: getVectorsShorterThan,
//     greet: greet,
//     magnitude: magnitude,
//     square: square,
//     squareAll: squareAll,
//     squareRoot: squareRoot,
//     sum: sum,
//     sumOfSquares: sumOfSquares
// };

(function () {
    'use strict';

    function greet(greeting) {
        if (greeting !== undefined) {
            return greeting + '!';
        } else {
            return 'Hello!';
        }
    }

    function square(x) {
        return Math.pow(x, 2);
    }

    function squareRoot(x) {
        return Math.sqrt(x);
    }

    function sum(nums) {
        let result = 0;

        for (let index = 0; index < nums.length; index += 1) {
            result += nums[index];
        }

        return result;
    }

    function squareAll(nums) {
        let result = [];

        for (let index = 0; index < nums.length; index += 1) {
            result[index] = square(nums[index]);
        }

        return result;
    }

    function sumOfSquares(nums) {
        let squares = squareAll(nums);
        return sum(squares);
    }

    function buildVector(points) {
        let vector = points.slice(0);

        vector.valueOf = function () { return points.slice(0); };
        vector.toString = function () { return '<' + points.join(',') + '>'; };

        return vector;
    }

    function magnitude(vector) {
        let squaredMagnitude = sumOfSquares(vector);
        return squareRoot(squaredMagnitude);
    }

    function getVectorsShorterThan(length, vectors) {
        return vectors;
    }

    module.exports = {
        buildVector: buildVector,
        getVectorsShorterThan: getVectorsShorterThan,
        greet: greet,
        magnitude: magnitude,
        square: square,
        squareAll: squareAll,
        squareRoot: squareRoot,
        sum: sum,
        sumOfSquares: sumOfSquares
    };

})();

// Run the tests!


// Movement 24

// Changes to make:
// Add logic to handle the case where a vector is too long

// function getVectorsShorterThan (length, vectors) {
//     if(magnitude(vectors[0]) < length) {
//         return vectors;
//     } 

//     return [];
// }

(function () {
    'use strict';

    function greet(greeting) {
        if (greeting !== undefined) {
            return greeting + '!';
        } else {
            return 'Hello!';
        }
    }

    function square(x) {
        return Math.pow(x, 2);
    }

    function squareRoot(x) {
        return Math.sqrt(x);
    }

    function sum(nums) {
        let result = 0;

        for (let index = 0; index < nums.length; index += 1) {
            result += nums[index];
        }

        return result;
    }

    function squareAll(nums) {
        let result = [];

        for (let index = 0; index < nums.length; index += 1) {
            result[index] = square(nums[index]);
        }

        return result;
    }

    function sumOfSquares(nums) {
        let squares = squareAll(nums);
        return sum(squares);
    }

    function buildVector(points) {
        let vector = points.slice(0);

        vector.valueOf = function () { return points.slice(0); };
        vector.toString = function () { return '<' + points.join(',') + '>'; };

        return vector;
    }

    function magnitude(vector) {
        let squaredMagnitude = sumOfSquares(vector);
        return squareRoot(squaredMagnitude);
    }

    function getVectorsShorterThan(length, vectors) {
        if (magnitude(vectors[0]) < length) {
            return vectors;
        }

        return [];
    }

    module.exports = {
        buildVector: buildVector,
        getVectorsShorterThan: getVectorsShorterThan,
        greet: greet,
        magnitude: magnitude,
        square: square,
        squareAll: squareAll,
        squareRoot: squareRoot,
        sum: sum,
        sumOfSquares: sumOfSquares
    };

})();

// Run the tests!


// Movement 25

// Changes to make:
// Add logic to handle 0, 1 or 2 vector cases

// function getVectorsShorterThan (length, vectors) {
//     let result = [];

//     if(magnitude(vectors[0]) < length) {
//         result[0] = vectors[0];
//     } else if(vectors.length > 1 && magnitude(vectors[1]) < length) {
//         result[0] = vectors[1];
//     }

//     return result;
// }

(function () {
    'use strict';

    function greet(greeting) {
        if (greeting !== undefined) {
            return greeting + '!';
        } else {
            return 'Hello!';
        }
    }

    function square(x) {
        return Math.pow(x, 2);
    }

    function squareRoot(x) {
        return Math.sqrt(x);
    }

    function sum(nums) {
        let result = 0;

        for (let index = 0; index < nums.length; index += 1) {
            result += nums[index];
        }

        return result;
    }

    function squareAll(nums) {
        let result = [];

        for (let index = 0; index < nums.length; index += 1) {
            result[index] = square(nums[index]);
        }

        return result;
    }

    function sumOfSquares(nums) {
        let squares = squareAll(nums);
        return sum(squares);
    }

    function buildVector(points) {
        let vector = points.slice(0);

        vector.valueOf = function () { return points.slice(0); };
        vector.toString = function () { return '<' + points.join(',') + '>'; };

        return vector;
    }

    function magnitude(vector) {
        let squaredMagnitude = sumOfSquares(vector);
        return squareRoot(squaredMagnitude);
    }

    function getVectorsShorterThan(length, vectors) {
        let result = [];

        if (magnitude(vectors[0]) < length) {
            result[0] = vectors[0];
        } else if (vectors.length > 1 && magnitude(vectors[1]) < length) {
            result[0] = vectors[1];
        }

        return result;
    }

    module.exports = {
        buildVector: buildVector,
        getVectorsShorterThan: getVectorsShorterThan,
        greet: greet,
        magnitude: magnitude,
        square: square,
        squareAll: squareAll,
        squareRoot: squareRoot,
        sum: sum,
        sumOfSquares: sumOfSquares
    };

})();

// Run the tests!


// Movement 26

// Changes to make:
// Move to general code for filtering vecctors

// function getVectorsShorterThan (length, vectors) {
//     let result = [];

//     for(let index = 0; index < vectors.length; index += 1) {
//         if(magnitude(vectors[index]) < length) {
//             result[result.length] = vectors[index];
//         }
//     }

//     return result;
// }

(function () {
    'use strict';

    function greet(greeting) {
        if (greeting !== undefined) {
            return greeting + '!';
        } else {
            return 'Hello!';
        }
    }

    function square(x) {
        return Math.pow(x, 2);
    }

    function squareRoot(x) {
        return Math.sqrt(x);
    }

    function sum(nums) {
        let result = 0;

        for (let index = 0; index < nums.length; index += 1) {
            result += nums[index];
        }

        return result;
    }

    function squareAll(nums) {
        let result = [];

        for (let index = 0; index < nums.length; index += 1) {
            result[index] = square(nums[index]);
        }

        return result;
    }

    function sumOfSquares(nums) {
        let squares = squareAll(nums);
        return sum(squares);
    }

    function buildVector(points) {
        let vector = points.slice(0);

        vector.valueOf = function () { return points.slice(0); };
        vector.toString = function () { return '<' + points.join(',') + '>'; };

        return vector;
    }

    function magnitude(vector) {
        let squaredMagnitude = sumOfSquares(vector);
        return squareRoot(squaredMagnitude);
    }

    function getVectorsShorterThan(length, vectors) {
        let result = [];

        for (let index = 0; index < vectors.length; index += 1) {
            if (magnitude(vectors[index]) < length) {
                result[result.length] = vectors[index];
            }
        }

        return result;
    }

    module.exports = {
        buildVector: buildVector,
        getVectorsShorterThan: getVectorsShorterThan,
        greet: greet,
        magnitude: magnitude,
        square: square,
        squareAll: squareAll,
        squareRoot: squareRoot,
        sum: sum,
        sumOfSquares: sumOfSquares
    };

})();

// Run the tests!
