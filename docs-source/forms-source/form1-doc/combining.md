<!--bl
    (filemeta
        (title "Combining existing code to solve new problems")
    )
/bl-->
You will now take code you wrote and use it define more complex behaviors

### Magnitude Function ###

You will create a function called `magnitude` that will calculate the magnitude of all given numbers.

A magnitude is the length of a vector. You will explore computing the magnitude in the following tests

The magnitude of a vector is computed by:

1. Square all numbers in the array
2. Add all squared values together
3. Take the square root of the sum of squares

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

#### It returns the magnitude of a vector with only one number ####

Create a function called `magnitude` that returns the first item in an array that is given to it.

<details><summary>Hints</summary>

Can you just return a value from the array?

<details><summary>Code</summary>

**Example**

```javascript
    function magnitude(_something_) {
        return ?[0];
    }

    return {
        magnitude,
    };
```

</details>

</details>

#### It returns only positive numbers -- all magnitudes are positive ####

Modify the `magnitude` function that returns the positive value of the first item in an array that is given to it.

<details><summary>Hints</summary>

Add logic to ensure magnitude is always positive (Hint: squaring a negative number makes it positive)

A magnitude is the length of a vector. you will explore computing the magnitude in the following tests.

Currently the magnitude of a vector is computed by:

1. Square first value in the array
2. Take the square root of the sum of that value

<details><summary>Code</summary>

**Example**

```javascript
    function magnitude(_something_) {
        return squareRoot(square(?[0]));
    }

    return {
        magnitude,
    };
```

</details>

</details>

#### It should return the magnitude of a vector with two values ####

Modify the `magnitude` function so that it returns the magnitude of the first 2 items in an array given to it.

<details><summary>Hints</summary>

Add logic to perform proper magnitude calculation for length 1 and 2 vectors (A length 2 vector's magnitude can be computed by `squareRoot(vector[0]^2 + vector[1]^2))`

A magnitude is the length of a vector. You will explore computing the magnitude in the following tests.

Currently the magnitude of a vector is computed by:

1. Square the fist 2 values of the array
2. Add those values together
3. Take the square root of the sum of those values

<details><summary>Code</summary>

**Example**

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

</details>

#### It should return the magnitude of a vector with multiple values ####

Modify the `magnitude` function so that it returns the magnitude of all the values in the array.

<details><summary>Hints</summary>

Add logic to compute the magnitude of an arbitrary length vector. (The general magnitude formula is the square root of the sum of the squares. Can you apply functions you have already created?)

A magnitude is the length of a vector. You will explore computing the magnitude in the following tests.

The magnitude of a vector is computed by:

1. Square all numbers in the array
2. Add all squared values together
3. Take the square root of the sum of squares

<details><summary>Code</summary>

**Example**

```javascript
    function magnitude(_something_) {
        return squareRoot(sumOfSquares(?));
    }

    return {
        magnitude,
    };
```

</details>

</details>