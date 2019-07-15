const inquirer = require('inquirer');
const childProcess = require('child_process');

const formNumber = process.argv[2];

const formNumberPrompt = {
    message: 'Which form do you want to reset?',
    type: 'list',
    name: 'formNumber',
    choices: [
        '1 - First Form',
        '2 - Second Form',
        '3 - Third Form',
        '4 - Test Dummy Form',
        // '5 - Async Form',
        '6 - Async Test Dummy Form'
    ]
}

let prompts = [formNumberPrompt];

inquirer
    .prompt(prompts)
    .then(function (data) {
        const finalFormSelection = data.formNumber ? data.formNumber : formNumber;
        const finalFormNumber = parseInt(finalFormSelection);

        childProcess.fork('./runner-utils/client-runners/reset-form.js', [finalFormNumber]);
    });
