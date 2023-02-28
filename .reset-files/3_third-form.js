// eslint-disable-next-line
const jsforms = (function () {
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
    }

    Vector.prototype = {
        valueOf: function () { return this.points.slice(0); },
        toString: function () { return '<' + this.points.join(',') + '>'; }
    };

    function buildVector(points) {
        return new Vector(points);
    }

    function magnitude(vector) {
        let squaredMagnitude = sumOfSquares(vector.valueOf());
        return squareRoot(squaredMagnitude);
    }

    function isMagnitudeShorterThanLength(length, vector) {
        return magnitude(vector) < length;
    }

    function getVectorsShorterThan(length, vectors) {
        return vectors.filter((vector) => isMagnitudeShorterThanLength(length, vector));
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
