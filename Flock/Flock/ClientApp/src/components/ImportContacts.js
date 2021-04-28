import React, { useState } from 'react';
import csvToJson from '../usefulFunctions/csvToJson'

import '../componentCSS/ImportContacts.css';
import getGroups from '../dataRequests/getGroups';

const ImportContacts = () => {

    const [selectedGroupId, setSelectedGroupId] = useState("-1");

    const defaultGroup = {id:"none",name:"None"};

    const groupsData = getGroups();
    groupsData.push(defaultGroup);

    const groups = groupsData.map((group) => {
        return <option value={group.id} key={group.id}>{group.name}</option>
    });

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