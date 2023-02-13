<!--bl
    (filemeta
        (title "Build Vector")
    )
/bl-->
You will refactor the `buildVector` function.

### Getter properties and value immutability

You will learn how to add readonly properties to an object. You will be modifying the `Vector` object.

#### It should have access to read, but not write, vector.points

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

#### It should not change `Vector` object when the original array is modified

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

#### It should not be possible to modify `vector.points`

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