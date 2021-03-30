import React from 'react';
import ManagementModule from './ManagementModule';
import getContacts from '../dataFetching/getContacts'

const ContactManagement = () => {




    return (

        <ManagementModule getItems={getContacts} listTitle={"Contact List"} columnTitles={"name surname email"} />
        
        );
}

export default ContactManagement;