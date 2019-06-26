function containsVariable({
        kinds = ['const', 'let', 'var'],
        name,
        value = null
    }) {
    let declarationNode = null

    function checkValue(node) {
        return value === null ||
            node.init.value === value;
    }

    function isMatchingDeclarator(node, parentNode) {
        return parentNode !== null &&
            node.type === 'VariableDeclarator' &&
            node.id.name === name &&
            checkValue(node);
    }

    function isMatchingDeclaration(node) {
        return node.type === 'VariableDeclaration' &&
            kinds.includes(node.kind.toLowerCase().trim());
    }

    function isMatchingVariableNode(node) {

        if (isMatchingDeclaration(node)) {
            declarationNode = node
        }

        if (isMatchingDeclarator(node, declarationNode)) {
            return true
        }

        return false;
    }

    function onExit(node) {
        if (declarationNode === node) {
            declarationNode = null;
        }
    }

    return {
        predicate: isMatchingVariableNode,
        onExit: onExit
    };

    // return findByPredicate(ast, isMatchingVariableNode, onExit);
}

module.exports = containsVariable;
