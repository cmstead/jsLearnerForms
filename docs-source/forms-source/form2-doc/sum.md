<!--bl
    (filemeta
        (title "Sum")
    )
/bl-->
You are going to refactor and change the shape of the `sum` method.

### Refactoring steps ###

These are the steps you will use to change the shape of the `sum` method, thereby changing how it does its work, while not changing the work it does.

#### It has an add function ####

Now create a function called `add` that takes two number and adds them. You are _not_ exporting this function, it is part of your refactoring of the `sum` function.

<details><summary>Hints</summary>

Return the values after using the `+` operator.

<details><summary>Code</summary>

```javascript
    function add(?, ?) {
        return ? + ?;
    }
```

</details>

</details>

#### It is refactored to replace += with a call to the add function ####

Modify the `sum` method to use the new `add` method above instead of the `+=` operator.

<details><summary>Hints</summary>

The `+=` operator is equivalent to setting a value to itself plus the other value.

`a += b` <==> `a = a + b`

<details><summary>Code</summary>

```javascript
    function sum(nums) {
        let result = 0;

        for (let index = 0; index < nums.length; index += 1) {
            result = add(?, ?);
        }

        return result;
    }
```

</details>

</details>

#### It is refactored to replace for loop with `nums.forEach` ####

Now modify the `sum` method to remove the `for` loop, and use the [`Array.prototype.forEach`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/forEach) method provided on nums.

<details><summary>Hints</summary>

`values.forEach(fn)` will call the `fn` function on each item in the collection `values`. You can use an anonymous function in place of `fn` as well as a named function. The way the call would look if you used an anonymous function to log each value would be `values.forEach(function(value){ console.log(value); })`.

<details><summary>Code</summary>

```javascript
    function sum(nums) {
        let result = 0;

        ?.forEach(function(?) {
            result = add(result, ?);
        });

        return result;
    }
```

</details>

</details>

#### It is refactored to replace the function expression with an arrow function ####

Now modify the `sum` function to replace the function expression with an [arrow function expression](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/Arrow_functions).

<details><summary>Hints</summary>

An arrow function expression to log a value to the console looks like `value => console.log(value)`.

<details><summary>Code</summary>

```javascript
    function sum(nums) {
        let result = 0;

        ?.forEach(? => result = add(result, ?));

        return result;
    }
```

</details>

</details>