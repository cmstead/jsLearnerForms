<!--bl
    (filemeta
        (title "Combining Complex Functions")
    )
/bl-->
We will use previous functions chained to gether to give us new results.

### \*\*sumOfSquares function\*\*

Create a function that takes an array of numbers, squares each number and then returns the sum of those squares.

#### should square number in a 1-length array and return it

Create a function called `sumOfSquares` that takes an array and returns the square of the first element.

<details><summary>Hints</summary>

**Hint**

```javascript
    function sumOfSquares(_something_) {
        return square(?[0]);
    }

    return {
        sumOfSquares,
    };
```

</details>

#### should take the sum of squares of multiple numbers

Modify the `sumOfSquares` function so that it squares all numbers in the array.

<details><summary>Hints</summary>

**Hint**

```javascript
    function sumOfSquares(_something_) {
        return add(squareAll(?));
    }

    return {
        sumOfSquares,
    };
```

</details>
