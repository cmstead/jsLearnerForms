const sharedUtils = require('./sharedUtils');
const gitCommands = require('./gitCommands');
const configTools = require('./configTools');

const initialBranch = runIfGitIsInstalled(getInitialBranch)() ?? 'main';

function safePop() {
    try {
        gitCommands.popFromStash();
    } catch (e) {
        // do nothing and move along.
    }
}

function getInitialBranch() {
    let { start } = configTools.getConfig();
    if (start) {
        return start;
    }

    return 'main';
}

function checkoutOrCreate(branchName) {
    let result = null;
    try {
        result = gitCommands.checkout(branchName).toString();
    } catch {
        // do nothing and move on
    }

    if (!result || result.includes('error: ')) {
        return gitCommands.createBranch(branchName);
    }

    return result;
}

function setupInitialBranch() {
    console.log('getting initial branch name..');

    const branchName = gitCommands.getBranchName();

    console.log(`found branch: ${branchName}`);

    if (branchName && branchName !== initialBranch) {
        console.log(`checking out branch ${initialBranch}`);
        checkoutOrCreate(initialBranch);
    }

    if (!branchName) {
        console.log(`creating repository @ ${initialBranch}`);
        gitCommands.init(initialBranch);

        console.log(`commit @ ${initialBranch}`)
        gitCommands.commit('initial commit');
    }

    configTools.writeConfig({ start: initialBranch });

    return 'ok';
}

function checkoutInitialBranch() {
    gitCommands.checkout(initialBranch);
    gitCommands.pull(initialBranch);
}

function isOutOfDate() {
    const fileStatus = gitCommands.getStatus().toString();
    const changesExist = fileStatus.includes('Changes');

    if (changesExist) {
        gitCommands.stash();
    }

    gitCommands.checkout(initialBranch);
    const status = gitCommands.getStatus();

    const outOfDateStatus = status.includes('up to date')
        || status.includes('is ahead of');

    gitCommands.checkout('workspace');

    if (changesExist) {
        safePop();
    }

    return !outOfDateStatus;
}

function setUpWorkspaceBranch() {
    let fileStashSuccessful = false;

    try {
        console.log('Setting up a working environment...');

        gitCommands.stash();
        fileStashSuccessful = true;
        gitCommands.createBranch('workspace');
    } catch (e) {
        console.log('Uh oh! Something unexpected happened: ', e);
    }

    if (fileStashSuccessful) {
        safePop();
    }
}

function hasGitInstalled() {
    try {
        gitCommands.version();
        return true;
    } catch (e) {
        console.log(`returning false`);
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

        if (hasGitInstalled()) {
            result = command(...args);
        }

        return result;
    }
}

function resetCurrentBranch() {
    childProcess.execSync('git reset --hard HEAD');
}

function pullInitialBranch() {
    gitCommands.pull(initialBranch);
}

module.exports = {
    checkOutBranch: runIfGitIsInstalled(checkOutBranch),
    hasGitInstalled,
    isOutOfDate: runIfGitIsInstalled(isOutOfDate),
    setUpWorkspaceBranch: runIfGitIsInstalled(setUpWorkspaceBranch),
    resetCurrentBranch: runIfGitIsInstalled(resetCurrentBranch),
    setupInitialBranch: runIfGitIsInstalled(setupInitialBranch),
    checkoutInitialBranch: runIfGitIsInstalled(checkoutInitialBranch),
    pullInitialBranch: runIfGitIsInstalled(pullInitialBranch),
}

