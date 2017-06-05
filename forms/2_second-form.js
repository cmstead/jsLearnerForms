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
//     let message = 'Hello';

//     if (greeting !== undefined) {
//         message = greeting;
//     }

//     return message + '!';
// }

(function () {
    'use strict';

    function greet(greeting) {
        let message = 'Hello';

        if (greeting !== undefined) {
            message = greeting;
        }

        return message + '!';
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


// Movement 2

// Changes made:
// Moved to ternary expression for message assignment formatted as such:
// test ? trueResult : falseResult

// function greet(greeting) {
//     let message = greeting !== undefined ? greeting : 'Hello';

//     return message + '!';
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


// Movement 3

// Changes made:
// Introduced add function

// function add (a, b){
//     return a + b;
// }

// function sum(nums) {
//     ...
//     for (let index = 0; index < nums.length; index++) {
//         finalSum = add(finalSum, nums[index]);
//     }
//     ...
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

        for (let index = 0; index < nums.length; index++) {
            finalSum = add(finalSum, nums[index]);
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


// Movement 4

// Changes made:
// Refactored to forEach, away from for structure

// function sum(nums) {
//     ...
//     nums.forEach(function (value) {
//         finalSum = add(finalSum, value);
//     });
//     ...
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

        nums.forEach(function (value) {
            finalSum = add(finalSum, value);
        });

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
//     ...
//     for (let index = 0; index < nums.length; index++) {
//         squaredNum = square(nums[index]);
//         result.push(squaredNum);
//     }
//     ...
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
            result.push(squaredNum);
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


// Movement 7

// Changes made:
// Refactored to forEach from for loop

// function squareAll(nums) {
//     ...
//     nums.forEach(function (value) {
//         squaredNum = square(value);
//         result.push(squaredNum);
//     });
//     ...
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

        nums.forEach(function (value) {
            squaredNum = square(value);
            result.push(squaredNum);
        });

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


// Movement 8

// Changes made:
// Refactored from forEach to map, eliminating explicit looping steps 
// and introducing a more declarative style

// function squareAll(nums) {
//     let result = nums.map(function (value) {
//         return square(value);
//     });
//     ...
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
        let result = nums.map(function (value) {
            return square(value);
        });

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


// Movement 9

// Changes made:
// Removed unnecessary function wrapper, passing square function directly to map

// function squareAll(nums) {
//     let result = nums.map(square);
//     ...
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
        let result = nums.map(square);

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


// Movement 10

// Changes made:
// Directly returning result of map operation

// function squareAll(nums) {
//     return nums.map(square);
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
        return nums.map(square);
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

// Run the tests


// Movement 11

// Changes made:
// Introduced prototypal vector object definition

// function Vector (valueArray) {
//     this.points = valueArray

//     valueArray.forEach(function (value, index) {
//         this[index] = value;
//     }.bind(this));
// }

// Vector.prototype = {
//     valueOf: function () {
//         return this.points.slice(0);
//     },

//     toString: function () {
//         return '<' + this.valueOf().toString() + '>';
//     }
// };

(function () {
    'use strict';

    function greet(greeting) {
        var message = greeting !== undefined ? greeting : 'Hello';

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
        var finalSum = 0;

        nums.forEach(value => finalSum = add(finalSum, value));

        return finalSum;
    }

    function squareAll(nums) {
        return nums.map(square);
    }

    function sumOfSquares(nums) {
        var squares = squareAll(nums);
        return sum(squares);
    }

    function Vector(valueArray) {
        this.points = valueArray

        valueArray.forEach(function (value, index) {
            this[index] = value;
        }.bind(this));
    }

    Vector.prototype = {
        valueOf: function () {
            return this.points.slice(0);
        },

        toString: function () {
            return '<' + this.valueOf().toString() + '>';
        }
    };

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

        for (var index = 0; index < vectors.length; index++) {
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


// Movement 12

// Changes made:
// Swapped in vector object, replacing monkey-patched array
// Introduced valueOf call in squareAll to get array from vector instance

// function squareAll(nums) {
//     return nums.valueOf().map(square);
// }

// function buildVector(valueArray) {
//     return new Vector(valueArray);
// }

(function () {
    'use strict';

    function greet(greeting) {
        var message = greeting !== undefined ? greeting : 'Hello';

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
        var finalSum = 0;

        nums.forEach(value => finalSum = add(finalSum, value));

        return finalSum;
    }

    function squareAll(nums) {
        return nums.valueOf().map(square);
    }

    function sumOfSquares(nums) {
        var squares = squareAll(nums);
        return sum(squares);
    }

    function Vector(valueArray) {
        this.points = valueArray;

        valueArray.forEach(function (value, index) {
            this[index] = value;
        }.bind(this));
    }

    Vector.prototype = {
        valueOf: function () {
            return this.points.slice(0);
        },

        toString: function () {
            return '<' + this.valueOf().toString() + '>';
        }
    };

    function buildVector(valueArray) {
        return new Vector(valueArray);
    }

    function magnitude(vector) {
        var summedSquares = sumOfSquares(vector);
        return squareRoot(summedSquares);
    }

    function getVectorsShorterThan(maxLength, vectors) {
        var filteredVectors = [];

        for (var index = 0; index < vectors.length; index++) {
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


// Movement 13

// Changes made:
// Refactored to lambda expression to eliminate bind

// function Vector(valueArray) {
//     this.points = valueArray;

//     valueArray.forEach((value, index) => this[index] = value);
// }

(function () {
    'use strict';

    function greet(greeting) {
        var message = greeting !== undefined ? greeting : 'Hello';

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
        var finalSum = 0;

        nums.forEach(value => finalSum = add(finalSum, value));

        return finalSum;
    }

    function squareAll(nums) {
        return nums.valueOf().map(square);
    }

    function sumOfSquares(nums) {
        var squares = squareAll(nums);
        return sum(squares);
    }

    function Vector(valueArray) {
        this.points = valueArray;

        valueArray.forEach((value, index) => this[index] = value);
    }

    Vector.prototype = {
        valueOf: function () {
            return this.points.slice(0);
        },

        toString: function () {
            return '<' + this.valueOf().toString() + '>';
        }
    };

    function buildVector(valueArray) {
        return new Vector(valueArray);
    }

    function magnitude(vector) {
        var summedSquares = sumOfSquares(vector);
        return squareRoot(summedSquares);
    }

    function getVectorsShorterThan(maxLength, vectors) {
        var filteredVectors = [];

        for (var index = 0; index < vectors.length; index++) {
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


// Movement 14

// Changes made:
// Pushing value into array instead of setting value at index

// function getVectorsShorterThan(maxLength, vectors) {
//     ...
//     for(let index = 0; index < vectors.length; index++) {
//         if(magnitude(vectors[index]) <= maxLength) {
//             filteredVectors.push(vectors[index]);
//         }
//     }
//     ...
// }

(function () {
    'use strict';

    function greet(greeting) {
        var message = greeting !== undefined ? greeting : 'Hello';

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
        var finalSum = 0;

        nums.forEach(value => finalSum = add(finalSum, value));

        return finalSum;
    }

    function squareAll(nums) {
        return nums.valueOf().map(square);
    }

    function sumOfSquares(nums) {
        var squares = squareAll(nums);
        return sum(squares);
    }

    function Vector(valueArray) {
        this.points = valueArray;

        valueArray.forEach((value, index) => this[index] = value);
    }

    Vector.prototype = {
        valueOf: function () {
            return this.points.slice(0);
        },

        toString: function () {
            return '<' + this.valueOf().toString() + '>';
        }
    };

    function buildVector(valueArray) {
        return new Vector(valueArray);
    }

    function magnitude(vector) {
        var summedSquares = sumOfSquares(vector);
        return squareRoot(summedSquares);
    }

    function getVectorsShorterThan(maxLength, vectors) {
        let filteredVectors = [];

        for (let index = 0; index < vectors.length; index++) {
            if (magnitude(vectors[index]) <= maxLength) {
                filteredVectors.push(vectors[index]);
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


// Movement 15

// Changes made:
// Updated for loop to forEach, reducing variable overhead, preparing to use filter

// function getVectorsShorterThan(maxLength, vectors) {
//     let filteredVectors = [];

//     vectors.forEach(function (vector) {
//         if(magnitude(vector) <= maxLength) {
//             filteredVectors.push(vector);
//         }
//     });
//     ...
// }

(function () {
    'use strict';

    function greet(greeting) {
        var message = greeting !== undefined ? greeting : 'Hello';

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
        var finalSum = 0;

        nums.forEach(value => finalSum = add(finalSum, value));

        return finalSum;
    }

    function squareAll(nums) {
        return nums.valueOf().map(square);
    }

    function sumOfSquares(nums) {
        var squares = squareAll(nums);
        return sum(squares);
    }

    function Vector(valueArray) {
        this.points = valueArray;

        valueArray.forEach((value, index) => this[index] = value);
    }

    Vector.prototype = {
        valueOf: function () {
            return this.points.slice(0);
        },

        toString: function () {
            return '<' + this.valueOf().toString() + '>';
        }
    };

    function buildVector(valueArray) {
        return new Vector(valueArray);
    }

    function magnitude(vector) {
        var summedSquares = sumOfSquares(vector);
        return squareRoot(summedSquares);
    }

    function getVectorsShorterThan(maxLength, vectors) {
        let filteredVectors = [];

        vectors.forEach(function (vector) {
            if (magnitude(vector) <= maxLength) {
                filteredVectors.push(vector);
            }
        });

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


// Movement 16

// Changes made:
// Swapped filter in for forEach to abstract away looping logic

// function getVectorsShorterThan(maxLength, vectors) {
//     let filteredVectors = vectors.filter(function (vector) {
//         return magnitude(vector) <= maxLength;
//     });
//     ...
// }

(function () {
    'use strict';

    function greet(greeting) {
        var message = greeting !== undefined ? greeting : 'Hello';

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
        var finalSum = 0;

        nums.forEach(value => finalSum = add(finalSum, value));

        return finalSum;
    }

    function squareAll(nums) {
        return nums.valueOf().map(square);
    }

    function sumOfSquares(nums) {
        var squares = squareAll(nums);
        return sum(squares);
    }

    function Vector(valueArray) {
        this.points = valueArray;

        valueArray.forEach((value, index) => this[index] = value);
    }

    Vector.prototype = {
        valueOf: function () {
            return this.points.slice(0);
        },

        toString: function () {
            return '<' + this.valueOf().toString() + '>';
        }
    };

    function buildVector(valueArray) {
        return new Vector(valueArray);
    }

    function magnitude(vector) {
        var summedSquares = sumOfSquares(vector);
        return squareRoot(summedSquares);
    }

    function getVectorsShorterThan(maxLength, vectors) {
        let filteredVectors = vectors.filter(function (vector) {
            return magnitude(vector) <= maxLength;
        });

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


// Movement 17

// Changes made:
// Returning directly from filter, eliminating unnecessary variable

// function getVectorsShorterThan(maxLength, vectors) {
//     return vectors.filter(function (vector) {
//         return magnitude(vector) <= maxLength;
//     });
// }

(function () {
    'use strict';

    function greet(greeting) {
        var message = greeting !== undefined ? greeting : 'Hello';

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
        var finalSum = 0;

        nums.forEach(value => finalSum = add(finalSum, value));

        return finalSum;
    }

    function squareAll(nums) {
        return nums.valueOf().map(square);
    }

    function sumOfSquares(nums) {
        var squares = squareAll(nums);
        return sum(squares);
    }

    function Vector(valueArray) {
        this.points = valueArray;

        valueArray.forEach((value, index) => this[index] = value);
    }

    Vector.prototype = {
        valueOf: function () {
            return this.points.slice(0);
        },

        toString: function () {
            return '<' + this.valueOf().toString() + '>';
        }
    };

    function buildVector(valueArray) {
        return new Vector(valueArray);
    }

    function magnitude(vector) {
        var summedSquares = sumOfSquares(vector);
        return squareRoot(summedSquares);
    }

    function getVectorsShorterThan(maxLength, vectors) {
        return vectors.filter(function (vector) {
            return magnitude(vector) <= maxLength;
        });
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


// Movement 18

// Changes made:
// Refactored to lambda expression, removing excess function syntax cruft

// function getVectorsShorterThan(maxLength, vectors) {
//     return vectors.filter((vector) => magnitude(vector) <= maxLength);
// }

(function () {
    'use strict';

    function greet(greeting) {
        var message = greeting !== undefined ? greeting : 'Hello';

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
        var finalSum = 0;

        nums.forEach(value => finalSum = add(finalSum, value));

        return finalSum;
    }

    function squareAll(nums) {
        return nums.valueOf().map(square);
    }

    function sumOfSquares(nums) {
        var squares = squareAll(nums);
        return sum(squares);
    }

    function Vector(valueArray) {
        this.points = valueArray;

        valueArray.forEach((value, index) => this[index] = value);
    }

    Vector.prototype = {
        valueOf: function () {
            return this.points.slice(0);
        },

        toString: function () {
            return '<' + this.valueOf().toString() + '>';
        }
    };

    function buildVector(valueArray) {
        return new Vector(valueArray);
    }

    function magnitude(vector) {
        var summedSquares = sumOfSquares(vector);
        return squareRoot(summedSquares);
    }

    function getVectorsShorterThan(maxLength, vectors) {
        return vectors.filter((vector) => magnitude(vector) <= maxLength);
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