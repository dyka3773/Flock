import React from 'react';
import Form from '../components/Form'

const inputs = [
    {
        label: "Enter your name",
        id: "name"
    },
    {
        label: "Enter your surname",
        id: "surname"
    },
    {
        label: "Enter your address",
        id: "address"
    },
    {
        label: "Enter your darkest secret",
        id: "secret"
    },
    {
        label: "Who's your daddy?",
        id: "daddy"
    }
];


const page1 = () => {


    const onCancel = () => {
        console.log("canceled");
    }

    const onSubmit = (values) => {
        console.log(values);
    }
    

    return (
        
        
        <div>
            <Form
                label="Basic Form Exampol"
                inputs={inputs}
                cancel={{ label:"cancel", onClick: onCancel}}
                submit={{ label: "submit", onClick: onSubmit}}
            />
            
        </div>
        
        
        );
 }

export default page1;