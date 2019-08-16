/* global

    salesReporterFactory,
    dataLoaderFactory,
    dataSourceAccessFactory,
    pointOfSaleDataUtilsFactoryBuilder,
    reportDataBuilderFactory
*/

// eslint-disable-next-line
function getSalesReporter() {
    const dataSourceAccess = dataSourceAccessFactory();
    const dataLoader = dataLoaderFactory(dataSourceAccess);

    const pointOfSaleDataUtilsFactory = pointOfSaleDataUtilsFactoryBuilder();
    const reportDataBuilder = reportDataBuilderFactory();

    return salesReporterFactory(
        dataLoader,
        pointOfSaleDataUtilsFactory,
        reportDataBuilder
    );
}
