'use strict';

const childProcess = require('child_process');

const testNames = {
    1: '1_first-form.test.js',
    2: '2_second-form.test.js',
    3: '3_third-form.test.js',
    4: '4_test-dummy-form.test.js'
};

const formKey = process.argv[2];
const runOnce = typeof process.argv[3] === 'string' && process.argv[3].toLowerCase() === 'once';

if(typeof testNames[formKey] === 'undefined') {
    throw new Error('Unknown form ' + formKey + '. Options are: ' + Object.keys(testNames));
}

const commandTokens = runOnce ? ['--bail'] : ['--bail', '--watch'];
const args = commandTokens.concat(['./test/' + testNames[formKey]]);

const runner = childProcess.fork('./node_modules/mocha/bin/mocha', args, function (result) {
    console.log(result);
});
