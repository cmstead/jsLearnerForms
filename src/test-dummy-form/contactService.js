'use strict';

function getContactNameList (userId, callback){
    let request = {
        url: '/getContactNameList/:userId',
        urlData: {
            userId: userId
        }
    };

    http.get(request)
    .send()
    .then((recordset) => callback(null, recordset))
    .catch((error) => callback(error, null));
}

module.exports = {
    getContactNameList: getContactNameList
};