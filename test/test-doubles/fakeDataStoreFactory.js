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

// eslint-disable-next-line
function stubify(callThroughFunction) {
    return sinon.stub().callsFake(callThroughFunction);
}

// eslint-disable-next-line
function fakeDataStoreFactory(testData) {
    return {
        getTodoList: resolveOrReject(testData, 'todoList'),
        saveTask: resolveOrReject(testData, 'taskId'),
        deleteTask: resolveOrReject(testData, 'deleteRowCount')
    }
}
