<!--bl
    (filemeta
        (title "It returns with counts only for return transactions")
    )
/bl-->

There is only one test to this section. The reason is if you look at the file [pointOfSaleDataUtilsFactory.js](../jsforms-source/4_test-dummy-form/pos-transaction-services/pointOfSaleDataUtilsFactory.js) you will see that the only difference between `getProductCountBySale` and `getProductCountByReturn` is a value passed to a second parameter of a method called underneath. So in regard to returns we just need to prove that the function can count them.

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

You will want to create 2 returns, and a third for a sale.

<details><summary>Hints</summary>

In the "Arrange" you will be creating 3 different transaction reports. Two will be returns and the third will be for a sale. You can choose, if you want any of these to share IDs.

<details><summary>Code</summary>

**Example (explicit, diff ids)**

```javascript
    it('returns with counts only for return transactions', () => {
        let saleTransaction = buildTransactionRecord(?, transactionStatuses.Sale, ?);
        let return1 = buildTransactionRecord(?, transactionStatuses.Return, ?);
        let return2 = buildTransactionRecord(?, transactionStatuses.Return, ?);

        let result = pointOfSaleDataUtilities.getProductCountBySale([
            return1,
            saleTransaction,
            return2,
        ]);

        assert.deepEqual(result, {
            [?]: ?,
            [?]: ?,
        });
    });
```

**Example (explicit, returns share ID)**

```javascript
    it('returns with counts only for return transactions', () => {
        let returnProduct = ?;
        let saleTransaction = buildTransactionRecord(?, transactionStatuses.Sale, ?);
        let return1 = buildTransactionRecord(returnProduct, transactionStatuses.Return, ?);
        let return2 = buildTransactionRecord(returnProduct, transactionStatuses.Return, ?);

        let result = pointOfSaleDataUtilities.getProductCountBySale([
            return1,
            saleTransaction,
            return2,
        ]);

        assert.deepEqual(result, {
            [returnProduct]: ?,
        });
    });
```

**Example (explict, all share ID)**

```javascript
    it('returns with counts only for return transactions', () => {
        let productId = ?;
        let saleTransaction = buildTransactionRecord(productId, transactionStatuses.Sale, ?);
        let return1 = buildTransactionRecord(productId, transactionStatuses.Return, ?);
        let return2 = buildTransactionRecord(productId, transactionStatuses.Return, ?);

        let result = pointOfSaleDataUtilities.getProductCountBySale([
            return1,
            saleTransaction,
            return2,
        ]);

        assert.deepEqual(result, {
            [productId]: ?,
        });
    });
```

**Example (implicit, diff ids)**

```javascript
    it('returns with counts only for return transactions', () => {
        let transactions = [
            buildTransactionRecord(?, transactionStatuses.Return, ?),
            buildTransactionRecord(?, transactionStatuses.Sale, ?),
            buildTransactionRecord(?, transactionStatuses.Return, ?),
        ];

        let result = pointOfSaleDataUtilities.getProductCountBySale(transactions);

        assert.deepEqual(result, {
            [?]: ?,
            [?]: ?,
        });
    });
```

**Example (implicit, returns share ID)**

```javascript
    it('returns with counts only for return transactions', () => {
        let returnProduct = ?;
        let transactions = [
            buildTransactionRecord(returnProduct, transactionStatuses.Return, ?),
            buildTransactionRecord(?, transactionStatuses.Sale, ?),
            buildTransactionRecord(returnProduct, transactionStatuses.Return, ?),
        ];

        let result = pointOfSaleDataUtilities.getProductCountBySale(transactions);

        assert.deepEqual(result, {
            [returnProduct]: ?,
        });
    });
```

**Example (implicit, all share ID)**

```javascript
    it('returns with counts only for return transactions', () => {
        let productId = ?;
        let transactions = [
            buildTransactionRecord(productId, transactionStatuses.Return, ?),
            buildTransactionRecord(productId, transactionStatuses.Sale, ?),
            buildTransactionRecord(productId, transactionStatuses.Return, ?),
        ];

        let result = pointOfSaleDataUtilities.getProductCountBySale([
            return1,
            saleTransaction,
            return2,
        ]);

        assert.deepEqual(result, {
            [productId]: ?,
        });
    });
```

</details>

</details>