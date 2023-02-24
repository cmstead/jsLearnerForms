<!--bl
    (filemeta
        (title "Greeter")
    )
/bl-->
You are going to start by refactoring the `greet` function.

### Refactoring steps

Here are the steps you will take to refactor the `greet` function to ensure you change the shape without changing the behavior.

1. Create function called `isTypeOf`
2. Replace `typeof` check in greet function with `isTypeOf`
3. Create function called `eitherOnType`
4. Replace ternary in greet function with `eitherOnType`

#### It has a function called `isTypeOf` which takes parameters `type` and `value`

Create a function called `isTypeOf` with the two parameters of `type` and `value`. You are _not_ exporting this function. This function checks the type of the `value` and returns a Boolean true if the `value` is of the given `type`.

<details><summary>Hints</summary>

This will use `typeOf` to do the check.

<details><summary>Code</summary>

**Example**

```javascript
    function isTypeOf(?, ?) {
        return typeOf(?) === ?;
    }
```

</details>

</details>

#### It calls isTypeOf from greet

Now you will modify the `greet` function to use the `isTypeOf` function instead of the `typeOf` function.

<details><summary>Hints</summary>

You will need to replace not only the call to `typeOf` but also the comparison to the result.

<details><summary>Code</summary>

**Example**

```javascript
    function greet(greeting) {
        return isTypeOf(?, ?) ? greeting + '!' : 'Hello!';
    }
```

</details>

</details>

#### It has a function called `eitherOnType` with parameters `type`, `testValue`, `defaultValue` -- return `testValue` if it matches `type`, otherwise return `defaultValue`

Create a the function `eitherOnType`, you will _not_ export this function. The `eitherOnType` function takes two parameters `testValue` and `type`. It then compares the `testValue`'s type. If the `testValue` has the same type as the one given, it returns the `testValue`. If the `testValue` has a different type then it returns the `defaultValue`.

<details><summary>Hints</summary>

You will want to use the new `isTypeOf` function.

<details><summary>Code</summary>

**Example 1**

```javascript
    function eitherOnType(?, ?) {
        if (isTypeOf(?, ?)) {
            return testValue;
        }

        return defaultValue;
    }
```

**Example 2**

```javascript
    function eitherOnType(?, ?) {
        return isTypeOf(?, ?) ? testValue : defaultValue;
    }
```

</details>

</details>

#### It calls eitherOnType from greet

Modify the `greet` function so that you replace the trinary operator with the `eitherOnType` function.

<details><summary>Hints</summary>

The trinary operator has effectively moved to the `eitherOnType` method. The one **gotcha** to worry about is the pesty `!`. If you look closely, you can see that it is added to both sides of the trinary. Maybe you can add it instead to the result of the `eitherOnType` function.

<details><summary>Code</summary>

**Example**

```javascript
    function greet(greeting) {
        return eitherOnType(?, ?, ?) + '!';
    }
```

</details>

</details>