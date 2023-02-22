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
   1. Arrange
   2. Act
   3. Assert
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
    let dataLoader = {
        getProductData: buildProductData,
        getTransactionData: () => [],
        getTransactionStatuses: buildTransactionStatuses
    };

    let { getReport } = salesReporterFactory(dataLoader, pointOfSaleDataUtilsFactory, reportDataBuilderFactory);

    let result = getReport(transactionStatuses.Sale);

    assert.deepEqual(result, []);
});
```

</details>

</details>