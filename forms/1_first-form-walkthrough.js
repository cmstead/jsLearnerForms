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

// function greet (greeting){
//     return 'Hello!';
// }

// module.exports = {
//     greet: greet
// };

(function () {
    'use strict';

    function greet (greeting){
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

// Changes to make:
// Add condition to greet to handle custom greeting case

// function greet(greeting) {
//     if (greeting === undefined) {
//         return 'Hello!';
//     } else {
//         return greeting + '!';
//     }
// }

(function () {
    'use strict';

    function greet(greeting) {
        if (greeting === undefined) {
            return 'Hello!';
        } else {
            return greeting + '!';
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

// function square(x) {
//     return 1;
// }

// module.exports = {
//     square: square,
//     ...
// };


(function () {
    'use strict';

    function greet(greeting) {
        if (greeting === undefined) {
            return 'Hello!';
        } else {
            return greeting + '!';
        }
    }

    function square(x) {
        return 1;
    }

    module.exports = {
        square: square,
        greet: greet
    };

})();

// Run the tests!


// Movement 4

// Concepts in this movement
// - simple mathematical computation

// Changes to make:
// Add logic to correctly square a number

// function square(x) {
//     return x * x;
// }

(function () {
    'use strict';

    function greet(greeting) {
        if (greeting === undefined) {
            return 'Hello!';
        } else {
            return greeting + '!';
        }
    }

    function square(x) {
        return x * x;
    }

    module.exports = {
        square: square,
        greet: greet
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
        if (greeting === undefined) {
            return 'Hello!';
        } else {
            return greeting + '!';
        }
    }

    function square(x) {
        return Math.pow(x, 2);
    }

    module.exports = {
        square: square,
        greet: greet
    };

})();

// Run the tests!


// Movement 6

// Concepts in this movement:
// - simplest thing to pass the test
// - export a function

// Changes to make:
// Add cheated-out square root function

// function squareRoot(x) {
//     return 1;
// }

// module.exports = {
//     squareRoot: squareRoot,
//     ...
// };

(function () {
    'use strict';

    function greet(greeting) {
        if (greeting === undefined) {
            return 'Hello!';
        } else {
            return greeting + '!';
        }
    }

    function square(x) {
        return Math.pow(x, 2);
    }

    function squareRoot(x) {
        return 1;
    }

    module.exports = {
        squareRoot: squareRoot,
        square: square,
        greet: greet
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
        if (greeting === undefined) {
            return 'Hello!';
        } else {
            return greeting + '!';
        }
    }

    function square(x) {
        return Math.pow(x, 2);
    }

    function squareRoot(x) {
        return Math.sqrt(x);
    }

    module.exports = {
        squareRoot: squareRoot,
        square: square,
        greet: greet
    };

})();

// Run the tests!


// Movement 8

// Changes to make:
// Add cheated out sum function

// function sum(nums) {
//     return 1;
// }

// module.exports = {
//     sum: sum,
//     ...
// };

(function () {
    'use strict';

    function greet(greeting) {
        if (greeting === undefined) {
            return 'Hello!';
        } else {
            return greeting + '!';
        }
    }

    function square(x) {
        return Math.pow(x, 2);
    }

    function squareRoot(x) {
        return Math.sqrt(x);
    }

    function sum(nums) {
        return 1;
    }

    module.exports = {
        sum: sum,
        squareRoot: squareRoot,
        square: square,
        greet: greet
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

// function sum(nums) {
//     if(nums.length === 1) {
//         return nums[0];
//     } else {
//         return nums[0] + nums[1];
//     }
// }

(function () {
    'use strict';

    function greet(greeting) {
        if (greeting === undefined) {
            return 'Hello!';
        } else {
            return greeting + '!';
        }
    }

    function square(x) {
        return Math.pow(x, 2);
    }

    function squareRoot(x) {
        return Math.sqrt(x);
    }

    function sum(nums) {
        if(nums.length === 1) {
            return nums[0];
        } else {
            return nums[0] + nums[1];
        }
    }

    module.exports = {
        sum: sum,
        squareRoot: squareRoot,
        square: square,
        greet: greet
    };

})();

// Run the tests!


// Movement 10

// Concepts introduced in this movement:
// - looping
// - arrays

// Changes to make:
// Add logic to sum an arbitrary length array of numbers

// function sum(nums) {
//     let finalSum = 0;
    
//     for(let index = 0; index < nums.length; index++) {
//         finalSum += nums[index];
//     }
    
//     return finalSum;
// }

(function () {
    'use strict';

    function greet(greeting) {
        if (greeting === undefined) {
            return 'Hello!';
        } else {
            return greeting + '!';
        }
    }

    function square(x) {
        return Math.pow(x, 2);
    }

    function squareRoot(x) {
        return Math.sqrt(x);
    }

    function sum(nums) {
        let finalSum = 0;
        
        for(let index = 0; index < nums.length; index++) {
            finalSum += nums[index];
        }
        
        return finalSum;
    }

    module.exports = {
        sum: sum,
        squareRoot: squareRoot,
        square: square,
        greet: greet
    };

})();

// Run the tests!


// Movement 11

// Changes to make:
// Add a cheated-out squareAll function

// function squareAll(nums) {
//     return [4];
// }

// module.exports = {
//     squareAll: squareAll,
//     ...
// };

(function () {
    'use strict';

    function greet(greeting) {
        if (greeting === undefined) {
            return 'Hello!';
        } else {
            return greeting + '!';
        }
    }

    function square(x) {
        return Math.pow(x, 2);
    }

    function squareRoot(x) {
        return Math.sqrt(x);
    }

    function sum(nums) {
        let finalSum = 0;

        for (let index = 0; index < nums.length; index++) {
            finalSum += nums[index];
        }

        return finalSum;
    }

    function squareAll(nums) {
        return [4];
    }

    module.exports = {
        squareAll: squareAll,
        sum: sum,
        squareRoot: squareRoot,
        square: square,
        greet: greet
    };

})();

// Run the tests!


// Movement 12

// Changes to make:
// Add logic to square all numbers in array

// function squareAll(nums) {
//     let result = [];
//     let squaredNum = 0;
    
//     for(let index = 0; index < nums.length; index++) {
//         squaredNum = square(nums[index]);
//         result[index] = squaredNum;
//     }
    
//     return result;
// }

(function () {
    'use strict';

    function greet(greeting) {
        if (greeting === undefined) {
            return 'Hello!';
        } else {
            return greeting + '!';
        }
    }

    function square(x) {
        return Math.pow(x, 2);
    }

    function squareRoot(x) {
        return Math.sqrt(x);
    }

    function sum(nums) {
        let finalSum = 0;

        for (let index = 0; index < nums.length; index++) {
            finalSum += nums[index];
        }

        return finalSum;
    }

    function squareAll(nums) {
        let result = [];
        let squaredNum = 0;
        
        for(let index = 0; index < nums.length; index++) {
            squaredNum = square(nums[index]);
            result[index] = squaredNum;
        }
        
        return result;
    }

    module.exports = {
        squareAll: squareAll,
        sum: sum,
        squareRoot: squareRoot,
        square: square,
        greet: greet
    };

})();

// Run the tests!


// Movement 13

// Changes to make:
// Add sumOfSquares function with logic to square a single number

// function sumOfSquares(nums) {
//     return square(nums[0]);
// }

// module.exports = {
//     sumOfSquares: sumOfSquares,
//     ...
// };

(function () {
    'use strict';

    function greet(greeting) {
        if (greeting === undefined) {
            return 'Hello!';
        } else {
            return greeting + '!';
        }
    }

    function square(x) {
        return Math.pow(x, 2);
    }

    function squareRoot(x) {
        return Math.sqrt(x);
    }

    function sum(nums) {
        let finalSum = 0;

        for (let index = 0; index < nums.length; index++) {
            finalSum += nums[index];
        }

        return finalSum;
    }

    function squareAll(nums) {
        let result = [];
        let squaredNum = 0;

        for (let index = 0; index < nums.length; index++) {
            squaredNum = square(nums[index]);
            result[index] = squaredNum;
        }

        return result;
    }

    function sumOfSquares(nums) {
        return square(nums[0]);
    }

    module.exports = {
        sumOfSquares: sumOfSquares,
        squareAll: squareAll,
        sum: sum,
        squareRoot: squareRoot,
        square: square,
        greet: greet
    };

})();

// Run the tests!


// Movement 14

// Changes to make:
// Add logic to square all numbers and return the sum

// function sumOfSquares(nums) {
//     let squares = squareAll(nums);
//     return sum(squares);
// }

(function () {
    'use strict';

    function greet(greeting) {
        if (greeting === undefined) {
            return 'Hello!';
        } else {
            return greeting + '!';
        }
    }

    function square(x) {
        return Math.pow(x, 2);
    }

    function squareRoot(x) {
        return Math.sqrt(x);
    }

    function sum(nums) {
        let finalSum = 0;

        for (let index = 0; index < nums.length; index++) {
            finalSum += nums[index];
        }

        return finalSum;
    }

    function squareAll(nums) {
        let result = [];
        let squaredNum = 0;

        for (let index = 0; index < nums.length; index++) {
            squaredNum = square(nums[index]);
            result[index] = squaredNum;
        }

        return result;
    }

    function sumOfSquares(nums) {
        let squares = squareAll(nums);
        return sum(squares);
    }

    module.exports = {
        sumOfSquares: sumOfSquares,
        squareAll: squareAll,
        sum: sum,
        squareRoot: squareRoot,
        square: square,
        greet: greet
    };

})();

// Run the tests!


// Movement 15

// Changes to make:
// Add buildVector function

// function buildVector(valueArray) {
//     return valueArray;
// }

// module.exports = {
//     buildVector: buildVector,
//     ...
// };

(function () {
    'use strict';

    function greet(greeting) {
        if (greeting === undefined) {
            return 'Hello!';
        } else {
            return greeting + '!';
        }
    }

    function square(x) {
        return Math.pow(x, 2);
    }

    function squareRoot(x) {
        return Math.sqrt(x);
    }

    function sum(nums) {
        let finalSum = 0;

        for (let index = 0; index < nums.length; index++) {
            finalSum += nums[index];
        }

        return finalSum;
    }

    function squareAll(nums) {
        let result = [];
        let squaredNum = 0;

        for (let index = 0; index < nums.length; index++) {
            squaredNum = square(nums[index]);
            result[index] = squaredNum;
        }

        return result;
    }

    function sumOfSquares(nums) {
        let squares = squareAll(nums);
        return sum(squares);
    }

    function buildVector(valueArray) {
        return valueArray;
    }

    module.exports = {
        buildVector: buildVector,
        sumOfSquares: sumOfSquares,
        squareAll: squareAll,
        sum: sum,
        squareRoot: squareRoot,
        square: square,
        greet: greet
    };

})();

// Run the tests!


// Movement 16

// Changes to make:
// Add logic to return a copy of vector array

// function buildVector(valueArray) {
//     return valueArray.slice(0);
// }

(function () {
    'use strict';

    function greet(greeting) {
        if (greeting === undefined) {
            return 'Hello!';
        } else {
            return greeting + '!';
        }
    }

    function square(x) {
        return Math.pow(x, 2);
    }

    function squareRoot(x) {
        return Math.sqrt(x);
    }

    function sum(nums) {
        let finalSum = 0;

        for (let index = 0; index < nums.length; index++) {
            finalSum += nums[index];
        }

        return finalSum;
    }

    function squareAll(nums) {
        let result = [];
        let squaredNum = 0;

        for (let index = 0; index < nums.length; index++) {
            squaredNum = square(nums[index]);
            result[index] = squaredNum;
        }

        return result;
    }

    function sumOfSquares(nums) {
        let squares = squareAll(nums);
        return sum(squares);
    }

    function buildVector(valueArray) {
        return valueArray.slice(0);
    }

    module.exports = {
        buildVector: buildVector,
        sumOfSquares: sumOfSquares,
        squareAll: squareAll,
        sum: sum,
        squareRoot: squareRoot,
        square: square,
        greet: greet
    };

})();

// Run the tests!

// Movement 17

// Changes to make:
// Add custom valueOf function to array

// function buildVector(valueArray) {
//     let vector = valueArray.slice(0);
    
//     vector.valueOf = function () {
//         return this.slice(0);
//     };
    
//     return vector;
// }

(function () {
    'use strict';

    function greet(greeting) {
        if (greeting === undefined) {
            return 'Hello!';
        } else {
            return greeting + '!';
        }
    }

    function square(x) {
        return Math.pow(x, 2);
    }

    function squareRoot(x) {
        return Math.sqrt(x);
    }

    function sum(nums) {
        let finalSum = 0;

        for (let index = 0; index < nums.length; index++) {
            finalSum += nums[index];
        }

        return finalSum;
    }

    function squareAll(nums) {
        let result = [];
        let squaredNum = 0;

        for (let index = 0; index < nums.length; index++) {
            squaredNum = square(nums[index]);
            result[index] = squaredNum;
        }

        return result;
    }

    function sumOfSquares(nums) {
        let squares = squareAll(nums);
        return sum(squares);
    }

    function buildVector(valueArray) {
        let vector = valueArray.slice(0);
        
        vector.valueOf = function () {
            return this.slice(0);
        };
        
        return vector;
    }

    module.exports = {
        buildVector: buildVector,
        sumOfSquares: sumOfSquares,
        squareAll: squareAll,
        sum: sum,
        squareRoot: squareRoot,
        square: square,
        greet: greet
    };

})();

// Run the tests!

// Movement 18

// Changes to make:
// Add custom toString function to array

// function buildVector(valueArray) {
//     let vector = valueArray.slice(0);
    
//     vector.valueOf = function () {
//         return this.slice(0);
//     };
    
//     vector.toString = function () {
//         return '<' + this.valueOf().toString() + '>';
//     };
    
//     return vector;
// }

(function () {
    'use strict';

    function greet(greeting) {
        if (greeting === undefined) {
            return 'Hello!';
        } else {
            return greeting + '!';
        }
    }

    function square(x) {
        return Math.pow(x, 2);
    }

    function squareRoot(x) {
        return Math.sqrt(x);
    }

    function sum(nums) {
        let finalSum = 0;

        for (let index = 0; index < nums.length; index++) {
            finalSum += nums[index];
        }

        return finalSum;
    }

    function squareAll(nums) {
        let result = [];
        let squaredNum = 0;

        for (let index = 0; index < nums.length; index++) {
            squaredNum = square(nums[index]);
            result[index] = squaredNum;
        }

        return result;
    }

    function sumOfSquares(nums) {
        let squares = squareAll(nums);
        return sum(squares);
    }

    function buildVector(valueArray) {
        let vector = valueArray.slice(0);
        
        vector.valueOf = function () {
            return this.slice(0);
        };
        
        vector.toString = function () {
            return '<' + this.valueOf().toString() + '>';
        };
        
        return vector;
    }

    module.exports = {
        buildVector: buildVector,
        sumOfSquares: sumOfSquares,
        squareAll: squareAll,
        sum: sum,
        squareRoot: squareRoot,
        square: square,
        greet: greet
    };

})();

// Run the tests!

// Movement 19

// Changes to make:
// Add cheated-out magnitude function

// function magnitude(vector) {
//     return vector[0];
// }

// module.exports = {
//     magnitude: magnitude,
//     ...
// };

(function () {
    'use strict';

    function greet(greeting) {
        if (greeting === undefined) {
            return 'Hello!';
        } else {
            return greeting + '!';
        }
    }

    function square(x) {
        return Math.pow(x, 2);
    }

    function squareRoot(x) {
        return Math.sqrt(x);
    }

    function sum(nums) {
        let finalSum = 0;

        for (let index = 0; index < nums.length; index++) {
            finalSum += nums[index];
        }

        return finalSum;
    }

    function squareAll(nums) {
        let result = [];
        let squaredNum = 0;

        for (let index = 0; index < nums.length; index++) {
            squaredNum = square(nums[index]);
            result[index] = squaredNum;
        }

        return result;
    }

    function sumOfSquares(nums) {
        let squares = squareAll(nums);
        return sum(squares);
    }

    function buildVector(valueArray) {
        let vector = valueArray.slice(0);
        
        vector.valueOf = function () {
            return this.slice(0);
        };
        
        vector.toString = function () {
            return '<' + this.valueOf().toString() + '>';
        };
        
        return vector;
    }

    function magnitude(vector) {
        return vector[0];
    }

    module.exports = {
        magnitude: magnitude,
        sumOfSquares: sumOfSquares,
        squareAll: squareAll,
        sum: sum,
        squareRoot: squareRoot,
        square: square,
        greet: greet
    };

})();

// Run the tests!

// Movement 20

// Changes to make:
// Add logic to ensure magnitude is always positive

// function magnitude(vector) {
//     let squaredNum = square(vector[0]);
//     return squareRoot(squaredNum);
// }

(function () {
    'use strict';

    function greet(greeting) {
        if (greeting === undefined) {
            return 'Hello!';
        } else {
            return greeting + '!';
        }
    }

    function square(x) {
        return Math.pow(x, 2);
    }

    function squareRoot(x) {
        return Math.sqrt(x);
    }

    function sum(nums) {
        let finalSum = 0;

        for (let index = 0; index < nums.length; index++) {
            finalSum += nums[index];
        }

        return finalSum;
    }

    function squareAll(nums) {
        let result = [];
        let squaredNum = 0;

        for (let index = 0; index < nums.length; index++) {
            squaredNum = square(nums[index]);
            result[index] = squaredNum;
        }

        return result;
    }

    function sumOfSquares(nums) {
        let squares = squareAll(nums);
        return sum(squares);
    }

    function buildVector(valueArray) {
        let vector = valueArray.slice(0);
        
        vector.valueOf = function () {
            return this.slice(0);
        };
        
        vector.toString = function () {
            return '<' + this.valueOf().toString() + '>';
        };
        
        return vector;
    }

    function magnitude(vector) {
        let squaredNum = square(vector[0]);
        return squareRoot(squaredNum);
    }

    module.exports = {
        magnitude: magnitude,
        sumOfSquares: sumOfSquares,
        squareAll: squareAll,
        sum: sum,
        squareRoot: squareRoot,
        square: square,
        greet: greet
    };

})();

// Run the tests!


// Movement 21

// Changes to make:
// Add logic to perform proper magnitude calculation for length 1 and 2 vectors

// function magnitude(vector) {
//     let squares;
    
//     if(vector.length === 1) {
//         squares = square(vector[0]);
//         return squareRoot(squares);
//     } else {
//         squares = [square(vector[0]), square(vector[1])];
//         return squareRoot(squares[0] + squares[1]);
//     }
// }

(function () {
    'use strict';

    function greet(greeting) {
        if (greeting === undefined) {
            return 'Hello!';
        } else {
            return greeting + '!';
        }
    }

    function square(x) {
        return Math.pow(x, 2);
    }

    function squareRoot(x) {
        return Math.sqrt(x);
    }

    function sum(nums) {
        let finalSum = 0;

        for (let index = 0; index < nums.length; index++) {
            finalSum += nums[index];
        }

        return finalSum;
    }

    function squareAll(nums) {
        let result = [];
        let squaredNum = 0;

        for (let index = 0; index < nums.length; index++) {
            squaredNum = square(nums[index]);
            result[index] = squaredNum;
        }

        return result;
    }

    function sumOfSquares(nums) {
        let squares = squareAll(nums);
        return sum(squares);
    }

    function buildVector(valueArray) {
        let vector = valueArray.slice(0);
        
        vector.valueOf = function () {
            return this.slice(0);
        };
        
        vector.toString = function () {
            return '<' + this.valueOf().toString() + '>';
        };
        
        return vector;
    }

    function magnitude(vector) {
        let squares;
        
        if(vector.length === 1) {
            squares = square(vector[0]);
            return squareRoot(squares);
        } else {
            squares = [square(vector[0]), square(vector[1])];
            return squareRoot(squares[0] + squares[1]);
        }
    }

    module.exports = {
        magnitude: magnitude,
        sumOfSquares: sumOfSquares,
        squareAll: squareAll,
        sum: sum,
        squareRoot: squareRoot,
        square: square,
        greet: greet
    };

})();

// Run the tests!


// Movement 22

// Changes to make:
// Add logic to compute the magnitude of an arbitrary length vector.

// function magnitude(vector) {
//     let summedSquares = sumOfSquares(vector);
//     return squareRoot(summedSquares);
// }

(function () {
    'use strict';

    function greet(greeting) {
        if (greeting === undefined) {
            return 'Hello!';
        } else {
            return greeting + '!';
        }
    }

    function square(x) {
        return Math.pow(x, 2);
    }

    function squareRoot(x) {
        return Math.sqrt(x);
    }

    function sum(nums) {
        let finalSum = 0;

        for (let index = 0; index < nums.length; index++) {
            finalSum += nums[index];
        }

        return finalSum;
    }

    function squareAll(nums) {
        let result = [];
        let squaredNum = 0;

        for (let index = 0; index < nums.length; index++) {
            squaredNum = square(nums[index]);
            result[index] = squaredNum;
        }

        return result;
    }

    function sumOfSquares(nums) {
        let squares = squareAll(nums);
        return sum(squares);
    }

    function buildVector(valueArray) {
        let vector = valueArray.slice(0);
        
        vector.valueOf = function () {
            return this.slice(0);
        };
        
        vector.toString = function () {
            return '<' + this.valueOf().toString() + '>';
        };
        
        return vector;
    }

    function magnitude(vector) {
        let summedSquares = sumOfSquares(vector);
        return squareRoot(summedSquares);
    }

    module.exports = {
        magnitude: magnitude,
        sumOfSquares: sumOfSquares,
        squareAll: squareAll,
        sum: sum,
        squareRoot: squareRoot,
        square: square,
        greet: greet
    };

})();

// Run the tests!


// Movement 23

// Changes to make:
// Add cheated-out getVectorsShorterThan function

// function getVectorsShorterThan(maxLength, vectors) {
//     return vectors;
// }

// module.exports = {
//     getVectorsShorterThan: getVectorsShorterThan,
//     ...
// };

(function () {
    'use strict';

    function greet(greeting) {
        if (greeting === undefined) {
            return 'Hello!';
        } else {
            return greeting + '!';
        }
    }

    function square(x) {
        return Math.pow(x, 2);
    }

    function squareRoot(x) {
        return Math.sqrt(x);
    }

    function sum(nums) {
        let finalSum = 0;

        for (let index = 0; index < nums.length; index++) {
            finalSum += nums[index];
        }

        return finalSum;
    }

    function squareAll(nums) {
        let result = [];
        let squaredNum = 0;

        for (let index = 0; index < nums.length; index++) {
            squaredNum = square(nums[index]);
            result[index] = squaredNum;
        }

        return result;
    }

    function sumOfSquares(nums) {
        let squares = squareAll(nums);
        return sum(squares);
    }

    function buildVector(valueArray) {
        let vector = valueArray.slice(0);

        vector.valueOf = function () {
            return this.slice(0);
        };

        vector.toString = function () {
            return '<' + this.valueOf().toString() + '>';
        };

        return vector;
    }

    function magnitude(vector) {
        let summedSquares = sumOfSquares(vector);
        return squareRoot(summedSquares);
    }

    function getVectorsShorterThan(maxLength, vectors) {
        return vectors;
    }

    module.exports = {
        getVectorsShorterThan: getVectorsShorterThan,
        magnitude: magnitude,
        buildVector: buildVector,
        sumOfSquares: sumOfSquares,
        squareAll: squareAll,
        sum: sum,
        squareRoot: squareRoot,
        square: square,
        greet: greet
    };

})();

// Run the tests!


// Movement 24

// Changes to make:
// Add logic to handle the case where a vector is too long

// function getVectorsShorterThan(maxLength, vectors) {
//     if (magnitude(vectors[0]) < maxLength) {
//         return vectors;
//     } else {
//         return [];
//     }
// }

(function () {
    'use strict';

    function greet(greeting) {
        if (greeting === undefined) {
            return 'Hello!';
        } else {
            return greeting + '!';
        }
    }

    function square(x) {
        return Math.pow(x, 2);
    }

    function squareRoot(x) {
        return Math.sqrt(x);
    }

    function sum(nums) {
        let finalSum = 0;

        for (let index = 0; index < nums.length; index++) {
            finalSum += nums[index];
        }

        return finalSum;
    }

    function squareAll(nums) {
        let result = [];
        let squaredNum = 0;

        for (let index = 0; index < nums.length; index++) {
            squaredNum = square(nums[index]);
            result[index] = squaredNum;
        }

        return result;
    }

    function sumOfSquares(nums) {
        let squares = squareAll(nums);
        return sum(squares);
    }

    function buildVector(valueArray) {
        let vector = valueArray.slice(0);

        vector.valueOf = function () {
            return this.slice(0);
        };

        vector.toString = function () {
            return '<' + this.valueOf().toString() + '>';
        };

        return vector;
    }

    function magnitude(vector) {
        let summedSquares = sumOfSquares(vector);
        return squareRoot(summedSquares);
    }

    function getVectorsShorterThan(maxLength, vectors) {
        if (magnitude(vectors[0]) < maxLength) {
            return vectors;
        } else {
            return [];
        }
    }

    module.exports = {
        getVectorsShorterThan: getVectorsShorterThan,
        magnitude: magnitude,
        buildVector: buildVector,
        sumOfSquares: sumOfSquares,
        squareAll: squareAll,
        sum: sum,
        squareRoot: squareRoot,
        square: square,
        greet: greet
    };

})();

// Run the tests!


// Movement 25

// Changes to make:
// Add logic to handle 0, 1 or 2 vector cases

// function getVectorsShorterThan(maxLength, vectors) {
//     let filteredVectors = [];

//     if(magnitude(vectors[0]) < maxLength) {
//         filteredVectors[0] = vectors[0];
//     }
    
//     if(vectors.length > 1 && magnitude(vectors[1]) < maxLength) {
//         filteredVectors[filteredVectors.length] = vectors[1];
//     }
    
//     return filteredVectors;
// }

(function () {
    'use strict';

    function greet(greeting) {
        if (greeting === undefined) {
            return 'Hello!';
        } else {
            return greeting + '!';
        }
    }

    function square(x) {
        return Math.pow(x, 2);
    }

    function squareRoot(x) {
        return Math.sqrt(x);
    }

    function sum(nums) {
        let finalSum = 0;

        for (let index = 0; index < nums.length; index++) {
            finalSum += nums[index];
        }

        return finalSum;
    }

    function squareAll(nums) {
        let result = [];
        let squaredNum = 0;

        for (let index = 0; index < nums.length; index++) {
            squaredNum = square(nums[index]);
            result[index] = squaredNum;
        }

        return result;
    }

    function sumOfSquares(nums) {
        let squares = squareAll(nums);
        return sum(squares);
    }

    function buildVector(valueArray) {
        let vector = valueArray.slice(0);

        vector.valueOf = function () {
            return this.slice(0);
        };

        vector.toString = function () {
            return '<' + this.valueOf().toString() + '>';
        };

        return vector;
    }

    function magnitude(vector) {
        let summedSquares = sumOfSquares(vector);
        return squareRoot(summedSquares);
    }

    function getVectorsShorterThan(maxLength, vectors) {
        let filteredVectors = [];

        if(magnitude(vectors[0]) < maxLength) {
            filteredVectors[0] = vectors[0];
        }
        
        if(vectors.length > 1 && magnitude(vectors[1]) < maxLength) {
            filteredVectors[filteredVectors.length] = vectors[1];
        }
        
        return filteredVectors;
    }

    module.exports = {
        getVectorsShorterThan: getVectorsShorterThan,
        magnitude: magnitude,
        buildVector: buildVector,
        sumOfSquares: sumOfSquares,
        squareAll: squareAll,
        sum: sum,
        squareRoot: squareRoot,
        square: square,
        greet: greet
    };

})();

// Run the tests!


// Movement 26

// Changes to make:
// Move to general code for filtering vecctors

// function getVectorsShorterThan(maxLength, vectors) {
//     let filteredVectors = [];
    
//     for(let index = 0; index < vectors.length; index++) {
//         if(magnitude(vectors[index]) <= maxLength) {
//             filteredVectors[filteredVectors.length] = vectors[index];
//         }
//     }
    
//     return filteredVectors;
// }

(function () {
    'use strict';

    function greet(greeting) {
        if (greeting === undefined) {
            return 'Hello!';
        } else {
            return greeting + '!';
        }
    }

    function square(x) {
        return Math.pow(x, 2);
    }

    function squareRoot(x) {
        return Math.sqrt(x);
    }

    function sum(nums) {
        let finalSum = 0;

        for (let index = 0; index < nums.length; index++) {
            finalSum += nums[index];
        }

        return finalSum;
    }

    function squareAll(nums) {
        let result = [];
        let squaredNum = 0;

        for (let index = 0; index < nums.length; index++) {
            squaredNum = square(nums[index]);
            result[index] = squaredNum;
        }

        return result;
    }

    function sumOfSquares(nums) {
        let squares = squareAll(nums);
        return sum(squares);
    }

    function buildVector(valueArray) {
        let vector = valueArray.slice(0);

        vector.valueOf = function () {
            return this.slice(0);
        };

        vector.toString = function () {
            return '<' + this.valueOf().toString() + '>';
        };

        return vector;
    }

    function magnitude(vector) {
        let summedSquares = sumOfSquares(vector);
        return squareRoot(summedSquares);
    }

    function getVectorsShorterThan(maxLength, vectors) {
        let filteredVectors = [];
        
        for(let index = 0; index < vectors.length; index++) {
            if(magnitude(vectors[index]) <= maxLength) {
                filteredVectors[filteredVectors.length] = vectors[index];
            }
        }
        
        return filteredVectors;
    }

    module.exports = {
        getVectorsShorterThan: getVectorsShorterThan,
        magnitude: magnitude,
        buildVector: buildVector,
        sumOfSquares: sumOfSquares,
        squareAll: squareAll,
        sum: sum,
        squareRoot: squareRoot,
        square: square,
        greet: greet
    };

})();

// Run the tests!