import React, { useState } from 'react';

import ManagementModule from './ManagementModule';

import NewCampaignCreation from './NewCampaignCreation';

import getCampaigns from '../dataRequests/getCampaigns';
import editCampaign from '../dataRequests/editCampaign';


const formInputs = [
    {
        label: "Campaign Name",
        id: "name",
        required: true
    },
    {
        label: "Groups",
        id: "surname",
        required: true
    },
    {
        label: "Subject",
        id: "subject",
        required: true
    }
];



const CampaignManagement = () => {

   

    const onCancel = () => {
        console.log("cancelled");
    }


    

    

    const modalContents = (
        <NewCampaignCreation  />
    )


    return (

        <ManagementModule
            getItems={getCampaigns}
            listTitle={"Campaigns"}
            columnTitles={"name id startDate"}
            editItems={editCampaign}
            modalContents={modalContents}
        />

    );
}

export default CampaignManagement;