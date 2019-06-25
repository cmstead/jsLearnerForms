'use strict';

const childProcess = require('child_process');

const formNumber = process.argv[2];

const outputOptions = { stdio: 'inherit' }

const resetProcess = childProcess.spawn('node', ['./runner-utils/reset-form.js', formNumber], outputOptions);

resetProcess.on('exit', function () {
    childProcess.spawn('node', ['./runner-utils/node-runners/run-form.js', formNumber], outputOptions);
});
