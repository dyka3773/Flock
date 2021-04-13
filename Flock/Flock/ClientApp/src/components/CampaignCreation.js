import React, { useState } from "react";
import Calendar from 'react-calendar';

const formInputs = [
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




const CampaignCreation = () => {

    const [value, onChange] = useState(new Date());

    const onCancel = () => {
        console.log("canceled");
    }

    const onSubmit = (values) => {
        console.log(values);
        console.log(value.getDate());
        console.log(value.getMonth() + 1);
        console.log(value.getFullYear());
    }

    return (
        <Form
            label="Basic Form Exampol"
            inputs={formInputs}
            cancel={{ label: "cancel", onClick: onCancel }}
            submit={{ label: "submit", onClick: onSubmit }}
        >
            <div className="ui segment">
                <Calendar
                    className="react-calendar"
                    onChange={onChange}
                    value={value}
                />
            </div>
        </Form>
    );

}

export default CampaignCreation;