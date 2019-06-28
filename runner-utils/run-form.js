const inquirer = require('inquirer');
const childProcess = require('child_process');

const formNumber = process.argv[2];

const formNumberPrompt = {
    message: 'Which form do you want to run?',
    type: 'list',
    name: 'formNumber',
    choices: [1, 2, 3, 4, 6]
}

let prompts = [formNumberPrompt];

inquirer
    .prompt(prompts)
    .then(function (data) {
        const finalFormSelection = data.formNumber ? data.formNumber : formNumber;
        const finalFormNumber = parseInt(finalFormSelection);

        childProcess.fork('./serve-client-form.js', [finalFormNumber]);
    });
