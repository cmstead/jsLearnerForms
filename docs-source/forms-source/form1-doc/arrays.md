<!--bl
    (filemeta
        (title "Arrays, Loops, and Function Calls")
    )
/bl-->
We will use functions to work with arrays and loops.

### \*\*sum function\*\*

We are going to create a function called `sum` that adds numbers together.

#### It should take the sum of one number

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

#### It should add two numbers

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

#### It should add multiple numbers

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

#### It should square all numbers in a single-value array

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

#### It should square multiple numbers

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