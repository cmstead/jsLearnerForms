const express = require('express');
const open = require('open');
const app = express();
var livereload = require('livereload');
const inquirer = require('inquirer');

const port = 7331;

const formNumber = process.argv[2];

if (formNumber < 1 || formNumber > 3) {
    throw new Error('Form numbers may only be between 1 and 3.');
}

app.use(express.static(__dirname));

app.get('/', function (request, response) {
    response.sendStatus(201);
})

app.get('/form-1', function (request, response) {
    response.sendFile(`${__dirname}/client-views/form-1.html`);
});

app.get('/form-2', function (request, response) {
    response.sendFile(`${__dirname}/client-views/form-2.html`);
});

app.get('/form-3', function (request, response) {
    response.sendFile(`${__dirname}/client-views/form-3.html`);
});

app.listen(port, function () {
    console.log(`App started on port ${port}`);

    var server = livereload.createServer();
    server.watch(__dirname + "/src");

    open(`http://localhost:${port}/form-${formNumber}`);


    inquirer.prompt([
        {
            message: 'When ready, press enter to quit:',
            name: 'quit',
            type: 'list',
            choices: ['quit'],
            validate: response => response.trim().toLowerCase() === 'q'
        }
    ]).then(function () {
        process.exit();
    });

});
