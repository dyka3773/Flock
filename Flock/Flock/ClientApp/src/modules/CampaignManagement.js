import React from 'react';
import ManagementModule from './ManagementModule';
import getCampaigns from '../dataRequests/getCampaigns'
import editCampaign from '../dataRequests/editCampaign'
import Form from '../components/Form'

const CampaignManagement = () => {

   const inputs=[
  {
            label: "Name (First and Last)",
            id: "name"
        },
        {
            label: "E-mail",
            id: "email",
            type:"email"
       }
       ,
       {
           label: "Groups",
           id: "groups",
       }
 ]

    const modalContents = (
        <>
            <h1>Add a new contact:</h1>
            <Form
                inputs={inputs}
                submit={{ label: "submit", onClick: (sub) => console.log(sub)}}
            />
            <div>Or:</div>
            <button> Import Contacts From CSV</button>

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