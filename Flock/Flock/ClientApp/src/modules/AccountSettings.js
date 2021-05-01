import React, { useState, useEffect, useRef, useContext } from 'react';

import { getAccountFields } from '../dataRequests/getAccount';

import { keysToLabel } from '../usefulFunctions/formInputs';

import Form from '../components/Form';

import '../modulesCSS/AccountSettings.css'

import context from '../contexts/context';

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

    const token = useContext(context);

    useEffect(() => {

        const fetchAccount = async () => {

            const acc = await getAccountFields(token);

            const accInputs = [];
            for (let key of Object.keys(acc)) {

                //cant see password as placeholder in input and becomes type password
                /*const type = key === "password" || key === "email" ? key : "text"
    
                const value = key === "password" ? "password" : acc[key] 
    
                const required = key === "password" ? true : false*/


                const [type, readOnly] = key === "email" ? ["email", true] : ["text", false]

                //uses idToLabel object to transform keys of incoming object into form inputs with proper labels
                if (keysToLabel[key])
                    accInputs.push({
                        label: keysToLabel[key],
                        id: key,
                        value: acc[key],
                        type: type,
                        readOnly: readOnly
                    });
            }

            setAccountSettingsFormInputs(accInputs);
        }

        fetchAccount();

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