import React from 'react';
import Form from '../components/Form';
import '../modulesCSS/LogIn.css';

const inputs = [
 {
        label: "Email",
        id: "email",
        type: "email" //optional
    },
    {
        label: "Password",
        id: "password",
        type: "password" //optional
    }
  ]





const LogIn = () => {




    return (
        <div className="log-in">
                <Form
                    label="Log In"
                    inputs={inputs}
                    cancel={{ label: "cancel", onClick: () => console.log("cancel")}}
                    submit={{ label: "submit", onClick: (submitions) => console.log(submitions)}}
                />
        </div>
       );
}

export default LogIn;