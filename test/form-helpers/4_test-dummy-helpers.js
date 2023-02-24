/* global

    salesReporterFactory,
    dataLoaderFactory,
    pointOfSaleDataUtilsFactoryBuilder,
    reportDataBuilderFactory
*/

// eslint-disable-next-line
const fourthFormHelpers = (function () {
    function buildProductData() {
        return [
            {
                id: 1,
                name: 'Pirate Costume',
                price: 39.99
            },
            {
                id: 2,
                name: 'Robot Costume',
                price: 59.99
            }
        ];
    }
    
    function buildTransactionStatuses() {
        return {
            Sale: 1,
            Return: 2
        };
    }
    
    function buildTransactionRecord(
        productId,
        transactionStatus,
        quantity
    ) {
        return {
            productId, // int -- id from a product record
            transactionStatus, // int -- sale or return
            quantity // int -- count sold or returned
        };
    }
    
    function buildTestData(productData, transactionStatuses, transactionData = []) {
        return {
            productData: productData,
            transactionTypes: transactionStatuses,
            transactionData: transactionData
        };
    }
    
    function buildSimpleTestData() {
        return buildTestData(buildProductData(), buildTransactionStatuses());
    }
    
    function buildSalesReporter(dataSourceAccess) {
        const dataLoader = dataLoaderFactory(dataSourceAccess);
    
        const pointOfSaleDataUtilsFactory = pointOfSaleDataUtilityFactoryBuilder();
        const reportDataBuilder = reportDataBuilderFactory();
    
        return salesReporterFactory(
            dataLoader,
            pointOfSaleDataUtilsFactory,
            reportDataBuilder
        );
    
    }

    return {
        buildProductData,
        buildSalesReporter,
        buildSimpleTestData,
        buildTestData,
        buildTransactionRecord,
        buildTransactionStatuses
    };
})();
