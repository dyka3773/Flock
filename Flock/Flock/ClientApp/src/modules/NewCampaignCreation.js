import React, { useState } from 'react';

import Calendar from 'react-calendar';

import MarkdownEditView from './MarkdownEditView';

import Form from '../components/Form'

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

const NewCampaignCreation = () => {
    const [tab, setTab] = useState(0);

    const [editorValue, setEditorValue] = useState("");
    const [startDate, setStartDate] = useState(new Date());
    const [endDate, setEndDate] = useState(new Date());
    const [frequency, setFrequency] = useState("Once");


    const btn = tab === 0 ? <button className="tab-btn ui button" onClick={() => setTab(1)}>Next</button> : <button className="tab-btn ui button" onClick={() => setTab(0)}>previous</button>

    const onSubmit = (inputValues) => {
        console.log(inputValues);
        
        console.log("start date", `${startDate.getFullYear()}-${startDate.getMonth() + 1}-${startDate.getDay()}`); //start date
        //console.log("creation date", `${date.getFullYear()}-${date.getMonth() + 1}-${date.getDay()} ${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}`);
        console.log("end date", `${endDate.getFullYear()}-${endDate.getMonth() + 1}-${endDate.getDay()}`); //end date
        console.log(frequency); 
        console.log(editorValue);
    }


    const modalContent2 = (
        <>
            <h1>Fill out your campaign's details</h1>
            <Form
                inputs={formInputs}
                submit={{ label: "Create and Send", onClick: onSubmit }}
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
                <div>
                    <h3>Frequency:</h3>
                    <select className="ui selection dropdown" value={frequency} onChange={(e) => setFrequency(e.target.value)}>
                        <option value="Once">Once</option>
                        <option value="Every Day">Every Day</option>
                        <option value="Every Week">Every Week</option>
                        <option value="Every Month">Every Month</option>
                        <option value="Every Year">Every Year</option>
                    </select>
                </div>
            </Form>
        </>
    )

    const modalContent = (
        <>
            <h1>Compose your Email and preview</h1>
            <p>You can write in plain text or using markdown syntax</p>
            <MarkdownEditView editorValue={editorValue} setEditorValue={setEditorValue} />
        </>
    )

    const modalContents = [modalContent, modalContent2];


    




    return (
        <div className="multitab-modal-content">
            <div>{modalContents[tab]}</div>
            <div>{btn}</div>
        </div>
        );


}



export default NewCampaignCreation;

















