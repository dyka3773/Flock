import React, { useState } from 'react';
import csvToJson from '../usefulFunctions/csvToJson'

import '../componentCSS/ImportContacts.css';
import getGroups from '../dataRequests/getGroups';

const ImportContacts = () => {

    const [selectedGroup, setSelectedGroup] = useState(0);

    const groupsData = getGroups();

    const groups = groupsData.map((group) => {
        return <option value={group.id} key={group.id}>{group.name}</option>
    });

    const createContacts = (e) => {
        e.preventDefault();


        if (document.querySelector("#import").files[0])
            csvToJson(document.querySelector("#import").files[0], groupsData[selectedGroup].id);
        else
            window.alert("Please upload a csv");

    }

    return <div className="import-contacts">

        <form onSubmit={createContacts}>
           
                <label className="custom-file-upload">
                <input type="file" id="import" />
                Upload Icon
            </label>
            

            
                <select className="ui selection dropdown" value={selectedGroup} onChange={(e) => setSelectedGroup(e.target.value)} >
                   
                    {groups}
                </select>
            

            
                <input className="ui button" type="submit" value="Import"/>
            
        </form>
    </div>

}

export default ImportContacts;