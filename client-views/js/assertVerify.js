/*
global chai
*/

(function () {
    function prettyJson(value) {
        return JSON.stringify(value, null, 4);
    }

    Object.defineProperty(chai.assert, 'verify', {
        writeable: false,
        value: function (actual, expected) {
            chai.assert(
                JSON.stringify(actual) === JSON.stringify(expected),
                `expected ${prettyJson(actual)} to equal ${prettyJson(expected)}`,
                'Where does this print?',
                expected,
                actual
            );
        }
    });

})();
