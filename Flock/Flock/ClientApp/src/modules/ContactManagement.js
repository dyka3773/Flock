import React from 'react';

import ManagementModule from './ManagementModule';
import NewContactCreation from './NewContactCreation';

import getContacts from '../dataRequests/getContacts'
import editContact from '../dataRequests/editContact';
import { getContsPageNum } from '../dataRequests/getPageNum';

import { dataToAccordionHeadersContact } from '../usefulFunctions/configs';




const ContactManagement = () => {

    
    

    const modalContents = (
        <NewContactCreation />
    )


    return (

        <ManagementModule
            getMaxPage={getContsPageNum}
            getItems={getContacts}
            listTitle={"Contact List"}
            columnTitles={"name surname email"}
            editItems={editContact}
            modalContents={modalContents}
            accordionHeadersConfig ={dataToAccordionHeadersContact}
        />
        
        );
}

export default ContactManagement;