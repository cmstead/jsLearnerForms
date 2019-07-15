/* global sinon */

function resolveOrReject(data, key) {
    return sinon.stub().callsFake(function() {
        const response = data[key];

        if(response instanceof Error) {
            return Promise.reject(response);
        } else {
            return Promise.resolve(response);
        }
    
    });
}

function stubify(callThroughFunction) {
    return sinon.stub().callsFake(callThroughFunction);
}

function fakeDataStoreFactory(testData) {
    return {
        getTodoList: resolveOrReject(testData, 'todoList'),
        saveTask: resolveOrReject(testData, 'taskId')
    }
}
