import React from 'react';
import ManagementModule from './ManagementModule';
import getCampaigns from '../dataFetching/getCampaigns'

const ContactManagement = () => {




    return (

        <ManagementModule getItems={getCampaigns} listTitle={"Campaigns"} columnTitles={"name id startDate"} />

    );
}

export default ContactManagement;