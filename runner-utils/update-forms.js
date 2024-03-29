const childProcess = require('child_process');
const clear = require('clear');
const inquirer = require('inquirer');
const gitTools = require('./gitTools');

function removeWorkspace() {
    try{
        childProcess.execSync('git branch -D workspace');
    } catch (e) {
        // if workspace is gone, we're fine
    }
}

function updateForms() {
    console.log('Updating forms ...\n');

    gitTools.resetCurrentBranch();
    gitTools.checkoutInitialBranch();
    gitTools.pullInitialBranch();

    removeWorkspace();

    childProcess.execSync('npm i');
    childProcess.execSync('git checkout -b workspace');

    console.log('Form updates complete.');
}

clear();
console.log('Preparing to update forms...\n');

inquirer
    .prompt([
        {
            name: 'resetOk',
            message: 'This will reset everything in your workspace. Continue?',
            type: 'list',
            choices: ['Yes', 'No']
        }
    ])
    .then(function (data) {
        if(data.resetOk === 'Yes') {
            updateForms();
        } else {
            console.log('Aborted forms update.');
        }
    });
