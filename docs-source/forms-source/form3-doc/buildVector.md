<!--bl
    (filemeta
        (title "Build Vector")
    )
/bl-->
You will refactor the `buildVector` function.

### Getter properties and value immutability ###

You will learn how to add readonly properties to an object. You will be modifying the `Vector` object.

#### It should have access to read, but not write, vector.points ####

The `Vector` object's internal `points` array should be read only. This is accomplished by using a [property getter](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/get).

<details><summary>Hints</summary>

The way you add a getter to an object defined without the `class` keyword is by using the `Object.defineProperty`. Also, to ensure non-write ability.

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
            get: () => points;
        });
    }
```

</details>

</details>

#### It should not change `Vector` object when the original array is modified ####

Now you will modify the `Vector` function to return a copy of the array passed into it. This will isolate the `Vector` object from changes that happen outside of the object.

<details><summary>Hints</summary>

Maybe the `Array.prototype.slice` method might be useful.

<details><summary>Code</summary>

**Example**

```javascript
    function Vector(points) {
        let pts = ?.slice();
        Object.defineProperty(this, 'points', {
            get: () => pts;
        });
    }
```

</details>

</details>

#### It should not be possible to modify `vector.points` ####

Modify the `Vector` method to make the copy of the `points` array read only.

<details><summary>Hints</summary>

It might help to use the [Object.freeze](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/freeze) method.

<details><summary>Code</summary>

**Example**

```javascript
    function Vector(points) {
        let pts = Object.freeze(?.slice());
        Object.defineProperty(this, 'points', {
            get: () => pts;
        });
    }
```

</details>

</details>

#### Constructor type check ####

You will be modifying the `Vector` function to have better type checking. This will include type validation and throwing of errors.

#### It throws an error if constructor is called with a value which is not an array ####

Modify the `Vector` function to throw an error if the `points` parameter is not a type of an array.

<details><summary>Hints</summary>

To test that something is an array or not, you cannot use the `typeOf` function as this function will return `"Object"`. What you need to do is check the constructor property to see if the constructor is the `Array` function. Also make sure you `throw` a new `Error` object.

<details><summary>Code</summary>

**Example**

```javascript
    function Vector(points) {
        if (?.constructor !== Array) {
            throw new Error('Expected an array');
        }

        let pts = points.slice();
        Object.defineProperty(this, 'points', {
            get: () => pts;
        });
    }
```

</details>

</details>

#### It throws an error if constructor is called with an array of one value which is not a number ####

Modify the `Vector` function to check the type of the first element in the array to ensure it is a number. Then `throw` a new `Error` if it isn't.

<details><summary>Hints</summary>

You might be able to use the `isTypeOf` function here.

<details><summary>Code</summary>

**Example**

```javascript
    function Vector(points) {
        if (points.constructor !== Array) {
            throw new Error('Expected an array');
        }

        if (!isTypeOf(?, ?[0])) {
            throw new Error('Expected all values to be numbers');
        }

        let pts = points.slice();
        Object.defineProperty(this, 'points', {
            get: () => pts;
        });
    }
```

</details>

</details>

#### It throws an error if constructor is called with an array which contains values other than numbers ####

Modify the `Vector` function to check the type of all elements in the array to ensure that they are all numbers. Then `throw` a new `Error` if any of them are not.

<details><summary>Hints</summary>

You might be able to use the `Array.prototype.filter` method or the `Array.prototype.reduce` method returning a Boolean. Both of these can make use of the `isTypeOf` function.

<details><summary>Code</summary>

**Example 1 (`filter`)**

```javascript
    function Vector(points) {
        if (points.constructor !== Array) {
            throw new Error('Expected an array');
        }

        let badValues = ?.filter(? => !isTypeOf(?, ?));
        if (0 < badValues.length) {
            throw new Error('Expected all values to be numbers');
        }

        let pts = points.slice();
        Object.defineProperty(this, 'points', {
            get: () => pts;
        });
    }
```

**Example 2 (`reduce`)**

```javascript
    function Vector(points) {
        if (?.constructor !== Array) {
            throw new Error('Expected an array');
        }

        let containsBadValues = ?.reduce(previous, current) => 
            previous || (typeOf (current) !== 'number');
        if (containsBadValues) {
            throw new Error('Expected all values to be numbers');
        }

        let pts = points.slice();
        Object.defineProperty(this, 'points', {
            get: () => pts;
        });
    }
```

</details>

</details>

#### Refactoring steps ####

Now you will modify the `Vector` method such that you will change the shape of it without changing the behavior.

1. You will create methods that handle the type checking.
2. You will then utilize these methods instead of having the error checking embedded in the `Vector` constructor.

##### It has a function called `assertArray` with parameter `values` #####

Create a function called `assertArray` which will look at the type of the parameter `values` and throw an exception if `values` is not an array.

<details><summary>Hints</summary>

You already have the code, you will just add it into a new function.

<details><summary>Code</summary>

**Example**

```javascript
    function assertArray(values) {
        if (?.constructor !== Array) {
            throw new Error('Expected an array');
        }
    }
```

</details>

</details>

##### It has a function called `assertArrayOfType` with a parameters `type` and `values` #####

Now create a function called `assertArrayOfType` that compares all items in `values` with the given `type` and throws an exception if any of the values are not the correct type.

<details><summary>Hints</summary>

Again you already have this code. You just need to add it in the new function.

<details><summary>Code</summary>

**Example 1 (`filter`)**

```javascript
    function assertArrayOfType(type, values) {
        let badValues = ?.filter(? => !isTypeOf(?, ?));
        if (0 < badValues.length) {
            throw new Error('Expected all values to be numbers');
        }
    }
```

**Example 2 (`reduce`)**

```javascript
    function assertArrayOfType(type, values) {
        let containsBadValues = ?.reduce(previous, current) => 
            previous || !isTypeOf(?, ?);
        if (containsBadValues) {
            throw new Error('Expected all values to be numbers');
        }
    }
```

</details>

</details>

##### It has a call in `assertArrayOfType` function to `assertArray` with `values` as an argument #####

Modify the `assertArrayOfType` function to call the `assertArray` function before it checks the values in the array.

<details><summary>Hints</summary>

**Example 1 (`filter`)**

```javascript
    function assertArrayOfType(type, values) {
        assertArray(?);

        let badValues = values.filter(value => !isTypeOf(type, value));
        if (0 < badValues.length) {
            throw new Error('Expected all values to be numbers');
        }
    }
```

**Example 2 (`reduce`)**

```javascript
    function assertArrayOfType(type, values) {
        assertArray(?);

        let containsBadValues = values.reduce(previous, current) => previous || !isTypeOf(type, value);
        if (containsBadValues) {
            throw new Error('Expected all values to be numbers');
        }
    }
```

</details>

##### It has a call in `Vector` constructor to `assertArrayOfType` #####

Now modify the `Vector` function to call the `assertArrayOfType` instead of the logic to check the type.

<details><summary>Hints</summary>

You will delete all the type checking code and replace it with the call to `assertArrayOfType`.

<details><summary>Code</summary>

**Example**

```javascript
    function Vector(points) {
        assertArrayOfType(?);

        let pts = points.slice();
        Object.defineProperty(this, 'points', {
            get: () => pts;
        });
    }
```

</details>

</details>