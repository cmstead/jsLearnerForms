const childProcess = require('child_process');
const inquirer = require('inquirer');
const clear = require('clear');

clear();

console.log('Installing required libraries...\n');

childProcess.execSync('npm install');

console.log('\n');
console.log('Setup is complete.\n\n');

inquirer.prompt([
    {
        name: 'startForms',
        type: 'list',
        choices: ['yes', 'no'],
        message: 'Would you like to run the forms now?'
    }
])
.then(function(responses) {
    const startForms = responses.startForms;

    if(startForms === 'yes') {
        childProcess.fork('./start.js');
    } else {
        clear();

        console.log('In the future, to run JS Learner Forms, run the command "npm start".\n');
        console.log('See you next time!\n');

    }
});
