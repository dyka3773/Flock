import React from 'react';
import ManagementModule from './ManagementModule';
import getContacts from '../dataRequests/getContacts'
import editContact from '../dataRequests/editContact';
import Form from '../components/Form';
import { newContactFormInputs } from '../usefulFunctions/formInputs';

const ContactManagement = () => {

    

    const modalContents = (
        <>
            <h1>Add a new contact:</h1>
            <Form
                inputs={newContactFormInputs}
                submit={{ label: "submit", onClick: (sub) => console.log(sub) }}
            />
            or
            <button className="ui button"> Import Contacts From CSV</button>
        </>
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