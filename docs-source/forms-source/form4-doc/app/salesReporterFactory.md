<!--bl
    (filemeta
        (title "Sales Reporter Factory")
    )
/bl-->

The `salesReporterFactory` function has the following signature

```javascript
function salesReporterFactory(
    dataLoader,
    pointOfSaleDataUtilsFactory,
    reportDataBuilderFactory
)
```

#### Sales Reporter Factory Parameters ####

The `dataLoader` parameter is an object with following shape:

```javascript
{
    getProductData,
    getTransactionData,
    getTransactionStatuses
}
```

##### Get Product Data Function #####

The getProductData function has the following signature:

```javascript
getProductData()
```

###### Get Product Data Return Value ######

The `getProductData` function returns an array of objects that have then following structure:

```javascript
{
    id, // integer number -- id uniquely identifies this product
    name, // string -- Name of product
    price // number -- the sales price for a single item of this product
}
```

##### Get Transaction Data Function #####

The `getTransactionData` function has the following signature:

```javascript
getTransactionData()
```

###### Get Transaction Data Return Value ######

The `getTransactionData` function returns an array of objects that have the following structure:

```javascript
{
    productId, // integer number -- id from a product datum
    transactionStatus, // integer number -- sale or return, must match the transactionStatuses object
    quantity // integer number -- count sold or returned
}
```

##### Get Transaction Types Function #####

The `getTransactionStatuses` function has the following signature:

```javascript
getTransactionStatuses()
```

###### Get Transaction Types Return Value ######

The `getTransactionStatuses` function returns an object with the following structure:

```javascript
{
    Sale = X, // where X is an integer number
    Return = Y // where Y is an integer number
}
```

#### Sales Reporter Factory Return Value ####

The `` function returns an object with the following structure:

```javascript
{
    getReport
}
```

##### Get Report Function #####

The `getReport` function has the following signature:

```javascript
function getReport(transactionStatus)
```

The `transactionStatus` parameter is an integer number that maps to Sale or Return as determined by the `transactionStatuses` returned from the `getTransactionStatuses` function.

###### Get Report Return Value ######

The `getReport` function returns an array of objects with the following structure:

```javascript
{
    productName, // string -- Name of product, from productDatum.Name
    quantity, // integer number -- count sold or returned, total of transactionData.quantity
    total // number -- the sales price for a single item of this product quantity * productDatum.price
}
```

Each item in the array will represent the results for a different product.