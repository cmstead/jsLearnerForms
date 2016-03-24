var jsforms = require('../src/jsforms');

describe('Forms', function () {

    // First form, movement 1
    it('should be an object', function () {
        expect(typeof jsforms).toBe('object');
    });

    // First form, movements 2 and 3
    // Second form, movements 1 and 2
    // Third form, movements 1-3
    describe('greeter', function () {
        
        // First form, movement 2
        it('should say "Hello!" by default', function () {
            expect(jsforms.greet()).toBe('Hello!');
        });
        
        // First form, movement 3
        it('should say "Salutations!" when Salutations is passed', function () {
            expect(jsforms.greet('Salutations')).toBe('Salutations!');
        });
        
    });
    
    // First form, movements 4-6
    describe('square', function () {
        
        // First form, movement 4
        it('should square 1', function () {
            expect(jsforms.square(1)).toBe(1);
        });
        
        // First form, movements 5 and 6
        it('should square 3', function () {
            expect(jsforms.square(3)).toBe(9);
        });
        
    });
    
    // First form, movements 7 and 8
    describe('squareRoot', function () {
        
        // First form, movement 7
        it('should take the square root of 1', function () {
            expect(jsforms.squareRoot(1)).toBe(1);
        });
        
        // FIrst form, movement 8
        it('should take the square root of 4', function () {
            expect(jsforms.squareRoot(4)).toBe(2);
        });
        
    });
    
    // First form, movements 9-11
    // Second form, movements 3 and 4
    // Third form, movements 4 and 5
    describe('sum', function () {
        
        // First form, movement 9
        it('should take the sum of one number', function () {
            expect(jsforms.sum([1])).toBe(1);
        });
        
        // First form, movement 10
        it('should add two numbers', function () {
            expect(jsforms.sum([2, 3])).toBe(5);
        });
        
        // First form, movement 11
        it('should add multiple numbers', function () {
            expect(jsforms.sum([1, 3, 5, 7])).toBe(16);
        });
    });

    // First form, movements 12 and 13
    // Second form, movements 5-9
    describe('squareAll', function () {
        
        // First form, movement 12
        it('should square all numbers in a single-value array', function () {
            expect(jsforms.squareAll([2]).toString()).toBe('4');
        });
        
        // First form, movement 13
        it('should square multiple numbers', function () {
            expect(jsforms.squareAll([1, 2, 3, 5]).toString()).toBe('1,4,9,25');
        });
        
    });
    
    // First form, movements 14 and 15
    // Third form, movements 6-8
    describe('sumOfSquares', function () {
        
        // First form, movement 14
        it('should square number in a 1-length array and return it', function () {
            expect(jsforms.sumOfSquares([2])).toBe(4);
        });
        
        // First form, movement 15
        it('should take the sum of squares of multiple numbers', function () {
            expect(jsforms.sumOfSquares([1, 2, 3])).toBe(14);
        });
        
    });

    // First form, movement 16-19
    // Second form, movements 10 and 11
    // Third form, movements 9-24
    describe('buildVector', function () {

        // First form, movement 16
        it('should return a vector matching original values', function () {
            var initialArray = [1, 2];
            var vector = jsforms.buildVector(initialArray);
            var resultValues = [vector[0], vector[1]];
            
            expect(resultValues.toString()).toBe(initialArray.toString());
        });
        
        // First form, movement 17
        it('should return a vector given an array which is not the original array', function () {
            var initialArray = [1, 2];
            var vector = jsforms.buildVector(initialArray);
            
            expect(initialArray !== vector).toBe(true);
        });
        
        // First form, movement 18
        it('should return vector with valueOf function which does not return vector', function () {
            var vector = jsforms.buildVector([1, 2, 3]);
            
            expect(vector.valueOf() !== vector).toBe(true);
        });
        
        // First form, movement 19
        it('should return a vector where toString returns a vector string', function () {
            var vector = jsforms.buildVector([1, 2, 3]);
            
            expect(vector.toString()).toBe('<1,2,3>');
        });
        
    });

    // First form, movement 20-23
    describe('magnitude', function () {
        
        // First form, movement 20
        it('should return the magnitude of a one-value vector', function () {
            expect(jsforms.magnitude([5])).toBe(5);
        });
        
        // First form, movement 21
        it('should return only positive magnitude values', function () {
            expect(jsforms.magnitude([-5])).toBe(5);
        });
        
        // First form, movement 22
        it('should return the magnitude of a two-value vector', function () {
            expect(jsforms.magnitude([3, 4])).toBe(5);
        });
        
        // First form, movement 23
        it('should return the magnitude of a multi-value vector', function () {
            expect(jsforms.magnitude([0, 3, 0, 4])).toBe(5);
        });
        
    });    

    // First form, movement 24-27
    // Second form, movements 12-15
    // Third form, movements 25 and 26
    describe('getVectorsShorterThan', function () {
        
        // First form, movement 24
        it('should return single vector when the only vector magnitude is acceptably short', function () {
            var vectors = [jsforms.buildVector([1, 2])];
            var result = jsforms.getVectorsShorterThan(5, vectors);
            
            expect(result.length).toBe(1);
            expect(result[0].toString()).toBe('<1,2>');
        });
        
        // First form, movement 25
        it('should return an empty array when the only vector magnitude is too long', function () {
            var vectors = [jsforms.buildVector([3, 4])];
            var result = jsforms.getVectorsShorterThan(4, vectors);
            
            expect(result.length).toBe(0);
        });
        
        // First form, movement 26
        it('should only filter vectors which are too long', function () {
            var vectors = [
                jsforms.buildVector([10, 10]),
                jsforms.buildVector([3, 4])
            ];
            
            var result = jsforms.getVectorsShorterThan(10, vectors);
            
            expect(result.length).toBe(1);
            expect(result[0].toString()).toBe('<3,4>');
        });
        
        // First form, movement 27
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
            
            expect(resultValues.toString()).toBe('<1,2,2>,<3,4>');
        });
        
    });

});