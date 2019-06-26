const fs = require('fs');

const fileNames = fs.readdirSync(__dirname)
    .filter(name => !(/^\.+$/).test(name) && name !== 'index.js');

const moduleNames = fileNames.map(name => name.split('.')[0]);

module.exports = fileNames.reduce(function(modules, fileName, index) {
    modules[moduleNames[index]] = require('./' + fileName);
    return modules;
}, {});
