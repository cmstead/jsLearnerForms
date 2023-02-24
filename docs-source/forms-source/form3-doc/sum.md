<!--bl
    (filemeta
        (title "Sum")
    )
/bl-->
You will refactor the `sum` function.

### Refactoring steps ###

Here are the steps you will take to refactor the `sum` method so that you can change its shape without changing its behavior.

1. Replace forEach with reduce -- assign calculated sum to "result" variable
2. Remove wrapping function from reduce -- pass add function directly to reduce
3. Remove assignment and return calculated result directly to caller

_**KEEP THE TESTS PASSING!**_

#### It has been refactored to use `reduce` in the place of `forEach`, assigning the output to result ####

Modify the `sum` function to use the [`Array.prototype.reduce`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/Reduce) method in place of the [`Array.prototype.forEach`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/forEach) method.

<details><summary>Hints</summary>

The `Array.prototype.reduce` method iterates over an array and performs an accumulation of each value. It can take a function with two parameters `previous` and `current`. The `previous` value represents the results of the function being applied to the previous value. The `current` value represents the current value in the array. What ever this function returns becomes the `previous` value for the next iteration.

In short you can use this similarly to the `forEach` method but without the need for the accumulator variable.

<details><summary>Code</summary>

**Example 1**
```javascript
    function sum(nums) {
        let result = nums.reduce(function (previous, current) {
            return add(?, ?);
        });

        return result;
    }
```

**Example 2**

```javascript
    function sum(nums) {
        let result = nums.reduce((previous, current) => add(?, ?));

        return result;
    }
```

</details>

</details>

#### It has been refactored to pass the add function directly to reduce ####

Modify the `sum` function to no longer use a function expression and instead just directly use the `add` function.

<details><summary>Hints</summary>

The `reduce` method takes a function with two parameters, `add` takes two parameters.

<details><summary>Code</summary>

**Example**

```javascript
    function sum(nums) {
        let result = nums.reduce(add);

        return result;
    }
```

</details>

</details>

#### It has been refactored to not assign the sum before returning it ####

Modify the `sum` function to just return the result instead of assigning it to a variable.

<details><summary>Hints</summary>

Get rid of the `result` variable and just return the result of the call to reduce.

<details><summary>Code</summary>

**Example**

```javascript
    function sum(nums) {
        return nums.reduce(add);
    }
```

</details>

</details>