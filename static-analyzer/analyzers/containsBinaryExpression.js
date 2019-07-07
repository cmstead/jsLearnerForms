function containsTernary({
    parentName = null,
    operator = null
}) {

    function nodeNameMatchesExpected(node) {
        return parentName === null 
            || (node.id && node.id.name === parentName);
    }

    function isMatchingFunction(node) {
        return node.type === 'FunctionDeclaration'
            && nodeNameMatchesExpected(node);
    }

    function isBinaryExpression(node) {
        return node.type === 'BinaryExpression'
            && node.operator === operator;
    }

    let parentNode = null;

    function isMatchingBinaryNode(node) {

        if (isMatchingFunction(node)) {
            parentNode = node;
        } else if(parentNode !== null && isBinaryExpression(node)) {
            return true;
        }
    }

    function clearParentNode(node) {
        if(node === parentNode) {
            parentNode = null;
        }
    }

    return {
        predicate: isMatchingBinaryNode,
        onExit: clearParentNode
    };
}

module.exports = containsTernary;
