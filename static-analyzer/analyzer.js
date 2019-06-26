const findByPredicate = require('./findByPredicate');
const analyzers = require('./analyzers');

function buildFinder(analyzer) {
    return function (ast, ...args) {
        return findByPredicate(ast, analyzer.apply(null, args));
    }
}

module.exports = {
    containsVariable: buildFinder(analyzers.containsVariable)
}
