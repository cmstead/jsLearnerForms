const inquirer = require('inquirer');
const childProcess = require('child_process');
const clear = require('clear');

const pathRoot = __dirname + '/runner-utils/'

const options = {
    'Run a form': `${pathRoot}run-form.js`,
    'Reset a form': `${pathRoot}reset-form.js`,
    'Quit': null
};

const menuPrompt = {
    name: 'selectedKey',
    message: 'What would you like to do?',
    type: 'list',
    choices: Object.keys(options)
};


function displayMainMenu() {
    clear();
    console.log('--- JS Learner Forms Main Menu ---\n\n');
    inquirer
        .prompt([
            menuPrompt
        ])
        .then(function (data) {
            const selectedAction = options[data.selectedKey];

            if (typeof selectedAction === 'string') {
                const process = childProcess.fork(selectedAction);

                process.on('close', function() {
                    displayMainMenu();
                });
            } else {
                clear();
                console.log('See you next time!');
            }
        });
}

displayMainMenu();
