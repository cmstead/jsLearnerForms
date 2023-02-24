<!--bl
    (filemeta
        (title "Square All Function")
    )
/bl-->

Create a function that squares each number in an array.

The steps you will take to building the `squareAll` function are:

1. Add a `squareAll` function that returns a constant value.
2. Chang the `squareAll` function to perform square computation on array value

#### It should square all numbers in a single-value array ####

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

#### It should square multiple numbers ####

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