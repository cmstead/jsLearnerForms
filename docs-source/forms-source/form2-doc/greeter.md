<!--bl
    (filemeta
        (title "Greeter")
    )
/bl-->
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

**Example**

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
