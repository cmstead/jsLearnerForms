function containsFunction({
    parentName = null,
    functionName = null
}) {

    function isMatchingName(node) {
        return functionName === null
            || (
                node.id
                && node.id.name === functionName
            )
    }

    function isMatchingFunction(node) {
        return node.type === 'FunctionDeclaration'
            && isMatchingName(node);
    }

    function isMatchingParentFunction(node) {
        return parentName === null
            || (
                node.id
                && node.id.name
            );
    }

    let parentNode = null;

    function isMatchingVariableNode(node) {

        if (isMatchingParentFunction(node)) {
            parentNode = node;
        } else if (parentNode !== null && isMatchingFunction(node)) {
            return true;
        }
    }

    function clearParentNode(node) {
        if (node === parentNode) {
            parentNode = null;
        }
    }

    return {
        predicate: isMatchingVariableNode,
        onExit: clearParentNode
    };
}

module.exports = containsFunction;
