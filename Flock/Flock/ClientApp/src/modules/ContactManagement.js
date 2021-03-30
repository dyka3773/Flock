import React from 'react';
import ManagementModule from './ManagementModule';
import getContacts from '../dataRequests/getContacts'
import editContact from '../dataRequests/editContact';

const ContactManagement = () => {




    return (

        <ManagementModule
            getItems={getContacts}
            listTitle={"Contact List"}
            columnTitles={"name surname email"}
            editItems={editContact}
        />
        
        );
}

export default ContactManagement;