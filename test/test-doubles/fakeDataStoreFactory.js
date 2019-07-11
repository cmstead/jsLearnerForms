function fakeDataStoreFactory(testData) {
    return {
        getTodoList: () => Promise.resolve(testData)
    }
}
