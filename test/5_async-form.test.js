/*
global

analyzer,
chai,
fakeDataStoreFactory,
fakeTodoDataServiceFactory,
todoToolsFactory
*/

const assert = chai.assert;

describe('Forms - Async Form', function () {

    let testData;
    let remoteData;
    let todoTools;
    let fakeDataStore;
    let fakeExternalDataService;

    beforeEach(function () {
        testData = {
            todoList: [],
            taskId: 1,
            deleteRowCount: 1
        };

        remoteData = {
            error: null,
            data: null
        };

        fakeDataStore = fakeDataStoreFactory(testData);
        fakeExternalDataService = fakeTodoDataServiceFactory(remoteData);

        todoTools = todoToolsFactory(fakeDataStore, fakeExternalDataService);
    });

    describe('1 - Create todo task', function () {
        it('should save a new task (dataStore.saveTask)', function () {
            const taskValue = 'Create a new task';

            todoTools
                .saveTask(taskValue)

            assert.equal(fakeDataStore.saveTask.getCall(0).args[0], taskValue);
        });

        it('should expose the insert id on save completion', function () {
            return todoTools
                .saveTask('Create another new task')
                .then(function (insertId) {
                    assert.equal(insertId, 1);
                });
        });
    });

    describe('2 - Delete todo task', function () {
        it('should delete a task by id (dataStore.deleteTask)', function () {
            const taskId = 999;

            todoTools
                .deleteTask(taskId)

            assert.equal(fakeDataStore.deleteTask.getCall(0).args[0], taskId);
        });

        it('should expose the affected row count on completion', function () {
            const taskId = 999;

            return todoTools
                .deleteTask(taskId)
                .then(function (rowCount) {
                    assert.equal(rowCount, 1);
                });
        });
    });

    describe('3 - Load todos', function () {

        it('loads empty data from data store (dataStore.getTodoList)', function () {
            const expectedData = {
                complete: [],
                incomplete: []
            };

            return todoTools
                .getTodoListData()
                .then(function (todoListData) {
                    assert.verify(todoListData, expectedData);
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
                    assert.verify(todoListData, expectedData);
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
                    assert.verify(todoListData, expectedData);
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
                    assert.verify(todoListData, expectedData);
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

    describe('4 - Get external todo data from a callback-calling API', function () {
        it('fetches todo memo from remote service (externalDataService.getRemoteMemoById)', function () {
            const memoId = 123;
            remoteData.data = {
                memo: 'This is a memo'
            };

            todoTools
                .getRemoteMemoById(memoId)

            assert.equal(fakeExternalDataService.getRemoteMemoById.getCall(0).args[0], memoId);
            assert.equal(typeof fakeExternalDataService.getRemoteMemoById.getCall(0).args[1], 'function');
        });

        it('resolves when remote data is returned successfully', function () {
            const memoId = 123;
            remoteData.data = {
                memo: 'This is a memo'
            };

            return todoTools
                .getRemoteMemoById(memoId)
                .then(function (memo) {
                    assert.verify(memo, remoteData.data);
                });

        });

        it('rejects when remote query fails', function () {
            const memoId = 123;
            remoteData.error = new Error('Something went wrong -- Unable to retrieve memo.');

            return todoTools
                .getRemoteMemoById(memoId)
                .then(function () {
                    assert.isTrue(false, 'Promise must not resolve when an error occurs');
                })
                .catch(function (error) {
                    assert.equal(error.message, remoteData.error.message);
                });

        });

        describe('Refactoring steps', function () {
            it('has a function called "promisify" which takes parameters "callbackCallingMethod" and "callArguments"', function () {
                const analyzerFunctionOptions = {
                    formNumber: 5,
                    analyzerName: 'containsFunction',
                    analyzerOptions: {
                        parentName: 'todoToolsFactory',
                        functionName: 'promisify',
                        parameters: [
                            'callbackCallingMethod',
                            'callArguments'
                        ]
                    }
                };

                return analyzer
                    .analyze(analyzerFunctionOptions)
                    .then(function ({ result }) {
                        assert.isTrue(result);
                    });
            });

            it('uses promisify in getRemoteMemoById to handle callback-calling method', function () {
                const analyzerNewCallOptions = {
                    formNumber: 5,
                    analyzerName: 'containsCall',
                    analyzerOptions: {
                        parentName: 'getRemoteMemoById',
                        methodName: 'promisify'
                    }
                };

                const analyzerOldCallOptions = {
                    formNumber: 5,
                    analyzerName: 'containsCall',
                    analyzerOptions: {
                        parentName: 'getRemoteMemoById',
                        objectName: 'externalDataService',
                        methodName: 'getRemoteMemoById'
                    }
                };

                return analyzer
                    .analyze(analyzerNewCallOptions)
                    .then(function ({ result }) {
                        if (result === true) {
                            return analyzer
                                .analyze(analyzerOldCallOptions)
                                .then(function ({ result }) {
                                    return Promise.resolve({ result: !result });
                                });
                        } else {
                            return Promise.resolve({ result: false });
                        }
                    })
                    .then(function ({ result }) {
                        assert.isTrue(result, 'Function "promisify" is not being used in getRemoteMemoById');
                    });
            });
        });
    });

    describe('5 - Get external todo memo data from a set of ids from a callback-calling API', function () {
        it('fetches todo memo from remote service (externalDataService.getRemoteMemos)', function () {
            const memoIds = [1, 2, 3];
            remoteData.data = {
                1: {
                    memo: 'This is memo 1'
                },
                2: {
                    memo: 'This is memo 2'
                },
                3: {
                    memo: 'This is memo 3'
                },
            };

            return todoTools
                .getRemoteMemos(memoIds)
                .then(function (memos) {
                    const expectedMemos = [
                        remoteData.data[1],
                        remoteData.data[2],
                        remoteData.data[3]
                    ];

                    assert.verify(memos, expectedMemos);
                });
        });

        describe('Refactoring steps', function () {
            it('maps over all memoIds to make calls', function () {
                const analyzerCallOptions = {
                    formNumber: 5,
                    analyzerName: 'containsCall',
                    analyzerOptions: {
                        parentName: 'getRemoteMemos',
                        objectName: 'memoIds',
                        methodName: 'map'
                    }
                };

                return analyzer
                    .analyze(analyzerCallOptions)
                    .then(function ({ result }) {
                        assert.isTrue(result, 'Memo Ids are not being mapped over');
                    });

            });

            it('uses Promise.all to manage all memo requests', function () {
                const analyzerCallOptions = {
                    formNumber: 5,
                    analyzerName: 'containsCall',
                    analyzerOptions: {
                        parentName: 'getRemoteMemos',
                        objectName: 'Promise',
                        methodName: 'all'
                    }
                };

                return analyzer
                    .analyze(analyzerCallOptions)
                    .then(function ({ result }) {
                        assert.isTrue(result, 'Memo Ids are not being mapped over');
                    });

            });
        });
    });

    // You're done!
    // Good job! I like what you got.
});
