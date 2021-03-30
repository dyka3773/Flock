import React, { useEffect, useState } from 'react';
import getCampaigns from '../dataRequests/getCampaigns';
import dataToAccordionConvert from '../usefulFunctions/dataToAccordionItemsConvert';
import editCampaign from '../dataRequests/editCampaign';
import Accordion from '../components/Accordion';

import '../modulesCSS/Dashboard.css'

const Dashboard = () => {

    const [campaigns, setCampaigns] = useState([]);

    useEffect(() => {
        setCampaigns(getCampaigns(2));

    })

    const accordion = dataToAccordionConvert(campaigns, editCampaign);

    const contactNum = 50;
    const campaignsNum = 10;
    const emailsNum = 250;



    return (
        <div className="Dashboard">
            <div className="import">
                <div className="ui segment">Signed up for the first time?<button>Import Contacts</button></div>
            </div>
            <div class="ui grid">
                <div class="eight wide column ui segment">
                    <h1>Basic Information</h1>
                    <div>Number of Contacts: {contactNum}</div>
                    <div>Active campaigns: {campaignsNum}</div>
                    <div>E-mails sent: {emailsNum}</div>
                </div>
                <div class="eight wide column ui segment">
                    <h1>Campaign Information</h1>
                    <Accordion items={accordion}/>
                </div>
            </div>

        </div>
        );
}

export default Dashboard;