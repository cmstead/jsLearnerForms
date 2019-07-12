const { installPackages, removeMiscellaneousFiles } = require('./runner-utils/setup-actions');

removeMiscellaneousFiles();
installPackages();

const childProcess = require('child_process');
const inquirer = require('inquirer');
const clear = require('clear');
const gitTools = require('./runner-utils/gitTools');

gitTools.setUpWorkspaceBranch();

console.log('\nSetup is complete.\n\n');

inquirer.prompt([
    {
        name: 'startForms',
        type: 'list',
        choices: ['yes', 'no'],
        message: 'Would you like to run the forms now?'
    }
])
    .then(function (responses) {
        const startForms = responses.startForms;

        if (startForms === 'yes') {
            childProcess.fork('./start.js');
        } else {
            clear();

            console.log('In the future, to run JS Learner Forms, run the command "npm start".\n');
            console.log('See you next time!\n');

        }
    });
