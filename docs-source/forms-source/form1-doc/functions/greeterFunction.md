<!--bl
    (filemeta
        (title "Greeter Function")
    )
/bl-->

#### It should say `"Hello!"` by default ####

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

#### Conditional Logic [If / Else] ####

##### It should say `"Salutations!"` when salutations is passed #####

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