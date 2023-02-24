<!--bl
    (filemeta
        (title "Get Vectors Shorter Than")
    )
/bl-->

You will now modify the `getVectorsShorterThan` function changing its shape without changing its behavior.

### Refactoring steps ###

This is how you will modify the `getVectorsShorterThan` function such that it ensures you do not change its external behavior.

1. Create new function `isMagnitudeShorterThanLength` which checks if the magnitude of a vector is shorter than the vector length provided
2. Replace for loop with `vectors.filter(isMagnitudeShorterThanLength)` and assign output to results
3. Return results directly

_**KEEP THE TESTS PASSING!**_

#### It has a function called `isMagnitudeShorterThanLength` ####

Create a function called `isMagnitudeShorterThanLength`. This can be an empty function right now. You are also _not_ exporting that function.

<details><summary>Hints</summary>

Create a function that calculates the magnitude and then just return the value of the comparison.

<details><summary>Code</summary>

**Example**

```javascript
    function isMagnitudeShorterThanLength() {
    }
```

</details>

</details>

#### It has `vector` and `length` as parameters of `isMagnitudeShorterThanLength` ####

You will modify the `isMagnitudeShorterThanLength` function to take the two parameters `vector` and `length`. You will also modify the function to return a [Boolean](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Boolean) `true` if the vector's magnitude is less then the provided length and false if it is equal to or greater.

<details><summary>Hints</summary>

You will need to calculate the magnitude (there is a function to help with this) and then return the comparison to the length.

<details><summary>Code</summary>

**Example**

```javascript
    function isMagnitudeShorterThanLength(?, ?) {
        let currentMagnitude = magnitude(?);
        return currentMagnitude < ?;
    }
```

</details>

</details>

#### It is refactored to use `vectors.filter()` instead of for loop ####

You will modify the `getVectorsShorterThan` function to use the internal [`Array.prototype.filter`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/filter) instead of recreating the functionality in a for loop.

<details><summary>Hints</summary>

The filter method takes  a function as a parameter that returns a Boolean. If that boolean returns true, then that item is added to the return value. If the function returns false then the value is not added to the return set.

<details><summary>Code</summary>

**Example**

```javascript
    function getVectorsShorterThan(length, vectors) {
        let result = ?.filter(isMagnitudeShorterThanLength);

        return result;
    }
```

</details>

</details>

#### It does not assign filter to results, it just returns directly ####

Now modify the `getVectorsShorterThan` not to use the unnecessary variable `result`.

<details><summary>Hint</summary>

Can you just return the result of the `filter` method?

<details><summary>Code</summary>

**Example**

```javascript
    function getVectorsShorterThan(length, vectors) {
        return ?.filter(isMagnitudeShorterThanLength);
    }
```

</details>

</details>