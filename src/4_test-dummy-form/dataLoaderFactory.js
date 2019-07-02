// eslint-disable-next-line
function dataLoaderFactory(dataSourceAccess) {
    function getProductData() {
        return dataSourceAccess.loadProductData();
    }

    function getTransactionData() {
        return dataSourceAccess.loadTransactionData()
    }

    function getTransactionTypes() {
        return dataSourceAccess.loadTransactionTypes();
    }

    return {
        getProductData: getProductData,
        getTransactionData: getTransactionData,
        getTransactionTypes: getTransactionTypes
    };
}
