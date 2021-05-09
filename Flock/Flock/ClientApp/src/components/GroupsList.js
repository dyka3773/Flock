import React, { useState, useEffect, useRef, useContext } from 'react';

import getGroups from '../dataRequests/getGroups';
import deleteGroup from '../dataRequests/deleteGroup';
import addGroup from '../dataRequests/addGroup';

import '../componentCSS/GroupsList.css';

import context from '../contexts/context';


const GroupsList = ({ setSelectedGroup, selectedGroup, onGroupEdit, editable = true }) => {

    const [groups, setGroups] = useState([]);
    const [addOpened, setAddOpened] = useState(false);
    const [newGroupName, setNewGroupName] = useState("");

    const token = useContext(context);

    const fetchGroups = async () => {
        const groups = await getGroups(token);
        setGroups(groups);
    }

    useEffect(() => {
        fetchGroups();
        
        

    },[])


    const onGroupDelete = (selectedGroupId) => {
        deleteGroup(selectedGroupId, token).then(() => { window.alert("Done"); fetchGroups();setSelectedGroup(0); });
    }

    const editGroup = () => {

        for (var i of groups) {
            if (i.id == selectedGroup)
                onGroupEdit(i);
        }
    }

    const retGroups = groups.map(({ name, id }) => {

        const selectedGroupButtons = (selectedGroup === id)&&(editable)?
            <span className="icons">
                <button
                    onClick={editGroup}
                >
                  E
                </button>
                 /
                <button onClick={() => onGroupDelete(selectedGroup)}>D</button>
            </span>
            :
            <></>

        const radioClicked = (id) => {
            
            if (selectedGroup === id) {
                setSelectedGroup(0)
            }

        }

      

        return (
            <div className="field" key={id}>
                <div className="ui checkbox">
                    
                    <input 
                        type="radio" id={id} name="group"
                        value={id} onChange={() => setSelectedGroup(id)}
                        checked={selectedGroup === id ? true : false}
                        onClick={() => radioClicked(id)}
                    />
                   
                    <label>{name}</label>
                    {selectedGroupButtons}
                    
                </div>
            </div>
        );
    });

    return (
        <div className="groups-list">
            {retGroups}
            <button className="ui button add-group" onClick={() => setAddOpened(!addOpened)}>Add Group</button>
            {
                addOpened
                    ?
                    <div style={{ display: "flex" }}>
                        <input type="text" className="ui input" value={newGroupName} onChange={(e) => setNewGroupName(e.target.value)} />
                        <button onClick={
                            async () => {
                                await addGroup(newGroupName, token)
                                    .then(() => {
                                        window.alert("Done");
                                        fetchGroups(token);
                                        setAddOpened(false);
                                        
                                    })
                            }
                        }
                        >
                            +</button>
                    </div>
                    :
                    <></>
            }
        </div>
            );

 }


export default GroupsList;