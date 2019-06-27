var bodyParser = require('body-parser')
const express = require('express');
const fs = require('fs');
const inquirer = require('inquirer');
var livereload = require('livereload');
const open = require('open');

const analyzer = require('./static-analyzer/staticAnalyzer').getModuleAnalyzer();

const app = express();

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

const port = 7331;

const formNumber = process.argv[2];

if ([1, 2, 3, 6].includes(formNumber)) {
    throw new Error('Form numbers may only be between 1 and 3.');
}

app.use(express.static(__dirname));

app.get('/', function (request, response) {
    response.sendStatus(201);
});

app.get('/form/:formId', function (request, response) {
    const formId = request.params.formId;
    response.sendFile(`${__dirname}/client-views/form-${formId}.html`);
});

const formAnalyzerFileNames = {
    1: '1_first-form.js',
    2: '2_second-form.js',
    3: '3_third-form.js'
};

app.post('/analyze/:formNumber/:analyzer', function (request, response) {
    const analyzerName = request.params.analyzer;
    const formNumber = request.params.formNumber;
    const formFileName = formAnalyzerFileNames[formNumber];
    const analyzerOptions = request.body;

    const source = fs.readFileSync(`./src/${formFileName}`, { encoding: 'utf8' });
    const analysisResult = analyzer[analyzerName](source, analyzerOptions);

    response.json({ result: analysisResult });
});

app.listen(port, function () {
    console.log(`App started on port ${port}`);

    var server = livereload.createServer();
    server.watch(__dirname + "/src");

    open(`http://localhost:${port}/form/${formNumber}`);


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
