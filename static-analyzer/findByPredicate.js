const estraverse = require('estraverse');

const defaultOnExit = () => null;

function findByPredicate(ast, { predicate, onExit = defaultOnExit }) {
    let variableNodeFound = false;

    estraverse.traverse(
        ast,
        {
            enter: function (node) {
                variableNodeFound = variableNodeFound || predicate(node);
            },
            leave: onExit
        });

    return variableNodeFound;
}

module.exports = findByPredicate;
