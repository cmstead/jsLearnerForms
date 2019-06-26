const fs = require('fs');

function getSourceFile(filePath) {
    return fs.readFileSync(filePath, { encoding: 'utf8' });
}

module.exports = getSourceFile;
