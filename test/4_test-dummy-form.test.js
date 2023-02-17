/* global

    chai,
    fourthFormHelpers,
    salesReporterFactory,
    dataLoaderFactory,
    pointOfSaleDataUtilsFactoryBuilder,
    reportDataBuilderFactory
*/

'use strict';

const assert = chai.assert;

// Look in ./form-helpers/4_test-dummy-helpers.js to see 
// these helper functions. You'll need them.
const {
    buildProductData,
    buildSalesReporter,
    buildSimpleTestData,
    buildTestData,
    buildTransactionRecord,
    buildTransactionStatuses
} = fourthFormHelpers;

describe('Test Dummy Form - Costume Shop Sales', function () {

    let pointOfSaleDataUtilsFactory;
    let salesReporter;

    beforeEach(function () {
        pointOfSaleDataUtilsFactory = pointOfSaleDataUtilityFactoryBuilder();
    });

    describe('Point of Sale Data Utilities', function () {
        // File being tested can be found here:
        // ../jsforms-source/4_test-dummy-form/pos-transaction-services/pointOfSaleDataUtilsFactory.js
        
        let pointOfSaleDataUtilities;
        let transactionStatuses;

        beforeEach(function () {
            transactionStatuses = buildTransactionStatuses();
            pointOfSaleDataUtilities = pointOfSaleDataUtilsFactory(transactionStatuses);
        });

        describe('get product count by sale', function () {
            it('returns an empty object for sale counts if no sale data exists');

            it('returns an object with a single count of 1 when only one item, quantity 1 was purchased');

            it('returns an object with a single count of 2 when only one item, quantity 2 was purchased');

            it('returns an object with a two counts of 1 when two transactions of 1 qty each are passed');

            it('returns an object with a two counts when 4 transactions of two different items are passed');

            it('returns counts only for sales, ignoring returns');
        });

        describe('get product count by return status', function () {
            it('returns with counts only for return transactions');

        });
    });

    describe('sales report', function () {
        describe('get sales report', function () {
            it('returns a sales report with no sales');

            it('returns a sales report with one sale');

            it('returns a sales report with two sales of different products');

            it('returns a sales report with two sales of the same product');

            it('returns a sales report with no "returns" data');
        });
    });

    describe('returns report', function () {
        it('returns a "returns" report with no "sales" data');
    });

});
