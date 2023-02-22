<!--bl
    (filemeta
        (title "Get Sales Report")
    )
/bl-->

You will be focusing on testing that a sales report is created correctly. In creating these tests you will follow the basic steps listed bellow.

1. Write the first test.
2. Write the second test.
3. Refactor tests to remove repetitive code into a `beforeEach` block.
4. Finish writing tests, stopping periodically to refactor as needed.

Now when you write each test, you will follow the process you did before with one additional step.

1. Enable the test
2. Add guide comments
3. Implement the arrange
4. Implement the act
5. Implement the assert
6. Remove Guide comments
7. Refactor code if possible

#### It returns a sales report with no sales ####

Starting with a base case of there were no sales, you will write the test that proves that it returns a report with nothing in it.

To test the `getReport` function you will need to first call the `salesReporterFactory` function. The `salesReporterFactory` has the following signature:

```javascript
function salesReporterFactory(
    dataLoader,
    pointOfSaleDataUtilsFactory,
    reportDataBuilderFactory
)
```

You will have to create a fake `dataLoader`. You will also  use the `pointOfSaleDataUtilsFactory` and the `reportDataBuilderFactory` that are already available to the test.

This will return an empty array.

To write this test follow these steps.

1. Enable the test
2. Add guide comments
   1. Arrange
   2. Act
   3. Assert
3. Implement the arrange
4. Implement the act
5. Implement the assert
6. Remove Guide comments

<details><summary>Data Loader Hints</summary>

The `dataLoader` has 3 functions and the following structure:

```javascript
{
    getProductData,
    getTransactionData,
    getTransactionStatuses
}
```

The `getProductData` will be set to the `buildProductData` helper function. The `getTransactionStatuses` will be set to the `buildTransactionStatuses` helper function.

The real odd ball here is the `getTransactionData` which is expected to return an array of transaction records. You will have to create this function, and have it return an empty array.

<details><summary>Code</summary>

**Example**

```javascript
    let dataLoader = {
        getProductData: buildProductData,
        getTransactionData: () => [],
        getTransactionStatuses: buildTransactionStatuses
    };
```

</details>

</details>

<details><summary>Hints</summary>

You just have to pass the values to the function, and capture the returned function. You will then have to call that function with a "Sale" transactionStatus.

<details><summary>Code</summary>

```javascript
it('returns an empty object for sale counts if no sale data exists', () => {
    // Arrange
    let dataLoader = {
        getProductData: buildProductData,
        getTransactionData: () => [],
        getTransactionStatuses: buildTransactionStatuses
    };

    let { getReport } = salesReporterFactory(dataLoader, pointOfSaleDataUtilsFactory, reportDataBuilderFactory);

    // Act
    let result = getReport(transactionStatuses.Sale);

    // Assert
    assert.deepEqual(result, []);
});
```

</details>

</details>

#### It returns a sales report with one sale ####

Okay, the last test did a lot of heavy lifting for you. Now you will test the `getReport` function for a sales report with only one item sold.

The biggest change between this test and the previous one is that the `getTransactionData` needs to return a single transaction record that has a `quantity` of `1`.

The `getReport` function will return an array containing a single object with the following structure:

```javascript
{
    productName, // string -- Name of product, from productDatum.Name
    quantity, // integer number -- count sold or returned, total of transactionData.quantity
    total // number -- the sales price for a single item of this product quantity * productDatum.price
}
```

To write this test follow these steps.

1. Enable the test
2. Add guide comments
   1. Arrange
   2. Act
   3. Assert
3. Implement the arrange
4. Implement the act
5. Implement the assert
6. Remove Guide comments

<details><summary>Arrange Hints</summary>

You are going to setup the `dataLoader` the same way as you did before. But again the odd item out is the `getTransactionData` function because this needs to return an array with a single transaction record for a sale.

The key here is that the transaction record `productId` needs to match one of the products returned from `getProductData`. The `transactionStatus` needs to match the `Sale` property on the `transactionStatuses` object. You will need to use the `buildTransactionRecord` function to create this record.

<details><summary>Code</summary>

**Example**

```javascript
// Arrange
let dataLoader = {
    getProductData: buildProductData,
    getTransactionData: () => [
        buildTransactionRecord(?, transactionStatuses.Sale, 1)
    ],
    getTransactionStatuses: buildTransactionStatuses
};

let { getReport } = salesReporterFactory(dataLoader, pointOfSaleDataUtilsFactory, reportDataBuilderFactory);
```

</details>

</details>

<details><summary>Hints</summary>

Once you have the `dataLoader` created, you will need to only change the Assert part of the code. Remember the `total` in the result is the product's `price`.

<details><summary>Code</summary>

**Example**

```javascript
it('returns a sales report with one sale', () => {
    // Arrange
    let dataLoader = {
        getProductData: buildProductData,
        getTransactionData: () => [
            buildTransactionRecord(?, transactionStatuses.Sale, 1)
        ],
        getTransactionStatuses: buildTransactionStatuses
    };

    let { getReport } = salesReporterFactory(dataLoader, pointOfSaleDataUtilsFactory, reportDataBuilderFactory);

    // Act
    let result = getReport(transactionStatuses.Sale);

    // Assert
    assert.deepEqual(result, [{
        productName: ?,
        quantity: ?,
        total: ?
    }]);
});
```

</details>

</details>

#### Refactor Sales Report Tests ####

You have introduced a lot of duplication. And moreover the duplication in the "Arrange" part of your tests is most likely needed for the rest of the tests. As such, it is time you simplify your tests.

A lot of JavaScript test frameworks use a construct called `beforeEach` that creates a function that is run just before each test. This allows you to setup common variables. These variables will be test suite scoped variables.

> **<div style="color:red">WARNING</div>**
>
> <div style="color:red">You must be careful when using a test suite scoped variables as you can accidentally cause one test to effect another. To prevent this, you must reset all such variables to an initial value in the beforeEach. </div>

##### Refactor Sales Report Tests Create the Before Each #####

You need to create the `getReport` function in the `beforeEach` section. However, in order for this to work you will also need to create and assign a variable to hold the transaction records. This way you can add an item to it in the second test.

<details><summary>Hints</summary>

You will need to create two variables before the "get sales report" section. One to hold the `getReport` function and the other to hold the transaction records.

Bellow those, but still before the "get sales report" section, you will need to create the `beforeEach` section.

<details><summary>Code</summary>

**Example**

```javascript
    describe('get report', function () {
        // files being tested are:
        //      ../jsforms-source/4_test-dummy-form/sales-reporter/salesReporterFactory.js
        //      ../jsforms-source/4_test-dummy-form/pos-transaction-services/reportDataBuilder.js

        let reportBuilder;
        let transactionRecords;

        beforeEach(() => {
            transactionRecords = [];
            let dataLoader = {
                getProductData: buildProductData,
                getTransactionData: () => transactionRecords,
                getTransactionStatuses: buildTransactionStatuses
            };

            let { getReport } = 
                salesReporterFactory(dataLoader, pointOfSaleDataUtilsFactory, reportDataBuilderFactory);

            reportBuilder = getReport;
        });

        describe('get sales report', function () {
```

</details>

</details>

##### Refactor Sales Report Tests Modify the First Test #####

You need to change the first test, "returns a sales report with no sales", so that it uses the new suite level variables.

<details><summary>Hints</summary>

The whole arrange is now being done in the `beforeEach`. So delete that and use the variable that is holding the `getReport` function.

<details><summary>Code</summary>

**Example**

```javascript
    describe('get report', function () {
        // files being tested are:
        //      ../jsforms-source/4_test-dummy-form/sales-reporter/salesReporterFactory.js
        //      ../jsforms-source/4_test-dummy-form/pos-transaction-services/reportDataBuilder.js

        let reportBuilder;
        let transactionRecords;

        beforeEach(() => {
            transactionRecords = [];
            let dataLoader = {
                getProductData: buildProductData,
                getTransactionData: () => transactionRecords,
                getTransactionStatuses: buildTransactionStatuses
            };

            let { getReport } = 
                salesReporterFactory(dataLoader, pointOfSaleDataUtilsFactory, reportDataBuilderFactory);

            reportBuilder = getReport;
        });

        describe('get sales report', function () {
            it('returns an empty object for sale counts if no sale data exists', () => {
                let result = reportBuilder(transactionStatuses.Sale);

                assert.deepEqual(result, []);
            });
```

</details>

</details>

##### Refactor Sales Report Tests Modify the Second Test #####

The second test has more to it. You still have an arrange that is specific to the test. You need to add the transaction record to the variable used to store the transaction records. You might be able to use the [`Array.prototype.push`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/push) method.

<details><summary>Hints</summary>

Most of the arrange in this test can be deleted. You will just need to add the sales transaction record to the array before calling the `getReport` function.

<details><summary>Code</summary>

**Example**

```javascript
        let reportBuilder;
        let transactionRecords;

        beforeEach(() => {
            transactionRecords = [];
            let dataLoader = {
                getProductData: buildProductData,
                getTransactionData: () => transactionRecords,
                getTransactionStatuses: buildTransactionStatuses
            };

            let { getReport } = 
                salesReporterFactory(dataLoader, pointOfSaleDataUtilsFactory, reportDataBuilderFactory);

            reportBuilder = getReport;
        });

        describe('get sales report', function () {

            // ...

            it('returns a sales report with one sale', () => {
                transactionRecords.push(buildTransactionRecord(?, transactionStatuses.Sale, 1));
                
                let result = reportBuilder(transactionStatuses.Sale);

                assert.deepEqual(result, [{
                    productName: ?,
                    quantity: ?,
                    total: ?
                }]);
            });
```

</details>

</details>

#### It returns a sales report with two sales of different products ####

Now you will test that the `getReport` can return a report with two different products.

This will look very similar to the above test, but you will need to add two products, with different quantities to the transaction records.

To write this test follow these steps.

1. Enable the test
2. Add guide comments
   1. Arrange
   2. Act
   3. Assert
3. Implement the arrange
4. Implement the act
5. Implement the assert
6. Remove Guide comments
7. Refactor code if possible

<details><summary>Hints</summary>

Add the two different products to the transaction records. Make sure that the `productId` of each maps to a product that is returned by the `buildProductData` function. You will also want each product to have a different non-one `quantity` value.

You will also have two objects in the result to test for.

<details><summary>Code</summary>

**Example**

```javascript
it('returns a sales report with two sales of the same product', () => {
    transactionRecords.push(buildTransactionRecord(?, transactionStatuses.Sale, ?));
    transactionRecords.push(buildTransactionRecord(?, transactionStatuses.Sale, ?));
    
    let result = reportBuilder(transactionStatuses.Sale);

    assert.deepEqual(result, [
        {
            productName: ?, // The name that maps to the first product ID
            quantity: ?, // The quantity of the first transaction record
            total: ? // the price from the first product multiplied by te quantity
        },
        {
            productName: ?, // The name that maps to the second product ID
            quantity: ?, // The quantity of the second transaction record
            total: ? // the price from the second product multiplied by te quantity
        },
    ]);
});
```

</details>

</details>