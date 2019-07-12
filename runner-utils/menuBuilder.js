const gitTools = require('./gitTools');

const pathRoot = __dirname + '/../runner-utils/'

function buildMenuOptions() {
    const options = {
        'Run a form': `${pathRoot}run-form.js`,
        'Reset a form': `${pathRoot}reset-form.js`
    };

    if (gitTools.isOutOfDate()) {
        options['Update JS Learner Forms'] = `${pathRoot}update-forms.js`;
    }

    options['Quit'] = null;

    return options;
}

function buildMenuPrompt(choices) {
    return {
        name: 'selectedKey',
        message: 'What would you like to do?',
        type: 'list',
        choices: Object.keys(choices)
    };
}

module.exports = {
    buildMenuOptions,
    buildMenuPrompt
}
