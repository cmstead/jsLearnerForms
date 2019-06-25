const express = require('express');
const open = require('open');
const app = express();

const port = 7331;

const formNumber = process.argv[2];

if(formNumber < 1 || formNumber > 3) {
    throw new Error('Form numbers may only be between 1 and 3.');
}

app.use(express.static(__dirname));

app.get('/', function(request, response) {
    response.sendStatus(201);
})

app.get('/form-1', function(request, response) {
    response.sendFile(`${__dirname}/client-views/form-1.html`);
});

app.listen(port, function() {
    console.log(`App started on port ${port}`);

    open(`http://localhost:${port}/form-${formNumber}`);
});
