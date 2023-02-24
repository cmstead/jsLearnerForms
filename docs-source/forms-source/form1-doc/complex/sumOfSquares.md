<!--bl
    (filemeta
        (title "Sum Of Squares Function")
    )
/bl-->

Create a function that takes an array of numbers, squares each number and then returns the sum of those squares.

#### It should square number in a 1-length array and return it ####

Create a function called `sumOfSquares` that takes an array and returns the square of the first element.

<details><summary>Hints</summary>

Try to do the following:

1. Add function `sumOfSquares` that returns the first element of the parameter
2. Then add logic to square a single number inside the `sumOfSquares` function

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

#### It should take the sum of squares of multiple numbers ####

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