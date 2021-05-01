﻿import React, { useContext, useEffect, useState } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';

import Form from '../components/Form';
import Accordion from '../components/Accordion';
import AccordionHeader from '../components/AccordionHeader';
import MarkdownEditView from './MarkdownEditView';
import dummyJsonGenerator from '../usefulFunctions/dummyJsonGenerator'
import { addManyContacts } from '../dataRequests/addContact';
import context from '../contexts/context';




const accordionItems = [
    {
        header: <AccordionHeader title="title1" onDelete={() => console.log("deleted")} />,
        content: <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>,
        id: "1"
    },
    {
        header: <AccordionHeader title="title2" onDelete={() => console.log("deleted")} />,
        content: <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>,
        id: "2"
    },
    {
        header: <AccordionHeader title="title3" onDelete={() => console.log("deleted")} />,
        content: <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>,
        id: "3"
    }
]


const jsonPrototype = {
    fullName: "40",
    email: "email"
}







const Page1 = () => {

    const [loading, setLoading] = useState(false);

    const token = useContext(context);

    
        const fillUpBase = async () => {
            console.log("Filling up base");
            const num = 300;
            setLoading(true);

            const entries = dummyJsonGenerator(jsonPrototype, num);
            console.log(entries);



            console.log( await addManyContacts(entries, token, 6));

            window.alert("contacts succesfully added")

            setLoading(false);

        }

       




    




    return (


        <div>

            <button onClick={() => fillUpBase(true)}>Fill me up big boy</button>
            <div>{ loading ? "Loading..." : ""}</div>
        </div>

        
    );
}

export default Page1;