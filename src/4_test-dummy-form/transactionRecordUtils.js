// eslint-disable-next-line
function transactionRecordUtilsFactory() {
    function buildTransactionRecord(transaction, product) {
        return {
            productName: product.name,
            quantity: transaction.quantity,
            total: product.price
        };
    }

    function updateTransactioRecord(nextTransaction, transactionRecord, productRecord) {
        transactionRecord.quantity += nextTransaction.quantity;
        transactionRecord.total = transactionRecord.quantity * productRecord.price;

        return transactionRecord;
    }


    function buildUpdatedTransaction(nextTransaction, productRecord, transactionRecord) {
        let updatedTransaction = null;

        if (typeof transactionRecord === 'undefined') {
            updatedTransaction = buildTransactionRecord(nextTransaction, productRecord);
        } else {
            updatedTransaction = updateTransactioRecord(nextTransaction, transactionRecord, productRecord)
        }

        return updatedTransaction;
    }

    return {
        buildUpdatedTransaction: buildUpdatedTransaction
    };
}
