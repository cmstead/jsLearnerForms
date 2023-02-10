<!--bl
    (filemeta
        (title "Variables and Operations")
    )
/bl-->
We will explore the creation and use of variables.

### declaration and initialization

Here we will declare and initialize variables.

#### should have a variable called "a"

Create a variable at the top of the block called "a". You will need to use `let` or `var`.

<details><summary>Hints</summary>

Be sure you use "var" or "let" to declare your variable

<details><summary>Code</summary>

**Example 1**

```javascript
const jsforms = (function () {
    'use strict';
    let ?;

    return {
    };
})();
```

**Example 2**

```javascript
const jsforms = (function () {
    'use strict';
    var ?;

    return {
    };
})();
```

</details>

</details>

#### should initialize "a" with the value 5

Set the initial value of a to 5.

<details><summary>Hints</summary>

Initialize a variable with equals: `var a = ...`

<details><summary>Code</summary>

**Example 1**

```javascript
const jsforms = (function () {
    'use strict';
    let a = ?;

    return {
    };
})();
```

**Example 2**

```javascript
const jsforms = (function () {
    'use strict';
    var a = ?;

    return {
    };
})();
```

</details>

</details>

### assignment and operators

Now that we have a variable we will assign it a value different then what it was initialized with.

#### should assign the sum of 3 and 7 (3 + 7) to "a"

Now assign variable `a` with the value of `3 + 7`.

<details><summary>Hints</summary>

Add two numbers using the plus (+) operator

<details><summary>Code</summary>

**Example 1**

```javascript
    let a = 5;
    a = ? + ?;

    return {
    };
```

**Example 2**

```javascript
    var a = 5;
    a = ? + ?;

    return {
    };
```

</details>

</details>

#### should have a variable "b" initialized to "Hello, World!"

Create a variable called `b` and initialize it with the value `"Hello, World!"

<details><summary>Hints</summary>

Initialize a variable with equals: `var b = ...`

<details><summary>Code</summary>

**Example 1**

```javascript
    let b = ?;

    return {
    };
```

**Example 2**

```javascript
    var b = ?;

    return {
    };
```

</details>

</details>

### method call

We will make a call to a method on an object.

#### should log variable "b" to the console

Use the `console.log` method to log the value contained in variable `b` to the console.

<details><summary>Hints</summary>

Console.log might be just the ticket...

<details><summary>Code</summary>

**Example 1**

```javascript
    console.log(?);

    return {
    };
```

**Example 2**

```javascript
    console.log(?);

    return {
    };
```

</details>

</details>

### exposing values

We well now expose values to the outside world.

#### should expose variable "b" to be read outside of the module

Expose the variable `b` to the outside world, by adding it the the object being exported.

<details><summary>Hints</summary>

Find `return {};` add a "b" -> `return {b};`

<details><summary>Code</summary>

**Example**

```javascript
    return {
        ?,
    };
```

</details>

</details>