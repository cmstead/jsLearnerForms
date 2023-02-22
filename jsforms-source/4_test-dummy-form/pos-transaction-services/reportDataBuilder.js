// eslint-disable-next-line
function reportDataBuilderFactory(transactionStatuses) {

    function getObjectElements(dataObject) {
        return Object.keys(dataObject)
            .map(key => dataObject[key]);
    }

    function isSaleType(transactionStatus) {
        return transactionStatus === transactionStatuses.Sale;
    }

    function getTotalSignMultiplier(transactionStatus) {
        return isSaleType(transactionStatus) ? 1 : -1;
    }

    function buildProductTransactionRecord(productCounts, transactionStatus) {
        return function (product) {
            const quantity = productCounts[product.id];
            const signMultiplier = getTotalSignMultiplier(transactionStatus);

            return {
                productName: product.name,
                quantity: quantity,
                total: signMultiplier * quantity * product.price
            };
        }
    }

    function isProductInCountData(productCounts) {
        return function (product) {
            return typeof productCounts[product.id] !== 'undefined';
        }
    }

    return function (pointOfSaleDataUtils) {
        function pickProductCountAction(transactionStatus) {
            return isSaleType(transactionStatus)
                ? pointOfSaleDataUtils.getProductCountBySale
                : pointOfSaleDataUtils.getProductCountByReturn;
        }

        function buildReportData(transactionStatus, transactionData, productData) {
            const getProductCounts = pickProductCountAction(transactionStatus);
            const productCounts = getProductCounts(transactionData);

            return getObjectElements(productData)
                .filter(isProductInCountData(productCounts))
                .map(buildProductTransactionRecord(productCounts, transactionStatus))
        }

        return {
            buildReportData: buildReportData
        };
    };


}
