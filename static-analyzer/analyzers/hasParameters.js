function hasParameters({
    functionName = null,
    parameterNames = []
}) {

    function isMatchingFunction(node) {
        return node.type === 'FunctionDeclaration'
            && node.id.name === functionName;
    }

    function compareParams(nodeParams) {
        let paramNamesMatch = true;
        const nodeParamNames = nodeParams.map(param => param.name);

        parameterNames.forEach(function (parameterName) {
            paramNamesMatch = paramNamesMatch
                && nodeParamNames.includes(parameterName)
        });

        return paramNamesMatch;
    }

    function paramsMatch(node) {
        return node.params.length === parameterNames.length
            && compareParams(node.params);
    }

    function isMatchingVariableNode(node) {

        if (
            isMatchingFunction(node)
            && paramsMatch(node)
        ) {
            return true;
        }

        return false;
    }

    return {
        predicate: isMatchingVariableNode,
        onExit: () => null
    };
}

module.exports = hasParameters;
