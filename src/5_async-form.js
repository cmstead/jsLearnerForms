function todoToolsFactory(dataStore) {

    function getTaskNamesByCompleteStatus(todoList, status) {
        return todoList
            .filter(taskItem => taskItem.complete === status)
            .map(taskItem => taskItem.name);
    }

    function getTodoListData() {
        return dataStore
            .getTodoList()
            .then(function (todoList) {
                let responseData = {
                    complete: todoList
                        .filter(taskitem => taskitem.complete)
                        .map(taskItem => taskItem.name),
                    incomplete: todoList
                        .filter(taskItem => !taskItem.complete)
                        .map(taskItem => taskItem.name)
                };

                return Promise.resolve(responseData);
            });
    }

    return {
        getTodoListData
    };
}
