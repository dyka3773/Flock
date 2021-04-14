import React, { useState } from 'react';
import Calendar from 'react-calendar';

import ManagementModule from './ManagementModule';

import Form from '../components/Form';

import getCampaigns from '../dataRequests/getCampaigns';
import editCampaign from '../dataRequests/editCampaign';

const formInputs = [
    {
        label: "Name",
        id: "name",
        type: "password"
    },
    {
        label: "Groups",
        id: "surname",
        required: true
    },
    {
        label: "item3",
        id: "it3",
        value: "placeholder"
    },
    {
        label: "item4",
        id: "it4",
        type: "email"
    },
    {
        label: "read only",
        id: "read",
        value: "readOnlyValue",
        readOnly: true
    }
];



const CampaignManagement = () => {
    const [startDate, setStartDate] = useState(new Date());
    const [endDate, setEndDate] = useState(new Date());

    const onCancel = () => {
        console.log("cancelled");
    }

    const onSubmit = (inputValues) => {
        console.log(inputValues);
        console.log(startDate);
        console.log("start date", `${startDate.getFullYear()}-${startDate.getMonth() + 1}-${startDate.getDay()}`); //start date
        //console.log("creation date", `${date.getFullYear()}-${date.getMonth() + 1}-${date.getDay()} ${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}`);

        console.log("end date", `${endDate.getFullYear()}-${endDate.getMonth() + 1}-${endDate.getDay()}`); //end date

    }

    const modalContents = (
        <>
            <h1>Create a new campaign</h1>
            <Form
                inputs={formInputs}
                cancel={{ label: "cancel", onClick: onCancel }}
                submit={{ label: "submit", onClick: onSubmit }}
            >
                <div>
                    <h3>Start Date:</h3>
                    <Calendar
                        className="react-calendar"
                        onChange={setStartDate}
                        value={startDate}
                    />
                </div>
                <div>
                    <h3>End Date:</h3>
                    <Calendar
                        className="react-calendar"
                        onChange={setEndDate}
                        value={endDate}
                    />
                </div>
            </Form>
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