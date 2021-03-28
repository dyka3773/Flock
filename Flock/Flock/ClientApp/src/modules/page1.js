import React, { useState } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';

import Form from '../components/Form';
import Accordion from '../components/Accordion';
import AccordionHeader from '../components/AccordionHeader';
import MarkdownEditView from './MarkdownEditView';



const formInputs = [
    {
        label: "Enter your name",
        id: "name",
        type:"password"
    },
    {
        label: "Enter your surname",
        id: "surname",
        type:"email"
    },
    {
        label: "Enter your address",
        id: "address"
    },
    {
        label: "Enter your darkest secret",
        id: "secret",
        type: "email"
    },
    {
        label: "Who's your daddy?",
        id: "daddy"
    }
];

const accordionItems = [
    {
        header: <AccordionHeader title="title1" onDelete={() => console.log("deleted")}/>,
        content: <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>,
        id: "1"
    },
    {
        header: <AccordionHeader title="title2" onDelete={() => console.log("deleted")}/>,
        content: <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>,
        id: "2"
    },
    {
        header: <AccordionHeader title="title3" onDelete={() => console.log("deleted")}/>,
        content: <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>,
        id: "3"
    }
]


const Page1 = () => {

    const [value, onChange] = useState(new Date());


    const onCancel = () => {
        console.log("canceled");
    }

    const onSubmit = (values) => {
        console.log(values);
        console.log(value.getDate());
        console.log(value.getMonth()+1);
        console.log(value.getFullYear());
    }
    

    return (
        
        
        <div>
            <Form
                label="Basic Form Exampol"
                inputs={formInputs}
                cancel={{ label:"cancel", onClick: onCancel}}
                submit={{ label: "submit", onClick: onSubmit}}
            >
                <div className="ui segment">
                    <Calendar
                        className="react-calendar"
                        onChange={onChange}
                        value={value}
                    />
                </div>
            </Form>
            <br/>
            <Accordion items={accordionItems} />
            <br />
            <br />
            <MarkdownEditView />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
        </div>
        
        
        );
 }

export default Page1;