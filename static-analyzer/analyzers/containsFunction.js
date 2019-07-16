const {
    isMatchingFunctionName,
    hasMatchingParentState,
    hasNullParentState
} = require('../analyzerUtilities/analyzerHelpers');

function containsFunction({
    parentName = null,
    functionName = null,
    parameters = null
}) {

    function checkAllParameters(node) {
        return parameters === null
            || (
                node.params.length === parameters.length
                && node.params.reduce(function (result, parameter, index) {
                    return result && parameter.name === parameters[index];
                }, true)
            );
    }

    function hasMatchingParameters(node) {
        return parameters === null
            || checkAllParameters(node);
    }

    let parentNode = null;

    function hasMatchingFunctionState(node, functionName, parentNode) {
        return parentNode !== null
            && isMatchingFunctionName(node, functionName)
            && hasMatchingParameters(node);
    }

    function isMatchingFunctionNode(node) {
        const isParentNodeSetState = hasNullParentState(parentName, parentNode)
            || hasMatchingParentState(node, parentName, parentNode)

        parentNode = isParentNodeSetState ? node : parentNode;

        return parentNode !== null && hasMatchingFunctionState(node, functionName, parentNode);
    }

    function clearParentNode(node) {
        if (node === parentNode) {
            parentNode = null;
        }
    }

    return {
        predicate: isMatchingFunctionNode,
        onExit: clearParentNode
    };
}

module.exports = containsFunction;
