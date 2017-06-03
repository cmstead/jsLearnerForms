'use strict';

var approvalsLocation = './test/approvals';

var approvalsConfig = {
    reporters: ['kdiff3'],

    normalizeLineEndingsTo: '\n',

    appendEOL: true,

    EOL: require('os').EOL,

    errorOnStaleApprovedFiles: true,

    shouldIgnoreStaleApprovedFile: function (/*fileName*/) { return false; },

    stripBOM: false,

    forceApproveAll: false,

    failOnLineEndingDifferences: true
};

if (typeof global.runQuokkaMochaBdd === 'function') {
    // set up custom mocha reporter
} else {
    var approvals = require('approvals').configure(approvalsConfig).mocha(approvalsLocation);
}

module.exports = approvals;