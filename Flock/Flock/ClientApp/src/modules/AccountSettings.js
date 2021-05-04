import React, { useState, useEffect, useRef, useContext } from 'react';

import { getAccountFields } from '../dataRequests/getAccount';
import login from '../dataRequests/login';
import editAccount from '../dataRequests/editAccount';


import { accountSettingsDataToFormInputs } from '../usefulFunctions/configs'

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
    const [account, setAccount] = useState({});
    
    console.log(account);

    const token = useContext(context);

    useEffect(() => {

        const fetchAccount = async () => {

            setAccount(await getAccountFields(token));
            
        }

        fetchAccount();

    }, [])

    const inputs = () => {

        const accInputs = [];

        for (let key of Object.keys(account)) {
            if (accountSettingsDataToFormInputs[key]) {
                const inp = accountSettingsDataToFormInputs[key];
                inp.value = account[key];
                accInputs.push(inp);
            }
        }


        accInputs.push({
            id: "password",
            label: "Confirm Password",
            value: "password",
            type: "password",
            required: true
        })

        return accInputs;
    }


    const onSubmitSettings = async (sub) => {
        const token = await login(account.email, sub.password);
        if (token) {
            await editAccount(token, sub, account.type);
            window.alert("Done");
        } else
            window.alert("Wrong Password") 
        
    }

    const onSubmitPassword = async (sub) => {
        const { newP, confP } = sub;
        const token = await login(account.email, sub.oldP);

        if (!token) {
            window.alert("Wrong old password");
            return;
        }

        if (newP !== confP) window.alert("New password and confirm password dont match");
        else {
            const acc = { ...account, ["password"]: newP }
            console.log(acc);
            await editAccount(token, acc, account.type);
            window.alert("Done");   
        }
    }

    
    return (
        <div className="account-settings">
            <Form label="Account Settings" inputs={inputs()} submit={{ label: "Save Changes", onClick: onSubmitSettings }} />
            <Form label="Change Password" inputs={passwordInputs} submit={{ label: "Change Password", onClick: onSubmitPassword}}/>
        </div>
        );
}
export default AccountSettings;