function containsIf({
    parentName = null
}) {

    function nodeNameMatchesExpected(node) {
        return parentName === null || node.id.name === parentName;
    }

    function isMatchingCall(node) {
        return node.type === 'FunctionDeclaration'
            && node.id
            && nodeNameMatchesExpected(node)
            && node.body.body[0]
            && node.body.body[0].type === 'IfStatement';
    }

    function isMatchingVariableNode(node) {

        if (isMatchingCall(node)) {
            return true;
        }
    }

    return {
        predicate: isMatchingVariableNode,
        onExit: () => null
    };
}

module.exports = containsIf;
