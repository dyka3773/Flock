import React, { useEffect, useState } from 'react';

import Form from '../components/Form';

import { personalSignup, companySignup } from '../dataRequests/signup';

import '../modulesCSS/SignUp.css';

const companyInputs = [
    {
        label: "Company Name",
        id: "name",
        required: true
    },
    {
        label: "E-Mail",
        id: "email",
        type: "email", //optional
        required: true
    },
    {
        label: "Phone Number",
        id: "phone", 
        required: true
    },
    {
        label: "Country",
        id: "country", 
        required: true
    },
    {
        label: "Zip Code",
        id: "zip",
        required: true
    },
    {
        label: "Physical Address",
        id: "phyAddress",
        required: true
    },
    {
        label: "Password",
        id: "password",
        type: "password",
        required: true
    },
    {
        label: "Confirm Password",
        id: "confirmPassword",
        type: "password",
        required: true
    }
]

const personalInputs = [
    {
        label: "First Name",
        id: "fName",
        required: true
    },
    {
        label: "Last Name",
        id: "lName",
        required: true
    },
    {
        label: "E-Mail",
        id: "email",
        type: "email",
        required: true
    },
    {
        label: "Gender",
        id: "gender",
        required: true
    },
    {
        label: "Phone Number",
        id: "phone",
        required: true
    },
    {
        label: "Country",
        id: "country",
        required: true
    },
    {
        label: "Zip Code",
        id: "zip",
        required: true
    },
    {
        label: "Password",
        id: "password",
        type: "password",
        required: true
    },
    {
        label: "Confirm Password",
        id: "confirmPassword",
        type: "password",
        required: true
    }
]





const SignUp = () => {

    const [accountType, setAccountType] = useState(0); //0 = Personal/Business 1 = Company

    useEffect(() => {
        document.querySelector("#personal").checked = true;

    }, []);

    const companySignUp = (sub) => {
        if (sub.password !== sub.confirmPassword)
            window.alert("Password fields dont match")
        else {
            delete (sub.confirmPassword)
            const aa = async () => {
                const resp = await companySignup(sub);
                console.log(resp);
            }
            aa();
        }

    }

    const personalSignUp = (sub) => {
        if (sub.password !== sub.confirmPassword)
            window.alert("Password fields dont match")
        else {
            delete (sub.confirmPassword)
            const aa = async () => {
                const resp = await personalSignup(sub);
                console.log(resp);
            }
            aa();
        }

        

    }


    return (
        <div className="sign-up">
            <div className="radios">
                <span className="ui radio checkbox">
                    <input type="radio" id="personal" name="account" onInput={() => setAccountType(0)} />
                    <label for="personal">Personal/Business</label>
                </span>
                <span className="ui radio checkbox">
                    <input type="radio" id="company" name="account" onInput={() => setAccountType(1) }/>
                    <label for="company">Company</label>
                </span>
            </div>

            {accountType ? 
                <Form
                    label="Sign Up"
                    inputs={companyInputs}
                    cancel={{ label: "cancel", onClick: () => console.log("cancel") }}
                    submit={{ label: "submit", onClick: (submitions) => companySignUp(submitions) }}
                />
                :
                <Form
                    label="Sign Up"
                    inputs={personalInputs}
                    cancel={{ label: "cancel", onClick: () => console.log("cancel") }}
                    submit={{ label: "submit", onClick: (submitions) => personalSignUp(submitions) }}
                />
                }
        </div>
    );
}

export default SignUp;