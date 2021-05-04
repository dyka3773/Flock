import React, { useContext} from 'react';
import context from '../contexts/context';

import { addGroup } from '../dataRequests/addGroup';

import Form from '../components/Form'

const inputs = [

    {
        label: "Group Name",
        id: "name",
        required: true
    }

]

const NewGroupCreation = () => {

    const token = useContext(context);

    return <>
        
            <h1>Add New Group</h1>
            <Form
                inputs={inputs}
                submit={{
                    label: "submit", onClick: async (sub) => {
                        console.log(sub);
                        await addGroup(sub, token);
                        window.alert("group added");
                    }
                }}
            />

        
    </>


}

export default NewGroupCreation;