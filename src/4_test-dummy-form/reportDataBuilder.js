// eslint-disable-next-line
function reportDataBuilderFactory(transactionRecordUtils) {
    
    function getProductById(productData, productId) {
        return productData.find(product => product.id === productId);
    }

    function buildReportData(transactionData, productData) {
        if (transactionData.length === 0) {
            return [];
        } else {
            const totalTransactionData =
                transactionData.reduce(
                    function (totalData, nextTransaction) {
                        const productId = nextTransaction.productId;
                        const productRecord = getProductById(productData, productId);
                        const transactionRecord = totalData[productId];

                        totalData[productId] = transactionRecordUtils.buildUpdatedTransaction(nextTransaction, productRecord, transactionRecord)

                        return totalData
                    },
                    {});

            return Object.keys(totalTransactionData).map(key => totalTransactionData[key]);
        }
    }  
    
    return {
        buildReportData: buildReportData
    };
}
