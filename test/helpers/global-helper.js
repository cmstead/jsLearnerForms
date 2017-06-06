'use strict';

function addGlobal(key, outputter) {
    if (typeof global[key] === 'undefined') {
        Object.defineProperty(global, key, {
            get: outputter
        });
    }
}

addGlobal('_array_', () => []);
addGlobal('_boolean_', () => false);
addGlobal('_booleanExpression_', () => false);
addGlobal('_function_', () => () => null);
addGlobal('_null_', () => null);
addGlobal('_number_', () => 0);
addGlobal('_object_', () => { return {}; });
addGlobal('_something_', () => null);
addGlobal('_string_', () => '');
