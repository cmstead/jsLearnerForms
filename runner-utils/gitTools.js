const sharedUtils = require('./sharedUtils');
const gitCommands = require('./gitCommands');

function checkoutOrCreate(branchName) {
    try {
        gitCommands.checkout(branchName);
    } catch (e) {
        console.log(`Branch ${branchName} doesn't exist yet. Creating it now.`);
        gitCommands.createBranch(branchName);
    }
}

function isOutOfDate() {
    const fileStatus = gitCommands.getStatus().toString();
    const changesExist = fileStatus.includes('Changes');

    if (changesExist) {
        gitCommands.stash();
    }

    gitCommands.checkout('master');
    const status = gitCommands.getStatus();

    const outOfDateStatus = status.includes('up to date')
        || status.includes('is ahead of');

    gitCommands.checkout('workspace');

    if (changesExist) {
        gitCommands.popFromStash();
    }

    return !outOfDateStatus;
}

function setUpWorkspaceBranch() {
    let fileStashSuccessful = false;

    try {
        console.log('Setting up a working environment...');

        gitCommands.stash();
        fileStashSuccessful = true;
        checkoutOrCreate('workspace');
    } catch (e) {
        console.log('Uh oh! Something unexpected happened: ', e);
    }

    if (fileStashSuccessful) {
        gitCommands.popFromStash();
    }
}

function hasGitInstalled() {
    try {
        gitCommands.getStatus();
        return true;
    } catch (e) {
        console.log(e);
        return false;
    }
}


function checkOutBranch(branchName) {
    try {
        gitCommands.checkout(branchName);
    } catch (e) {
        sharedUtils.logSetupError(`It looks like ${branchName} is not set up yet.`);
        process.exit(1);
    }
}

function runIfGitIsInstalled(command) {
    return function (...args) {
        let result = false;

        console.log(hasGitInstalled());

        if (hasGitInstalled()) {
            result = command(...args);
        }

        return result;
    }
}

module.exports = {
    checkOutBranch: runIfGitIsInstalled(checkOutBranch),
    hasGitInstalled,
    isOutOfDate: runIfGitIsInstalled(isOutOfDate),
    setUpWorkspaceBranch: runIfGitIsInstalled(setUpWorkspaceBranch)
}

