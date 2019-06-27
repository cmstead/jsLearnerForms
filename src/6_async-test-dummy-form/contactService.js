// eslint-disable-next-line
function contactService(
    http
) {
    'use strict';

    function getContactNameList(userId, callback) {
        let request = {
            url: '/getContactNameList/:userId',
            urlData: {
                userId: userId
            }
        };

        http.get(request)
            .send()
            .then(function (recordset) {
                callback(null, recordset);
            })
            .catch(function (error) {
                callback(error, null);
            });
    }

    module.exports = {
        getContactNameList: getContactNameList
    };

}
