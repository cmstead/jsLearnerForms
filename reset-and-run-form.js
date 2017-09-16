'use strict';

const childProcess = require('child_process');

const formNumber = process.argv[2];

const outputOptions = { stdio: 'inherit' }

const resetProcess = childProcess.spawn('node', ['./reset-form.js', formNumber], outputOptions);

resetProcess.on('exit', function () {
    childProcess.spawn('node', ['./run-form.js', formNumber], outputOptions);
});