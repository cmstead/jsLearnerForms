const inquirer = require('inquirer');
const childProcess = require('child_process');

const formNumber = process.argv[2];

const runModePrompt = {
    message: 'How do you want to run the form?',
    type: 'list',
    name: 'runMode',
    choices: [
        'Browser',
        'Node'
    ]
};

const formNumberPrompt = {
    message: 'Which form do you want to run?',
    type: 'list',
    name: 'formNumber',
    choices: [1, 2, 3, 4]
}

let prompts = [runModePrompt];

if (typeof formNumber === 'undefined') {
    prompts.push(formNumberPrompt);
} else if (parseInt(formNumber, 10) < 0 || parseInt(formNumber, 10) > 4) {
    throw new Error(`Unknown form number: ${formNumber}`);
}

inquirer
    .prompt(prompts)
    .then(function (data) {
        const finalFormSelection = data.formNumber ? data.formNumber : formNumber;
        const finalFormNumber = parseInt(finalFormSelection);
        const runMode = data.runMode;

        if (runMode === 'Node') {
            childProcess.fork('./runner-utils/node-runners/run-form.js', [finalFormNumber]);
        } else if (finalFormNumber < 4) {
            childProcess.fork('./serve-client-form.js', [finalFormNumber]);
        } else {
            throw new Error('Only forms 1, 2, and 3 are available for the browser');
        }
    });
