import React, { useState, useEffect, useRef } from 'react';
import getGroups from '../dataRequests/getGroups';
import '../componentCSS/GroupsList.css';

const GroupsList = ({ handleSelectGroups, onGroupEdit, onGroupDelete}) => {

    const [groups, setGroups] = useState([]);
    const [selectedGroup, setSelectedGroup] = useState(null);

    useEffect(() => {
        setGroups(getGroups)
    },[])

    useEffect(() => {

        handleSelectGroups(selectedGroup);

    }, [selectedGroup])

    const editGroup = () => {

        for (var i of groups) {
            if (i.id == selectedGroup)
                onGroupEdit(i);
        }
    }

    const retGroups = groups.map(({ name, id }) => {

        const selectedGroupButtons = selectedGroup === id ?
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
                setSelectedGroup(null)
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
                   
                    <label for="male" htmlFor={id}>{name}</label>
                    {selectedGroupButtons}
                    
                </div>
            </div>
        );
    });

    return (
        <div className="groups-list">
            {retGroups}
        </div>
            );

            }


export default GroupsList;