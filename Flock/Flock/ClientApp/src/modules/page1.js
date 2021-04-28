import React, { useState } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';

import Form from '../components/Form';
import Accordion from '../components/Accordion';
import AccordionHeader from '../components/AccordionHeader';
import MarkdownEditView from './MarkdownEditView';
import dummyJsonGenerator from '../usefulFunctions/dummyJsonGenerator'





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


const jsonPrototype = {
    title: "20",
    details: {
        name: "10",
        startDate: {
            day: [1, 31],
            month: {
                email: "email"
            },
            year: [2000, 3000]
        }
    },
    ultraNestedField: {
        field1: {
            field2: [1,5],
            field3: {
                field4: "10"
            }
        }
    },
    id: "id"
}



const Page1 = () => {

   


    


    console.log(dummyJsonGenerator(jsonPrototype,10,0));


    return (
        
        
        <div>
            
            <br/>
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