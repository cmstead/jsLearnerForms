function todoToolsFactory(dataStore) {

    function getTodoListData() {
        return dataStore
            .getTodoList()
            .then(function (todoList) {
                let responseData = {
                    complete: todoList
                        .filter(taskitem => taskitem.complete)
                        .map(taskItem => taskItem.task),
                    incomplete: todoList
                        .filter(taskItem => !taskItem.complete)
                        .map(taskItem => taskItem.task)
                };

                return Promise.resolve(responseData);
            });
    }

    return {
        getTodoListData
    };
}
