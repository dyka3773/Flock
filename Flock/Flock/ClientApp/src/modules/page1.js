import React, { useContext, useEffect, useState } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';

import Form from '../components/Form';
import Accordion from '../components/FormAccordion';
import AccordionHeader from '../components/AccordionHeader';
import MarkdownEditView from '../components/MarkdownEditView';
import dummyJsonGenerator from '../usefulFunctions/dummyJsonGenerator'
import { addManyContacts } from '../dataRequests/addContact';
import context from '../contexts/context';
import { addCampaign } from '../dataRequests/addCampaign';




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

const campJsonPrototype = {
    subject: "40",
    text: "40",
    startDate: "date",
    endDate: "date",
    name: "40",
    frequency: "10",

}





const Page1 = () => {

    const [loading, setLoading] = useState(false);

    const token = useContext(context);

    
        const fillUpBase = async () => {
            console.log("Filling up base");
            const num = 100;
            const numcam = 10;
            setLoading(true);


            const camps = dummyJsonGenerator(campJsonPrototype, numcam);
            console.log(camps);

            for (let i of camps)
                await addCampaign(i,2,6);

            
            

            const entries = dummyJsonGenerator(jsonPrototype, num);
            console.log(entries);
            console.log( await addManyContacts(entries, 2, 6));
            window.alert("succesfully added")



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