'use strict';

const childProcess = require('child_process');
const inquirer = require('inquirer');

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
const args = commandTokens.concat(['./test/node/' + testNames[formKey]]);

childProcess.fork('./node_modules/mocha/bin/mocha', args);

inquirer.prompt([
    {
        message: 'When ready, press enter to quit:',
        name: 'quit',
        type: 'list',
        choices: ['quit'],
        validate: response => response.trim().toLowerCase() === 'q'
    }
]).then(function () {
    process.exit();
});
