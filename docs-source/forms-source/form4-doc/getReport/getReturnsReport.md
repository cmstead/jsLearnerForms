<!--bl
    (filemeta
        (title "Get Returns Report")
    )
/bl-->

There is little to do in testing the "Returns" report because if you look at the code, it is almost entirely the same code as what creates the "Sales" report. So the only thing we have to do is test that it correctly filters when we ask for a report of the "Returns".

#### It returns a report of return transactions that excludes sales transactions ####

You will now create a test that will verify that the report is correct when you ask for it to give you a report of the returns.

You will want at least three different transactions records that are composed of at least two different product IDs. You will want one of those records to be a Sale and the rest to be Returns.

You will then verify that the resulting object has the correct products, quantities, and prices.

Remember to pass `transactionStatuses.Return` to the `getReport` function.

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

This will look very much like the last test but the transaction statuses are swapped.

<details><summary>Code</summary>

**Example**

```javascript
describe('get returns report', function () {
    it('returns a report of return transactions that excludes sales transactions', () => {
        transactionRecords.push(buildTransactionRecord(?, transactionStatuses.Return, ?));
        transactionRecords.push(buildTransactionRecord(?, transactionStatuses.Sale, ?)); // This is the record that is not going to be counted
        transactionRecords.push(buildTransactionRecord(?, transactionStatuses.Return, ?));
        
        let result = reportBuilder(transactionStatuses.Return);

        assert.deepEqual(result, [
            {
                productName: ?, // The name that maps to the first product ID
                quantity: ?, // The quantity of the first transaction record
                total: ? // the price from the first product multiplied by te quantity
            },
            {
                productName: ?, // The name that maps to the third product ID
                quantity: ?, // The quantity of the third transaction record
                total: ? // the price from the third product multiplied by the quantity
            },
        ]);

    });
});
```

</details>

</details>