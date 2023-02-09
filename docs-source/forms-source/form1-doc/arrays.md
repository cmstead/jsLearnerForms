<!--bl
    (filemeta
        (title "Arrays, Loops, and Function Calls")
    )
/bl-->
We will use functions to work with arrays and loops.

### \*\*sum function\*\*

We are going to create a function called `sum` that adds numbers together.

#### should take the sum of one number

Create a `sum` function that accepts an array and returns 1.

<details><summary>Hints</summary>

**Hint**

```javascript
    function sum(_something_) {
        return ?;
    }

    return {
        sum,
    };
```

</details>

#### should add two numbers

Modify the `sum` function so that it adds the first two numbers in an array.

<details><summary>Hints</summary>

**Hint**

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

#### should add multiple numbers

Modify the `sum` function to add all numbers in an array.

<details><summary>Hints</summary>

**Hint 1 (let)**

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

**Hint 2 (var)**

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

### \*\*squareAll function\*\*

Create a function that squares each number in an array.

#### should square all numbers in a single-value array

Create a function called `squareAll` that takes an array and returns the square of the first element.

<details><summary>Hints</summary>

**Hint**

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

#### should square multiple numbers

Modify the `squareAll` function so that it now squares each number in the array.

<details><summary>Hints</summary>

**Hint**

```javascript
    function squareAll (values) {
        for(let index = _number_; _number_ < _number_; index += 1) {
            values[index] = square(_something_);
        }

        return ?;
    }

    return {
        squareAll,
    };
```

</details>