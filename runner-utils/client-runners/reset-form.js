'use strict';

const fs = require('fs');

const resetRoot = './.form-src/client/';
const destinationRoot = './src/client/';

const formResetPaths = {
    1: {
        'source': resetRoot + '1_first-form.js',
        'destination': destinationRoot + '1_first-form.js'
    },
    2: {
        'source': resetRoot + '2_second-form.js',
        'destination': destinationRoot + '2_second-form.js'
    },
    3: {
        'source': resetRoot + '3_third-form.js',
        'destination': destinationRoot + '3_third-form.js'
    },
    4: {
        'source': resetRoot + '4_test-dummy-form.test.js',
        'destination': './test/client/4_test-dummy-form.test.js'
    },
}

const formKey = process.argv[2];

console.log('Resetting form ' + formKey + '...');

const resetPaths = formResetPaths[formKey];
const formSource = fs.readFileSync(resetPaths.source, { encoding: 'utf8' });

console.log('Reset complete.');

fs.writeFileSync(resetPaths.destination, formSource);
