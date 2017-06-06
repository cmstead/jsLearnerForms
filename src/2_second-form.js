(function () {
    'use strict';

    function greet(greeting) {
        if (greeting !== undefined) {
            return greeting + '!';
        } else {
            return 'Hello!';
        }
    }

    function square (x){
        return Math.pow(x, 2);
    }

    function squareRoot (x) {
        return Math.sqrt(x);
    }

    function sum (nums) {
        let result = 0;

        for(let index = 0; index < nums.length; index += 1) {
            result += nums[index];
        }

        return result;
    }

    function squareAll (nums) {
        let result = [];

        for(let index = 0; index < nums.length; index += 1) {
            result[index] = square(nums[index]);
        }

        return result;
    }

    function sumOfSquares (nums) {
        let squares = squareAll(nums);
        return sum(squares);
    }

    function buildVector (points) {
        let vector = points.slice(0);

        vector.valueOf = function () { return points.slice(0); };
        vector.toString = function () { return '<' + points.join(',') + '>'; };

        return vector;
    }

    function magnitude (vector) {
        let squaredMagnitude = sumOfSquares(vector);
        return squareRoot(squaredMagnitude);
    }

    function getVectorsShorterThan (length, vectors) {
        let result = [];

        for(let index = 0; index < vectors.length; index += 1) {
            if(magnitude(vectors[index]) < length) {
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