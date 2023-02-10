<!--bl
    (filemeta
        (title "Looping and inequality comparison")
    )
/bl-->
Now it is time to use functions to examine looping and comparisons.

### \*\*getVectorsShorterThan\*\*

We will now create a function called `getVectorsShorterThan` that will take an array of arrays. It will compare each array based on its magnitude and return all arrays that have a magnitude smaller then the number provided.

the signature will be:

```javascript
getVectorsShorterThan(length, arrayOfVectors)
```

Such that `length` is the number for which we will compare magnitudes against, and `arrayOfVectors` is the array of arrays, where then inner arrays are to contain numbers.

#### returns an array of one vector when the vector is shorter than 5 -- arguments are: length, arrayOfVectors

Create a the function `getVectorsShorterThan` where the first parameter is `length` and the second parameter is `arrayOfVectors` that returns all vectors where the magnitude is less then 5. There is only one vector at this point and its length is less then 5.

<details><summary>Hints</summary>

**Hint**

```javascript
    function getVectorsShorterThan(length, arrayOfVectors) {
        return [?[0]];
    }

    return {
        getVectorsShorterThan,
    };
```

</details>

#### returns an empty array when all vectors are too long -- tests one vector

Modify the `getVectorsShorterThan` function so that it will return an empty array if the first vector has a magnitude longer then `length`.

<details><summary>Hints</summary>

**Hint 1 (let)**

```javascript
    function getVectorsShorterThan(length, arrayOfVectors) {
        let firstMagnitude = magnitude(?[0]);

        if (length <= firstMagnitude) {
            return ?;
        }

        return [?[0]];
    }

    return {
        getVectorsShorterThan,
    };
```

**Hint 2 (var)**

```javascript
    function getVectorsShorterThan(length, arrayOfVectors) {
        var firstMagnitude = magnitude(?[0]);

        if (length <= firstMagnitude) {
            return ?;
        }

        return [?[0]];
    }

    return {
        getVectorsShorterThan,
    };
```

</details>

#### returns an array of more than one vector when all are short enough

Modify the `getVectorsShorterThan` function so that it returns all vectors if the first one has a magnitude less then the length.

<details><summary>Hints</summary>

**Hint 1 (let)**

```javascript
    function getVectorsShorterThan(length, arrayOfVectors) {
        let firstMagnitude = magnitude(?[0]);

        if (length <= firstMagnitude) {
            return [];
        }

        return ?;
    }

    return {
        getVectorsShorterThan,
    };
```

**Hint 2 (var)**

```javascript
    function getVectorsShorterThan(length, arrayOfVectors) {
        var firstMagnitude = magnitude(?[0]);

        if (length <= firstMagnitude) {
            return [];
        }

        return ?;
    }

    return {
        getVectorsShorterThan,
    };
```

</details>

### returns only vectors which are not too long

Modify the `getVectorsShorterThan` function so that it now returns only those vectors with a magnitude less then the length.

<details><summary>Hints</summary>

**Hint 1 (let)**

```javascript
    function getVectorsShorterThan(length, arrayOfVectors) {
        let result = ?;

        for(let index = _number_; _number_ < _number_; index += 1) {
            let currentMagnitude = magnitude(?[index]);
            if (currentMagnitude < length) {
                result.push(buildVector(?[0]));
            }
        }

        return result;
    }

    return {
        getVectorsShorterThan,
    };
```

**Hint 2 (var)**

```javascript
   function getVectorsShorterThan(length, arrayOfVectors) {
        var result = ?;

        for(let index = _number_; _number_ < _number_; index += 1) {
            let currentMagnitude = magnitude(?[index]);
            if (currentMagnitude < length) {
                result.push(buildVector(?[0]));
            }
        }

        return result;
    }

    return {
        getVectorsShorterThan,
    };
```

</details>
