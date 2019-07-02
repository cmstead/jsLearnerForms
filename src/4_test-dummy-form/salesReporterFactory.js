// eslint-disable-next-line
function salesReporterFactory(
    dataLoader,
    reportDataBuilder
) {

    function getReport() {
        const productData = dataLoader.getProductData();
        const transactionData = dataLoader.getTransactionData();

        return reportDataBuilder.buildReportData(transactionData, productData);
    }

    return {
        getReport: getReport
    }
}
