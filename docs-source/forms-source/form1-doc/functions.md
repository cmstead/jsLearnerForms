<!--bl
    (filemeta
        (title "Function Creation")
        (subtitle "[function declaration, return statement]")
    )
/bl-->
Time to create functions and have them return a value.

### \*\*greeter function\*\*

##### It should say "Hello!" by default

Write a function called `greet` that returns the value "Hello!". (note: don't forget the "!")

<details><summary>Hints</summary>

Functions start with the keyword `function` followed by the name of the function and then a set of parenthesis `()`. All the logic of a function is contained an open curly brace `{` and a closed curly brace `}`. What the function returns follows the key word `return`.

<details><summary>Code</summary>

**Example**

```javascript
    function greet() {
        return _string_;
    }

    return {
        greet,
    };
```

</details>

</details>

#### conditional logic [if/else]

##### It should say "Salutations!" when Salutations is passed

Modify the greet function to take a greeting and return the greeting if it was passed.

<details><summary>Hints</summary>

Add condition to greet to handle custom greeting case.
(Try using an "if/else" structure. "If" is a control structure)

<details><summary>Code</summary>

**Example**

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

</details>

### function calls and mathematical operations [Math library]

#### \*\*square function\*\*

Create a function that takes a number and returns its square.

##### It should square 1

The function called `square` will be passed 1 and should return 1.

<details><summary>Hints</summary>

Add square function that returns a simple value rather then worrying about actually squaring the a value.

<details><summary>Code</summary>

**Example**

```javascript
    function square(_something_) { 
        return ?; 
    }

    return {
        square,
    };
```

</details>

</details>

##### It should square 3

Modify the `square` function such that it returns the square of the value passed in.

<details><summary>Hints</summary>

1. Add logic to correctly square a number (remember n^2 <=> n * n)
2. Move to library function to perform square operation
   1. Math is a built in library...

<details><summary>Code</summary>

**Example 1**

```javascript
    function square(_something_) { 
        return ? * ?; 
    }

    return {
        square,
    };
```

**Example 2**

```javascript
    function square(_something_) { 
        return Math.pow(?, 2); 
    }

    return {
        square,
    };
```

</details>

</details>

#### \*\*squareRoot function\*\*

Create a function that takes a number and returns the square root of that number. (note: use the Math library).

##### It should take the square root of 1

Create a function called `squareRoot` that will be passed 1 and return 1.

<details><summary>Hints</summary>

Create a function that returns a simple value rather then worrying about actually performing a square root of the value.

<details><summary>Code</summary>

**Example**

```javascript
    function squareRoot(_something_) { 
        return ?; 
    }

    return {
        squareRoot,
    };
```

</details>

</details>

##### It should take the square root of 4

Modify the `squareRoot` function to return the square root of the value passed.

<details><summary>Hints</summary>

Add logic to properly take square root
(There is more than one way to solve this in one line, maybe with Math)

<details><summary>Code</summary>

**Example**

```javascript
    function squareRoot(_something_) { 
        return Math.sqrt(_something_); 
    }

    return {
        squareRoot,
    };
```

</details>

</details>