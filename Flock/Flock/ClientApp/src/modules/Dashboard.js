import React, { useEffect, useState } from 'react';
import getCampaigns from '../dataRequests/getCampaigns';
import dataToAccordionConvert from '../usefulFunctions/dataToAccordionItemsConvert';
import editCampaign from '../dataRequests/editCampaign';
import Accordion from '../components/Accordion';
import csvToJson from '../usefulFunctions/csvToJson';
import Form from '../components/Form';

import '../modulesCSS/Dashboard.css'

const inputs = 
    [
    {
        label: "name",
        id: "1",
    },
    {
        label: "name",
        id: "2",
    }
    ,
    {
        label: "name",
        id: "3",
    },
    {
        label: "name",
        id: "4",
    }
]        





const Dashboard = () => {

    const [campaigns, setCampaigns] = useState([]);

    useEffect(() => {
        setCampaigns(getCampaigns(2));

    })

    const accordion = dataToAccordionConvert(campaigns, editCampaign);

    const contactNum = 50;
    const campaignsNum = 10;
    const emailsNum = 250;

    const createContacts = () => {
        
        if (document.querySelector("#import").files[0])
           csvToJson(document.querySelector("#import").files[0]);

    }

    return (
        <div className="Dashboard">
            <div className="ui stackable  two column grid">
                <div className="import sixteen wide column">
                    <div className="ui segment">
                        <h1>Hello again **username**</h1>
                        <br />
                        <label class="custom-file-upload">
                            <input type="file" id="import" />
                            Custom Upload
                        </label>
                        <button onClick={createContacts}>AAA</button>
                    </div>
                </div>
                <div className="five wide column ">
                    <div className="ui segment">
                        <h1>Basic Information</h1>
                        <div>Number of Contacts: {contactNum}</div>
                        <div>Active campaigns: {campaignsNum}</div>
                        <div>E-mails sent: {emailsNum}</div>

                    </div>
                </div>
                <div class="five wide column">
                    <div className="ui segment">
                        <h1>Add a new contact!</h1>
                        <Form inputs={inputs} submit={{ label: "submit", onClick:() => console.log("submited") }}/>
                    </div>
                </div>
                <div class="five wide column">
                    <div className="ui segment">
                        <h1>Campaign Information</h1>
                        <Accordion items={accordion} />
                        <button className="ui button">New Campaign</button>
                    </div>
                </div>
               
            </div>

        </div>
        );
}

export default Dashboard;