// eslint-disable-next-line
function dataLoaderFactory(dataSourceAccess) {
    function getSalesData () {
        return dataSourceAccess.loadTransactionData()
    }

    function getTransactionTypes () {
        return dataSourceAccess.loadTransactionTypes();
    }

    return {
        getSalesData: getSalesData,
        getTransactionTypes: getTransactionTypes
    };
}
