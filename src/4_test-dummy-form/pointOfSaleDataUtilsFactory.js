// eslint-disable-next-line
function pointOfSaleDataUtilsFactory(dataLoader) {
    const transactionStatuses = dataLoader.getTransactionTypes();

    function initializeProductCount(finalCounts, transactionRecord) {
        const productId = transactionRecord.productId;

        if (typeof finalCounts[productId] === 'undefined') {
            finalCounts[productId] = 0;
        }
    }

    function incrementProductCount(finalCounts, transactionRecord) {
        finalCounts[transactionRecord.productId] += transactionRecord.quantity;
    }

    function getProductCountByStatus(transactionStatus, transactionData) {
        function transactionStatusMatchesUserSelection(transaction) {
            return transaction.transactionStatus === transactionStatus;
        }

        function captureProductCounts(finalCounts, transactionRecord) {
            initializeProductCount(finalCounts, transactionRecord);
            incrementProductCount(finalCounts, transactionRecord);

            return finalCounts;
        }

        return transactionData
            .filter(transactionStatusMatchesUserSelection)
            .reduce(captureProductCounts, {});
    }

    return {
        getProductCountByReturn:
            (transactionData) =>
                getProductCountByStatus(transactionStatuses.Return, transactionData),

        getProductCountBySale:
            (transactionData) =>
                getProductCountByStatus(transactionStatuses.Sale, transactionData)
    };
}
