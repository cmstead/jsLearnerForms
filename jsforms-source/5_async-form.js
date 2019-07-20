// eslint-disable-next-line
function todoToolsFactory(dataStore, externalDataService) {

    function getTodoListData() {
        return Promise.resolve({});
    }

    return {
        getTodoListData
    };
}
