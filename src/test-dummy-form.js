'use strict';

function range(a, b, increment = 1) {
    return a >= b ? [a] : [a].concat(range(a + increment, b, increment));
}

module.exports = {
    range: range
};