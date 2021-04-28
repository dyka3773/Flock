import React from 'react';

import Form from '../components/Form';

import login from '../dataRequests/login';

import '../modulesCSS/LogIn.css';

const inputs = [
 {
        label: "Email",
        id: "email",
        type: "email",
        required:true
    },
    {
        label: "Password",
        id: "password",
        type: "password",
        required: true
    }
  ]





const LogIn = ({ setToken }) => {

    const attemptLogin = async ({ email, password }) => {
        const token = await login(email, password);
        token === -1 ? window.alert("Wrong credentials") : setToken(token)
    }


    return (
        <div className="log-in">
                <Form
                    label="Log In"
                    inputs={inputs}
                    cancel={{ label: "cancel", onClick: () => console.log("cancel")}}
                    submit={{ label: "submit", onClick: (submitions) => attemptLogin(submitions)}}
                />
        </div>
       );
}

export default LogIn;