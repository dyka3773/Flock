import React from 'react';
import '../componentCSS/CampaignHeader.css';

const CampaignHeader = ({title, buttons}) => {


    return (
        <div className="campaign-header">
            <h4>Title</h4>
            <button>edit</button>
            <button>delete</button>
        </div>
        );
}

export default CampaignHeader;