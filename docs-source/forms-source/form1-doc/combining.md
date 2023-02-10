<!--bl
    (filemeta
        (title "Combining existing code to solve new problems")
    )
/bl-->
We will now take code we wrote and use it define more complex behaviors

### \*\*magnitude function\*\*

We will create a function called `magnitude` that will calculate the magnitude of all given numbers. Magnitude is calculated as the:

> Square root of the sum of squares for all given numbers.

such that given:

> a = 1
> b = 2
> c = 2

the magnitude is:

> √d = √(a² + b² + c²)

or

> √d = √(1² + 2² + 2²)
>
> √d = √(1 + 4 + 4)
>
> √d = √9
>
> d = 3

#### returns the magnitude of a vector with only one number

Create a function called `magnitude` that returns the first item in an array that is given to it.

<details><summary>Hints</summary>

**Hint**

```javascript
    function magnitude(_something_) {
        return ?[0];
    }

    return {
        magnitude,
    };
```

</details>

#### returns only positive numbers -- all magnitudes are positive

Modify the `magnitude` function that returns the positive value of the first item in an array that is given to it.

<details><summary>Hints</summary>

**Hint**

```javascript
    function magnitude(_something_) {
        return squareRoot(square(?[0]));
    }

    return {
        magnitude,
    };
```

</details>

#### should return the magnitude of a vector with two values

Modify the `magnitude` function so that it returns the magnitude of the first 2 items in an array given to it.

<details><summary>Hints</summary>

**Hint**

```javascript
    function magnitude(_something_) {
        if (?.length === 2){
            return squareRoot(square(?[0]) + square(?[1]));
        } else {
            return squareRoot(square(?[0]));
        }
    }

    return {
        magnitude,
    };
```

</details>

#### should return the magnitude of a vector with multiple values

Modify the `magnitude` function so that it returns the magnitude of all the values in the array.

<details><summary></summary>

**Hint**

```javascript
    function magnitude(_something_) {
        return squareRoot(sumOfSquares(?));
    }

    return {
        magnitude,
    };
```

</details>
