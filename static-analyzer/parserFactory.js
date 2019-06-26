const espree = require('espree');

function parserFactory(sourceType) {
    const options = {
        sourceType: sourceType,
        ecmaVersion: 2019,
        ecmaFeatures: {
            impliedStrict: true
        }
    }

    function parse(source) {
        return espree.parse(source, options);
    }

    return {
        parse: parse
    };
}

function getScriptParser() {
    const sourceType = 'script';
    
    return parserFactory(sourceType);
}

function getModuleParser() {
    const sourceType = 'module';

    return parserFactory(sourceType);
}

module.exports = {
    getScriptParser: getScriptParser,
    getModuleParser: getModuleParser
};
