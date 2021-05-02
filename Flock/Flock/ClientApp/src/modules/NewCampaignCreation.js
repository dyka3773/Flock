import React, { useState, useContext, useEffect } from 'react';

import Calendar from 'react-calendar';

import MarkdownEditView from './MarkdownEditView';

import Form from '../components/Form';
import GroupsDropdown from '../components/GroupsDropdown';

import context from '../contexts/context';

import getGroups from '../dataRequests/getGroups';
import { addCampaign } from '../dataRequests/addCampaign';

const formInputs = [
    {
        label: "Campaign Name",
        id: "name",
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

    const [selectedGroup, setSelectedGroup] = useState("");

    const token = useContext(context);


    const btn = tab === 0 ? <button className="tab-btn ui button" onClick={() => setTab(1)}>Next</button> : <button className="tab-btn ui button" onClick={() => setTab(0)}>previous</button>

    const onSubmit = (inputValues) => {

        inputValues.text = editorValue;
        inputValues.frequency = frequency;
        inputValues.startDate = startDate;
        inputValues.endDate = endDate;

        addCampaign(inputValues, token, selectedGroup).then(window.alert("done"));
        
       
    }


    const modalContent2 = (
        <>
            <h1>Fill out your campaign's details</h1>
            <Form
                inputs={formInputs}
                submit={{ label: "Create and Send", onClick: onSubmit }}
            >
                <GroupsDropdown selectedGroup={selectedGroup} setSelectedGroup={setSelectedGroup} />
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

















