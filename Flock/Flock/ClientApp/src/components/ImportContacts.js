import React, { useEffect, useState, useContext } from 'react';
import csvToJson from '../usefulFunctions/csvToJson';

import context from '../contexts/context';

import '../componentCSS/ImportContacts.css';
import getGroups from '../dataRequests/getGroups';

const ImportContacts = () => {
    const [groups, setGroups] = useState([]);
    const [selectedGroupId, setSelectedGroupId] = useState("-1");

    const token = useContext(context)

    const defaultGroup = { id: "none", name: "None" };

    useEffect(() => {
        const fetchGroups = async () => {

            const groupsData = await getGroups(token);
            console.log(groupsData);
            groupsData.push(defaultGroup);

            const groups = groupsData.map((gr) => {
                return <option value={gr.id} key={gr.id}>{gr.name}</option>
            })

            setGroups(groups);
        }

        fetchGroups();


    },[])

    

    const createContacts = (e) => {

        if (!document.querySelector("#import").files[0]){
            window.alert("Please upload a csv");
            e.preventDefault()
            return;
        }

        if (selectedGroupId === "-1") {
            window.alert("Please select a group");
            e.preventDefault()
            return;
        }

        csvToJson(document.querySelector("#import").files[0], selectedGroupId);
        window.alert("Success");
    }





    return <div className="import-contacts">

        <form onSubmit={createContacts}>
           
                <label className="custom-file-upload">
                    <input type="file" id="import" />
                    Upload CSV
                </label>
            

            
                <select className="ui selection dropdown" value={selectedGroupId} onChange={(e) => setSelectedGroupId(e.target.value)} required>
                    <option value="-1" disabled>Select a group</option>
                    {groups}
                </select>
            

            
                <input className="ui button" type="submit" value="Import"/>
            
        </form>
    </div>

}

export default ImportContacts;