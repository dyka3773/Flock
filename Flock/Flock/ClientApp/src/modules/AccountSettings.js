import React, { useState, useEffect, useRef } from 'react';

import getAccount from '../dataRequests/getAccount';

import { idToLabel } from '../usefulFunctions/formInputs';

import Form from '../components/Form';

const passwordInputs = [
    {
        label: "Old Password",
        id: "oldP",
        type: "password" 
    },
    {
        label: "New Password",
        id: "newP",
        type: "password" 
    },
    {
        label: "Confirm Passoword",
        id: "confP",
        type: "password"
    }
]

const AccountSettings = () => {
    const [accountSettingsFormInputs, setAccountSettingsFormInputs] = useState([]);
    useEffect(() => {
        const acc = getAccount();
        const accInputs = [];
        for (let key of Object.keys(acc)) {

            if (idToLabel[key])
                accInputs.push({
                    label: idToLabel[key],
                    id: key,
                    value:acc[key]
                });
        }

        setAccountSettingsFormInputs(accInputs);
        
    },[])
    
    console.log(accountSettingsFormInputs);
    return (
        <div className="flex">
            <Form label="Account Settings" inputs={accountSettingsFormInputs} submit={{ label: "Save Changes", onClick: (sub) => console.log(sub) }}/>
            <Form label="Change Password" inputs={passwordInputs} submit={{ label: "Change Password", onClick: (sub) => console.log(sub)}}/>
        </div>
        );
}
export default AccountSettings;