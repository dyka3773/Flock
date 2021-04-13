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

const inputConfig = {
   
        password: { type: "password", value: () =>"password", required: true },
        email: { type: "email", value: (acc, key) => acc[key], required: false },
        other: { type: "text", value: (acc, key) => acc[key], required: false }
    
}


const AccountSettings = () => {
    const [accountSettingsFormInputs, setAccountSettingsFormInputs] = useState([]);
    useEffect(() => {
        const acc = getAccount();
        const accInputs = [];
        for (let key of Object.keys(acc)) {

            //cant see password as placeholder in input and becomes type password
            /*const type = key === "password" || key === "email" ? key : "text"

            const value = key === "password" ? "password" : acc[key] 

            const required = key === "password" ? true : false*/
            let key2 = key;

            if (!inputConfig[key])
                key2 = "other"

            const { type, value, required } = inputConfig[key2];

            //uses idToLabel object to transform keys of incoming object into form inputs with proper labels
            if (keysToLabel[key])
                accInputs.push({
                    label: keysToLabel[key],
                    id: key,
                    value: value(acc,key),
                    type: type,
                    required: required
                });
        }

        setAccountSettingsFormInputs(accInputs);
    }, [])

    const onSubmitSettings = (sub) => {
        console.log("submitted",sub)
    }

    const onSubmitPassword = (sub) => {
        const { newP, confP } = sub;
        if (newP !== confP) window.alert("AH OH STINKYYYYYYYYY");
    }

    console.log(accountSettingsFormInputs);
    return (
        <div className="account-settings">
            <Form label="Account Settings" inputs={accountSettingsFormInputs} submit={{ label: "Save Changes", onClick: onSubmitSettings }}/>
            <Form label="Change Password" inputs={passwordInputs} submit={{ label: "Change Password", onClick: onSubmitPassword}}/>
        </div>
        );
}
export default AccountSettings;