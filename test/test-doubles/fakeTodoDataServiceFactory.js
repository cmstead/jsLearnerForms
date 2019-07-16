/*
global

sinon
*/

// eslint-disable-next-line
function fakeTodoDataServiceFactory(remoteData) {
    function getRemoteMemoById(memoId, callback) {
        if(typeof memoId !== 'number') {
            throw new Error('Memo ID must be a number');
        }

        if(typeof callback !== 'function') {
            throw new Error('Callback must be a function');
        }

        if(remoteData.error !== null) {
            callback(remoteData.error, null);
        } else {
            if(!remoteData.data || Boolean(remoteData.data.memo)) {
                callback(null, remoteData.data);
            } else {
                callback(null, remoteData.data[memoId]);
            }
        }
    }

    return {
        getRemoteMemoById: sinon.spy(getRemoteMemoById)
    };
}
