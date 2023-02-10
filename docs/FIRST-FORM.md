
<!-- GENERATED DOCUMENT! DO NOT EDIT! -->
# JS Learner Forms &mdash; First Form #
#### The Explanation ####


## Table Of Contents ##

- [Section 1: Variables and Operations](#user-content-variables-and-operations)
- [Section 2: Function Creation](#user-content-function-creation)
- [Section 3: Arrays, Loops, and Function Calls](#user-content-arrays,-loops,-and-function-calls)
- [Section 4: Combining Complex Functions](#user-content-combining-complex-functions)
- [Section 5: Copying Arrays](#user-content-copying-arrays)
- [Section 6: Combining existing code to solve new problems](#user-content-combining-existing-code-to-solve-new-problems)
- [Section 7: Looping and inequality comparison](#user-content-looping-and-inequality-comparison)

## Variables and Operations ##
We will explore the creation and use of variables.

### declaration and initialization

Here we will declare and initialize variables.

#### should have a variable called "a"

Create a variable at the top of the block called "a". You will need to use `let` or `var`.

<details><summary>Hints</summary>

Be sure you use "var" or "let" to declare your variable

<details><summary>Code</summary>

**Example 1**

```javascript
const jsforms = (function () {
    'use strict';
    let ?;

    return {
    };
})();
```

**Example 2**

```javascript
const jsforms = (function () {
    'use strict';
    var ?;

    return {
    };
})();
```

</details>

</details>

#### should initialize "a" with the value 5

Set the initial value of a to 5.

<details><summary>Hints</summary>

Initialize a variable with equals: `var a = ...`

<details><summary>Code</summary>

**Example 1**

```javascript
const jsforms = (function () {
    'use strict';
    let a = ?;

    return {
    };
})();
```

**Example 2**

```javascript
const jsforms = (function () {
    'use strict';
    var a = ?;

    return {
    };
})();
```

</details>

</details>

### assignment and operators

Now that we have a variable we will assign it a value different then what it was initialized with.

#### should assign the sum of 3 and 7 (3 + 7) to "a"

Now assign variable `a` with the value of `3 + 7`.

<details><summary>Hints</summary>

Add two numbers using the plus (+) operator

<details><summary>Code</summary>

**Example 1**

```javascript
    let a = 5;
    a = ? + ?;

    return {
    };
```

**Example 2**

```javascript
    var a = 5;
    a = ? + ?;

    return {
    };
```

</details>

</details>

#### should have a variable "b" initialized to "Hello, World!"

Create a variable called `b` and initialize it with the value `"Hello, World!"

<details><summary>Hints</summary>

Initialize a variable with equals: `var b = ...`

<details><summary>Code</summary>

**Example 1**

```javascript
    let b = ?;

    return {
    };
```

**Example 2**

```javascript
    var b = ?;

    return {
    };
```

</details>

</details>

### method call

We will make a call to a method on an object.

#### should log variable "b" to the console

Use the `console.log` method to log the value contained in variable `b` to the console.

<details><summary>Hints</summary>

Console.log might be just the ticket...

<details><summary>Code</summary>

**Example 1**

```javascript
    console.log(?);

    return {
    };
```

**Example 2**

```javascript
    console.log(?);

    return {
    };
```

</details>

</details>

### exposing values

We well now expose values to the outside world.

#### should expose variable "b" to be read outside of the module

Expose the variable `b` to the outside world, by adding it the the object being exported.

<details><summary>Hints</summary>

Find `return {};` add a "b" -> `return {b};`

<details><summary>Code</summary>

**Example**

```javascript
    return {
        ?,
    };
```

</details>

</details>
    

## Function Creation ##
#### [function declaration, return statement] ####
Time to create functions and have them return a value.

### \*\*greeter function\*\*

##### should say "Hello!" by default

Write a function called `greet` that returns the value "Hello!". (note: don't forget the "!")

<details><summary>Hints</summary>

Functions start with the keyword `function` followed by the name of the function and then a set of parenthesis `()`. All the logic of a function is contained an open curly brace `{` and a closed curly brace `}`. What the function returns follows the key word `return`.

<details><summary>Code</summary>

**Example**

```javascript
    function greet() {
        return _string_;
    }

    return {
        greet,
    };
```

</details>

</details>

#### conditional logic [if/else]

##### should say "Salutations!" when Salutations is passed

Modify the greet function to take a greeting and return the greeting if it was passed.

<details><summary>Hints</summary>

Add condition to greet to handle custom greeting case.
(Try using an "if/else" structure. "If" is a control structure)

<details><summary>Code</summary>

**Example**

```javascript
    function greet (greeting) {
        if (_something_ === undefined) {
            return _string_;
        } else {
            return _something_ + '!';
        }
    }

    return {
        greet,
    };
```

</details>

</details>

### function calls and mathematical operations [Math library]

#### \*\*square function\*\*

Create a function that takes a number and returns its square.

##### should square 1

The function called `square` will be passed 1 and should return 1.

<details><summary>Hints</summary>

Add square function that returns a simple value rather then worrying about actually squaring the a value.

<details><summary>Code</summary>

**Example**

```javascript
    function square(_something_) {
        return ?;
    }

    return {
        square,
    };
```

</details>

</details>

##### should square 3

Modify the `square` function such that it returns the square of the value passed in.

<details><summary>Hints</summary>

1. Add logic to correctly square a number (remember n^2 <=> n * n)
2. Move to library function to perform square operation
   1. Math is a built in library...

<details><summary>Code</summary>

**Example 1**

```javascript
    function square(_something_) {
        return ? * ?;
    }

    return {
        square,
    };
```

**Example 2**

```javascript
    function square(_something_) {
        return Math.pow(?, 2);
    }

    return {
        square,
    };
```

</details>

</details>

#### \*\*squareRoot function\*\*

Create a function that takes a number and returns the square root of that number. (note: use the Math library).

##### should take the square root of 1

Create a function called `squareRoot` that will be passed 1 and return 1.

<details><summary>Hints</summary>

Create a function that returns a simple value rather then worrying about actually performing a square root of the value.

<details><summary>Code</summary>

**Example**

```javascript
    function squareRoot(_something_) {
        return ?;
    }

    return {
        squareRoot,
    };
```

</details>

</details>

##### should take the square root of 4

Modify the `squareRoot` function to return the square root of the value passed.

<details><summary>Hints</summary>

Add logic to properly take square root
(There is more than one way to solve this in one line, maybe with Math)

<details><summary>Code</summary>

**Example**

```javascript
    function squareRoot(_something_) {
        return Math.sqrt(_something_);
    }

    return {
        squareRoot,
    };
```

</details>

</details>
    

## Arrays, Loops, and Function Calls ##
We will use functions to work with arrays and loops.

### \*\*sum function\*\*

We are going to create a function called `sum` that adds numbers together.

#### should take the sum of one number

Create a `sum` function that accepts an array and returns 1.

<details><summary>Hints</summary>

Create a function that returns a simple number instead of worrying about actually adding numbers together.

<details><summary>Code</summary>

**Example**

```javascript
    function sum(_something_) {
        return ?;
    }

    return {
        sum,
    };
```

</details>

</details>

#### should add two numbers

Modify the `sum` function so that it adds the first two numbers in an array.

<details><summary>Hints</summary>

Add logic to sum 1 or two numbers (An `if` structure might help here)

<details><summary>Code</summary>

**Example**

```javascript
    function sum(_array_) {
        if(_array_.length === 1) {
            return _array_[0];
        } else {
            return _array_[0] + _array_[1];
        }
    }

    return {
        sum,
    };
```

</details>

</details>

#### should add multiple numbers

Modify the `sum` function to add all numbers in an array.

<details><summary>Hints</summary>

Add logic to sum an arbitrary length array of numbers (A for loop might help to accomplish this loops, like ifs, are control structures)

<details><summary>Code</summary>

**Example 1 (let)**

```javascript
    function sum(_array_) {
        let result = ?;

        for(let index = _number_; _number_ < _number_; index += 1) {
            result += _something_;
        }

        return result;
    }

    return {
        sum,
    };
```

**Example 2 (var)**

```javascript
    function sum(_array_) {
        var result = ?;

        for(let index = _number_; _number_ < _number_; index += 1) {
            result += _something_;
        }

        return result;
    }

    return {
        sum,
    };
```

</details>

</details>

### \*\*squareAll function\*\*

Create a function that squares each number in an array.

#### should square all numbers in a single-value array

Create a function called `squareAll` that takes an array and returns the square of the first element.

<details><summary>Hints</summary>

Create a function that only squares the first value of an array and returns that value as an array.

<details><summary>Code</summary>

**Example**

```javascript
    function squareAll (values) {
        let result = square(_array_[_number_]);
        return [_something_];
    }

    return {
        squareAll,
    };
```

</details>

</details>

#### should square multiple numbers

Modify the `squareAll` function so that it now squares each number in the array.

<details><summary>Hints</summary>

Add logic to square all numbers in array (How did you solve sum?)

<details><summary>Code</summary>

**Example**

```javascript
    function squareAll (values) {
        for(let index = _number_; _number_ < _number_; index += 1) {
            result[index] = square(_something_[index]);
        }

        return ?;
    }

    return {
        squareAll,
    };
```

</details>

</details>
    

## Combining Complex Functions ##
We will use previous functions chained to gether to give us new results.

### \*\*sumOfSquares function\*\*

Create a function that takes an array of numbers, squares each number and then returns the sum of those squares.

#### should square number in a 1-length array and return it

Create a function called `sumOfSquares` that takes an array and returns the square of the first element.

<details><summary>Hints</summary>

Add sumOfSquares function with logic to square the first element of the parameter.

<details><summary>Code</summary>

**Example**

```javascript
    function sumOfSquares(_something_) {
        return square(?[0]);
    }

    return {
        sumOfSquares,
    };
```

</details>

</details>

#### should take the sum of squares of multiple numbers

Modify the `sumOfSquares` function so that it squares all numbers in the array.

<details><summary>Hints</summary>

Add logic to square all numbers and return the sum (squareAll and sum might be useful to accomplish this)

<details><summary>Code</summary>

**Example**

```javascript
    function sumOfSquares(_something_) {
        return add(squareAll(?));
    }

    return {
        sumOfSquares,
    };
```

</details>

</details>

    

## Copying Arrays ##
#### Using Array.slice ####
We are going to use functions to explore the `Array.prototype.slice` method.

### \*\*buildVector function\*\*

We will now create a function called `buildVector` that returns a copy of the array as it was passed.

#### returns a vector (array) containing the same numbers as the original -- try returning the array you get in your function

Create a function called `buildVector` that returns the same array passed to it.

<details><summary>Hints</summary>

Add buildVector function (Would it be possible to just return something?)

<details><summary>Code</summary>

**Hint**

```javascript
    function buildVector (values) {
        return ?;
    }

    return {
        buildVector,
    };
```

</details>

</details>

#### returns a copy of the original vector

Modify the `buildVector` function so that it returns a copy of the array passed to it. (note: use the `slice` method on array.)

<details><summary>Hints</summary>

Add logic to return a copy of vector array (Slice will create a new array just like the old one...)

<details><summary>Code</summary>

**Hint**

```javascript
    function buildVector (values) {
        let vector = _array_.slice(_number_);
        return vector;
    }

    return {
        buildVector,
    };
```

</details>

</details>

    

## Combining existing code to solve new problems ##
We will now take code we wrote and use it define more complex behaviors

### \*\*magnitude function\*\*

We will create a function called `magnitude` that will calculate the magnitude of all given numbers. Magnitude is calculated as the:

> Square root of the sum of squares for all given numbers.

such that given:

> a = 1
> b = 2
> c = 2

the magnitude is:

> √d = √(a² + b² + c²)

or

> √d = √(1² + 2² + 2²)
>
> √d = √(1 + 4 + 4)
>
> √d = √9
>
> d = 3

#### returns the magnitude of a vector with only one number

Create a function called `magnitude` that returns the first item in an array that is given to it.

<details><summary>Hints</summary>

**Hint**

```javascript
    function magnitude(_something_) {
        return ?[0];
    }

    return {
        magnitude,
    };
```

</details>

#### returns only positive numbers -- all magnitudes are positive

Modify the `magnitude` function that returns the positive value of the first item in an array that is given to it.

<details><summary>Hints</summary>

**Hint**

```javascript
    function magnitude(_something_) {
        return squareRoot(square(?[0]));
    }

    return {
        magnitude,
    };
```

</details>

#### should return the magnitude of a vector with two values

Modify the `magnitude` function so that it returns the magnitude of the first 2 items in an array given to it.

<details><summary>Hints</summary>

**Hint**

```javascript
    function magnitude(_something_) {
        if (?.length === 2){
            return squareRoot(square(?[0]) + square(?[1]));
        } else {
            return squareRoot(square(?[0]));
        }
    }

    return {
        magnitude,
    };
```

</details>

#### should return the magnitude of a vector with multiple values

Modify the `magnitude` function so that it returns the magnitude of all the values in the array.

<details><summary></summary>

**Hint**

```javascript
    function magnitude(_something_) {
        return squareRoot(sumOfSquares(?));
    }

    return {
        magnitude,
    };
```

</details>

    

## Looping and inequality comparison ##
Now it is time to use functions to examine looping and comparisons.

### \*\*getVectorsShorterThan\*\*

We will now create a function called `getVectorsShorterThan` that will take an array of arrays. It will compare each array based on its magnitude and return all arrays that have a magnitude smaller then the number provided.

the signature will be:

```javascript
getVectorsShorterThan(length, arrayOfVectors)
```

Such that `length` is the number for which we will compare magnitudes against, and `arrayOfVectors` is the array of arrays, where then inner arrays are to contain numbers.

#### returns an array of one vector when the vector is shorter than 5 -- arguments are: length, arrayOfVectors

Create a the function `getVectorsShorterThan` where the first parameter is `length` and the second parameter is `arrayOfVectors` that returns all vectors where the magnitude is less then 5. There is only one vector at this point and its length is less then 5.

<details><summary>Hints</summary>

**Hint**

```javascript
    function getVectorsShorterThan(length, arrayOfVectors) {
        return [?[0]];
    }

    return {
        getVectorsShorterThan,
    };
```

</details>

#### returns an empty array when all vectors are too long -- tests one vector

Modify the `getVectorsShorterThan` function so that it will return an empty array if the first vector has a magnitude longer then `length`.

<details><summary>Hints</summary>

**Hint 1 (let)**

```javascript
    function getVectorsShorterThan(length, arrayOfVectors) {
        let firstMagnitude = magnitude(?[0]);

        if (length <= firstMagnitude) {
            return ?;
        }

        return [?[0]];
    }

    return {
        getVectorsShorterThan,
    };
```

**Hint 2 (var)**

```javascript
    function getVectorsShorterThan(length, arrayOfVectors) {
        var firstMagnitude = magnitude(?[0]);

        if (length <= firstMagnitude) {
            return ?;
        }

        return [?[0]];
    }

    return {
        getVectorsShorterThan,
    };
```

</details>

#### returns an array of more than one vector when all are short enough

Modify the `getVectorsShorterThan` function so that it returns all vectors if the first one has a magnitude less then the length.

<details><summary>Hints</summary>

**Hint 1 (let)**

```javascript
    function getVectorsShorterThan(length, arrayOfVectors) {
        let firstMagnitude = magnitude(?[0]);

        if (length <= firstMagnitude) {
            return [];
        }

        return ?;
    }

    return {
        getVectorsShorterThan,
    };
```

**Hint 2 (var)**

```javascript
    function getVectorsShorterThan(length, arrayOfVectors) {
        var firstMagnitude = magnitude(?[0]);

        if (length <= firstMagnitude) {
            return [];
        }

        return ?;
    }

    return {
        getVectorsShorterThan,
    };
```

</details>

### returns only vectors which are not too long

Modify the `getVectorsShorterThan` function so that it now returns only those vectors with a magnitude less then the length.

<details><summary>Hints</summary>

**Hint 1 (let)**

```javascript
    function getVectorsShorterThan(length, arrayOfVectors) {
        let result = ?;

        for(let index = _number_; _number_ < _number_; index += 1) {
            let currentMagnitude = magnitude(?[index]);
            if (currentMagnitude < length) {
                result.push(buildVector(?[0]));
            }
        }

        return result;
    }

    return {
        getVectorsShorterThan,
    };
```

**Hint 2 (var)**

```javascript
   function getVectorsShorterThan(length, arrayOfVectors) {
        var result = ?;

        for(let index = _number_; _number_ < _number_; index += 1) {
            let currentMagnitude = magnitude(?[index]);
            if (currentMagnitude < length) {
                result.push(buildVector(?[0]));
            }
        }

        return result;
    }

    return {
        getVectorsShorterThan,
    };
```

</details>

    

<!-- GENERATED DOCUMENT! DO NOT EDIT! -->
    