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

    function isType (typeStr, value){
        return typeof value === typeStr;
    }

    function greet(greeting) {
        var message = isType('string', greeting) ? greeting : 'Hello';
        
        return message + '!';
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
        var finalSum = 0;

        nums.forEach(function (value) {
            finalSum = add(finalSum, value);
        });

        return finalSum;
    }

    function squareAll(nums) {
        return nums.valueOf().map(square);
    }

    function sumOfSquares(nums) {
        var squares = squareAll(nums);
        return sum(squares);
    }

    function Vector (valueArray) {
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

    function isType (typeStr, value){
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

    function add (a, b){
        return a + b;
    }

    function sum(nums) {
        var finalSum = 0;

        nums.forEach(function (value) {
            finalSum = add(finalSum, value);
        });

        return finalSum;
    }

    function squareAll(nums) {
        return nums.valueOf().map(square);
    }

    function sumOfSquares(nums) {
        var squares = squareAll(nums);
        return sum(squares);
    }

    function Vector (valueArray) {
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


// Movement 3

// Changes made:

// function greet(greeting) {
//     return eitherType('string', 'Hello', greeting) + '!';
// }

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
        var finalSum = 0;

        nums.forEach(function (value) {
            finalSum = add(finalSum, value);
        });

        return finalSum;
    }

    function squareAll(nums) {
        return nums.valueOf().map(square);
    }

    function sumOfSquares(nums) {
        var squares = squareAll(nums);
        return sum(squares);
    }

    function Vector (valueArray) {
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


// Movement 4

// Changes made:

// function sum(nums) {
//     var finalSum = nums.reduce(add, 0);

//     return finalSum;
// }

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

    function Vector (valueArray) {
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


// Movement 5

// Changes made:

// function sum(nums) {
//     return nums.reduce(add, 0);
// }

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
        var squares = squareAll(nums);
        return sum(squares);
    }

    function Vector (valueArray) {
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


// Movement 6

// Changes made:

// function sumOfSquares(nums) {
//     return sum(squareAll(nums));
// }

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
        return sum(squareAll(nums));
    }

    function Vector (valueArray) {
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


// Movement 7

// Changes made:

// function sumOfSquares(nums) {
//     return sum(nums.valueOf().map(square));
// }

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
        return sum(nums.valueOf().map(square));
    }

    function Vector (valueArray) {
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


// Movement 8

// Changes made:

// function sumOfSquares(nums) {
//     return nums.valueOf().map(square).reduce(add, 0);
// }

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


// Movement 9

// Changes made:

// function Vector (valueArray) {
//     this.points = valueArray;

//     valueArray.reduce(function (vector, value, index) {
//         vector[index] = value;
//         return vector;
//     }, this);
// }

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
        this.points = valueArray;

        valueArray.reduce(function (vector, value, index) {
            vector[index] = value;
            return vector;
        }, this);
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


// Movement 10

// Changes made:

// function Vector (valueArray) {
//     var vector = this instanceof Vector ? this : new Vector(valueArray);
//     vector.points = valueArray;
//     ...
//     return vector;
// }

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
        vector.points = valueArray;

        valueArray.reduce(function (vector, value, index) {
            vector[index] = value;
            return vector;
        }, vector);
        
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

// Movement 11

// Changes made:

// Vector.prototype = {
//     valueOf: function () {
//         var points = [];
//         var index = 0;
        
//         while(!isType('undefined', this[index])){
//             points.push(this[index]);
//             index++;
//         }
        
//         return points;
//     },
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
        vector.points = valueArray;

        valueArray.reduce(function (vector, value, index) {
            vector[index] = value;
            return vector;
        }, vector);
        
        return vector;
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


// Movement 12

// Changes made:

// function Vector (valueArray) {
//     var vector = this instanceof Vector ? this : new Vector(valueArray);

//     return valueArray.reduce(function (vector, value, index) {
//     ...
// }

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


// Movement 13

// Changes made:

// function Vector (valueArray) {
//     var vector = this instanceof Vector ? this : new Vector(valueArray);

//     return Vector.attachValues(vector, valueArray);
// }

// Vector.attachValues = function (vector, values) {
//     return values.reduce(function (vector, value, index) {
//         vector[index] = value;
//         return vector;
//     }, vector);
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

        return Vector.attachValues(vector, valueArray);
    }
    
    Vector.attachValues = function (vector, values) {
        return values.reduce(function (vector, value, index) {
            vector[index] = value;
            return vector;
        }, vector);
    };
    
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


// Movement 14

// Changes made:

// Vector.getPoints = function (vector) {
//     var points = [];
//     var index = 0;

//     while (!isType('undefined', vector[index])) {
//         points.push(vector[index]);
//         index++;
//     }

//     return points;
// };

// Vector.prototype = {
//     valueOf: function () {
//         return Vector.getPoints(this);
//     },
//     ...
// };

(function () {
    'use strict';

    function isType(typeStr, value) {
        return typeof value === typeStr;
    }

    function eitherType(typeStr, defaultValue, value) {
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
        return nums.valueOf().map(square).reduce(add, 0);
    }

    function Vector(valueArray) {
        var vector = this instanceof Vector ? this : new Vector(valueArray);

        return Vector.attachValues(vector, valueArray);
    }

    Vector.attachValues = function (vector, values) {
        return values.reduce(function (vector, value, index) {
            vector[index] = value;
            return vector;
        }, vector);
    };

    Vector.getPoints = function (vector) {
        var points = [];
        var index = 0;

        while (!isType('undefined', vector[index])) {
            points.push(vector[index]);
            index++;
        }

        return points;
    };

    Vector.prototype = {
        valueOf: function () {
            return Vector.getPoints(this);
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


// Movement 15

// Changes made:

// function conj (value, list){
//     return list.concat([value]);
// }

// Vector.getPoints = function (vector) {
//     ...
//     while (!isType('undefined', vector[index])) {
//         points = conj(vector[index], points);
//         index++;
//     }
//     ...
// };

(function () {
    'use strict';

    function isType(typeStr, value) {
        return typeof value === typeStr;
    }

    function eitherType(typeStr, defaultValue, value) {
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
        return nums.valueOf().map(square).reduce(add, 0);
    }

    function conj (value, list){
        return list.concat([value]);
    }

    function Vector(valueArray) {
        var vector = this instanceof Vector ? this : new Vector(valueArray);

        return Vector.attachValues(vector, valueArray);
    }

    Vector.attachValues = function (vector, values) {
        return values.reduce(function (vector, value, index) {
            vector[index] = value;
            return vector;
        }, vector);
    };

    Vector.getPoints = function (vector) {
        var points = [];
        var index = 0;

        while (!isType('undefined', vector[index])) {
            points = conj(vector[index], points);
            index++;
        }

        return points;
    };

    Vector.prototype = {
        valueOf: function () {
            return Vector.getPoints(this);
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


// Movement 16

// Changes made:

// function inc (value){
//     return value + 1;
// }

// Vector.getPoints = function (vector) {
//     ...
//     while (!isType('undefined', vector[index])) {
//         points = conj(vector[index], points);
//         index = inc(index);
//     }
//     ...
// };

(function () {
    'use strict';

    function isType(typeStr, value) {
        return typeof value === typeStr;
    }

    function eitherType(typeStr, defaultValue, value) {
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
        return nums.valueOf().map(square).reduce(add, 0);
    }

    function conj (value, list){
        return list.concat([value]);
    }

    function inc (value){
        return value + 1;
    }

    function Vector(valueArray) {
        var vector = this instanceof Vector ? this : new Vector(valueArray);

        return Vector.attachValues(vector, valueArray);
    }

    Vector.attachValues = function (vector, values) {
        return values.reduce(function (vector, value, index) {
            vector[index] = value;
            return vector;
        }, vector);
    };

    Vector.getPoints = function (vector) {
        var points = [];
        var index = 0;

        while (!isType('undefined', vector[index])) {
            points = conj(vector[index], points);
            index = inc(index);
        }

        return points;
    };

    Vector.prototype = {
        valueOf: function () {
            return Vector.getPoints(this);
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


// Movement 17

// Changes made:

// Vector.getPoints = function (vector, index, points) {
//     if(isType('undefined', vector[index])) {
//         return points;
//     } else {
//         return Vector.getPoints(vector, inc(index), conj(vector[index], points));
//     }
// };

// Vector.prototype = {
//     valueOf: function () {
//         return Vector.getPoints(this, 0, []);
//     },
//     ...
// };

(function () {
    'use strict';

    function isType(typeStr, value) {
        return typeof value === typeStr;
    }

    function eitherType(typeStr, defaultValue, value) {
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
        return nums.valueOf().map(square).reduce(add, 0);
    }

    function conj (value, list){
        return list.concat([value]);
    }

    function inc (value){
        return value + 1;
    }

    function Vector(valueArray) {
        var vector = this instanceof Vector ? this : new Vector(valueArray);

        return Vector.attachValues(vector, valueArray);
    }

    Vector.attachValues = function (vector, values) {
        return values.reduce(function (vector, value, index) {
            vector[index] = value;
            return vector;
        }, vector);
    };

    Vector.getPoints = function (vector, index, points) {
        if(isType('undefined', vector[index])) {
            return points;
        } else {
            return Vector.getPoints(vector, inc(index), conj(vector[index], points));
        }
    };

    Vector.prototype = {
        valueOf: function () {
            return Vector.getPoints(this, 0, []);
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


// Movement 18

// Changes made:

// Vector.getPoints = function (vector, index, points) {
//     points = eitherType('object', [], points);
//     ...    
// };

// Vector.prototype = {
//     valueOf: function () {
//         return Vector.getPoints(this, 0);
//     },
//     ...
// };

(function () {
    'use strict';

    function isType(typeStr, value) {
        return typeof value === typeStr;
    }

    function eitherType(typeStr, defaultValue, value) {
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
        return nums.valueOf().map(square).reduce(add, 0);
    }

    function conj (value, list){
        return list.concat([value]);
    }

    function inc (value){
        return value + 1;
    }

    function Vector(valueArray) {
        var vector = this instanceof Vector ? this : new Vector(valueArray);

        return Vector.attachValues(vector, valueArray);
    }

    Vector.attachValues = function (vector, values) {
        return values.reduce(function (vector, value, index) {
            vector[index] = value;
            return vector;
        }, vector);
    };

    Vector.getPoints = function (vector, index, points) {
        points = eitherType('object', [], points);
        
        if(isType('undefined', vector[index])) {
            return points;
        } else {
            return Vector.getPoints(vector, inc(index), conj(vector[index], points));
        }
    };

    Vector.prototype = {
        valueOf: function () {
            return Vector.getPoints(this, 0);
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


// Movement 19

// Changes made:

// Vector.getPoints = function (vector, index, points) {
//     points = eitherType('object', [], points);
//     index = eitherType('number', 0, index);
//     ...
// };

// Vector.prototype = {
//     valueOf: function () {
//         return Vector.getPoints(this);
//     },
//     ...
// };

(function () {
    'use strict';

    function isType(typeStr, value) {
        return typeof value === typeStr;
    }

    function eitherType(typeStr, defaultValue, value) {
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
        return nums.valueOf().map(square).reduce(add, 0);
    }

    function conj (value, list){
        return list.concat([value]);
    }

    function inc (value){
        return value + 1;
    }

    function Vector(valueArray) {
        var vector = this instanceof Vector ? this : new Vector(valueArray);

        return Vector.attachValues(vector, valueArray);
    }

    Vector.attachValues = function (vector, values) {
        return values.reduce(function (vector, value, index) {
            vector[index] = value;
            return vector;
        }, vector);
    };

    Vector.getPoints = function (vector, index, points) {
        points = eitherType('object', [], points);
        index = eitherType('number', 0, index);
        
        if(isType('undefined', vector[index])) {
            return points;
        } else {
            return Vector.getPoints(vector, inc(index), conj(vector[index], points));
        }
    };

    Vector.prototype = {
        valueOf: function () {
            return Vector.getPoints(this);
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


// Movement 20

// Changes made:

// Vector.getPoints = function (vector, index, points) {
//     points = eitherType('object', [], points);
//     index = eitherType('number', 0, index);
    
//     var point = vector[index];
//     ...    
// };

(function () {
    'use strict';

    function isType(typeStr, value) {
        return typeof value === typeStr;
    }

    function eitherType(typeStr, defaultValue, value) {
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
        return nums.valueOf().map(square).reduce(add, 0);
    }

    function conj (value, list){
        return list.concat([value]);
    }

    function inc (value){
        return value + 1;
    }

    function Vector(valueArray) {
        var vector = this instanceof Vector ? this : new Vector(valueArray);

        return Vector.attachValues(vector, valueArray);
    }

    Vector.attachValues = function (vector, values) {
        return values.reduce(function (vector, value, index) {
            vector[index] = value;
            return vector;
        }, vector);
    };

    Vector.getPoints = function (vector, index, points) {
        points = eitherType('object', [], points);
        index = eitherType('number', 0, index);
        
        var point = vector[index];
        
        if(isType('undefined', point)) {
            return points;
        } else {
            return Vector.getPoints(vector, inc(index), conj(point, points));
        }
        
    };

    Vector.prototype = {
        valueOf: function () {
            return Vector.getPoints(this);
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


// Movement 21

// Changes made:

// Vector.getPoints = function (vector, index, points) {
//     points = eitherType('object', [], points);
//     index = eitherType('number', 0, index);
    
//     var point = vector[index];
    
//     return isType('undefined', point) ? points : Vector.getPoints(vector, inc(index), conj(point, points));
// };

(function () {
    'use strict';

    function isType(typeStr, value) {
        return typeof value === typeStr;
    }

    function eitherType(typeStr, defaultValue, value) {
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
        return nums.valueOf().map(square).reduce(add, 0);
    }

    function conj (value, list){
        return list.concat([value]);
    }

    function inc (value){
        return value + 1;
    }

    function Vector(valueArray) {
        var vector = this instanceof Vector ? this : new Vector(valueArray);

        return Vector.attachValues(vector, valueArray);
    }

    Vector.attachValues = function (vector, values) {
        return values.reduce(function (vector, value, index) {
            vector[index] = value;
            return vector;
        }, vector);
    };

    Vector.getPoints = function (vector, index, points) {
        points = eitherType('object', [], points);
        index = eitherType('number', 0, index);
        
        var point = vector[index];
        
        return isType('undefined', point) ? points : Vector.getPoints(vector, inc(index), conj(point, points));
    };

    Vector.prototype = {
        valueOf: function () {
            return Vector.getPoints(this);
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


// Movement 22

// Changes made:

// function Vector(valueArray) {
//     var points = Array.prototype.slice.call(arguments, 0);
//     var vector = this instanceof Vector ? this : new Vector(points[0]);

//     return Vector.attachValues(vector, valueArray);
// }

(function () {
    'use strict';

    function isType(typeStr, value) {
        return typeof value === typeStr;
    }

    function eitherType(typeStr, defaultValue, value) {
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
        return nums.valueOf().map(square).reduce(add, 0);
    }

    function conj (value, list){
        return list.concat([value]);
    }

    function inc (value){
        return value + 1;
    }

    function Vector(valueArray) {
        var points = Array.prototype.slice.call(arguments, 0);
        var vector = this instanceof Vector ? this : new Vector(points[0]);

        return Vector.attachValues(vector, valueArray);
    }

    Vector.attachValues = function (vector, values) {
        return values.reduce(function (vector, value, index) {
            vector[index] = value;
            return vector;
        }, vector);
    };

    Vector.getPoints = function (vector, index, points) {
        points = eitherType('object', [], points);
        index = eitherType('number', 0, index);
        
        var point = vector[index];
        
        return isType('undefined', point) ? points : Vector.getPoints(vector, inc(index), conj(point, points));
    };

    Vector.prototype = {
        valueOf: function () {
            return Vector.getPoints(this);
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


// Movement 23

// Changes made:

// function Vector() {
//     var points = Array.prototype.slice.call(arguments, 0);
//     var vector = this instanceof Vector ? this : new Vector();

//     return Vector.attachValues(vector, points);
// }

// function buildVector(valueArray) {
//     return Vector.apply(null, valueArray);
// }

(function () {
    'use strict';

    function isType(typeStr, value) {
        return typeof value === typeStr;
    }

    function eitherType(typeStr, defaultValue, value) {
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
        return nums.valueOf().map(square).reduce(add, 0);
    }

    function conj (value, list){
        return list.concat([value]);
    }

    function inc (value){
        return value + 1;
    }

    function Vector() {
        var points = Array.prototype.slice.call(arguments, 0);
        var vector = this instanceof Vector ? this : new Vector();

        return Vector.attachValues(vector, points);
    }

    Vector.attachValues = function (vector, values) {
        return values.reduce(function (vector, value, index) {
            vector[index] = value;
            return vector;
        }, vector);
    };

    Vector.getPoints = function (vector, index, points) {
        points = eitherType('object', [], points);
        index = eitherType('number', 0, index);
        
        var point = vector[index];
        
        return isType('undefined', point) ? points : Vector.getPoints(vector, inc(index), conj(point, points));
    };

    Vector.prototype = {
        valueOf: function () {
            return Vector.getPoints(this);
        },

        toString: function () {
            return '<' + this.valueOf().toString() + '>';
        }
    };

    function buildVector(valueArray) {
        return Vector.apply(null, valueArray);
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

// Run the tests


// Movement 24

// Changes made:

// Vector.attachValueAtIndex = function (vector, value, index) {
//     vector[index] = value;
//     return vector;
// };

// Vector.attachValues = function (vector, values) {
//     return values.reduce(Vector.attachValueAtIndex, vector);
// };

(function () {
    'use strict';

    function isType(typeStr, value) {
        return typeof value === typeStr;
    }

    function eitherType(typeStr, defaultValue, value) {
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
        return nums.valueOf().map(square).reduce(add, 0);
    }

    function conj (value, list){
        return list.concat([value]);
    }

    function inc (value){
        return value + 1;
    }

    function Vector() {
        var points = Array.prototype.slice.call(arguments, 0);
        var vector = this instanceof Vector ? this : new Vector();

        return Vector.attachValues(vector, points);
    }

    Vector.attachValueAtIndex = function (vector, value, index) {
        vector[index] = value;
        return vector;
    };

    Vector.attachValues = function (vector, values) {
        return values.reduce(Vector.attachValueAtIndex, vector);
    };

    Vector.getPoints = function (vector, index, points) {
        points = eitherType('object', [], points);
        index = eitherType('number', 0, index);
        
        var point = vector[index];
        
        return isType('undefined', point) ? points : Vector.getPoints(vector, inc(index), conj(point, points));
    };

    Vector.prototype = {
        valueOf: function () {
            return Vector.getPoints(this);
        },

        toString: function () {
            return '<' + this.valueOf().toString() + '>';
        }
    };

    function buildVector(valueArray) {
        return Vector.apply(null, valueArray);
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


// Movement 25

// Changes made:

// function getVectorsShorterThan(maxLength, vectors) {
//     return vectors.filter(isShortVector);

//     function isShortVector(vector) {
//         return magnitude(vector) <= maxLength;
//     }
// }

(function () {
    'use strict';

    function isType(typeStr, value) {
        return typeof value === typeStr;
    }

    function eitherType(typeStr, defaultValue, value) {
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
        return nums.valueOf().map(square).reduce(add, 0);
    }

    function conj(value, list) {
        return list.concat([value]);
    }

    function inc(value) {
        return value + 1;
    }

    function Vector() {
        var points = Array.prototype.slice.call(arguments, 0);
        var vector = this instanceof Vector ? this : new Vector();

        return Vector.attachValues(vector, points);
    }

    Vector.attachValueAtIndex = function (vector, value, index) {
        vector[index] = value;
        return vector;
    };

    Vector.attachValues = function (vector, values) {
        return values.reduce(Vector.attachValueAtIndex, vector);
    };

    Vector.getPoints = function (vector, index, points) {
        points = eitherType('object', [], points);
        index = eitherType('number', 0, index);

        var point = vector[index];

        return isType('undefined', point) ? points : Vector.getPoints(vector, inc(index), conj(point, points));
    };

    Vector.prototype = {
        valueOf: function () {
            return Vector.getPoints(this);
        },

        toString: function () {
            return '<' + this.valueOf().toString() + '>';
        }
    };

    function buildVector(valueArray) {
        return Vector.apply(null, valueArray);
    }

    function magnitude(vector) {
        var summedSquares = sumOfSquares(vector);
        return squareRoot(summedSquares);
    }

    function getVectorsShorterThan(maxLength, vectors) {
        return vectors.filter(isShortVector);

        function isShortVector(vector) {
            return magnitude(vector) <= maxLength;
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


// Movement 26

// Changes made:

// function isShortVector(maxLength, vector) {
//     return magnitude(vector) <= maxLength;
// }

// function getVectorsShorterThan(maxLength, vectors) {
//     return vectors.filter(isShortVector.bind(null, maxLength));
// }

(function () {
    'use strict';

    function isType(typeStr, value) {
        return typeof value === typeStr;
    }

    function eitherType(typeStr, defaultValue, value) {
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
        return nums.valueOf().map(square).reduce(add, 0);
    }

    function conj(value, list) {
        return list.concat([value]);
    }

    function inc(value) {
        return value + 1;
    }

    function Vector() {
        var points = Array.prototype.slice.call(arguments, 0);
        var vector = this instanceof Vector ? this : new Vector();

        return Vector.attachValues(vector, points);
    }

    Vector.attachValueAtIndex = function (vector, value, index) {
        vector[index] = value;
        return vector;
    };

    Vector.attachValues = function (vector, values) {
        return values.reduce(Vector.attachValueAtIndex, vector);
    };

    Vector.getPoints = function (vector, index, points) {
        points = eitherType('object', [], points);
        index = eitherType('number', 0, index);

        var point = vector[index];

        return isType('undefined', point) ? points : Vector.getPoints(vector, inc(index), conj(point, points));
    };

    Vector.prototype = {
        valueOf: function () {
            return Vector.getPoints(this);
        },

        toString: function () {
            return '<' + this.valueOf().toString() + '>';
        }
    };

    function buildVector(valueArray) {
        return Vector.apply(null, valueArray);
    }

    function magnitude(vector) {
        var summedSquares = sumOfSquares(vector);
        return squareRoot(summedSquares);
    }

    function isShortVector(maxLength, vector) {
        return magnitude(vector) <= maxLength;
    }

    function getVectorsShorterThan(maxLength, vectors) {
        return vectors.filter(isShortVector.bind(null, maxLength));
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


// Movement 27 -- cleanup and comments

(function () {
    'use strict';

    // Generic functions
    
    function isType(typeStr, value) {
        return typeof value === typeStr;
    }

    function eitherType(typeStr, defaultValue, value) {
        return isType(typeStr, value) ? value : defaultValue;
    }

    function conj(value, list) {
        return list.concat([value]);
    }

    function inc(value) {
        return value + 1;
    }

    // Final vector as a data type
    // Interactions with the Vector type would be as follows:
    // var vector = Vector(1, 2, 3);
    // console.log(vector); // <1,2,3>
    function Vector() {
        var points = Array.prototype.slice.call(arguments, 0);
        var vector = this instanceof Vector ? this : new Vector();

        return Vector.attachValues(vector, points);
    }

    // Vector static methods
    Vector.attachValueAtIndex = function (vector, value, index) {
        vector[index] = value;
        return vector;
    };

    Vector.attachValues = function (vector, values) {
        return values.reduce(Vector.attachValueAtIndex, vector);
    };

    Vector.getPoints = function (vector, index, points) {
        points = eitherType('object', [], points);
        index = eitherType('number', 0, index);

        var point = vector[index];

        return isType('undefined', point) ? points : Vector.getPoints(vector, inc(index), conj(point, points));
    };

    // Vector method overrides
    Vector.prototype = {
        valueOf: function () {
            return Vector.getPoints(this);
        },

        toString: function () {
            return '<' + this.valueOf().toString() + '>';
        }
    };

    // Factory method for the vector type
    function buildVector(valueArray) {
        return Vector.apply(null, valueArray);
    }

    // Final Greeting function
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

    // Vestigial sum -- this could be removed in a production environment
    function sum(nums) {
        return nums.reduce(add, 0);
    }

    // Vestigial squareAll -- could also be removed
    function squareAll(nums) {
        return nums.valueOf().map(square);
    }

    // Final sumOfSquares, using chained higher-order functions
    function sumOfSquares(nums) {
        return nums.valueOf().map(square).reduce(add, 0);
    }

    function magnitude(vector) {
        var summedSquares = sumOfSquares(vector);
        return squareRoot(summedSquares);
    }

    // Pure convenience function for vector filtering
    function isShortVector(maxLength, vector) {
        return magnitude(vector) <= maxLength;
    }

    // Final vector filter behavior
    function getVectorsShorterThan(maxLength, vectors) {
        return vectors.filter(isShortVector.bind(null, maxLength));
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