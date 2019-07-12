function todoToolsFactory(dataStore) {

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

    function getTodoListData() {
        return dataStore
            .getTodoList()
            .then(function (todoList) {
                return buildTaskObject(todoList);
            });
    }

    function saveTask(task) {
        return dataStore.saveTask(task);
    }

    return {
        getTodoListData,
        saveTask
    };
}
