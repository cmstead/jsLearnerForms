// eslint-disable-next-line
function salesReporterFactory(dataLoader) {
    function getReport() {
        return dataLoader.getSalesData();
    }

    return {
        getReport: getReport
    }
}
