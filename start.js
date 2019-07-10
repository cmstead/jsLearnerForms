let inquirer, childProcess, clear;

function logSetupError(setupErrorMessage) {
    console.log(setupErrorMessage + '\n');
    console.log('Please run `npm run setup\' to ensure your project is properly set up.\n\n');
}

try {
    inquirer = require('inquirer');
    childProcess = require('child_process');
    clear = require('clear');
} catch (e) {
    logSetupError('It looks like the libraries we need aren\'t installed yet.');
    process.exit(1);
}

try {
    childProcess.execSync('git checkout workspace');
} catch (e) {
    logSetupError('It looks like your workspace is not set up yet.');
    process.exit(1);
}

const pathRoot = __dirname + '/runner-utils/'

const options = {
    'Run a form': `${pathRoot}run-form.js`,
    'Reset a form': `${pathRoot}reset-form.js`,
    'Update JS Learner Forms': `${pathRoot}update-forms.js`,
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
