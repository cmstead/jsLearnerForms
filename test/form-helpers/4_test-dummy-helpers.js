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
    
    function buildTransactionTypes() {
        return {
            Sale: 1,
            Return: 2
        };
    }
    
    function buildTransactionData(
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
    
    function buildTestData(productData, transactionTypes) {
        return {
            productData: productData,
            transactionTypes: transactionTypes,
            transactionData: []
        };
    }
    
    function buildSalesReporter(dataSourceAccess) {
        const dataLoader = dataLoaderFactory(dataSourceAccess);
    
        const pointOfSaleDataUtilsFactory = pointOfSaleDataUtilsFactoryBuilder();
        const reportDataBuilder = reportDataBuilderFactory();
    
        return salesReporterFactory(
            dataLoader,
            pointOfSaleDataUtilsFactory,
            reportDataBuilder
        );
    
    }

    return {
        buildProductData,
        buildTransactionTypes,
        buildTransactionData,
        buildTestData,
        buildSalesReporter
    };
})();
