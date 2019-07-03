function containsArrowFunction({
    parentName = null
}) {

    function isMatchingFunction(node) {
        return node.type === 'ArrowFunctionExpression';
    }

    function isMatchingParentFunction(node) {
        return parentName === null
            || (
                node.id
                && node.id.name === parentName
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

module.exports = containsArrowFunction;
