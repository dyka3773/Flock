import React, { useEffect, useState, useContext} from 'react';

import context from '../contexts/context';

import Form from '../components/Form'
import ImportContacts from '../components/ImportContacts'

import getGroups from '../dataRequests/getGroups';
import addContact from '../dataRequests/addContact';

import { newContactFormInputs } from '../usefulFunctions/formInputs';

const NewContactCreation = () => {
    const [groups, setGroups] = useState([]);
    const [selectedGroup, setSelectedGroup] = useState("");

    const token = useContext(context)


    useEffect(() => {
        const groupsData = getGroups();

        const groups = groupsData.map((gr) => {
            return (
                <option value={gr.id} key={gr.id}>{gr.name}</option>
            )
        })

        setGroups(groups);
    }, [])

    const handleFormSubmit = (sub) => {
        addContact(sub,token,4);

    }
    

    return <>
        <h1>Add a new contact:</h1>
        <Form
            inputs={newContactFormInputs}
            submit={{ label: "submit", onClick: (sub) => handleFormSubmit(sub) }}
        >
            <label>Choose one or more groups</label>
            <select required onChange={(e)=>setSelectedGroup(e.target.value)} value={selectedGroup}>
                {groups}
            </select>
        </Form>
            or
        <ImportContacts />
    </>




}

export default NewContactCreation;