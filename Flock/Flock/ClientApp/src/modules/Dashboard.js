import React, { useContext, useEffect, useState } from 'react';

import getCampaigns, { getDashboardCampaigns } from '../dataRequests/getCampaigns';
import { getAccountBasic } from '../dataRequests/getAccount';
import editCampaign from '../dataRequests/editCampaign';

import { newContactFormInputs } from '../usefulFunctions/formInputs';
import { keysToLabel } from '../usefulFunctions/formInputs';

import Accordion from '../components/Accordion';
import Form from '../components/Form';
import ImportContacts from '../components/ImportContacts';

import '../modulesCSS/Dashboard.css'

import context from '../contexts/context';

import NewContactCreation from './NewContactCreation';






const Dashboard = () => {
    
    const [campaigns, setCampaigns] = useState([]);
    const [basicInfoInputs, setBasicInfoInputs] = useState([])

    const token = useContext(context);

    useEffect(() => {
        setCampaigns(getDashboardCampaigns());

        const fetchBasicInfo = async () => {
          
            const resp = await getAccountBasic(token);

            const inputs = [];


            for (let key of Object.keys(resp)) {

                inputs.push(
                    {
                        id: key,
                        value: resp[key],
                        label: keysToLabel[key],
                        readOnly:true
                    }
                )



            }


            setBasicInfoInputs(inputs);
        }

        fetchBasicInfo()
        
    },[])


    

    return (
        <div className="Dashboard">

            <div className="flex-item">
                <div className="ui segment import ">
                    <h1>Hello again **username**</h1>
                    <ImportContacts />
                    
                </div>
            </div>

            <div className="inner-flex flex-item">

                <div className="inner-inner-flex flex-item">


                    <div className="ui segment new-group flex-item">
                        <h1>Create a new group!</h1>
                        <button className="ui button">Create group</button>
                    </div>




                    <Form
                        className="flex-item"
                        label="Basic info"
                        inputs={basicInfoInputs}
                    />



                </div>


               
                    <NewContactCreation className="flex-item" /> 
                
                




                <div className="ui segment campaigns flex-item">
                    <h1>Campaign Information</h1>
                    <Accordion items={campaigns} editItems={editCampaign} />
                    <button className="ui button">New Campaign</button>
                </div>


            </div>



        </div>
    );
}

export default Dashboard;