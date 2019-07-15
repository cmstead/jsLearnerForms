function newObject({
    parentName = null,
    objectName
}) {

    function isParentMatch(node) {
        return node.type === 'FunctionDeclaration'
            && node.id.name === parentName;
    }

    function isNewObjectMatch(node) {
        return node.type === 'NewExpression'
            && node.callee.name === objectName;
    }

    let parentNode = null;

    function isMatchingNewObject(node) {
        if(parentName === null && parentNode === null) {
            parentNode = node;
        } else if(isParentMatch(node)) {
            parentNode = node;
        } if(parentNode !== null && isNewObjectMatch(node)) {
            return true
        }

        return false;
    }

    function clearParent(node) {
        if(parentNode === node) {
            parentNode = null;
        }
    }

    return {
        predicate: isMatchingNewObject,
        onExit: clearParent
    }
}

module.exports = newObject;
