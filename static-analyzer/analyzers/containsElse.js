function containsElse({
    name = null
}) {

    function nodeNameMatchesExpected(node) {
        return name === null || node.id.name === name;
    }

    function isMatchingCall(node) {
        return node.type === 'FunctionDeclaration'
            && node.id
            && nodeNameMatchesExpected(node)
            && node.body.body[0]
            && node.body.body[0].type === 'IfStatement'
            && node.body.body[0].alternate;
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

module.exports = containsElse;
