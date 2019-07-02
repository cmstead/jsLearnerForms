// eslint-disable-next-line
function salesReporterFactory(dataLoader) {
    function getReport() {
        const productData = dataLoader.getProductData();
        const transactionData = dataLoader.getTransactionData();

        const product = productData[0];
        const transaction = transactionData[0];

        if(typeof transaction === 'undefined') {
            return [];
        } else {
            return [{
                productName: product.name,
                quantity: transaction.quantity,
                total: product.price
            }];
        }
    }

    return {
        getReport: getReport
    }
}
