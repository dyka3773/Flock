import React from 'react';
import ManagementModule from './ManagementModule';
import getCampaigns from '../dataRequests/getCampaigns';
import editCampaign from '../dataRequests/editCampaign';
import Form from '../components/Form';

const CampaignManagement = () => {

   

    const modalContents = (
        <>
           

        </>
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