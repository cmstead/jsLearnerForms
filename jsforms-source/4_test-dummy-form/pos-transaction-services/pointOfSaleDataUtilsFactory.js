// eslint-disable-next-line
function pointOfSaleDataUtilityFactoryBuilder() {

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
    
        function getProductCountByTransactionStatus(transactionStatus, transactionRecords) {
            function transactionStatusMatchesUserSelection(transactionRecord) {
                return transactionRecord.transactionStatus === transactionStatus;
            }
    
            function captureProductCounts(finalCounts, transactionRecord) {
                initializeProductCount(finalCounts, transactionRecord);
                incrementProductCount(finalCounts, transactionRecord);
    
                return finalCounts;
            }
    
            return transactionRecords
                .filter(transactionStatusMatchesUserSelection)
                .reduce(captureProductCounts, {});
        }
    
        return {
            getProductCountByReturn:
                (transactionRecords) =>
                    getProductCountByTransactionStatus(transactionStatuses.Return, transactionRecords),
    
            getProductCountBySale:
                (transactionRecords) =>
                    getProductCountByTransactionStatus(transactionStatuses.Sale, transactionRecords)
        };
    }

}
