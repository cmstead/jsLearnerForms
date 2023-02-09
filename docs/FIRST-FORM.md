
<!-- GENERATED DOCUMENT! DO NOT EDIT! -->
# JS Learner Forms &mdash; First Form #
#### The Explanation ####


## Table Of Contents ##

- [Section 1: declaration and initialization](#user-content-declaration-and-initialization)
- [Section 2: function creation](#user-content-function-creation)

## declaration and initialization ##
### should have a variable called "a"

Create a variable at the top of the block called "a". You will need to use `let` or `var`.

<details><summary>Hints</summary>

**Hint 1**

```javascript
const jsforms = (function () {
    'use strict';
    let ?;

    return {
    };
})();
```

**Hint 2**

```javascript
const jsforms = (function () {
    'use strict';
    var ?;

    return {
    };
})();
```

</details>

### should initialize "a" with the value 5

Set the initial value of a to 5.

<details><summary>Hints</summary>

**Hint 1**

```javascript
const jsforms = (function () {
    'use strict';
    let a = ?;

    return {
    };
})();
```

**Hint 2**

```javascript
const jsforms = (function () {
    'use strict';
    var a = ?;

    return {
    };
})();
```

</details>
    

## function creation ##
#### [function declaration, return statement] ####
Time to create functions and have them return a value.

### \*\*greeter function\*\*

##### should say "Hello!" by default

Write a function that returns the value "Hello!". (note: don't forget the "!")

<details><summary>Hints</summary>

**Hint**

```javascript
    function greet() {
        return _string_;
    }

    return {
        greet,
    };
```

</details>

#### conditional logic [if/else]

##### should say "Salutations!" when Salutations is passed

Modify the greet function to take a greeting and return the greeting if it was passed.

<details><summary>Hints</summary>

**Hint**

```javascript
    function greet (greeting) {
        if (_something_ === undefined) {
            return _string_;
        } else {
            return _something_ + '!';
        }
    }

    return {
        greet,
    };
```

</details>

### function calls and mathematical operations [Math library]

#### \*\*square function\*\*

Create a function that takes a number and returns its square.

##### should square 1

The function called `square` will be passed 1 and should return 1.

<details><summary>Hints</summary>

**Hint**

```javascript
    function square(_something_) {
        return ?;
    }

    return {
        square,
    };
```

</details>

##### should square 3

Modify the `square` function such that it returns the square of the value passed in.

<details><summary>Hints</summary>

**Hint**

```javascript
    function square(_something_) {
        return Math.pow(_something_, 2);
    }

    return {
        square,
    };
```

</details>

#### \*\*squareRoot function\*\*

Create a function that takes a number and returns the square root of that number. (note: use the Math library).

##### should take the square root of 1

Create a function called `squareRoot` that will be passed 1 and return 1.

<details><summary>Hints</summary>

**Hint**

```javascript
    function squareRoot(_something_) {
        return 1;
    }

    return {
        squareRoot,
    };
```

</details>

##### should take the square root of 4

Modify the `squareRoot` function to return the square root of the value passed.

<details><summary>Hints</summary>

**Hint**

```javascript
    function squareRoot(_something_) {
        return Math.sqrt(_something_);
    }

    return {
        squareRoot,
    };
```

</details>

    


<!-- variables and operations -->
<!-- 'declarationInitialization -->
<!-- GENERATED DOCUMENT! DO NOT EDIT! -->
    