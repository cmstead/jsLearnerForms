function prototypeContainsMethod() {
    
    function isMethodOnPrototype() {
        throw new Error('This needs to be written');
    }

    return {
        predicate: isMethodOnPrototype,
        onExit: () => null
    };
}

module.exports = prototypeContainsMethod;
