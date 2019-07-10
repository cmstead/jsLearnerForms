const inquirer = require('inquirer');
const childProcess = require('child_process');

const formNumber = process.argv[2];

const formNumberPrompt = {
    message: 'Which form do you want to reset?',
    type: 'list',
    name: 'formNumber',
    choices: [1, 2, 3, 4, 5, 6]
}

let prompts = [formNumberPrompt];

inquirer
    .prompt(prompts)
    .then(function (data) {
        const finalFormSelection = data.formNumber ? data.formNumber : formNumber;
        const finalFormNumber = parseInt(finalFormSelection);

        childProcess.fork('./runner-utils/client-runners/reset-form.js', [finalFormNumber]);
    });
