const childProcess = require('child_process');

function checkout(branchName) {
    childProcess.execSync(`git checkout ${branchName}`);
}

function createBranch(branchName) {
    childProcess.execSync(`git checkout -b ${branchName}`);
}

function getStatus() {
    return childProcess.execSync('git status');
}

function stash() {
    childProcess.execSync('git stash');
}

function version() {
    childProcess.execSync('git');
}

function popFromStash() {
    childProcess.execSync('git stash pop');
}

module.exports = {
    popFromStash: popFromStash,
    version: version,
    stash: stash,
    getStatus: getStatus,
    createBranch: createBranch,
    checkout: checkout
};

