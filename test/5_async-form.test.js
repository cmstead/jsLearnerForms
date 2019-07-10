/*
global

chai,
todoToolsFactory,
fakeDataStoreFactory
*/

const assert = chai.assert;

function verifyOutput(actual, expected) {
    assert.equal(JSON.stringify(actual), JSON.stringify(expected));
}

describe('Forms - Async Form', function () {

    let storedData;
    let todoTools;

    beforeEach(function() {
        storedData = [];

        const fakeDataStore = fakeDataStoreFactory(storedData);

        todoTools = todoToolsFactory(fakeDataStore);
    });

    describe('Load Todos', function () {

        it('loads empty data from data store', function () {
            const expectedData = [];

            return todoTools
                .getTodoListData()
                .then(function(todoListData){
                    verifyOutput(todoListData, expectedData);
                });
        });

    });

});
