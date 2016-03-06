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

- Function creation
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

(function () {
    'use strict';

    module.exports = {};
    
})();

// Run the tests!

// Movement 2

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

// Movement 3

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

// Movement 4

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

// Movement 5

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

// Movement 6

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

// Movement 7

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

// Movement 8

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

// Movement 9

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

// Movement 10

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

// Movement 11

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
        var finalSum = 0;
        
        for(var index = 0; index < nums.length; index++) {
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

// Movement 12

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
        var finalSum = 0;

        for (var index = 0; index < nums.length; index++) {
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

// Movement 13

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
        var finalSum = 0;

        for (var index = 0; index < nums.length; index++) {
            finalSum += nums[index];
        }

        return finalSum;
    }

    function squareAll(nums) {
        var result = [];
        var squaredNum = 0;
        
        for(var index = 0; index < nums.length; index++) {
            squaredNum = square(nums[index]);
            result[result.length] = squaredNum;
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

// Movement 14

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
        var finalSum = 0;

        for (var index = 0; index < nums.length; index++) {
            finalSum += nums[index];
        }

        return finalSum;
    }

    function squareAll(nums) {
        var result = [];
        var squaredNum = 0;

        for (var index = 0; index < nums.length; index++) {
            squaredNum = square(nums[index]);
            result[result.length] = squaredNum;
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

// Movement 15

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
        var finalSum = 0;

        for (var index = 0; index < nums.length; index++) {
            finalSum += nums[index];
        }

        return finalSum;
    }

    function squareAll(nums) {
        var result = [];
        var squaredNum = 0;

        for (var index = 0; index < nums.length; index++) {
            squaredNum = square(nums[index]);
            result[result.length] = squaredNum;
        }

        return result;
    }

    function sumOfSquares(nums) {
        var squares = squareAll(nums);
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

// Movement 16

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
        var finalSum = 0;

        for (var index = 0; index < nums.length; index++) {
            finalSum += nums[index];
        }

        return finalSum;
    }

    function squareAll(nums) {
        var result = [];
        var squaredNum = 0;

        for (var index = 0; index < nums.length; index++) {
            squaredNum = square(nums[index]);
            result[result.length] = squaredNum;
        }

        return result;
    }

    function sumOfSquares(nums) {
        var squares = squareAll(nums);
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

// Movement 17

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
        var finalSum = 0;

        for (var index = 0; index < nums.length; index++) {
            finalSum += nums[index];
        }

        return finalSum;
    }

    function squareAll(nums) {
        var result = [];
        var squaredNum = 0;

        for (var index = 0; index < nums.length; index++) {
            squaredNum = square(nums[index]);
            result[result.length] = squaredNum;
        }

        return result;
    }

    function sumOfSquares(nums) {
        var squares = squareAll(nums);
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

// Movement 18

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
        var finalSum = 0;

        for (var index = 0; index < nums.length; index++) {
            finalSum += nums[index];
        }

        return finalSum;
    }

    function squareAll(nums) {
        var result = [];
        var squaredNum = 0;

        for (var index = 0; index < nums.length; index++) {
            squaredNum = square(nums[index]);
            result[result.length] = squaredNum;
        }

        return result;
    }

    function sumOfSquares(nums) {
        var squares = squareAll(nums);
        return sum(squares);
    }

    function buildVector(valueArray) {
        var vector = valueArray.slice(0);
        
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

// Movement 19

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
        var finalSum = 0;

        for (var index = 0; index < nums.length; index++) {
            finalSum += nums[index];
        }

        return finalSum;
    }

    function squareAll(nums) {
        var result = [];
        var squaredNum = 0;

        for (var index = 0; index < nums.length; index++) {
            squaredNum = square(nums[index]);
            result[result.length] = squaredNum;
        }

        return result;
    }

    function sumOfSquares(nums) {
        var squares = squareAll(nums);
        return sum(squares);
    }

    function buildVector(valueArray) {
        var vector = valueArray.slice(0);
        
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

// Movement 20

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
        var finalSum = 0;

        for (var index = 0; index < nums.length; index++) {
            finalSum += nums[index];
        }

        return finalSum;
    }

    function squareAll(nums) {
        var result = [];
        var squaredNum = 0;

        for (var index = 0; index < nums.length; index++) {
            squaredNum = square(nums[index]);
            result[result.length] = squaredNum;
        }

        return result;
    }

    function sumOfSquares(nums) {
        var squares = squareAll(nums);
        return sum(squares);
    }

    function buildVector(valueArray) {
        var vector = valueArray.slice(0);
        
        vector.valueOf = function () {
            return this.slice(0);
        };
        
        vector.toString = function () {
            return '<' + this.valueOf().toString() + '>';
        };
        
        return vector;
    }

    function magnitude(vector) {
        var squaredNum = square(vector[0]);
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
        var finalSum = 0;

        for (var index = 0; index < nums.length; index++) {
            finalSum += nums[index];
        }

        return finalSum;
    }

    function squareAll(nums) {
        var result = [];
        var squaredNum = 0;

        for (var index = 0; index < nums.length; index++) {
            squaredNum = square(nums[index]);
            result[result.length] = squaredNum;
        }

        return result;
    }

    function sumOfSquares(nums) {
        var squares = squareAll(nums);
        return sum(squares);
    }

    function buildVector(valueArray) {
        var vector = valueArray.slice(0);
        
        vector.valueOf = function () {
            return this.slice(0);
        };
        
        vector.toString = function () {
            return '<' + this.valueOf().toString() + '>';
        };
        
        return vector;
    }

    function magnitude(vector) {
        var squares;
        
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
        var finalSum = 0;

        for (var index = 0; index < nums.length; index++) {
            finalSum += nums[index];
        }

        return finalSum;
    }

    function squareAll(nums) {
        var result = [];
        var squaredNum = 0;

        for (var index = 0; index < nums.length; index++) {
            squaredNum = square(nums[index]);
            result[result.length] = squaredNum;
        }

        return result;
    }

    function sumOfSquares(nums) {
        var squares = squareAll(nums);
        return sum(squares);
    }

    function buildVector(valueArray) {
        var vector = valueArray.slice(0);
        
        vector.valueOf = function () {
            return this.slice(0);
        };
        
        vector.toString = function () {
            return '<' + this.valueOf().toString() + '>';
        };
        
        return vector;
    }

    function magnitude(vector) {
        var summedSquares = sumOfSquares(vector);
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
        var finalSum = 0;

        for (var index = 0; index < nums.length; index++) {
            finalSum += nums[index];
        }

        return finalSum;
    }

    function squareAll(nums) {
        var result = [];
        var squaredNum = 0;

        for (var index = 0; index < nums.length; index++) {
            squaredNum = square(nums[index]);
            result[result.length] = squaredNum;
        }

        return result;
    }

    function sumOfSquares(nums) {
        var squares = squareAll(nums);
        return sum(squares);
    }

    function buildVector(valueArray) {
        var vector = valueArray.slice(0);

        vector.valueOf = function () {
            return this.slice(0);
        };

        vector.toString = function () {
            return '<' + this.valueOf().toString() + '>';
        };

        return vector;
    }

    function magnitude(vector) {
        var summedSquares = sumOfSquares(vector);
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
        var finalSum = 0;

        for (var index = 0; index < nums.length; index++) {
            finalSum += nums[index];
        }

        return finalSum;
    }

    function squareAll(nums) {
        var result = [];
        var squaredNum = 0;

        for (var index = 0; index < nums.length; index++) {
            squaredNum = square(nums[index]);
            result[result.length] = squaredNum;
        }

        return result;
    }

    function sumOfSquares(nums) {
        var squares = squareAll(nums);
        return sum(squares);
    }

    function buildVector(valueArray) {
        var vector = valueArray.slice(0);

        vector.valueOf = function () {
            return this.slice(0);
        };

        vector.toString = function () {
            return '<' + this.valueOf().toString() + '>';
        };

        return vector;
    }

    function magnitude(vector) {
        var summedSquares = sumOfSquares(vector);
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
        var finalSum = 0;

        for (var index = 0; index < nums.length; index++) {
            finalSum += nums[index];
        }

        return finalSum;
    }

    function squareAll(nums) {
        var result = [];
        var squaredNum = 0;

        for (var index = 0; index < nums.length; index++) {
            squaredNum = square(nums[index]);
            result[result.length] = squaredNum;
        }

        return result;
    }

    function sumOfSquares(nums) {
        var squares = squareAll(nums);
        return sum(squares);
    }

    function buildVector(valueArray) {
        var vector = valueArray.slice(0);

        vector.valueOf = function () {
            return this.slice(0);
        };

        vector.toString = function () {
            return '<' + this.valueOf().toString() + '>';
        };

        return vector;
    }

    function magnitude(vector) {
        var summedSquares = sumOfSquares(vector);
        return squareRoot(summedSquares);
    }

    function getVectorsShorterThan(maxLength, vectors) {
        var filteredVectors = [];

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
        var finalSum = 0;

        for (var index = 0; index < nums.length; index++) {
            finalSum += nums[index];
        }

        return finalSum;
    }

    function squareAll(nums) {
        var result = [];
        var squaredNum = 0;

        for (var index = 0; index < nums.length; index++) {
            squaredNum = square(nums[index]);
            result[result.length] = squaredNum;
        }

        return result;
    }

    function sumOfSquares(nums) {
        var squares = squareAll(nums);
        return sum(squares);
    }

    function buildVector(valueArray) {
        var vector = valueArray.slice(0);

        vector.valueOf = function () {
            return this.slice(0);
        };

        vector.toString = function () {
            return '<' + this.valueOf().toString() + '>';
        };

        return vector;
    }

    function magnitude(vector) {
        var summedSquares = sumOfSquares(vector);
        return squareRoot(summedSquares);
    }

    function getVectorsShorterThan(maxLength, vectors) {
        var filteredVectors = [];
        
        for(var index = 0; index < vectors.length; index++) {
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