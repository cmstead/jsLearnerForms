/********************************************************************

Javascript Third Form

When a student reaches third form they should feel really strong
working with first form concepts and should feel quite comfortable
with all of the parts of second form.  Everything in third form
will build on concepts which have come before so it will be critical
to review earlier forms if something seems unclear.

Third form will introduce some of the last core language dictionary
movements. This means we will take a look at the last of the
native array higher order functions. Third form is also about
moving toward declarative code and incorporating patterns.

Finally, consider some of the techniques from third form to be
"escape hatch" techniques, meant to get out of otherwise tricky
situations, or to free logic from tight coupling, making your
entire program easier to maintain.

Third form covers

- Reduce
- Recursion
- Function chaining
- Instantiable objects as types
- Creating static methods on types
- Executing prototypal methods as static
- Scope management
- Partial application with bind
- Generic functions

As with the previous forms, be sure to research and absorb the
changes which are made to the program through each movement. A
successful third form student will have a strong grasp of both
the functional and object oriented aspects of Javascript and how
they interact with each other.

********************************************************************/

// Movement 1

// Changes made:

// function isType (typeStr, value){
//     return typeof value === typeStr;
// }

// function greet(greeting) {
//     var message = isType('string', greeting) ? greeting : 'Hello';
//     ...
// }

(function () {
    'use strict';

    function isType(typeStr, value) {
        return typeof value === typeStr;
    }

    function greet(greeting) {
        var message = isType('undefined', greeting) ? greeting : 'Hello';

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


// Movement 2

// Changes made:

// function eitherType (typeStr, defaultValue, value){
//     return isType(typeStr, value) ? value : defaultValue;
// }

// function greet(greeting) {
//     var message = eitherType('string', 'Hello', greeting);
//     ...
// }

(function () {
    'use strict';

    function isType(typeStr, value) {
        return typeof value === typeStr;
    }

    function eitherType (typeStr, defaultValue, value){
        return isType(typeStr, value) ? value : defaultValue;
    }

    function greet(greeting) {
        var message = eitherType('string', 'Hello', greeting);
        
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


// Movement 3

// Changes made:

// function greet(greeting) {
//     return eitherType('string', 'Hello', greeting) + '!';
// }

(function () {
    'use strict';

    function isType(typeStr, value) {
        return typeof value === typeStr;
    }

    function eitherType (typeStr, defaultValue, value){
        return isType(typeStr, value) ? value : defaultValue;
    }

    function greet(greeting) {
        return eitherType('string', 'Hello', greeting) + '!';
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


// Movement 4

// Changes made:

// function sum(nums) {
//     var finalSum = nums.reduce(add, 0);

//     return finalSum;
// }

(function () {
    'use strict';

    function isType(typeStr, value) {
        return typeof value === typeStr;
    }

    function eitherType (typeStr, defaultValue, value){
        return isType(typeStr, value) ? value : defaultValue;
    }

    function greet(greeting) {
        return eitherType('string', 'Hello', greeting) + '!';
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
        var finalSum = nums.reduce(add, 0);

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


// Movement 5

// Changes made:

// function sum(nums) {
//     return nums.reduce(add, 0);
// }

(function () {
    'use strict';

    function isType(typeStr, value) {
        return typeof value === typeStr;
    }

    function eitherType (typeStr, defaultValue, value){
        return isType(typeStr, value) ? value : defaultValue;
    }

    function greet(greeting) {
        return eitherType('string', 'Hello', greeting) + '!';
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
        return nums.reduce(add, 0);
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


// Movement 6

// Changes made:

// function sumOfSquares(nums) {
//     return sum(squareAll(nums));
// }

(function () {
    'use strict';

    function isType(typeStr, value) {
        return typeof value === typeStr;
    }

    function eitherType (typeStr, defaultValue, value){
        return isType(typeStr, value) ? value : defaultValue;
    }

    function greet(greeting) {
        return eitherType('string', 'Hello', greeting) + '!';
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
        return nums.reduce(add, 0);
    }

    function squareAll(nums) {
        return nums.valueOf().map(square);
    }

    function sumOfSquares(nums) {
        return sum(squareAll(nums));
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


// Movement 7

// Changes made:
// Composed function calls in magnitude behavior

// function magnitude(vector) {
//     return squareRoot(sumOfSquares(vector));
// }

(function () {
    'use strict';

    function isType(typeStr, value) {
        return typeof value === typeStr;
    }

    function eitherType (typeStr, defaultValue, value){
        return isType(typeStr, value) ? value : defaultValue;
    }

    function greet(greeting) {
        return eitherType('string', 'Hello', greeting) + '!';
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
        return nums.reduce(add, 0);
    }

    function squareAll(nums) {
        return nums.valueOf().map(square);
    }

    function sumOfSquares(nums) {
        return sum(squareAll(nums));
    }

    function Vector(valueArray) {
        let vector = this instanceof Vector ? this : new Vector(valueArray);
        
        Vector.attachValues(vector, valueArray);

        return vector;
    }

    Vector.attachValues = function (vector, valueArray) {
        vector.points = valueArray;
        valueArray.forEach((value, index) => vector[index] = value);
    };

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
        return squareRoot(sumOfSquares(vector));
    }

    function getVectorsShorterThan(maxLength, vectors) {
        return vectors.filter((vector) => magnitude(vector) <= maxLength);
    }

    module.exports = {
        getVectorsShorterThan: getVectorsShorterThan,
        magnitude: magnitude,
        buildVector: Vector,
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
// Converted Vector object to self-instantiating factory

// function Vector(valueArray) {
//     let vector = this instanceof Vector ? this : new Vector(valueArray);
    
//     vector.points = valueArray;
//     valueArray.forEach((value, index) => vector[index] = value);

//     return vector;
// }


(function () {
    'use strict';

    function isType(typeStr, value) {
        return typeof value === typeStr;
    }

    function eitherType (typeStr, defaultValue, value){
        return isType(typeStr, value) ? value : defaultValue;
    }

    function greet(greeting) {
        return eitherType('string', 'Hello', greeting) + '!';
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
        return nums.reduce(add, 0);
    }

    function squareAll(nums) {
        return nums.valueOf().map(square);
    }

    function sumOfSquares(nums) {
        return sum(squareAll(nums));
    }

    function Vector(valueArray) {
        let vector = this instanceof Vector ? this : new Vector(valueArray);
        
        vector.points = valueArray;
        valueArray.forEach((value, index) => vector[index] = value);

        return vector;
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


// Movement 9

// Changes made:

// Exposed Vector instead of buildVector

// module.exports = {
//     ...
//     buildVector: Vector,
//     ...
// };


(function () {
    'use strict';

    function isType (typeStr, value){
        return typeof value === typeStr;
    }

    function eitherType (typeStr, defaultValue, value){
        return isType(typeStr, value) ? value : defaultValue;
    }

    function greet(greeting) {
        return eitherType('string', 'Hello', greeting) + '!';
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
        return nums.reduce(add, 0);
    }

    function squareAll(nums) {
        return nums.valueOf().map(square);
    }

    function sumOfSquares(nums) {
        return nums.valueOf().map(square).reduce(add, 0);
    }

    function Vector (valueArray) {
        var vector = this instanceof Vector ? this : new Vector(valueArray);

        return valueArray.reduce(function (vector, value, index) {
            vector[index] = value;
            return vector;
        }, vector);
    }
    
    Vector.prototype = {
        valueOf: function () {
            var points = [];
            var index = 0;
            
            while(!isType('undefined', this[index])){
                points.push(this[index]);
                index++;
            }
            
            return points;
        },
        
        toString: function () {
            return '<' + this.valueOf().toString() + '>';
        }
    };

    function buildVector(valueArray) {
        return Vector(valueArray);
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


// Movement 10

// Changes made:
// Created static method attachValues on Vector and extracted attach behavior

// function Vector(valueArray) {
//     let vector = this instanceof Vector ? this : new Vector(valueArray);
    
//     Vector.attachValues(vector, valueArray);
    
//     return vector;
// }

// Vector.attachValues = function (vector, valueArray) {
//     vector.points = valueArray;
//     valueArray.forEach((value, index) => vector[index] = value);
// };

(function () {
    'use strict';

    function isType(typeStr, value) {
        return typeof value === typeStr;
    }

    function eitherType (typeStr, defaultValue, value){
        return isType(typeStr, value) ? value : defaultValue;
    }

    function greet(greeting) {
        return eitherType('string', 'Hello', greeting) + '!';
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
        return nums.reduce(add, 0);
    }

    function squareAll(nums) {
        return nums.valueOf().map(square);
    }

    function sumOfSquares(nums) {
        return sum(squareAll(nums));
    }

    function Vector(valueArray) {
        let vector = this instanceof Vector ? this : new Vector(valueArray);
        
        Vector.attachValues(vector, valueArray);
        
        return vector;
    }

    Vector.attachValues = function (vector, valueArray) {
        vector.points = valueArray;
        valueArray.forEach((value, index) => vector[index] = value);
    };

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
        buildVector: Vector,
        sumOfSquares: sumOfSquares,
        squareAll: squareAll,
        sum: sum,
        squareRoot: squareRoot,
        square: square,
        greet: greet
    };

})();

// Run the tests!


// Movement 11

// Changes made:
// Hide points array from outside world to limit manipulation

// function Vector(valueArray) {
//     let vector = this instanceof Vector ? this : new Vector(valueArray);
    
//     Vector.attachValues(vector, valueArray);

//     return vector;
// }

// Vector.attachValues = function (vector, points) {
//     vector.valueOf = () => points.slice(0);
//     points.forEach((value, index) => vector[index] = value);
// };

// Vector.prototype = {
//     toString: function () {
//         return '<' + this.valueOf().toString() + '>';
//     }
// };

(function () {
    'use strict';

    function isType(typeStr, value) {
        return typeof value === typeStr;
    }

    function eitherType (typeStr, defaultValue, value){
        return isType(typeStr, value) ? value : defaultValue;
    }

    function greet(greeting) {
        return eitherType('string', 'Hello', greeting) + '!';
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
        return nums.reduce(add, 0);
    }

    function squareAll(nums) {
        return nums.valueOf().map(square);
    }

    function sumOfSquares(nums) {
        return sum(squareAll(nums));
    }

    function Vector(valueArray) {
        let vector = this instanceof Vector ? this : new Vector(valueArray);
        
        Vector.attachValues(vector, valueArray);

        return vector;
    }

    Vector.attachValues = function (vector, points) {
        vector.valueOf = () => points.slice(0);
        points.forEach((value, index) => vector[index] = value);
    };

    Vector.prototype = {
        toString: function () {
            return '<' + this.valueOf().toString() + '>';
        }
    };

    function buildVector(valueArray) {
        return new Vector(valueArray);
    }

    function magnitude(vector) {
        return squareRoot(sumOfSquares(vector));
    }

    function getVectorsShorterThan(maxLength, vectors) {
        return vectors.filter((vector) => magnitude(vector) <= maxLength);
    }

    module.exports = {
        getVectorsShorterThan: getVectorsShorterThan,
        magnitude: magnitude,
        buildVector: Vector,
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
// Make vector properties immutable

// const attachImmutableProperty = (vector) => (value, key) => {
//     Object.defineProperty(vector, key, {
//         writeable: false,
//         value: value
//     });
// };

// Vector.attachValues = function (vector, points) {
//     vector.valueOf = () => points.slice(0);
//     points.forEach(attachImmutableProperty(vector));
// };

(function () {
    'use strict';

    function isType(typeStr, value) {
        return typeof value === typeStr;
    }

    function eitherType (typeStr, defaultValue, value){
        return isType(typeStr, value) ? value : defaultValue;
    }

    function greet(greeting) {
        return eitherType('string', 'Hello', greeting) + '!';
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
        return nums.reduce(add, 0);
    }

    function squareAll(nums) {
        return nums.valueOf().map(square);
    }

    function sumOfSquares(nums) {
        return sum(squareAll(nums));
    }

    function Vector(valueArray) {
        let vector = this instanceof Vector ? this : new Vector(valueArray);
        
        Vector.attachValues(vector, valueArray);

        return vector;
    }

    const attachImmutableProperty = (vector) => (value, key) => {
        Object.defineProperty(vector, key, {
            writeable: false,
            value: value
        });
    };

    Vector.attachValues = function (vector, points) {
        vector.valueOf = () => points.slice(0);
        points.forEach(attachImmutableProperty(vector));
    };

    Vector.prototype = {
        toString: function () {
            return '<' + this.valueOf().toString() + '>';
        }
    };

    function buildVector(valueArray) {
        return new Vector(valueArray);
    }

    function magnitude(vector) {
        return squareRoot(sumOfSquares(vector));
    }

    function getVectorsShorterThan(maxLength, vectors) {
        return vectors.filter((vector) => magnitude(vector) <= maxLength);
    }

    module.exports = {
        getVectorsShorterThan: getVectorsShorterThan,
        magnitude: magnitude,
        buildVector: Vector,
        sumOfSquares: sumOfSquares,
        squareAll: squareAll,
        sum: sum,
        squareRoot: squareRoot,
        square: square,
        greet: greet
    };

})();

// Run the tests!
