const findByPredicate = require('./findByPredicate');
const analyzers = require('./analyzers');

function buildFinder(analyzer) {
    return function (ast, ...args) {
        return findByPredicate(ast, analyzer.apply(null, args));
    }
}

const analyzerApi = Object.keys(analyzers)
.reduce(function(apiObject, key){
    apiObject[key] = buildFinder(analyzers[key]);
    return apiObject;
}, {});

module.exports = analyzerApi;
