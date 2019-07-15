function prototypeContainsMethod({
    objectName = null,
    methodName = null
}) {

    function isObjectPrototype(node) {
        return node.type === 'MemberExpression'
            && node.object.name === objectName
            && node.property.name === 'prototype';
    }

    function isPrototypeObjectAssignment(node) {
        return node.type === 'AssignmentExpression'
            && isObjectPrototype(node.left)
            && node.right.type === 'ObjectExpression';
    }

    function isPrototypePropertyAssignment(node) {
        return node.type === 'AssignmentExpression'
            && node.left.type === 'MemberExpression'
            && isObjectPrototype(node.left.object)
            && node.left.property.name === methodName
            && node.right.type === 'FunctionExpression';
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
        return (
            isPrototypeObjectAssignment(node)
            && doesObjectContainMethod(node.right)
        )
            || isPrototypePropertyAssignment(node);
    }

    return {
        predicate: isMethodOnPrototype,
        onExit: () => null
    };
}

module.exports = prototypeContainsMethod;
