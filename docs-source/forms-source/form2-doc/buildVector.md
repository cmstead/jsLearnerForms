<!--bl
    (filemeta
        (title "Build Vector")
    )
/bl-->
Now we will refactor the `buildVector` function changing its shape.

### Refactoring steps

These are the steps we will use to change the shape of the `buildVector` function without changing its behavior.

#### It has a refactoring in magnitude function to replace vector value with `vector.valueOf()`

Now modify the `magnitude` function by not passing the vector directly but passing the result of the `valueOf` method on vector. Currently the `valueOf` function just returns the original array. However this will make space for later changes that will happen to the `buildVector` function.

<details><summary>Hints</summary>

Just add a `.valueOf()` call after the vector in the call to `sumOfSquares`.

<details><summary>Code</summary>

```javascript
    function magnitude(vector) {
        let squaredMagnitude = sumOfSquares(?.valueOf());
        return squareRoot(squaredMagnitude);
    }
```

</details>

</details>

### It contains a constructor for an object called Vector

Now we will create a constructor for an object called `Vector`. We are not yet exporting that constructor.

<details><summary>Code</summary>

</details>