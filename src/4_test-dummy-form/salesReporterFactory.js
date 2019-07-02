// eslint-disable-next-line
function salesReporterFactory(
    dataLoader,
    pointOfSaleDataUtilsFactory,
    reportDataBuilderFactory
) {

    function getReport() {
        const productData = dataLoader.getProductData();
        const transactionData = dataLoader.getTransactionData();
        const transactionTypes = dataLoader.getTransactionTypes();
        
        const pointOfSaleDataUtils = pointOfSaleDataUtilsFactory(transactionTypes);
        const reportDataBuilder = reportDataBuilderFactory(pointOfSaleDataUtils);

        return reportDataBuilder.buildReportData(transactionData, productData);
    }

    return {
        getReport: getReport
    }
}
