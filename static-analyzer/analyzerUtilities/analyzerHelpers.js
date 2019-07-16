function hasMatchingName(node, name) {
    return name === null
        || (node.id && node.id.name === name);
}


function isMatchingFunctionName(node, name) {
    return node.type === 'FunctionDeclaration'
        && hasMatchingName(node, name);
}

function hasNullParentState(parentName, parentNode) {
    return parentName === null && parentNode === null;
}

function hasMatchingParentState(node, parentName, parentNode) {
    return parentNode === null
        && isMatchingFunctionName(node, parentName);
}

module.exports = {
    hasMatchingParentState: hasMatchingParentState,
    hasNullParentState: hasNullParentState,
    isMatchingFunctionName: isMatchingFunctionName,
    hasMatchingName: hasMatchingName
}

