
<!-- GENERATED DOCUMENT! DO NOT EDIT! -->
# JS Learner Forms &mdash; Third Form #
#### The Explanation ####
You are going to continue refactoring code that was presented in the first and second form. Again, what you are given is one of several possible solutions to the previous exercises.


## Table Of Contents ##

- [Section 1: Greeter](#user-content-greeter)
- [Section 2: Sum](#user-content-sum)
- [Section 3: Build Vector](#user-content-build-vector)

## Greeter ##
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
    

## Sum ##
You will refactor the `sum` function.

### Refactoring steps

Here are the steps you will take to refactor the `sum` method so that you can change its shape without changing its behavior.

1. Replace forEach with reduce -- assign calculated sum to "result" variable
2. Remove wrapping function from reduce -- pass add function directly to reduce
3. Remove assignment and return calculated result directly to caller

_**KEEP THE TESTS PASSING!**_

#### It has been refactored to use `reduce` in the place of `forEach`, assigning the output to result

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

#### It has been refactored to pass the add function directly to reduce

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

#### It has been refactored to not assign the sum before returning it

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
    

## Build Vector ##
You will refactor the `buildVector` function.

### Getter properties and value immutability

You will learn how to add readonly properties to an object. You will be modifying the `Vector` object.

#### It should have access to read, but not write, vector.points

The `Vector` object's internal `points` array should be read only. This is accomplished by using a [property getter](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/get).

<details><summary>Hints</summary>

The way you add a getter to an object defined without the `class` keyword is by using the `Object.defineProperty`. Also, to ensure non-write ability, ensure you use the `slice` method on points before returning it.

```javascript
Object.defineProperty(obj, key, {
    get: () => value
});
```

<details><summary>Code</summary>

**Example**

```javascript
function Vector(points) {
        Object.defineProperty(this, 'points', {
            get: () => points.slice();
        });
    }
```

</details>

</details>
    

<!-- GENERATED DOCUMENT! DO NOT EDIT! -->
    