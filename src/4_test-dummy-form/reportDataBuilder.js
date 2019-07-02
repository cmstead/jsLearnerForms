// eslint-disable-next-line
function reportDataBuilderFactory() {

    function buildTransactionTotalsRecord(quantity, product) {
        return {
            productName: product.name,
            quantity: quantity,
            total: product.price * quantity
        };
    }

    return function (pointOfSaleDataUtils) {
        function buildReportData(transactionData, productData) {
            const productCountsBySale = pointOfSaleDataUtils.getProductCountBySale(transactionData);

            return Object.keys(productData)
                .map(key => productData[key])
                .filter(product => typeof productCountsBySale[product.id] !== 'undefined')
                .map(function(product) {
                    const quantity = productCountsBySale[product.id];
                    return buildTransactionTotalsRecord(quantity, product);
                })
        }

        return {
            buildReportData: buildReportData
        };
    };


}
