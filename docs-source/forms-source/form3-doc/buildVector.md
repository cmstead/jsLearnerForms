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

The way you add a getter to an object defined without the `class` keyword is by using the `Object.defineProperty`. Also, to ensure non-write ability, ensure you use the `slice` method on points before returning it.

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
            get: () => points.slice();
        });
    }
```

</details>

</details>