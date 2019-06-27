const parserFactory = require('./parserFactory');
const analyzer = require('./analyzer');

function staticAnalyzer(parser) {
    function buildAction(action) {
        return function (source, ...args) {
            const ast = parser.parse(source);

            return action.apply(null, [ast].concat(args));
        };
    }

    const analyzerApi = Object.keys(analyzer)
        .reduce(function(apiObject, key){
            apiObject[key] = buildAction(analyzer[key]);
            return apiObject;
        }, {});

    return analyzerApi;
}

const parserOptions = {
    script: parserFactory.getScriptParser,
    module: parserFactory.getModuleParser
};

function getAnalyzer(getParser) {
    return () => staticAnalyzer(getParser())
}


module.exports = {
    getScriptAnalyzer: getAnalyzer(parserOptions.script),
    getModuleAnalyzer: getAnalyzer(parserOptions.module)
};
