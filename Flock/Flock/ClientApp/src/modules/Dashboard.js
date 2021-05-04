import React, { useContext, useEffect, useRef, useState } from 'react';

import { getAccountBasic } from '../dataRequests/getAccount';
import getCampaigns from '../dataRequests/getCampaigns';
import editCampaign from '../dataRequests/editCampaign';

import { keysToLabel } from '../usefulFunctions/configs';
import { dataToAccordionHeadersCampaignDashboard } from '../usefulFunctions/configs';

import Accordion from '../components/Accordion';
import Form from '../components/Form';
import ImportContacts from '../components/ImportContacts';

import '../modulesCSS/Dashboard.css'

import context from '../contexts/context';

import NewContactCreation from './NewContactCreation';
import NewCampaignCreation from './NewCampaignCreation';
import NewGroupCreation from './NewGroupCreation';

import Modal from '../components/Modal';







const Dashboard = () => {
    
    const [campaigns, setCampaigns] = useState([]);
    const [basicInfoInputs, setBasicInfoInputs] = useState([])
    const [modalCont, setModalCont] = useState();

    const modalRef = useRef();

    const token = useContext(context);

    useEffect(() => {
        const fetchCampaigns = async () => {

            const resp = await getCampaigns(token, 1, "", 10);
            setCampaigns(resp.data);
            
        }

        fetchCampaigns()

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
        
    }, [])

    const onNewGroup = () => {

       
        setModalCont(
            <NewGroupCreation />
        )
        openModal();
    }

    const onNewCampaign = () => {
        setModalCont(
            <NewCampaignCreation />
        )
        openModal();
    }




    const openModal = () => {

        modalRef.current.style.display = "flex";

    }

    const closeModal = (e) => {

        if (modalRef.current.firstChild.contains(e.target) && !(e.target.className.includes("close")))
            return;
        modalRef.current.style.display = "none";
    }

    

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


                    <div className="flex-item">
                        <div className="ui segment new-group">
                            <h1>Create a new group!</h1>
                            <button className="ui button" onClick={onNewGroup}>Create group</button>
                        </div>
                    </div>



                    <div className="flex-item">
                    <Form
                        className=""
                        label="Basic info"
                        inputs={basicInfoInputs}
                    />
                    </div>


                </div>

                <div className="flex-item" >
                    <NewContactCreation /> 
                </div>
                
                <div className="flex-item">
                <div className="ui segment campaigns">
                    <h1>Campaign Information</h1>
                    <Accordion
                        items={campaigns}
                        editItems={editCampaign}
                        accordionHeadersConfig={dataToAccordionHeadersCampaignDashboard }
                    />

                        <button className="ui button" onClick={onNewCampaign}>New Campaign</button>
                </div>
                </div>

            </div>

            <Modal ref={modalRef} onClose={closeModal}>{modalCont}</Modal>


        </div>
    );
}

export default Dashboard;