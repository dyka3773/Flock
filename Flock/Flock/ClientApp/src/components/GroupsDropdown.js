import React, { useState, useContext, useEffect} from 'react'; 

import context from '../contexts/context';
import getGroups from '../dataRequests/getGroups';

const GroupsDropdown = ({ selectedGroup, setSelectedGroup }) => {
    const [groups, setGroups] = useState([]);


    const token = useContext(context)


    useEffect(() => {
        const fetchGroups = async () => {

            const groupsData = await getGroups(token);

            const groups = groupsData.map((gr) => {
                return (
                    <option value={gr.id} key={gr.id}>{gr.name}</option>
                )
            })

            setGroups(groups);

        }

        fetchGroups();


    }, [])

    return (
        <>
            <label>Choose one or more groups</label>
            <select required onChange={(e) => setSelectedGroup(e.target.value)} value={selectedGroup}>
                <option value="" disabled>Select a group</option>
                {groups}
            </select>
        </>
        )

}

export default GroupsDropdown;

