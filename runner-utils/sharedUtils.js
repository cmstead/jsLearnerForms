function logSetupError(setupErrorMessage) {
    console.log(setupErrorMessage + '\n');
    console.log('Please run `npm run setup\' to ensure your project is properly set up.\n\n');
}

module.exports = {
    logSetupError
}
