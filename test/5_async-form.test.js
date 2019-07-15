/*
global

analyzer,
chai,
fakeDataStoreFactory,
todoToolsFactory
*/

const assert = chai.assert;

function verifyOutput(actual, expected) {
    assert.equal(JSON.stringify(actual), JSON.stringify(expected));
}

describe('Forms - Async Form', function () {

    let testData;
    let todoTools;

    beforeEach(function () {
        testData = {
            todoList: [],
            taskId: 1
        };

        const fakeDataStore = fakeDataStoreFactory(testData);

        todoTools = todoToolsFactory(fakeDataStore);
    });

    describe('Load todos', function () {

        it('loads empty data from data store (dataStore.getTodoList)', function () {
            const expectedData = {
                complete: [],
                incomplete: []
            };

            return todoTools
                .getTodoListData()
                .then(function (todoListData) {
                    verifyOutput(todoListData, expectedData);
                });
        });

        it('loads a todo list with only an incomplete item', function () {
            const incompleteTask = {
                id: 1,
                name: 'Capture incomplete items',
                complete: false
            };

            testData.todoList.push(incompleteTask)
            const expectedData = {
                complete: [],
                incomplete: [incompleteTask]
            };

            return todoTools
                .getTodoListData()
                .then(function (todoListData) {
                    verifyOutput(todoListData, expectedData);
                });
        })

        it('loads a todo list with only a complete item', function () {
            const completeTask = {
                id: 1,
                name: 'Capture complete items',
                complete: true
            };

            testData.todoList.push(completeTask)
            const expectedData = {
                complete: [completeTask],
                incomplete: []
            };

            return todoTools
                .getTodoListData()
                .then(function (todoListData) {
                    verifyOutput(todoListData, expectedData);
                });
        });

        it('loads a todo list with a complete item and an incomplete item', function () {
            const completeTask = {
                id: 1,
                name: 'Capture complete items',
                complete: true
            };

            const incompleteTask = {
                id: 2,
                name: 'Capture incomplete items',
                complete: false
            };

            testData.todoList.push(completeTask);
            testData.todoList.push(incompleteTask);

            const expectedData = {
                complete: [completeTask],
                incomplete: [incompleteTask]
            };

            return todoTools
                .getTodoListData()
                .then(function (todoListData) {
                    verifyOutput(todoListData, expectedData);
                });
        });

        describe('Refactoring Steps', function () {
            it('has a function getTasksByCompleteStatus with parameters "todoList" and "status"', function () {
                const analyzerFunctionOptions = {
                    formNumber: 5,
                    analyzerName: 'containsFunction',
                    analyzerOptions: {
                        parentName: 'todoToolsFactory',
                        functionName: 'getTasksByCompleteStatus',
                        parameters: ['todoList', 'status']
                    }
                };

                return analyzer
                    .analyze(analyzerFunctionOptions)
                    .then(function ({ result }) {
                        assert.isTrue(result);
                    });
            });

            it('is refactored to call getTasksByCompleteStatus instead of inline filter', function () {
                const analyzerNewCallOptions = {
                    formNumber: 5,
                    analyzerName: 'containsCall',
                    analyzerOptions: {
                        parentName: 'getTodoListData',
                        methodName: 'getTasksByCompleteStatus'
                    }
                };

                const analyzerExtractedNewCallOptions = {
                    formNumber: 5,
                    analyzerName: 'containsCall',
                    analyzerOptions: {
                        parentName: 'buildTaskObject',
                        methodName: 'getTasksByCompleteStatus'
                    }
                };

                const analyzerOldCallOptions = {
                    formNumber: 5,
                    analyzerName: 'containsCall',
                    analyzerOptions: {
                        parentName: 'getTodoListData',
                        objectName: 'todoList',
                        methodName: 'filter'
                    }
                };

                return analyzer
                    .analyze(analyzerOldCallOptions)
                    .then(function ({ result }) {
                        assert.isFalse(result, 'todoList.filter is still being used in getTodoListData.');

                        return analyzer
                            .analyze(analyzerNewCallOptions);
                    })
                    .then(function ({ result }) {
                        if (result === false) {
                            return analyzer
                                .analyze(analyzerExtractedNewCallOptions);
                        } else {
                            return Promise.resolve({ result: result });
                        }
                    })
                    .then(function ({ result }) {
                        assert.isTrue(result, 'getTasksByCompleteStatus is not being used in getTodoListData');
                    });
            });

            it('has a function called buildTaskObject with parameter "todoList"', function () {
                const analyzerFunctionOptions = {
                    formNumber: 5,
                    analyzerName: 'containsFunction',
                    analyzerOptions: {
                        parentName: 'todoToolsFactory',
                        functionName: 'buildTaskObject',
                        parameters: ['todoList']
                    }
                };

                return analyzer
                    .analyze(analyzerFunctionOptions)
                    .then(function ({ result }) {
                        assert.isTrue(result);
                    });
            });

            it('is refactored to call buildTaskObject instead of calling getTasksByCompleteStatus', function () {
                const analyzerNewCallOptions = {
                    formNumber: 5,
                    analyzerName: 'containsCall',
                    analyzerOptions: {
                        parentName: 'getTodoListData',
                        methodName: 'buildTaskObject'
                    }
                };

                const analyzerOldCallOptions = {
                    formNumber: 5,
                    analyzerName: 'containsCall',
                    analyzerOptions: {
                        parentName: 'getTodoListData',
                        methodName: 'getTasksByCompleteStatus'
                    }
                };

                return analyzer
                    .analyze(analyzerOldCallOptions)
                    .then(function ({ result }) {
                        assert.isFalse(result, 'getTasksByCompleteStatus is still being used in getTodoListData.');

                        return analyzer
                            .analyze(analyzerNewCallOptions);
                    })
                    .then(function ({ result }) {
                        assert.isTrue(result, 'getTasksByCompleteStatus is not being used in getTodoListData');
                    });
            });

            it('returns the result of buildTaskObject directly, without a variable assignment', function () {
                const analyzerAssignmentOptions = {
                    formNumber: 5,
                    analyzerName: 'containsAssignment',
                    analyzerOptions: {
                        parentName: 'getTodoListData'
                    }
                };

                return analyzer
                    .analyze(analyzerAssignmentOptions)
                    .then(function ({ result }) {
                        assert.isFalse(result, 'An assignment still exists in the getTodoListData function');
                    });
            });
        });

    });

    describe('Create todo task', function () {
        it('should save a new task (dataStore.saveTask)', function () {
            return todoTools
                .saveTask('Create a new task')
                .then(function (taskId) {
                    assert.equal(typeof taskId, 'number');
                });
        });
    });
});
