<!--bl
    (filemeta
        (title "Copying Arrays")
        (subtitle "Using Array.slice")
    )
/bl-->
We are going to use functions to explore the `Array.prototype.slice` method.

### \*\*buildVector function\*\*

We will now create a function called `buildVector` that returns a copy of the array as it was passed.

#### returns a vector (array) containing the same numbers as the original -- try returning the array you get in your function

Create a function called `buildVector` that returns the same array passed to it.

<details><summary>Hints</summary>

**Hint**

```javascript
    function buildVector (values) {
        return ?;
    }

    return {
        buildVector,
    };
```

</details>

#### returns a copy of the original vector

Modify the `buildVector` function so that it returns a copy of the array passed to it. (note: use the `slice` method on array.)

<details><summary>Hints</summary>

**Hint**

```javascript
    function buildVector (values) {
        let vector = _array_.slice(_number_);
        return vector;
    }

    return {
        buildVector,
    };
```

</details>