'use strict';


function getFunctionName (fn) {
    return fn.name === '' ? 'Anonymous Function' : fn.name;
}

function processFunction (key, value) {
    return typeof value === 'function' ? getFunctionName(value) : value;
}

function prettyJson(obj) {
    return typeof obj !== 'undefined' ? 
    JSON.stringify(obj, processFunction, 4) :
    '"undefined"';
}

function stringify (obj) {
    return typeof obj !== 'undefined' ? 
    JSON.stringify(obj) :
    '"undefined"';
}

module.exports = {
    prettyJson: prettyJson,
    stringify: stringify
};