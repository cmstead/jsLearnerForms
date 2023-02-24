
<!-- GENERATED DOCUMENT! DO NOT EDIT! -->
# JS Learner Forms &mdash; Test Dummy Form #
#### The Explanation ####

Things start changing here. Up to this point you were concerned with altering code to make tests pass. The tests guided you where to go. Now you will be given functioning code, and be expected to write the tests to verify it is functioning.

You can also look at [JS Learner Forms documentation](../FORMS.md) for other forms.

You will be working in the [test/4_test-dummy-form.test.js](../test/4_test-dummy-form.test.js) file.


## Table Of Contents ##

- [Section 1: Why would I write tests for code I know works?](#user-content-why-would-i-write-tests-for-code-i-know-works?)
- [Section 2: A word about hints](#user-content-a-word-about-hints)
- [Section 3: The application under test](#user-content-the-application-under-test)
- [Section 4: Point of Sale Data Utilities](#user-content-point-of-sale-data-utilities)

## Why would I write tests for code I know works? ##

There are two main reasons:


### Understanding ###

By writing tests for this code, you will gain understanding of _how_ to write tests. This will show you one of the common frameworks and enough that you will be able to find your way around other common frameworks.
    

### Regression ###

The biggest reason to test a known working code base is to ensure that it stays working. You will see by testing this code base that coming into a code base you do not understand and gaining that understanding is hard work. Having tests around that code ensures that someone unfamiliar with, or has been away to long from, the code base does not accidently break existing functionality.
    
    

## A word about hints ##

This section is doable without the hints. it is _hard_ but doable. However, the only hints that make sense will make the exercises really easy. Try first without them, but do not let yourself become too stuck.
    

## The application under test ##

The application under test is a Point of Sale reporting utility. It will report on all sales or all returns.

### Point Of Sale Data Utility Factory Builder

File: [/4_test-dummy-form/pos-transaction-services/pointOfSaleDataUtilsFactory.js](../jsforms-source/4_test-dummy-form/pos-transaction-services/pointOfSaleDataUtilsFactory.js)

This will build the utility that calculates counts for items based on their transaction status.

This function takes a single parameter `transactionStatuses` that allow the status to be configured. The `transactionStatuses` object is expected to have two properties

`Sale` which is a constant number that maps to transactions caused by the sale of product. For our tests we will configure this to have the value `1`.

and

`Return` which is a constant number that maps to transactions caused by the return of product. For our tests we will configure this to have the value `2`.

These values are already set up for you.

This function returns an object with two methods.

#### `getProductCountBySale`

This method takes the parameter `transactionRecords` which is an array of transaction records. Each record is expected to have the following shape:

```javascript
{
    productId, // integer number unique to the product
    transactionStatus, // integer number representing Sale or Return
    quantity // integer number representing the total number of the item sold or returned
}
```

It will return an object who's properties will be the productIds of all items that were sold in the `transactionRecords`. Those properties will hold the total of all quantities sold.

**Exaple**

Given

```javascript
const transactionRecord1 = {
    productId: 3,
    transactionStatus: 1
    quantity 2
};

const transactionRecord2 = {
    productId: 3,
    transactionStatus: 1
    quantity 3
}

const transactionRecord3 = {
    productId: 6,
    transactionStatus: 1
    quantity 4
}
```

The result should look like the following:

```javascript
{
    3: 5,
    6: 4
}
```

Because there is a total of 5 items sold of Product ID 3, and only 4 items sold of Product ID 6.

### `getProductCountByReturn`

This method takes the parameter `transactionRecords` which is an array of transaction records. Each record is expected to have the following shape:

```javascript
{
    productId, // integer number unique to the product
    transactionStatus, // integer number representing Sale or Return
    quantity // integer number representing the total number of the item sold or returned
}
```

It will return an object who's properties will be the productIds of all items that were returned in the `transactionRecords`. Those properties will hold the total of all quantities sold.

**Exaple**

Given

```javascript
const transactionRecord1 = {
    productId: 3,
    transactionStatus: 2
    quantity 1
};

const transactionRecord2 = {
    productId: 3,
    transactionStatus: 2
    quantity 2
}

const transactionRecord3 = {
    productId: 6,
    transactionStatus: 2
    quantity 5
}
```

The result should look like the following:

```javascript
{
    3: 3,
    6: 5
}
```

Because there is a total of 3 items returned of Product ID 3, and 5 items returned of Product ID 6.

### Report Data Builder Factory

TBD
    

## Point of Sale Data Utilities ##

### Important Files

Test File:

> test/[4_test-dummy-form.test.js](../test/4_test-dummy-form.test.js)

File Under Test:

> jsforms-source/4_test-dummy-form/pos-transaction-services/[pointOfSaleDataUtilsFactory.js](../jsforms-source/4_test-dummy-form/pos-transaction-services/pointOfSaleDataUtilsFactory.js)

Helpers File:

> test/form-helpers/[4_test-dummy-helpers.js](../test/form-helpers/4_test-dummy-helpers.js)

### Get product count by sale

You will be testing that the `getProductCountBySale` works correctly. (Don't worry it does, but you have to prove it.)

There are a series of tests already layed out for you. We will approach each one individually.

#### It returns an empty object for sale counts if no sale data exists

This first test ensures that the `getProductCountBySale` function works properly if you give it nothing to do. So when you give it an empty array, it should return an empty object.

The process you will follow is:

1. Enable the test
2. Add guide comments
   1. Act
   2. Assert
3. Implement the act
4. Implement the assert
5. Remove Guide comments

##### Enable the test

Each test case is defined by an `it` block. The format for an it block is as follows

```javascript
    it('has a description here', testFunction);
```

The description is the name of the test. The test function, can be a function name, a function expression, or an arrow function expression. For this exorcise use the arrow function expression like bellow.

```javascript
    it('does some thing', () => {});
```

This step will cause the test to pass. However it is a false positive as this test does nothing.

<details><summary>Hints</summary>

The `it` already exists on line 51, all you need to do is add the arrow function expression. The description is the name of the parent section without then "It":

> returns an empty object for sale counts if no sale data exists

<details><summary>Code</summary>

**Example**

```javascript
    it('returns an empty object for sale counts if no sale data exists', () => {});
```

</details>

</details>

##### Add Guiding Comments

To the arrow function expression, you will add the following comments

```javascript
// Act
// Assert
```

These represent the logical steps of testing such a simple thing. We will then use the comments to implement the test.

<details><summary>Hints</summary>

You will need to add two line brakes to the arrow function expression between the curly braces.

<details><summary>Code</summary>

**Example**

```javascript
    it('returns an empty object for sale counts if no sale data exists', () => {
        // Act
        // Assert
    });
```

</details>

</details>

##### Implement the act

The "Act" refers to the action under test. You will need to do the thing the test is trying to test. So with this test you are trying to test what will happen when `getProductCountBySale` method on the `pointOfSaleDataUtilities` object is called with an empty array.

<details><summary>Hints</summary>

You need to make a call the the `getProductCountBySale` method with an empty array and set a variable to that result.

<details><summary>Code</summary>

**Example**

```javascript
    it('returns an empty object for sale counts if no sale data exists', () => {
        // Act
        let result = pointOfSaleDataUtilities.getProductCountBySale([]);
        // Assert
    });
```

</details>

</details>

##### Implement the Assert

Assert refers to the need to validate that the code does what we expect it to do. It often uses a keyword `assert`. For our tests they will.

Now you need to validate that the result to the call of `getProductCountBySale` returns an empty object.

> Note: an empty object in JavaScript is an object with no properties or methods. i.e `{}`

You will use the `assert.deepEqual` method to prove this. This method has the following signature:

```javascript
assert.deepEqual(actualResult, expectedResult)
```

<details><summary>Hints</summary>

The expected result is `{}`.

<details><summary>Code</summary>

**Example**

```javascript
    it('returns an empty object for sale counts if no sale data exists', () => {
        // Act
        let ? = pointOfSaleDataUtilities.getProductCountBySale([]);
        // Assert
        assert.deepEqual(?, {});
    });
```

</details>

</details>

##### Remove Guide comments

Now delete then comments as they provide no extra value.

<details><summary>Hints</summary>

Delete the comment lines

<details><summary>Code</summary>

**Example 1 (`let`)**

```javascript
    it('returns an empty object for sale counts if no sale data exists', () => {
        let ? = pointOfSaleDataUtilities.getProductCountBySale([]);

        assert.deepEqual(?, {});
    });
```

**Example 2 (`var`)**

```javascript
    it('returns an empty object for sale counts if no sale data exists', () => {
        var ? = pointOfSaleDataUtilities.getProductCountBySale([]);

        assert.deepEqual(?, {});
    });
```

</details>

</details>

### It returns an object with a single count of 1 when only one item, quantity 1 was purchased

The next test is to test what happens when a only one item is passed to the `getProductCountBySale` method and it is a sale with only one item sold of that product.

It will then return an item with a property equal to the product ID with an integer value equal to that item's quantity. So if `productId: 42` was passed you should get an item that looks like:

```javascript
{
    [42]: 1
}
```

The process you will follow is:

1. Enable the test
2. Add guide comments
   1. Arrange
   2. Act
   3. Assert
3. Implement the arrange
4. Implement the act
5. Implement the assert
6. Remove Guide comments

This will be the last test where we dive into each of these steps in detail.

##### Enable the test

Each test case is defined by an `it` block. Enabling the test will cause the test to pass. However it is a false positive as this test does nothing.

<details><summary>Hints</summary>

You did this once already in the last test.

The `it` already exists just below the last test, all you need to do is add the arrow function expression. The description is the name of the parent section without then "It":

> returns an object with a single count of 1 when only one item, quantity 1 was purchased

<details><summary>Code</summary>

**Example**

```javascript
    it('returns an object with a single count of 1 when only one item, quantity 1 was purchased', () => {});
```

</details>

</details>

##### Add guide comments

You will add the following three comments to the arrow function expression.

```javascript
// Arrange
// Act
// Assert
```

> Note: these comments are often referred to as "The Triple A" comments.

<details><summary>Hints</summary>

You will need to add two line brakes to the arrow function expression between the curly braces.

<details><summary>Code</summary>

**Example**

```javascript
    it('returns an object with a single count of 1 when only one item, quantity 1 was purchased', () => {
        // Arrange
        // Act
        // Assert
    });
```

</details>

</details>

##### Implement the arrange

Arrange refers to the need to do some setup before we act.

In this test we need to create a transaction record with the transaction status of Sale, and a quantity of 1. Write the code beneath the comment.

You will use the helper function `buildTransactionRecord` which has the following signature.

> `buildTransactionRecord(productId, transactionStatus, quantity)`

The `productId` is a integer number intended to identify then product. In this test it can be any valid integer, though probably should keep it positive.

The `transactionStatus` is a integer number that represents Sale or Return. You have a helper `transactionStatuses`. In this test you will use the value `transactionStatuses.Sale`.

The `quantity` is a positive integer number that represents the amount sold.

<details><summary>Hints</summary>

You will create a variable and assign it to the value returned from the `buildTransactionRecord` function call.

<details><summary>Code</summary>

**Example 1 (`let`)**

```javascript
    it('returns an object with a single count of 1 when only one item, quantity 1 was purchased', () => {
        // Arrange
        let ? = buildTransactionRecord(?, transactionStatuses.Sale, 1);
        // Act
        // Assert
    });
```

**Example 2 (`var`)**

```javascript
    it('returns an object with a single count of 1 when only one item, quantity 1 was purchased', () => {
        // Arrange
        var ? = buildTransactionRecord(?, transactionStatuses.Sale, 1);
        // Act
        // Assert
    });
```

</details>

</details>

##### Implement the act

The "Act" refers to the action under test. You will need to do the thing the test is trying to test. So with this test you are trying to test what will happen when `getProductCountBySale` method on the `pointOfSaleDataUtilities` object is called with an empty that has the variable created during the arrange.

<details><summary>Hints</summary>

You need to make a call the the `getProductCountBySale` method with an empty array and set a variable to that result.

<details><summary>Code</summary>

**Example 1 (`let`)**

```javascript
    it('returns an object with a single count of 1 when only one item, quantity 1 was purchased', () => {
        // Arrange
        let ? = buildTransactionRecord(?, transactionStatuses.Sale, 1);

        // Act
        let result = getProductCountBySale([?]);
        // Assert
    });
```

**Example 2 (`var`)**

```javascript
    it('returns an object with a single count of 1 when only one item, quantity 1 was purchased', () => {
        // Arrange
        var ? = buildTransactionRecord(?, transactionStatuses.Sale, 1);

        // Act
        var result = getProductCountBySale([?]);
        // Assert
    });
```

</details>

</details>

##### Implement the assert

Assert refers to the need to validate that the code does what we expect it to do.

Now you need to validate that the result to the call of `getProductCountBySale` returns an object with a single count.

The object is expected to have the following shape.

```javascript
    {
        [productId]: 1
    }
```

The productId in this case is the value given to the first parameter of the `buildTransactionRecord` function call.

You will use the `assert.deepEqual` method to prove this. This method has the following signature:

```javascript
assert.deepEqual(actualResult, expectedResult)
```

<details><summary>Hints</summary>

You can just copy the provided object above into the assert for the expected value, and replace `productId` with the correct number.

<details><summary>Code</summary>

**Example 1 (`let`)**

```javascript
    it('returns an object with a single count of 1 when only one item, quantity 1 was purchased', () => {
        // Arrange
        let transactionRecord = buildTransactionRecord(?, transactionStatuses.Sale, 1);

        // Act
        let result = getProductCountBySale([transactionRecord]);

        // Assert
        assert.deepEqual(result, {
            [?]: 1
        });
    });
```

**Example 2 (`var`)**

```javascript
    it('returns an object with a single count of 1 when only one item, quantity 1 was purchased', () => {
        // Arrange
        var transactionRecord = buildTransactionRecord(?, transactionStatuses.Sale, 1);

        // Act
        var result = getProductCountBySale([transactionRecord]);

        // Assert
        assert.deepEqual(result, {
            [?]: 1
        });
    });
```

</details>

</details>

##### Remove Guide comments

Now remove the comments as they serve no further purpose.

<details><summary>Hints</summary>

Just delete them.

<details><summary>Code</summary>

</details>

```javascript
    it('returns an object with a single count of 1 when only one item, quantity 1 was purchased', () => {
        let transactionRecord = buildTransactionRecord(?, transactionStatuses.Sale, 1);

        let result = getProductCountBySale([transactionRecord]);

        assert.deepEqual(result, {
            [?]: 1
        });
    });
```

**Example 2 (`var`)**

```javascript
    it('returns an object with a single count of 1 when only one item, quantity 1 was purchased', () => {
        var transactionRecord = buildTransactionRecord(?, transactionStatuses.Sale, 1);

        var result = getProductCountBySale([transactionRecord]);

        assert.deepEqual(result, {
            [?]: 1
        });
    });
```

</details>

### TBD
    

<!-- GENERATED DOCUMENT! DO NOT EDIT! -->
    