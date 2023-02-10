const fs = require('fs');

const ConfigFile = './formsConfig.json';

function getConfig() {
    try {
        const data = fs.readFileSync(ConfigFile, 'utf-8');
        return JSON.parse(data);
    } catch {
        return {};
    }    
}

function writeConfig(config) {
    try {
        const data = JSON.stringify(config);
        fs.writeFileSync(ConfigFile, data);
    } catch {
        fs.writeFile(ConfigFile, "{\n    start: null\n}");
    }
}

module.exports = {
    getConfig,
    writeConfig
}