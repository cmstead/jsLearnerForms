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
- Instantiable objects as types (instanceof)
- Creating static methods on objects
- Curried and partially applied functions
- Closures
- Scope management
- Generic functions
- Immutable object properties
- Functions as types (predicate function * => boolean)

As with the previous forms, be sure to research and absorb the
changes which are made to the program through each movement. A
successful third form student will have a strong grasp of both
the functional and object oriented aspects of Javascript and how
they interact with each other.

********************************************************************/

// Movement 1

// Changes made:

// function isType(typeName, value) {
//     return typeof value === typeName;
// }

// function greet(greeting) {
//     return isType('string', greeting) ? greeting + '!' : 'Hello!';
// }

(function () {
    'use strict';

    function isType(typeName, value) {
        return typeof value === typeName;
    }

    function greet(greeting) {
        return isType('string', greeting) ? greeting + '!' : 'Hello!';
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


// Movement 2

// Changes made:

// function eitherType(typeName, defaultValue, actualValue) {
//     return isType(typeName, actualValue) ? actualValue : defaultValue;
// }

// function greet(greeting) {
//     return eitherType('string', 'Hello', greeting) + '!';
// }

(function () {
    'use strict';

    function isType(typeName, value) {
        return typeof value === typeName;
    }

    function eitherType(typeName, defaultValue, actualValue) {
        return isType(typeName, actualValue) ? actualValue : defaultValue;
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


// Movement 4

// Changes made:

// function sum(nums) {
//     return nums.reduce((result, value) => add(result, value), 0);
// }

(function () {
    'use strict';

    function isType(typeName, value) {
        return typeof value === typeName;
    }

    function eitherType(typeName, defaultValue, actualValue) {
        return isType(typeName, actualValue) ? actualValue : defaultValue;
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
        return nums.reduce((result, value) => add(result, value), 0);
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


// Movement 5

// Changes made:

// function sum(nums) {
//     return nums.reduce(add, 0);
// }

(function () {
    'use strict';

    function isType(typeName, value) {
        return typeof value === typeName;
    }

    function eitherType(typeName, defaultValue, actualValue) {
        return isType(typeName, actualValue) ? actualValue : defaultValue;
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


// Movement 8

// Changes made:
// Converted Vector object to self-instantiating factory

// function Vector(points) {
//     let vector = this instanceof Vector ? this : new Vector(points);
//     vector.points = points;

//     points.forEach((value, index) => vector[index] = value);

//     return vector;
// }

(function () {
    'use strict';

    function isType(typeName, value) {
        return typeof value === typeName;
    }

    function eitherType(typeName, defaultValue, actualValue) {
        return isType(typeName, actualValue) ? actualValue : defaultValue;
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
        let squares = squareAll(nums);
        return sum(squares);
    }

    function Vector(points) {
        let vector = this instanceof Vector ? this : new Vector(points);
        vector.points = points;

        points.forEach((value, index) => vector[index] = value);

        return vector;
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


// Movement 9

// Changes made:

// Exposed Vector instead of buildVector
// deleted buildVector function

// module.exports = {
//     buildVector: Vector,
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

    function isType(typeName, value) {
        return typeof value === typeName;
    }

    function eitherType(typeName, defaultValue, actualValue) {
        return isType(typeName, actualValue) ? actualValue : defaultValue;
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
        let squares = squareAll(nums);
        return sum(squares);
    }

    function Vector(points) {
        let vector = this instanceof Vector ? this : new Vector(points);
        vector.points = points;

        points.forEach((value, index) => vector[index] = value);

        return vector;
    }

    Vector.prototype = {
        valueOf: function () { return this.points.valueOf(); },
        toString: function () { return '<' + this.points.join(',') + '>'; }
    };

    function magnitude(vector) {
        let squaredMagnitude = sumOfSquares(vector);
        return squareRoot(squaredMagnitude);
    }

    function getVectorsShorterThan(length, vectors) {
        return vectors.filter((vector) => magnitude(vector) < length);
    }

    module.exports = {
        buildVector: Vector,
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
// Created static method attachValues on Vector and extracted attach behavior

// function Vector(points) {
//     let vector = this instanceof Vector ? this : new Vector(points);
//     Vector.attachValues(vector, points);
//     return vector;
// }

// Vector.attachValues = function (vector, points) {
//     vector.points = points;
//     points.forEach((point, index) => vector[index] = point);
// }

(function () {
    'use strict';

    function isType(typeName, value) {
        return typeof value === typeName;
    }

    function eitherType(typeName, defaultValue, actualValue) {
        return isType(typeName, actualValue) ? actualValue : defaultValue;
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
        let squares = squareAll(nums);
        return sum(squares);
    }

    function Vector(points) {
        let vector = this instanceof Vector ? this : new Vector(points);
        Vector.attachValues(vector, points);
        return vector;
    }

    Vector.attachValues = function (vector, points) {
        vector.points = points;
        points.forEach((point, index) => vector[index] = point);
    }

    Vector.prototype = {
        valueOf: function () { return this.points.valueOf(); },
        toString: function () { return '<' + this.points.join(',') + '>'; }
    };

    function magnitude(vector) {
        let squaredMagnitude = sumOfSquares(vector);
        return squareRoot(squaredMagnitude);
    }

    function getVectorsShorterThan(length, vectors) {
        return vectors.filter((vector) => magnitude(vector) < length);
    }

    module.exports = {
        buildVector: Vector,
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
// Attaching immutable (writeable: false) object properties
// Introduced partially curried attachImmutableProperty function
// Closing over vector value in attachImmutableProperty

// const setImmutablePropertyOn = (vector) => (value, key) => {
//     Object.defineProperty(vector, key, {
//         writable: false,
//         value: value
//     });
// };

// Vector.attachValues = function (vector, points) {
//     vector.points = points;
//     points.forEach(setImmutablePropertyOn(vector));
// }


(function () {
    'use strict';

    function isType(typeName, value) {
        return typeof value === typeName;
    }

    function eitherType(typeName, defaultValue, actualValue) {
        return isType(typeName, actualValue) ? actualValue : defaultValue;
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
        let squares = squareAll(nums);
        return sum(squares);
    }

    function Vector(points) {
        let vector = this instanceof Vector ? this : new Vector(points);
        Vector.attachValues(vector, points);
        return vector;
    }

    const setImmutablePropertyOn = (vector) => (value, key) => {
        Object.defineProperty(vector, key, {
            writable: false,
            value: value
        });
    };

    Vector.attachValues = function (vector, points) {
        vector.points = points;
        points.forEach(setImmutablePropertyOn(vector));
    }

    Vector.prototype = {
        valueOf: function () { return this.points.valueOf(); },
        toString: function () { return '<' + this.points.join(',') + '>'; }
    };

    function magnitude(vector) {
        let squaredMagnitude = sumOfSquares(vector);
        return squareRoot(squaredMagnitude);
    }

    function getVectorsShorterThan(length, vectors) {
        return vectors.filter((vector) => magnitude(vector) < length);
    }

    module.exports = {
        buildVector: Vector,
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


// Movement 11

// Changes made:
// Hide points array from outside world to limit manipulation
// ValueOf creates a closure over points variable

// Vector.attachValues = function (vector, points) {
//     vector.valueOf = () => points.slice(0);
//     points.forEach(setImmutablePropertyOn(vector));
// };

// Vector.prototype = {
//     toString: function () { return '<' + this.valueOf().join(',') + '>'; }
// };

(function () {
    'use strict';

    function isType(typeName, value) {
        return typeof value === typeName;
    }

    function eitherType(typeName, defaultValue, actualValue) {
        return isType(typeName, actualValue) ? actualValue : defaultValue;
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
        let squares = squareAll(nums);
        return sum(squares);
    }

    function Vector(points) {
        let vector = this instanceof Vector ? this : new Vector(points);
        Vector.attachValues(vector, points);
        return vector;
    }

    const setImmutablePropertyOn = (vector) => (value, key) => {
        Object.defineProperty(vector, key, {
            writable: false,
            value: value
        });
    };

    Vector.attachValues = function (vector, points) {
        vector.valueOf = () => points.slice(0);
        points.forEach(setImmutablePropertyOn(vector));
    };

    Vector.prototype = {
        toString: function () { return '<' + this.valueOf().join(',') + '>'; }
    };

    function magnitude(vector) {
        let squaredMagnitude = sumOfSquares(vector);
        return squareRoot(squaredMagnitude);
    }

    function getVectorsShorterThan(length, vectors) {
        return vectors.filter((vector) => magnitude(vector) < length);
    }

    module.exports = {
        buildVector: Vector,
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


// Movement 13

// Changes made:
// Added type check on vector constructor for array
// implemented predicate function isArray

// function isObjectInstance(value) {
//     return value !== null && isType('object', value);
// }

// function isArray(value) {
//     return isObjectInstance(value) &&
//         Object.prototype.toString.call(value) === '[object Array]';
// }

// const isNumber = (value) => isType('number', value);

// function isArrayOfNumbers(value) {
//     return isArray(value) && value.filter(isNumber).length === value.length;
// }

// function Vector(points) {
//     if (!isArrayOfNumbers(points)) {
//         throw new Error('Points must be an array of numbers');
//     }

//     let vector = this instanceof Vector ? this : new Vector(points);
//     Vector.attachValues(vector, points);
//     return vector;
// }

(function () {
    'use strict';

    function isType(typeName, value) {
        return typeof value === typeName;
    }

    function eitherType(typeName, defaultValue, actualValue) {
        return isType(typeName, actualValue) ? actualValue : defaultValue;
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
        let squares = squareAll(nums);
        return sum(squares);
    }

    function isObjectInstance(value) {
        return value !== null && isType('object', value);
    }

    function isArray(value) {
        return isObjectInstance(value) &&
            Object.prototype.toString.call(value) === '[object Array]';
    }

    const isNumber = (value) => isType('number', value);

    function isArrayOfNumbers(value) {
        return isArray(value) && value.filter(isNumber).length === value.length;
    }

    function Vector(points) {
        if (!isArrayOfNumbers(points)) {
            throw new Error('Points must be an array of numbers');
        }

        let vector = this instanceof Vector ? this : new Vector(points);
        Vector.attachValues(vector, points);
        return vector;
    }

    const setImmutablePropertyOn = (vector) => (value, key) => {
        Object.defineProperty(vector, key, {
            writable: false,
            value: value
        });
    };

    Vector.attachValues = function (vector, points) {
        vector.valueOf = () => points.slice(0);
        points.forEach(setImmutablePropertyOn(vector));
    };

    Vector.prototype = {
        toString: function () { return '<' + this.valueOf().join(',') + '>'; }
    };

    function magnitude(vector) {
        let squaredMagnitude = sumOfSquares(vector);
        return squareRoot(squaredMagnitude);
    }

    function getVectorsShorterThan(length, vectors) {
        return vectors.filter((vector) => magnitude(vector) < length);
    }

    module.exports = {
        buildVector: Vector,
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


// Movement 13

// Changes made:
// Added type check on vector constructor for array
// implemented predicate function isArray

// const notNull = (value) => value !== null;
// const isObject = (value) => isType('object', value);
// const isNumber = (value) => isType('number', value);

// function isArray(value) {
//     return Object.prototype.toString.call(value) === '[object Array]';
// }

// function containsOnlyNumbers(values) {
//     return values.filter(isNumber).length === values.length;
// }

// function checkAll(predicates) {
//     return function (value) {
//         return predicates.reduce((result, predicate) => predicate(value), true);
//     };
// }

// const isArrayOfNumbers = checkAll([
//     notNull,
//     isObject,
//     isArray,
//     containsOnlyNumbers
// ]);

(function () {
    'use strict';

    function isType(typeName, value) {
        return typeof value === typeName;
    }

    function eitherType(typeName, defaultValue, actualValue) {
        return isType(typeName, actualValue) ? actualValue : defaultValue;
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
        let squares = squareAll(nums);
        return sum(squares);
    }

    const notNull = (value) => value !== null;
    const isObject = (value) => isType('object', value);
    const isNumber = (value) => isType('number', value);

    function isArray(value) {
        return Object.prototype.toString.call(value) === '[object Array]';
    }

    function containsOnlyNumbers(values) {
        return values.filter(isNumber).length === values.length;
    }

    function checkAll(predicates) {
        return function (value) {
            return predicates.reduce((result, predicate) => predicate(value), true);
        };
    }

    const isArrayOfNumbers = checkAll([
        notNull,
        isObject,
        isArray,
        containsOnlyNumbers
    ]);

    function Vector(points) {
        if (!isArrayOfNumbers(points)) {
            throw new Error('Points must be an array of numbers');
        }

        let vector = this instanceof Vector ? this : new Vector(points);
        Vector.attachValues(vector, points);
        return vector;
    }

    const setImmutablePropertyOn = (vector) => (value, key) => {
        Object.defineProperty(vector, key, {
            writable: false,
            value: value
        });
    };

    Vector.attachValues = function (vector, points) {
        vector.valueOf = () => points.slice(0);
        points.forEach(setImmutablePropertyOn(vector));
    };

    Vector.prototype = {
        toString: function () { return '<' + this.valueOf().join(',') + '>'; }
    };

    function magnitude(vector) {
        let squaredMagnitude = sumOfSquares(vector);
        return squareRoot(squaredMagnitude);
    }

    function getVectorsShorterThan(length, vectors) {
        return vectors.filter((vector) => magnitude(vector) < length);
    }

    module.exports = {
        buildVector: Vector,
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
