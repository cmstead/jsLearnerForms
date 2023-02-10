
<!-- GENERATED DOCUMENT! DO NOT EDIT! -->
# JS Learner Forms &mdash; Second Form #
#### The Explanation ####
We will be working with solutions to the problems presented in the [First Form](./FIRST-FORM.md) and refactoring these provided solutions into different shapes.


## Table Of Contents ##

- [Section 1: Greeter](#user-content-greeter)
- [Section 2: Sum](#user-content-sum)

## Greeter ##
Let us change the `greet` function.

### Refactoring steps

Lets look at the steps in refactoring the `greet` function.

#### It is refactored to remove the unnecessary else

Modify the `greet` function to remove the else statement.

<details><summary>Hints</summary>

Because of the `return greeting + '!';` in the first part of the `if` statement you can safely delete `else` statement and the curly brackets (`{`, `}`).

<details><summary>Code</summary>

**Example**

```javascript
    function greet(greeting) {
        if (greeting === undefined) {
            return ?;
        }

        return greeting + '!';
    }
```

</details>

</details>

#### It is refactored to remove if and replace with a ternary expression

Because both paths of the function return a value, you can change the shape of the code from an `if` `return` to a [ternary operator](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Conditional_Operator).

<details><summary>Hints</summary>

A ternary operator has the following form

```javascript
(conditional_expression) ? (truthy_result) : (falsy_result) // parenthesis are optional
```

<details><summary>Code</summary>

```javascript
    function greet(greeting) {
        return greeting === undefined ? _something_ : _other_thing_;
    }
```

</details>

</details>

#### It is refactored to use typeof comparison to "string"

We will now modify the `greet` function to remove the `greeting === undefined` comparison and instead use the [typeof](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/typeof) operator to prove whether or not what was passed in was a string.

<details><summary>Hints</summary>

The `typeof` operator returns a string with the name of the type. Maybe you can use it in the conditional part of the ternary operator.

<details><summary>Code</summary>

**Example**

```javascript
    function greet(greeting) {
        return typeof(_what_) === 'string' ? _something_ : _other_thing_;
    }
```

</details>

</details>

    

## Sum ##
We are going to refactor and change the shape of the `sum` method.

### Refactoring steps

These are the steps we will use to change the shape of the `sum` method, thereby changing how it does its work, while not changing the work it does.

#### It has an add function

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

#### It is refactored to replace += with a call to the add function

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

#### It is refactored to replace for loop with `nums.forEach`

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

#### It is refactored to replace the function expression with an arrow function

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
    

<!-- GENERATED DOCUMENT! DO NOT EDIT! -->
    