function containsAssignment({
    parentName = null,
    name = null,
    value = null,
    expression = null
}) {

    function checkValue(node) {
        return value === null ||
            node.init.value === value;
    }

    function checkExpression(node) {
        const binaryExpression = node.right;

        return expression === null ||
            (
                binaryExpression.left.value === expression[0] &&
                binaryExpression.operator === expression[1] &&
                binaryExpression.right.value === expression[2]
            );
    }

    function isMatchingAssignment(node) {
        return node.type === 'AssignmentExpression' &&
            (
                name === null
                || node.left.name === name
            ) &&
            (
                checkValue(node) ||
                checkExpression(node)
            );
    }

    function nodeNameMatchesExpected(node) {
        return parentName === null 
            || (node.id && node.id.name === parentName);
    }

    function isMatchingFunction(node) {
        return node.type === 'FunctionDeclaration'
            && nodeNameMatchesExpected(node);
    }

    let parentNode = null;

    function isMatchingVariableNode(node) {

        if (isMatchingFunction(node)) {
            parentNode = node;
        } else if (parentNode !== null && isMatchingAssignment(node)) {
            return true
        }

        return false;
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

module.exports = containsAssignment;
