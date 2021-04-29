import React from 'react';

import ManagementModule from './ManagementModule';
import NewContactCreation from './NewContactCreation';

import getContacts from '../dataRequests/getContacts'
import editContact from '../dataRequests/editContact';





const ContactManagement = () => {

    
    

    const modalContents = (
        <NewContactCreation />
    )


    return (

        <ManagementModule
            getItems={getContacts}
            listTitle={"Contact List"}
            columnTitles={"name surname email"}
            editItems={editContact}
            modalContents={modalContents}
        />
        
        );
}

export default ContactManagement;