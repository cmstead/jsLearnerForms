function containsCall({
    objectName = null,
    methodName = null,
    variableName = null
}) {

    function isMatchingCall(node) {
        return node.type === 'CallExpression' &&
            node.callee.type === 'MemberExpression' &&
            node.callee.object.name === objectName &&
            node.callee.property.name === methodName &&
            node.arguments[0].type === 'Identifier' &&
            node.arguments[0].name === variableName;
    }

    function isMatchingVariableNode(node) {

        if (isMatchingCall(node)) {
            return true
        }

        return false;
    }

    return {
        predicate: isMatchingVariableNode,
        onExit: () => null
    };
}

module.exports = containsCall;
