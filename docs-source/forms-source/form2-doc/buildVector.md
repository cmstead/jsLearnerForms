<!--bl
    (filemeta
        (title "Build Vector")
    )
/bl-->
Now you will refactor the `buildVector` function changing its shape.

### Refactoring steps ###

These are the steps you will use to change the shape of the `buildVector` function without changing its behavior.

#### It has a refactoring in magnitude function to replace vector value with `vector.valueOf()` ####

Now modify the `magnitude` function by not passing the vector directly but passing the result of the `valueOf` method on vector. Currently the `valueOf` function just returns the original array. However this will make space for later changes that will happen to the `buildVector` function.

<details><summary>Hints</summary>

Just add a `.valueOf()` call after the vector in the call to `sumOfSquares`.

<details><summary>Code</summary>

**Example**

```javascript
    function magnitude(vector) {
        let squaredMagnitude = sumOfSquares(?.valueOf());
        return squareRoot(squaredMagnitude);
    }
```

</details>

</details>

#### It contains a constructor for an object called Vector ####

Now you will create a constructor for an object called `Vector`. You are not yet exporting that constructor. This constructor can just be an empty function.

<details><summary>Hints</summary>

You will not be using JavaScripts class objects. Instead work from the original way to build a constructor as a specially named function.

<details><summary>Code</summary>

**Example**

```javascript
    Function Vector() {
    }
```

</details>

</details>

#### It accepts a parameter `points` into Vector constructor ####

Modify the `Vector` function to take a parameter called points. There is no need to do anything with this parameter yet.

<details><summary>Hints</summary>

The `Vector` constructor is just a function. All functions can have a name representing a parameter between the parenthesis.

<details><summary>Code</summary>

**Example**

```javascript
    Function Vector(?) {
    }
```

</details>

</details>

#### It assigns `points` variable to `this.points` in `Vector` constructor ####

Modify the `Vector` constructor to save the `points` parameter.

<details><summary>Hints</summary>

Remember in JavaScript, you do not have to predefine member variables before you set them.

<details><summary>Code</summary>

**Example**

```javascript
    Function Vector(?) {
        this.? = ?;
    }
```

</details>

</details>

#### It overrides the `valueOf` function on the Vector prototype ####

Now you will need to override the internal `valueOf` function on `Vector`. Remember that `valueOf` comes from object and by default just returns the object. You will now change the behavior of this function to return a copy of its internal points.

<details><summary>Hints</summary>

The way to override an internal function in JavaScript without the use of the `class` keyword is to change its prototype. So if you had an `Animal` object prototype for a `Human` constructor you could override the `say` method on `Human` like so: `Human.prototype.say = function () {}`.

<details><summary>Code</summary>

**Example**

```javascript
    Vector.prototype.? = function () {
        return this.points.slice();
    };
```

</details>

</details>

#### It overrides the `toString` function on the `Vector` prototype ####

Now you will need to override the internal `toString` function on `Vector`. Remember what you learned above.

<details><summary>Hints</summary>

The way to override an internal function in JavaScript without the use of the `class` keyword is to change its prototype. So if you had an `Animal` object prototype for a `Human` constructor you could override the `say` method on `Human` like so: `Human.prototype.say = function () {}`.

<details><summary>Code</summary>

**Example**

```javascript
    Vector.prototype.? = function () {
    };
```

</details>

</details>

#### It should return a vector where `toString` returns a vector string ####

You will modify the overridden `toString` method on `Vector` such that:

> given `new Vector([1, 2, 3]);`
>
> the `toString` method should return
> 
> <1,2,3>

<details><summary>Hints</summary>

You will need to use the internal `points` value.

You can use the [`Array.prototype.forEach`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/forEach) method on array to do this but the [`Array.prototype.reduce`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/Reduce) method will be easier.

<details><summary>Code</summary>

**Example 1 (`forEach`)**

```javascript
    Vector.prototype.toString = function () {
        let result = "";

        this.?.forEach(point => {
            if (0 < result.length) {
                result += ',';
            }

            result += point;
        });

        return result;
    };
```

**Example 2 (`reduce`)**

```javascript
    Vector.prototype.toString = function() {
        return this.?.reduce((previous, current) => previous + ',' + current);
    }
```

</details>

</details>

#### It returns a new Vector object instead of an array ####

You will now modify the `buildVector` function to return a new `Vector` instead of an array of values.

<details><summary>Hints</summary>

Remember to use the `new` keyword in your return value.

<details><summary>Code</summary>

**Example**

```javascript
    function buildVector(points) {
        return new ?(points);
    }
```

</details>

</details>