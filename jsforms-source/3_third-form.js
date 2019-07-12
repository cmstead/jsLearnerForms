const jsforms = (function () {
    'use strict';

    function isTypeOf(type, value) {
        return typeof value === type;
    }

    function eitherOnType(type, testValue, defaultValue) {
        return isTypeOf(type, testValue) ? testValue : defaultValue;
    }

    function greet(greeting) {
        return eitherOnType('string', greeting, 'Hello') + '!';
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
        return nums.reduce(add);
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

    return {
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
