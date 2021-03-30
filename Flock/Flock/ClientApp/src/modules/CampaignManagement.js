import React from 'react';
import ManagementModule from './ManagementModule';
import getCampaigns from '../dataRequests/getCampaigns'
import editCampaign from '../dataRequests/editCampaign'

const CampaignManagement = () => {




    return (

        <ManagementModule
            getItems={getCampaigns}
            listTitle={"Campaigns"}
            columnTitles={"name id startDate"}
            editItems={editCampaign}
        />

    );
}

export default CampaignManagement;