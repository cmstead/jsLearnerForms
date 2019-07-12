const childProcess = require('child_process');
const fs = require('fs');

const miscellaneousFiles = [
    'package-lock.json'
]

function removeMiscellaneousFiles() {
    console.log('Removing miscellaneous files...');

    try {
        miscellaneousFiles.forEach(function (filePath) {
            fs.unlinkSync(`${__dirname}/${filePath}`);
        });
    } catch (e) {
        // doing nothing -- if files are gone, the work is done.
    }


}

function installPackages() {
    console.log('Installing required libraries...\n');

    childProcess.execSync('npm install');

}

module.exports = {
    removeMiscellaneousFiles,
    installPackages
}
