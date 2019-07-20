/* global chai */

(function (verifyFactory) {
    if(typeof module !== 'undefined' && module.exports !== 'undefined') {
        module.exports = verifyFactory
    } else {
        chai.use(verifyFactory);
    }
    
})(function (chai) {

    function prettyJson(value) {
        return typeof value === 'undefined'
            ? 'undefined'
            : JSON.stringify(value, null, 4);
    }

    function errorBuilder(actualString, expectedString) {
        return [
            '\n',
            'Actual and expected values do not match, received values as follows',
            '===================================================================',
            '',
            'Actual',
            '------',
            actualString,
            '',
            'Expected',
            '--------',
            expectedString
        ].join('\n');
    }

    function verify(actual, expected) {
        const actualString = prettyJson(actual);
        const expectedString = prettyJson(expected);
        const errorMessage = errorBuilder(actualString, expectedString);

        chai.assert(
            actualString === expectedString,
            errorMessage,
            errorMessage,
            expected,
            actual
        );
    }

    Object.defineProperty(chai.assert, 'verify', {
        writable: false,
        value: verify
    });

    chai.Assertion.addChainableMethod('verifiedAs', function (expected){
        verify(this._obj, expected);
    });

});
