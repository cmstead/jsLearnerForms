// eslint-disable-next-line
function salesReporterFactory(
    dataLoader,
    pointOfSaleDataUtilsFactory,
    reportDataBuilderFactory
) {

    function getReport(transactionType) {
        const productData = dataLoader.getProductData();
        const transactionData = dataLoader.getTransactionData();
        const transactionTypes = dataLoader.getTransactionTypes();
        
        const pointOfSaleDataUtils = pointOfSaleDataUtilsFactory(transactionTypes);
        const reportDataBuilder = reportDataBuilderFactory(transactionTypes)(pointOfSaleDataUtils);

        return reportDataBuilder.buildReportData(transactionType, transactionData, productData);
    }

    return {
        getReport: getReport
    }
}
