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
        return Math.pow(x, 0.5);
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