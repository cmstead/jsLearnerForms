function containsAssignment({
    parentName = null,
    objectName = null,
    name = null,
    variableName = null,
    value = null,
    expression = null
}) {

    function checkValue(node) {
        return value !== null
            && node.init
            && node.init.value === value;
    }

    function checkVariable(node) {
        return variableName !== null
            && typeof node.right !== 'undefined'
            && node.right.name === variableName;
    }

    function binaryExpressionMatches(node) {
        return node.left
            && node.left.value === expression[0]
            && node.operator === expression[1]
            && node.right
            && node.right.value === expression[2];
    }

    function checkExpression(node) {
        return expression !== null
            && node.right
            && binaryExpressionMatches(node.right);
    }

    function leftHandMatches(node) {
        return node.left
            && node.left.name === name;
    }

    function initMatches(node) {
        return node.id
            && node.id.name === name;
    }

    function nameMatchesAssignee(node) {
        return name !== null
            && (
                leftHandMatches(node)
                || initMatches(node)
            );
    }

    function isThisExpression(node) {
        return objectName === 'this'
            && node.type === 'ThisExpression';
    }

    function objectMatches(node) {
        const result = isThisExpression(node)
            || node.name === objectName;

        return result;

    }

    function propertyMatchesAssignee(node) {
        const propertyMatches = objectName !== null
            && name !== null
            && node.left
            && node.left.object
            && objectMatches(node.left.object)
            && node.left.property.name === name;

        return propertyMatches;
    }

    function checkName(node) {
        const nameMatches = name === null
            || nameMatchesAssignee(node)
            || propertyMatchesAssignee(node);

        return nameMatches;
    }

    function setupIsAllNull() {
        return value === null
            && variableName === null
            && expression === null;
    }

    function checkAssignedValue(node) {
        const result = setupIsAllNull()
            || checkValue(node)
            || checkVariable(node)
            || checkExpression(node);

        return result;
    }

    function isAssignmentNode(node) {
        return node.type === 'AssignmentExpression'
            || node.type === 'VariableDeclarator';
    }

    function isMatchingAssignment(node) {
        return isAssignmentNode(node)
            && checkName(node)
            && checkAssignedValue(node);
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
        if (parentName === null && parentNode === null) {
            parentNode = node;
        } else if (isMatchingFunction(node)) {
            parentNode = node;
        } else if (parentNode !== null && isMatchingAssignment(node)) {
            return true;
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

module.exports = containsAssignment;
