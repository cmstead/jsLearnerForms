/* global httpService, contactService, pluginApi, asyncContacts */

// eslint-disable-next-line
function buildAsyncContacts() {
    'use strict';
    
    /*
    * This file is provided in order to demonstrate how the 
    * application is built and run. No work needs to be done here.
    */

    const httpInstance = httpService();
    const contactServiceInstance = contactService(httpInstance);
    const pluginApiInstance = pluginApi();

    return asyncContacts(contactServiceInstance, pluginApiInstance);

}
