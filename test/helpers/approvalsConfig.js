'use strict';

const approvalsLocation = './test/approvals';
const quokkaApprovalsHelper = require('./quokkaApprovalsHelper')();
const approvalsConfigFactory = require('approvals-config-factory');

const approvalsConfig = approvalsConfigFactory.buildApprovalsConfig({ 
    reporter: quokkaApprovalsHelper.chooseReporter('kdiff3')
});

module.exports = require('approvals').configure(approvalsConfig).mocha(approvalsLocation);