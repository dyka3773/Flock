import React, { useEffect, useState } from 'react';
import Form from '../components/Form';
import '../modulesCSS/SignUp.css';

const companyInputs = [
    {
        label: "Company Name",
        id: "companyName",
    },
    {
        label: "E-Mail",
        id: "email",
        type: "email" //optional
    },
    {
        label: "Phone Number",
        id: "phone",
        type: "number" //optional
    },
    {
        label: "Country",
        id: "country",
    },
    {
        label: "Zip Code",
        id: "zip",
        type: "number"
    },
    {
        label: "Physical Address",
        id: "address",
    },
    {
        label: "Password",
        id: "password",
        type: "password" //optional
    },
    {
        label: "Confirm Password",
        id: "confirmPassword",
        type: "password" //optional
    }
]

const personalInputs = [
    {
        label: "First Name",
        id: "name",
    },
    {
        label: "Last Name",
        id: "surname",
    },
    {
        label: "E-Mail",
        id: "email",
        type: "email" //optional
    },
    {
        label: "Phone Number",
        id: "phone",
        type: "number" //optional
    },
    {
        label: "Country",
        id: "country",
    },
    {
        label: "Zip Code",
        id: "zip",
        type: "number"
    },
    {
        label: "Password",
        id: "password",
        type: "password" //optional
    },
    {
        label: "Confirm Password",
        id: "confirmPassword",
        type: "password" //optional
    }
]





const SignUp = () => {

    const [accountType, setAccountType] = useState(0); //0 = Personal/Business 1 = Company

    useEffect(() => {
        document.querySelector("#personal").checked = true;

    },[]);


    return (
        <div className="sign-up">
            <div className="radios">
                <span className="radio">
                    <input type="radio" id="personal" name="account" onInput={() => setAccountType(0)} />
                    <label for="personal">Personal/Business</label>
                </span>
                <span className="radio">
                    <input type="radio" id="company" name="account" onInput={() => setAccountType(1) }/>
                    <label for="company">Company</label>
                </span>
            </div>
            <Form
                label="Sign Up"
                inputs={accountType ? companyInputs : personalInputs}
                cancel={{ label: "cancel", onClick: () => console.log("cancel") }}
                submit={{ label: "submit", onClick: (submitions) => console.log(submitions) }}
            />
        </div>
    );
}

export default SignUp;