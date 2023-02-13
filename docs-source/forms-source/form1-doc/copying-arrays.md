<!--bl
    (filemeta
        (title "Copying Arrays")
        (subtitle "Using Array.slice")
    )
/bl-->
You are going to use functions to explore the `Array.prototype.slice` method.

### \*\*buildVector function\*\*

You will now create a function called `buildVector` that returns a copy of the array as it was passed.

> A vector is an ordered set of points which describes a "directed line segment," in other words, a vector is a line segment with an arrow

#### It returns a vector (array) containing the same numbers as the original -- try returning the array you get in your function

Create a function called `buildVector` that returns the same array passed to it.

<details><summary>Hints</summary>

Add buildVector function (Would it be possible to just return something?)

<details><summary>Code</summary>

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

</details>

#### It returns a copy of the original vector

Modify the `buildVector` function so that it returns a copy of the array passed to it. (note: use the `slice` method on array.)

<details><summary>Hints</summary>

Add logic to return a copy of vector array (Slice will create a new array just like the old one...)

<details><summary>Code</summary>

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

</details>
