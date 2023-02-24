// eslint-disable-next-line
function salesReporterFactory(
    dataLoader,
    pointOfSaleDataUtilsFactory,
    reportDataBuilderFactory
) {

    function getReport(transactionStatus) {
        const productData = dataLoader.getProductData();
        const transactionData = dataLoader.getTransactionData();
        const transactionStatuses = dataLoader.getTransactionStatuses();
        
        const pointOfSaleDataUtils = pointOfSaleDataUtilsFactory(transactionStatuses);
        const reportDataBuilder = reportDataBuilderFactory(transactionStatuses)(pointOfSaleDataUtils);

        return reportDataBuilder.buildReportData(transactionStatus, transactionData, productData);
    }

    return {
        getReport: getReport
    }
}
