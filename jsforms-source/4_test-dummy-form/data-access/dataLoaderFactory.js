// eslint-disable-next-line
function dataLoaderFactory(dataSourceAccess) {
    function getProductData() {
        return dataSourceAccess.loadProductTypes();
    }

    function getTransactionData() {
        return dataSourceAccess.loadTransactionData()
    }

    function getTransactionStatuses() {
        return dataSourceAccess.loadTransactionStatuses();
    }

    return {
        getProductData: getProductData,
        getTransactionData: getTransactionData,
        getTransactionStatuses: getTransactionStatuses
    };
}
