const childProcess = require('child_process');
const menuBuilder = require('./runner-utils/menuBuilder');
const sharedUtils = require('./runner-utils/sharedUtils');
const gitTools = require('./runner-utils/gitTools');

let inquirer, clear;

try {
    inquirer = require('inquirer');
    clear = require('clear');
} catch (e) {
    sharedUtils.logSetupError('It looks like the libraries we need aren\'t installed yet.');
    process.exit(1);
}


gitTools.checkOutBranch('workspace');

function displayMainMenu() {
    clear();
    console.log('--- JS Learner Forms Main Menu ---\n\n');

    const menuOptions = menuBuilder.buildMenuOptions();
    const menuPrompt = menuBuilder.buildMenuPrompt(menuOptions);

    inquirer
        .prompt([
            menuPrompt
        ])
        .then(function (data) {
            const selectedAction = menuOptions[data.selectedKey];

            if (typeof selectedAction === 'string') {
                const process = childProcess.fork(selectedAction);

                process.on('close', function () {
                    displayMainMenu();
                });
            } else {
                clear();
                console.log('See you next time!');
            }
        });
}

displayMainMenu();
