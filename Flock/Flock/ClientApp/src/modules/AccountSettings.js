import React, { useState, useEffect, useRef } from 'react';

import getAccount from '../dataRequests/getAccount';

import { keysToLabel } from '../usefulFunctions/formInputs';

import Form from '../components/Form';

import '../modulesCSS/AccountSettings.css'

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

            //cant see password as placeholder in input and becomes type password
            const { type, value } = key === "password" ? { type: key, value: "" } : { type: "text", value: acc[key] } 

            //uses idToLabel object to transform keys of incoming object into form inputs with proper labels
            if (keysToLabel[key])
                accInputs.push({
                    label: keysToLabel[key],
                    id: key,
                    value: value,
                    type:type

                });
        }

        setAccountSettingsFormInputs(accInputs);
        
    },[])
    
    console.log(accountSettingsFormInputs);
    return (
        <div className="account-settings">
            <Form label="Account Settings" inputs={accountSettingsFormInputs} submit={{ label: "Save Changes", onClick: (sub) => console.log(sub) }}/>
            <Form label="Change Password" inputs={passwordInputs} submit={{ label: "Change Password", onClick: (sub) => console.log(sub)}}/>
        </div>
        );
}
export default AccountSettings;