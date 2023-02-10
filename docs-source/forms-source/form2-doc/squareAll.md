<!--bl
    (filemeta
        (title "Square All")
    )
/bl-->
We will now refactor and change the shape of the `squareAll` method.

### Refactoring steps

These are the steps we will take in changing the shape of the `squareAll` method, to ensure we do not change its behavior.

#### It is refactored to replace for loop with `nums.map`

The [`Array.prototype.map`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map) function allows you to perform a function on each member of an array and capture the result. Use this method instead of the given for loop.

<details><summary>Hints</summary>

The `Array.prototype.map` allows you to transform all values in an array such that if you wanted to get the square root of all values in an array it would look like `values.map(value => Math.sqrt(value))`. Both of these return a new array where each value in the array is a square root of a value in the original.

<details><summary>Code</summary>

**Example 1**

```javascript
    function squareAll(nums) {
        let result = ?.map(? => square(?));
        return result;
    }
```

**Example 2**

```javascript
    function squareAll(nums) {
        var result = ?.map(function (?) { return square(?); });
        return result;
    }
```

</details>

</details>

#### It is refactored to remove function wrapping `square`

Now modify the `squareAll` function to simplify the function expression or the arrow function expression.

<details><summary>Hints</summary>

If you were to log all items in an array to the console, you don't need a function expression. Instead you could just pass the log method like so `values.forEach(console.log)`.

<details><summary>Code</summary>

**Example**

```javascript
    function squareAll(nums) {
        let result = ?.map(square);
        return result;
    }
```

</details>

</details>

#### It is refactored to return result of map operation without assigning output to result

Now modify the `squareAll` function to remove the unnecessary `result` variable.

<details><summary>Hints</summary>

Instead of an assignment, maybe just return the result of map.

<details><summary>Code</summary>

```javascript
    function squareAll(nums) {
        return ?.map(square);
    }
```

</details>

</details>