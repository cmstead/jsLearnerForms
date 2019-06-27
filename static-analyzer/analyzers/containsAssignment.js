function containsAssignment({
    name,
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
            node.left.name === name &&
            (
                checkValue(node) ||
                checkExpression(node)
            );
    }

    function isMatchingVariableNode(node) {

        if (isMatchingAssignment(node)) {
            return true
        }

        return false;
    }

    return {
        predicate: isMatchingVariableNode,
        onExit: () => null
    };
}

module.exports = containsAssignment;
