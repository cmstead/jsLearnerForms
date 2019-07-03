function containsCall({
    objectName = null,
    methodName = null,
    variableName = null,
    parentName = null
}) {

    function isMatchingParent(node) {
        return parentName === null
            || (node.id
                && node.id.name === parentName);
    }

    function isMatchingMethodCall(node) {
        return node.type === 'MemberExpression'
            && node.object.name === objectName
            && node.property.name === methodName;
    }

    function isMatchingFunctionCall(node) {
        return node.type === 'Identifier'
            && node.name === methodName;
    }

    function isMatchingVariableArgument(node) {
        return variableName === null
            || (
                node.arguments[0].type === 'Identifier'
                && node.arguments[0].name === variableName
            );
    }

    function isMatchingCall(node) {
        return node.type === 'CallExpression'
            && (
                isMatchingFunctionCall(node.callee)
                || isMatchingMethodCall(node.callee)
            )
            && isMatchingVariableArgument(node);
    }

    let parentNode = null;

    function isMatchingVariableNode(node) {

        if (isMatchingParent(node)) {
            parentNode = node;
        } else if (parentNode !== null && isMatchingCall(node)) {
            return true
        }

        return false;
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

module.exports = containsCall;
