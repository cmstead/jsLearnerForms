<!--bl
    (filemeta
        (title "Report Data Builder Factory")
    )
/bl-->

The function `reportDataBuilderFactory` has the following signature:

```javascript
    function reportDataBuilderFactory(transactionStatuses)
```

#### Report Data Builder Factory Parameter ####

It takes an object with the following shape:

```javascript
    {
        Sale = X, // where X is an integer number
        Return = Y // where Y is an integer number
    }
```

#### Report Data Builder Factory Return Value ####

It then returns an object with the following structure:

```javascript
{
    buildReportData
}
```

##### Build Report Data Parameters #####

The `buildReportData` is a function that has the following signature:

```javascript
    buildReportData(
        transactionStatus /*integer number*/, 
        transactionData /*object array*/, 
        productData /*object array*/
    )
```

The `transactionStatus` parameter maps to one of the integers in the `transactionStatuses` object.

The `transactionData` parameter is an array of objects with the following structure:

```javascript
{
    productId, // integer number -- id from a product datum
    transactionStatus, // integer number -- sale or return, must match the transactionStatuses object
    quantity // integer number -- count sold or returned
}
```

The `productData` parameter is an array of objects that have the following structure:

```javascript
{
    id, // integer number -- id uniquely identifies this product
    name, // string -- Name of product
    price // number -- the sales price for a single item of this product
}
```

##### Build Report Data Return Value #####

The `buildReportData` function returns an array of objects that have the following structure:

```javascript
{
    productName, // string -- Name of product, from productDatum.Name
    quantity, // integer number -- count sold or returned, total of transactionData.quantity
    total // number -- the sales price for a single item of this product quantity * productDatum.price
}
```