/********************************************************************

Javascript Second Form

The Javascript second form student should have a strong grasp on
first form techniques and topics. Second form is geared toward 
refining existing code and reducing reliance on brute force
techniques to solve problems.

Functions and objects are the name of this game, moving away
from using primitive and built-in types to solve problems and
working with your own types will help to reduce the amount of logic
that needs to be managed in a program.

Topics in second form:

- Inner looping functions
- Ternary expressions
- Instantiable objects
- Closures
- Factory functions
- Higher-order functions
- Lambda expressions

Although second form topics list is shorter than the first form,
each item is a denser idea. Be sure to stop and consider what each
movement means to the overall program structure. Don't be deceived,
second form takes some work, but it's worth it.

Second form start with completed code from first form. All movements
in second form follow the same test order as first form.

********************************************************************/

// Movement 1

// Changes made:
// Removed unnecessary else

// function greet(greeting) {
//     if (greeting !== undefined) {
//         return greeting + '!';
//     }

//     return 'Hello!';
// }

(function () {
    'use strict';

    function greet(greeting) {
        if (greeting !== undefined) {
            return greeting + '!';
        }

        return 'Hello!';
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


// Movement 2

// Changes made:
// Moved to ternary expression for message assignment formatted as such:
// test ? trueResult : falseResult

// function greet(greeting) {
//     return greeting !== undefined ? greeting + '!' : 'Hello!';
// }

(function () {
    'use strict';

    function greet(greeting) {
        return greeting !== undefined ? greeting + '!' : 'Hello!';
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


// Movement 3

// Changes made:
// Introduced type check on greeting value

// function greet(greeting) {
//     return typeof greeting === 'string' ? greeting + '!' : 'Hello!';
// }

(function () {
    'use strict';

    function greet(greeting) {
        return typeof greeting === 'string' ? greeting + '!' : 'Hello!';
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


// Movement 3

// Changes made:
// Introduced add function

// function add (a, b){
//     return a + b;
// }

// function sum(nums) {
//     let result = 0;

//     for (let index = 0; index < nums.length; index += 1) {
//         result = add(result, nums[index]);
//     }

//     return result;
// }

(function () {
    'use strict';

    function greet(greeting) {
        return typeof greeting === 'string' ? greeting + '!' : 'Hello!';
    }

    function square(x) {
        return Math.pow(x, 2);
    }

    function squareRoot(x) {
        return Math.sqrt(x);
    }

    function add(a, b) {
        return a + b;
    }

    function sum(nums) {
        let result = 0;

        for (let index = 0; index < nums.length; index += 1) {
            result = add(result, nums[index]);
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


// Movement 4

// Changes made:
// Refactored to forEach, away from for structure

// function sum(nums) {
//     let result = 0;

//     nums.forEach(function (value) {
//         result = add(result, value);
//     });

//     return result;
// }

(function () {
    'use strict';

    function greet(greeting) {
        return typeof greeting === 'string' ? greeting + '!' : 'Hello!';
    }

    function square(x) {
        return Math.pow(x, 2);
    }

    function squareRoot(x) {
        return Math.sqrt(x);
    }

    function add(a, b) {
        return a + b;
    }

    function sum(nums) {
        let result = 0;

        nums.forEach(function (value) {
            result = add(result, value);
        });

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

// Movement 5

// Changes made:
// Refactored to lambda expression

// function sum(nums) {
//     let finalSum = 0;

//     nums.forEach(value => finalSum = add(finalSum, value));

//     return finalSum;
// }

(function () {
    'use strict';

    function greet(greeting) {
        let message = greeting !== undefined ? greeting : 'Hello';

        return message + '!';
    }
    function square(x) {
        return Math.pow(x, 2);
    }

    function squareRoot(x) {
        return Math.sqrt(x);
    }

    function add(a, b) {
        return a + b;
    }

    function sum(nums) {
        let finalSum = 0;

        nums.forEach(value => finalSum = add(finalSum, value));

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

        for (let index = 0; index < vectors.length; index++) {
            if (magnitude(vectors[index]) <= maxLength) {
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

// Movement 6

// Changes made:
// Refactored to pushing value into result array

// function squareAll(nums) {
//     let result = [];

//     for (let index = 0; index < nums.length; index += 1) {
//         result.push(square(nums[index]));
//     }

//     return result;
// }

(function () {
    'use strict';

    function greet(greeting) {
        return typeof greeting === 'string' ? greeting + '!' : 'Hello!';
    }

    function square(x) {
        return Math.pow(x, 2);
    }

    function squareRoot(x) {
        return Math.sqrt(x);
    }

    function add(a, b) {
        return a + b;
    }

    function sum(nums) {
        let result = 0;

        nums.forEach((value) => result = add(result, value));

        return result;
    }

    function squareAll(nums) {
        let result = [];

        for (let index = 0; index < nums.length; index += 1) {
            result.push(square(nums[index]));
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


// Movement 7

// Changes made:
// Refactored to forEach from for loop

// function squareAll(nums) {
//     let result = [];

//     nums.forEach((value) => result.push(square(value)));

//     return result;
// }

(function () {
    'use strict';

    function greet(greeting) {
        return typeof greeting === 'string' ? greeting + '!' : 'Hello!';
    }

    function square(x) {
        return Math.pow(x, 2);
    }

    function squareRoot(x) {
        return Math.sqrt(x);
    }

    function add(a, b) {
        return a + b;
    }

    function sum(nums) {
        let result = 0;

        nums.forEach((value) => result = add(result, value));

        return result;
    }

    function squareAll(nums) {
        let result = [];

        nums.forEach((value) => result.push(square(value)));

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


// Movement 8

// Changes made:
// Refactored from forEach to map, eliminating explicit looping steps 
// and introducing a more declarative style

// function squareAll(nums) {
//     let result = nums.map((value) => square(value));

//     return result;
// }

(function () {
    'use strict';

    function greet(greeting) {
        return typeof greeting === 'string' ? greeting + '!' : 'Hello!';
    }

    function square(x) {
        return Math.pow(x, 2);
    }

    function squareRoot(x) {
        return Math.sqrt(x);
    }

    function add(a, b) {
        return a + b;
    }

    function sum(nums) {
        let result = 0;

        nums.forEach((value) => result = add(result, value));

        return result;
    }

    function squareAll(nums) {
        let result = nums.map((value) => square(value));

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


// Movement 9

// Changes made:
// Removed unnecessary function wrapper, passing square function directly to map

// function squareAll(nums) {
//     let result = nums.map(square);

//     return result;
// }

(function () {
    'use strict';

    function greet(greeting) {
        return typeof greeting === 'string' ? greeting + '!' : 'Hello!';
    }

    function square(x) {
        return Math.pow(x, 2);
    }

    function squareRoot(x) {
        return Math.sqrt(x);
    }

    function add(a, b) {
        return a + b;
    }

    function sum(nums) {
        let result = 0;

        nums.forEach((value) => result = add(result, value));

        return result;
    }

    function squareAll(nums) {
        let result = nums.map(square);

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


// Movement 10

// Changes made:
// Directly returning result of map operation

// function squareAll(nums) {
//     return nums.map(square);
// }

(function () {
    'use strict';

    function greet(greeting) {
        return typeof greeting === 'string' ? greeting + '!' : 'Hello!';
    }

    function square(x) {
        return Math.pow(x, 2);
    }

    function squareRoot(x) {
        return Math.sqrt(x);
    }

    function add(a, b) {
        return a + b;
    }

    function sum(nums) {
        let result = 0;

        nums.forEach((value) => result = add(result, value));

        return result;
    }

    function squareAll(nums) {
        return nums.map(square);
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

// Run the tests


// Movement 11

// Changes made:
// Introduced prototypal vector object definition

// function Vector(points) {
//     this.points = points;

//     points.forEach((value, index) => this[index] = value);
// }

// Vector.prototype = {
//     valueOf: function () { return this.points.valueOf(); },
//     toString: function () { return '<' + this.points.join(',') + '>'; }
// };

(function () {
    'use strict';

    function greet(greeting) {
        return typeof greeting === 'string' ? greeting + '!' : 'Hello!';
    }

    function square(x) {
        return Math.pow(x, 2);
    }

    function squareRoot(x) {
        return Math.sqrt(x);
    }

    function add(a, b) {
        return a + b;
    }

    function sum(nums) {
        let result = 0;

        nums.forEach((value) => result = add(result, value));

        return result;
    }

    function squareAll(nums) {
        return nums.map(square);
    }

    function sumOfSquares(nums) {
        let squares = squareAll(nums);
        return sum(squares);
    }

    function Vector(points) {
        this.points = points;

        points.forEach((value, index) => this[index] = value);
    }

    Vector.prototype = {
        valueOf: function () { return this.points.valueOf(); },
        toString: function () { return '<' + this.points.join(',') + '>'; }
    };

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


// Movement 12

// Changes made:
// Swapped in vector object, replacing monkey-patched array
// Introduced valueOf call in squareAll to get array from vector instance

// function squareAll(nums) {
//     return nums.valueOf().map(square);
// }

// function buildVector(points) {
//     return new Vector(points);
// }

(function () {
    'use strict';

    function greet(greeting) {
        return typeof greeting === 'string' ? greeting + '!' : 'Hello!';
    }

    function square(x) {
        return Math.pow(x, 2);
    }

    function squareRoot(x) {
        return Math.sqrt(x);
    }

    function add(a, b) {
        return a + b;
    }

    function sum(nums) {
        let result = 0;

        nums.forEach((value) => result = add(result, value));

        return result;
    }

    function squareAll(nums) {
        return nums.valueOf().map(square);
    }

    function sumOfSquares(nums) {
        let squares = squareAll(nums);
        return sum(squares);
    }

    function Vector(points) {
        this.points = points;

        points.forEach((value, index) => this[index] = value);
    }

    Vector.prototype = {
        valueOf: function () { return this.points.valueOf(); },
        toString: function () { return '<' + this.points.join(',') + '>'; }
    };

    function buildVector(points) {
        return new Vector(points);
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


// Movement 14

// Changes made:
// Refactor to foreach with a condition. (Use the examples from prior steps)

// function getVectorsShorterThan(length, vectors) {
//     let result = [];

//     vectors.forEach(function (vector) {
//         if (magnitude(vector) < length) {
//             result.push(vector);
//         }
//     });

//     return result;
// }

(function () {
    'use strict';

    function greet(greeting) {
        return typeof greeting === 'string' ? greeting + '!' : 'Hello!';
    }

    function square(x) {
        return Math.pow(x, 2);
    }

    function squareRoot(x) {
        return Math.sqrt(x);
    }

    function add(a, b) {
        return a + b;
    }

    function sum(nums) {
        let result = 0;

        nums.forEach((value) => result = add(result, value));

        return result;
    }

    function squareAll(nums) {
        return nums.valueOf().map(square);
    }

    function sumOfSquares(nums) {
        let squares = squareAll(nums);
        return sum(squares);
    }

    function Vector(points) {
        this.points = points;

        points.forEach((value, index) => this[index] = value);
    }

    Vector.prototype = {
        valueOf: function () { return this.points.valueOf(); },
        toString: function () { return '<' + this.points.join(',') + '>'; }
    };

    function buildVector(points) {
        return new Vector(points);
    }

    function magnitude(vector) {
        let squaredMagnitude = sumOfSquares(vector);
        return squareRoot(squaredMagnitude);
    }

    function getVectorsShorterThan(length, vectors) {
        let result = [];

        vectors.forEach(function (vector) {
            if (magnitude(vector) < length) {
                result.push(vector);
            }
        });

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


// Movement 15

// Changes made:
// Swapped filter in for forEach to abstract away looping logic

// function getVectorsShorterThan(length, vectors) {
//     let result = vectors.filter((vector) => magnitude(vector) < length);

//     return result;
// }

(function () {
    'use strict';

    function greet(greeting) {
        return typeof greeting === 'string' ? greeting + '!' : 'Hello!';
    }

    function square(x) {
        return Math.pow(x, 2);
    }

    function squareRoot(x) {
        return Math.sqrt(x);
    }

    function add(a, b) {
        return a + b;
    }

    function sum(nums) {
        let result = 0;

        nums.forEach((value) => result = add(result, value));

        return result;
    }

    function squareAll(nums) {
        return nums.valueOf().map(square);
    }

    function sumOfSquares(nums) {
        let squares = squareAll(nums);
        return sum(squares);
    }

    function Vector(points) {
        this.points = points;

        points.forEach((value, index) => this[index] = value);
    }

    Vector.prototype = {
        valueOf: function () { return this.points.valueOf(); },
        toString: function () { return '<' + this.points.join(',') + '>'; }
    };

    function buildVector(points) {
        return new Vector(points);
    }

    function magnitude(vector) {
        let squaredMagnitude = sumOfSquares(vector);
        return squareRoot(squaredMagnitude);
    }

    function getVectorsShorterThan(length, vectors) {
        let result = vectors.filter((vector) => magnitude(vector) < length);

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


// Movement 16

// Changes made:
// Returning directly from filter, eliminating unnecessary variable

// function getVectorsShorterThan(length, vectors) {
//     return vectors.filter((vector) => magnitude(vector) < length);
// }

(function () {
    'use strict';

    function greet(greeting) {
        return typeof greeting === 'string' ? greeting + '!' : 'Hello!';
    }

    function square(x) {
        return Math.pow(x, 2);
    }

    function squareRoot(x) {
        return Math.sqrt(x);
    }

    function add (a, b){
        return a + b;
    }

    function sum(nums) {
        let result = 0;

        nums.forEach((value) => result = add(result, value));

        return result;
    }

    function squareAll(nums) {
        return nums.valueOf().map(square);
    }

    function sumOfSquares(nums) {
        let squares = squareAll(nums);
        return sum(squares);
    }

    function Vector (points) {
        this.points = points;

        points.forEach((value, index) => this[index] = value);
    }

    Vector.prototype = {
        valueOf: function () { return this.points.valueOf(); },
        toString: function () { return '<' + this.points.join(',') + '>'; }
    };

    function buildVector(points) {
        return new Vector(points);
    }

    function magnitude(vector) {
        let squaredMagnitude = sumOfSquares(vector);
        return squareRoot(squaredMagnitude);
    }

    function getVectorsShorterThan(length, vectors) {
        return vectors.filter((vector) => magnitude(vector) < length);
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