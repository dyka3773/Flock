import React, { useState } from 'react';

import ManagementModule from './ManagementModule';

import NewCampaignCreation from './NewCampaignCreation';

import getCampaigns from '../dataRequests/getCampaigns';
import editCampaign from '../dataRequests/editCampaign';
import { getCampsPageNum } from '../dataRequests/getPageNum';
import { deleteCampaigns } from '../dataRequests/deleteCampaigns';

import { dataToAccordionHeadersCampaign } from '../usefulFunctions/configs';


const CampaignManagement = () => {



    const onCancel = () => {
        console.log("cancelled");
    }






    const modalContents = (
        <NewCampaignCreation />
    )


    return (

        <ManagementModule
            getItems={getCampaigns}
            getMaxPage={getCampsPageNum}
            listTitle={"Campaigns"}
            columnTitles={"name id startDate"}
            editItems={editCampaign}
            modalContents={modalContents}
            accordionHeadersConfig={dataToAccordionHeadersCampaign}
            deleteItems={deleteCampaigns}
        />

    );
}

export default CampaignManagement;