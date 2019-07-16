// eslint-disable-next-line
function todoToolsFactory(dataStore, externalDataService) {

    function getTasksByCompleteStatus(todoList, status) {
        return todoList
            .filter(task => task.complete === status);
    }

    function buildTaskObject(todoList) {
        return {
            complete: getTasksByCompleteStatus(todoList, true),
            incomplete: getTasksByCompleteStatus(todoList, false)
        };
    }

    function saveTask(task) {
        return dataStore.saveTask(task);
    }

    function deleteTask(taskId) {
        return dataStore.deleteTask(taskId);
    }

    function getTodoListData() {
        return dataStore
            .getTodoList()
            .then(function (todoList) {
                return buildTaskObject(todoList);
            });
    }

    function promisify(callbackCallingMethod, callArguments) {
        return new Promise(function(resolve, reject) {
            function callbackToPromise(error, data) {
                if(error) {
                    reject(error)
                } else {
                    resolve(data);
                }
            }

            const allMethodArgs = callArguments.concat(callbackToPromise);

            callbackCallingMethod.apply(null, allMethodArgs);
        });
    }

    function getRemoteMemoById(memoId) {
        return promisify(
            externalDataService.getRemoteMemoById,
            [memoId]
        )
    }

    function getRemoteMemos(memoIds) {
        const promises = memoIds.map(memoId => getRemoteMemoById(memoId));

        return Promise.all(promises);
    }

    return {
        deleteTask,
        getRemoteMemoById,
        getRemoteMemos,
        getTodoListData,
        saveTask
    };
}
