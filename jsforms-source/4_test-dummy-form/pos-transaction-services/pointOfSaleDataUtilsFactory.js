// eslint-disable-next-line
function pointOfSaleDataUtilsFactoryBuilder() {

    return function (transactionStatuses) {

        function initializeProductCount(finalCounts, transactionRecord) {
            const productId = transactionRecord.productId;
    
            if (typeof finalCounts[productId] === 'undefined') {
                finalCounts[productId] = 0;
            }
        }
    
        function incrementProductCount(finalCounts, transactionRecord) {
            finalCounts[transactionRecord.productId] += transactionRecord.quantity;
        }
    
        function getProductCountByTransactionStatus(transactionStatus, transactionData) {
            function transactionStatusMatchesUserSelection(transactionRecord) {
                return transactionRecord.transactionStatus === transactionStatus;
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
                    getProductCountByTransactionStatus(transactionStatuses.Return, transactionData),
    
            getProductCountBySale:
                (transactionData) =>
                    getProductCountByTransactionStatus(transactionStatuses.Sale, transactionData)
        };
    }

}
