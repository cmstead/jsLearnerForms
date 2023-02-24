// eslint-disable-next-line
function dataSourceAccessFactory() {
    function throwOnLoad () {
        throw new Error('Unable to load data, cannot access data storage');
    }

    return {
        loadTransactionData: throwOnLoad,
        loadTransactionStatuses: throwOnLoad,
        loadProductTypes: throwOnLoad
    };
}
