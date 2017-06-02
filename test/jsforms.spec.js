var jsforms = require('../src/jsforms');
var assert = require('chai').assert;

describe('Forms', function () {

    // First form, movements 1 and 2
    describe('greeter', function () {
        
        // First form, movement 1
        it('should say "Hello!" by default', function () {
            assert.equal(jsforms.greet(), 'Hello!');
        });
        
        // First form, movement 2
        it('should say "Salutations!" when Salutations is passed', function () {
            assert.equal(jsforms.greet('Salutations'), 'Salutations!');
        });
        
    });
    
    // First form, movements 3-5
    describe('square', function () {
        
        // First form, movement 3
        it('should square 1', function () {
            assert.equal(jsforms.square(1), 1);
        });
        
        // First form, movements 4 and 5
        it('should square 3', function () {
            assert.equal(jsforms.square(3), 9);
        });
        
    });
    
    // First form, movements 6 and 7
    describe('squareRoot', function () {
        
        // First form, movement 6
        it('should take the square root of 1', function () {
            assert.equal(jsforms.squareRoot(1), 1);
        });
        
        // FIrst form, movement 7
        it('should take the square root of 4', function () {
            assert.equal(jsforms.squareRoot(4), 2);
        });
        
    });
    
    // First form, movements 8-10
    describe('sum', function () {
        
        // First form, movement 8
        it('should take the sum of one number', function () {
            assert.equal(jsforms.sum([1]), 1);
        });
        
        // First form, movement 9
        it('should add two numbers', function () {
            assert.equal(jsforms.sum([2, 3]), 5);
        });
        
        // First form, movement 10
        it('should add multiple numbers', function () {
            assert.equal(jsforms.sum([1, 3, 5, 7]), 16);
        });
    });

    // First form, movements 11 and 12
    describe('squareAll', function () {
        
        // First form, movement 11
        it('should square all numbers in a single-value array', function () {
            assert.equal(jsforms.squareAll([2]).toString(), '4');
        });
        
        // First form, movement 12
        it('should square multiple numbers', function () {
            assert.equal(jsforms.squareAll([1, 2, 3, 5]).toString(), '1,4,9,25');
        });
        
    });
    
    // First form, movements 13 and 14
    describe('sumOfSquares', function () {
        
        // First form, movement 13
        it('should square number in a 1-length array and return it', function () {
            assert.equal(jsforms.sumOfSquares([2]), 4);
        });
        
        // First form, movement 14
        it('should take the sum of squares of multiple numbers', function () {
            assert.equal(jsforms.sumOfSquares([1, 2, 3]), 14);
        });
        
    });

    // First form, movement 15-18
    describe('buildVector', function () {

        // First form, movement 15
        it('should return a vector matching original values', function () {
            var initialArray = [1, 2];
            var vector = jsforms.buildVector(initialArray);
            var resultValues = [vector[0], vector[1]];
            
            assert.equal(resultValues.toString(), initialArray.toString());
        });
        
        // First form, movement 16
        it('should return a vector given an array which is not the original array', function () {
            var initialArray = [1, 2];
            var vector = jsforms.buildVector(initialArray);
            
            assert.equal(initialArray !== vector, true);
        });
        
        // First form, movement 17
        it('should return vector with valueOf function which does not return vector', function () {
            var vector = jsforms.buildVector([1, 2, 3]);
            
            assert.equal(vector.valueOf() !== vector, true);
        });
        
        // First form, movement 18
        it('should return a vector where toString returns a vector string', function () {
            var vector = jsforms.buildVector([1, 2, 3]);

            assert.equal(vector.toString(), '<1,2,3>');
        });
        
    });

    // First form, movement 19-22
    describe('magnitude', function () {
        
        // First form, movement 19
        it('should return the magnitude of a one-value vector', function () {
            assert.equal(jsforms.magnitude([5]), 5);
        });
        
        // First form, movement 20
        it('should return only positive magnitude values', function () {
            assert.equal(jsforms.magnitude([-3]), 3);
        });
        
        // First form, movement 21
        it('should return the magnitude of a two-value vector', function () {
            assert.equal(jsforms.magnitude([6, 8]), 10);
        });
        
        // First form, movement 22
        it('should return the magnitude of a multi-value vector', function () {
            assert.equal(jsforms.magnitude([0, 12, 3, 4]), 13);
        });
        
    });    

    // First form, movement 23-26
    describe('getVectorsShorterThan', function () {
        
        // First form, movement 23
        it('should return single vector when the only vector magnitude is acceptably short', function () {
            var vectors = [jsforms.buildVector([1, 2])];
            var result = jsforms.getVectorsShorterThan(5, vectors);
            
            assert.equal(result.length, 1);
            assert.equal(result[0].toString(), '<1,2>');
        });
        
        // First form, movement 24
        it('should return an empty array when the only vector magnitude is too long', function () {
            var vectors = [jsforms.buildVector([3, 4])];
            var result = jsforms.getVectorsShorterThan(4, vectors);
            
            assert.equal(result.length, 0)
        });
        
        // First form, movement 25
        it('should only filter vectors which are too long', function () {
            var vectors = [
                jsforms.buildVector([10, 10]),
                jsforms.buildVector([3, 4])
            ];
            
            var result = jsforms.getVectorsShorterThan(10, vectors);
            
            assert.equal(result.length, 1);
            assert.equal(result[0].toString(), '<3,4>');
        });
        
        // First form, movement 26
        it('should filter all vectors which are too long', function () {
            var vectors = [
                jsforms.buildVector([1, 2, 2]),
                jsforms.buildVector([10, 20]),
                jsforms.buildVector([3, 4]),
                jsforms.buildVector([1, 2, 10 , 100])
            ];
            
            var result = jsforms.getVectorsShorterThan(10, vectors);
            
            var resultValues = [
                result[0].toString(),
                result[1].toString()
            ];
            
            assert.equal(resultValues.toString(), '<1,2,2>,<3,4>');
        });
        
    });

});

if(typeof global.runQuokkaMochaBdd === 'function') {
    runQuokkaMochaBdd();
}