import React from 'react';
import '../componentCSS/AccordionHeader.css';

const AccordionHeader = ({title, onDelete}) => {

    const onClick = (e) => {
        e.preventDefault();
        onDelete();
    }

    return (
        <div className="campaign-header">
            <h4>{title}</h4>
            <div className="buttons">
                <button className="ui button"  onClick={onClick}>delete</button>
            </div>
            
            
        </div>
        );
}

export default AccordionHeader;