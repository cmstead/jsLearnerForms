var jsforms = require('../src/jsforms');

describe('Forms', function () {

    it('should be an object', function () {
        expect(typeof jsforms).toBe('object');
    });

    describe('greeter', function () {
        
        it('should say "Hello!" by default', function () {
            expect(jsforms.greet()).toBe('Hello!');
        });
        
        it('should say "Salutations!" when Salutations is passed', function () {
            expect(jsforms.greet('Salutations')).toBe('Salutations!');
        });
        
    });
    
    describe('square', function () {
        
        it('should square 1', function () {
            expect(jsforms.square(1)).toBe(1);
        });
        
        it('should square 3', function () {
            expect(jsforms.square(3)).toBe(9);
        });
        
    });
    
    describe('squareRoot', function () {
        
        it('should take the square root of 1', function () {
            expect(jsforms.squareRoot(1)).toBe(1);
        });
        
        it('should take the square root of 4', function () {
            expect(jsforms.squareRoot(4)).toBe(2);
        });
        
    });
    
    describe('sum', function () {
        
        it('should take the sum of one number', function () {
            expect(jsforms.sum([1])).toBe(1);
        });
        
        it('should add two numbers', function () {
            expect(jsforms.sum([2, 3])).toBe(5);
        });
        
        it('should add multiple numbers', function () {
            expect(jsforms.sum([1, 3, 5, 7])).toBe(16);
        });
    });

    describe('squareAll', function () {
        
        it('should square all numbers in a single-value array', function () {
            expect(jsforms.squareAll([2]).toString()).toBe('4');
        });
        
        it('should square multiple numbers', function () {
            expect(jsforms.squareAll([1, 2, 3, 5]).toString()).toBe('1,4,9,25');
        });
        
    });
    
    describe('sumOfSquares', function () {
        
        it('should square number in a 1-length array and return it', function () {
            expect(jsforms.sumOfSquares([2])).toBe(4);
        });
        
        it('should take the sum of squares of multiple numbers', function () {
            expect(jsforms.sumOfSquares([1, 2, 3])).toBe(14);
        });
        
    });

    describe('buildVector', function () {

        it('should return a vector matching original values', function () {
            var initialArray = [1, 2];
            var vector = jsforms.buildVector(initialArray);
            var resultValues = [vector[0], vector[1]];
            
            expect(resultValues.toString()).toBe(initialArray.toString());
        });
        
        it('should return a vector given an array which is not the original array', function () {
            var initialArray = [1, 2];
            var vector = jsforms.buildVector(initialArray);
            
            expect(initialArray !== vector).toBe(true);
        });
        
        it('should return vector with valueOf function which does not return vector', function () {
            var vector = jsforms.buildVector([1, 2, 3]);
            
            expect(vector.valueOf() !== vector).toBe(true);
        });
        
        it('should return a vector where toString returns a vector string', function () {
            var vector = jsforms.buildVector([1, 2, 3]);
            
            expect(vector.toString()).toBe('<1,2,3>');
        });
        
    });

    describe('magnitude', function () {
        
        it('should return the magnitude of a one-value vector', function () {
            expect(jsforms.magnitude([5])).toBe(5);
        });
        
        it('should return the magnitude of a two-value vector', function () {
            expect(jsforms.magnitude([3, 4])).toBe(5);
        });
        
        it('should return the magnitude of a multi-value vector', function () {
            expect(jsforms.magnitude([0, 3, 0, 4])).toBe(5);
        });
        
    });    

    describe('getVectorsShorterThan', function () {
        
        it('should return single vector when the only vector magnitude is acceptably short', function () {
            var vectors = [jsforms.buildVector([1, 2])];
            var result = jsforms.getVectorsShorterThan(5, vectors);
            
            expect(result.length).toBe(1);
            expect(result[0].toString()).toBe('<1,2>');
        });
        
        it('should return an empty array when the only vector magnitude is too long', function () {
            var vectors = [jsforms.buildVector([3, 4])];
            var result = jsforms.getVectorsShorterThan(4, vectors);
            
            expect(result.length).toBe(0);
        });
        
        it('should only filter vectors which are too long', function () {
            var vectors = [
                jsforms.buildVector([10, 10]),
                jsforms.buildVector([3, 4])
            ];
            
            var result = jsforms.getVectorsShorterThan(10, vectors);
            
            expect(result.length).toBe(1);
            expect(result[0].toString()).toBe('<3,4>');
        });
        
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