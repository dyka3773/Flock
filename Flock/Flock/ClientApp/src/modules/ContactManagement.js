import React from 'react';
import ManagementModule from './ManagementModule';
import getContacts from '../dataRequests/getContacts'
import editContact from '../dataRequests/editContact';

const ContactManagement = () => {

    const inputs = [
        {
            label: "Name (a nickname for your campaign)",
            id: "name"
        },
        {
            label: "E-mail",
            id: "email",
            type: "email"
        }
        ,
        {
            label: "Groups",
            id: "groups",
        }
    ]

    const modalContents = (
        <>
            <h1>Add a new contact:</h1>
            <Form
                inputs={inputs}
                submit={{ label: "submit", onClick: (sub) => console.log(sub) }}
            />
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