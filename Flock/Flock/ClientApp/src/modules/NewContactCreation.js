import React, { useEffect, useState, useContext} from 'react';

import context from '../contexts/context';

import Form from '../components/Form'
import ImportContacts from '../components/ImportContacts';
import GroupsDropdown from '../components/GroupsDropdown';

import { addContact } from '../dataRequests/addContact';

import { newContactFormInputs } from '../usefulFunctions/formInputs';

const NewContactCreation = ({onComplete}) => {

    const [selectedGroup, setSelectedGroup] = useState("");

    const token = useContext(context)

    const handleFormSubmit = (sub) => {
        addContact(sub, token, selectedGroup).then(window.alert("Done!"));
        
    }
    

    return <div>
        <Form
            label="Add a new contact:"
            inputs={newContactFormInputs}
            submit={{ label: "submit", onClick: (sub) => handleFormSubmit(sub) }}
        >
            <GroupsDropdown selectedGroup={selectedGroup} setSelectedGroup={ setSelectedGroup}/>
        </Form>
    </div>




}

export default NewContactCreation;