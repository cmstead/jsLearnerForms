const childProcess = require('child_process');

function getBranchName() {
    if (hasGitInstalled()) {
        try {
            return childProcess.execSync('git rev-parse --abbrev-ref HEAD').toString().trim();
        } catch (error) {
            return undefined;
        }
    }
    
    return undefined;
}

function checkout(branchName) {
    return childProcess.execSync(`git checkout ${branchName}`);
}

function createBranch(branchName) {
    return childProcess.execSync(`git checkout -b ${branchName}`);
}

function getStatus() {
    return childProcess.execSync('git status');
}

function stash() {
    return childProcess.execSync('git stash');
}

function version() {
    return childProcess.execSync('git -v');
}

function popFromStash() {
    return childProcess.execSync('git stash pop');
}

function pull(branchName) {
    return childProcess.execSync(`git pull origin ${branchName}`);
}

function init(branchName) {
    let result;


    if (branchName) {
        result = childProcess.execSync(`git init -b ${branchName}`).toString();
    } else {
        result = childProcess.execSync('git init').toString();
    }

    let more = true;
    while (more) {
        try {
            let t = getBranchName()
            more = Boolean(t);
        } catch {
            // do nothing until it works.
        }
    }

    return result;
}

function add() {
    return childProcess.execSync('git add .');
}

function commit(comment) {
    add();
    if (comment) {
        return childProcess.execSync(`git commit -m "${comment}"`);
    }

    return childProcess.execSync('git commit -m "."');
}

function hasGitInstalled() {
    try {
        version();
        return true;
    } catch (e) {
        return false;
    }
}

module.exports = {
    getBranchName,
    popFromStash: popFromStash,
    version: version,
    stash: stash,
    getStatus: getStatus,
    createBranch: createBranch,
    checkout: checkout,
    pull,
    init,
    commit,
    hasGitInstalled,
};

