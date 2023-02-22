<!--bl
    (filemeta
        (title "Get Sales Report")
    )
/bl-->

You will be focusing on testing that a sales report is created correctly. In creating these tests you will follow the basic steps listed bellow.

1. Write the first test.
2. Write the second test.
3. Refactor tests to remove repetitive code into a `beforeEach` block.
4. Finish writing tests, stopping periodically to refactor as needed.

Now when you write each test, you will follow the process you did before with one additional step.

1. Enable the test
2. Add guide comments
   1. Arrange
   2. Act
   3. Assert
3. Implement the arrange
4. Implement the act
5. Implement the assert
6. Remove Guide comments
7. Refactor code if possible

#### It returns a sales report with no sales ####

Starting with a base case of there were no sales, you will write the test that proves that it returns a report with nothing in it.

To test the `getReport` function you will need to first call the `salesReporterFactory` function. The `salesReporterFactory` has the following signature:

```javascript
function salesReporterFactory(
    dataLoader,
    pointOfSaleDataUtilsFactory,
    reportDataBuilderFactory
)
```

You will have to create a fake `dataLoader`, use the `pointOfSaleDataUtilsFactoryBuilder` to get the `pointOfSaleDataUtilsFactory` and simply pass the `reportDataBuilderFactory` that is already available to the test.