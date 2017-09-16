'use strict';

const fs = require('fs');

const formResetPaths = {
    1: {
        'source': './.form-src/1_first-form.js',
        'destination': './src/1_first-form.js'
    },
    2: {
        'source': './.form-src/2_second-form.js',
        'destination': './src/2_second-form.js'
    },
    3: {
        'source': './.form-src/3_third-form.js',
        'destination': './src/3_third-form.js'
    },
    4: {
        'source': './.form-src/4_test-dummy-form.test.js',
        'destination': './test/4_test-dummy-form.test.js'
    },
}

const formKey = process.argv[2];

console.log('Resetting form ' + formKey + '...');

const resetPaths = formResetPaths[formKey];
const formSource = fs.readFileSync(resetPaths.source, { encoding: 'utf8' });

console.log('Reset complete.');

fs.writeFileSync(resetPaths.destination, formSource);