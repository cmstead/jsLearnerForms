
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

    

<!-- GENERATED DOCUMENT! DO NOT EDIT! -->
    