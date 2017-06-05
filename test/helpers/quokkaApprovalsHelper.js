'use strict';

module.exports = function (approvalsPath) {

    const verifyByMethod = (methodName) => (context, ...args) => {
        let approvalsArgs = [approvalsPath, '_quokka-report'];
        let data = args[0];

        try {
            if (typeof context !== 'undefined') {
                context[methodName].apply(context, args);
            } else {
                approvals[methodName].apply(approvals, approvalsArgs.concat(args));
            }
        } catch (e) {
            throw new Error('Resulting Output: ' + data);
        }

    }

    before(function quokkaMochaBddApprovalReporter() {
        global.verifyAsJSON = verifyByMethod('verifyAsJSON');
        global.verifyAsJSONAndScrub = verifyByMethod('verifyAsJSONAndScrub');
        global.verify = verifyByMethod('verify');
        global.verifyAndScrub = verifyByMethod('verifyAndScrub');
        global.verifyWithControl = verifyByMethod('verifyWithControl');
    });

    function chooseReporter(preferredReporter) {
        return typeof runQuokkaMochaBdd === 'function' ? 'donothing' : preferredReporter;
    }

    return {
        chooseReporter: chooseReporter
    };
}
