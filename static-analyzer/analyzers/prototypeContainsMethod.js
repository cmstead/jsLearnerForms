function prototypeContainsMethod({
    objectName = null,
    methodName = null
}) {

    function isPrototypeObjectAssignment(node) {
        return node.type === 'AssignmentExpression'
            && node.left.type === 'MemberExpression'
            && node.left.object.name === objectName
            && node.left.property.name === 'prototype'
            && node.right.type === 'ObjectExpression';
    }

    function doesObjectContainMethod(node) {
        let methodWasFound = false;

        node.properties.forEach(function (property) {
            methodWasFound = methodWasFound
                || (
                    property.key.name === methodName
                    && property.value.type === 'FunctionExpression'
                );
        });

        return methodWasFound;
    }

    function isMethodOnPrototype(node) {
        return isPrototypeObjectAssignment(node)
            && doesObjectContainMethod(node.right);
    }

    return {
        predicate: isMethodOnPrototype,
        onExit: () => null
    };
}

module.exports = prototypeContainsMethod;
