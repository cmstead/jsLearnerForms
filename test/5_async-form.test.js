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
        testData = [];

        const fakeDataStore = fakeDataStoreFactory(testData);

        todoTools = todoToolsFactory(fakeDataStore);
    });

    describe('Load Todos', function () {

        it('loads empty data from data store', function () {
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
                name: 'Capture incomplete items',
                complete: false
            };

            testData.push(incompleteTask)
            const expectedData = {
                complete: [],
                incomplete: [incompleteTask.name]
            };

            return todoTools
                .getTodoListData()
                .then(function(todoListData) {
                    verifyOutput(todoListData, expectedData);
                });
        })

        it('loads a todo list with only a complete item', function () {
            const completeTask = {
                name: 'Capture complete items',
                complete: true
            };

            testData.push(completeTask)
            const expectedData = {
                complete: [completeTask.name],
                incomplete: []
            };

            return todoTools
                .getTodoListData()
                .then(function(todoListData) {
                    verifyOutput(todoListData, expectedData);
                });
        });

        it('loads a todo list with a complete item and an incomplete item', function () {
            const completeTask = {
                name: 'Capture complete items',
                complete: true
            };

            const incompleteTask = {
                name: 'Capture incomplete items',
                complete: false
            };

            testData.push(completeTask);
            testData.push(incompleteTask);

            const expectedData = {
                complete: [completeTask.name],
                incomplete: [incompleteTask.name]
            };

            return todoTools
                .getTodoListData()
                .then(function(todoListData) {
                    verifyOutput(todoListData, expectedData);
                });
        });

        describe('Refactoring Steps', function () {
            it('has a function getTaskNamesByCompleteStatus with parameters "todoList" and "status"', function () {
                const analyzerFunctionOptions = {
                    formNumber: 5,
                    analyzerName: 'containsFunction',
                    analyzerOptions: {
                        parentName: 'todoToolsFactory',
                        functionName: 'getTaskNamesByCompleteStatus',
                        parameters: ['todoList', 'status']
                    }
                };

                return analyzer
                    .analyze(analyzerFunctionOptions)
                    .then(function({ result }) {
                        assert.isTrue(result);
                    });
            });
        });

    });

});
