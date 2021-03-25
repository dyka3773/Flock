import React from 'react';
import '../componentCSS/CampaignHeader.css';

const CampaignHeader = ({title, buttons}) => {

    const onClick = (e) => {
        e.preventDefault();

    }

    return (
        <div className="campaign-header">
            <h4>Title</h4>
            <div className="buttons">
                <button onClick={onClick}>delete</button>
            </div>
            
            
        </div>
        );
}

export default CampaignHeader;