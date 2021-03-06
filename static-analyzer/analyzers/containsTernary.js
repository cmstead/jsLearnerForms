function containsTernary({
    parentName = null
}) {

    function nodeNameMatchesExpected(node) {
        return parentName === null 
            || (node.id && node.id.name === parentName);
    }

    function isMatchingFunction(node) {
        return node.type === 'FunctionDeclaration'
            && nodeNameMatchesExpected(node);
    }

    function isConditionalExpression(node) {
        return node.type === 'ConditionalExpression';
    }

    let parentNode = null;

    function isMatchingVariableNode(node) {

        if (isMatchingFunction(node)) {
            parentNode = node;
        } else if(parentNode !== null && isConditionalExpression(node)) {
            return true;
        }
    }

    function clearParentNode(node) {
        if(node === parentNode) {
            parentNode = null;
        }
    }

    return {
        predicate: isMatchingVariableNode,
        onExit: clearParentNode
    };
}

module.exports = containsTernary;
