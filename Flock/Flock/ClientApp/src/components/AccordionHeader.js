import React from 'react';
import '../componentCSS/AccordionHeader.css';

const AccordionHeader = ({details, onDelete}) => {

    const onClick = (e) => {
        e.preventDefault();
        onDelete();
    }

    let i = 0;

    const accordionTitles = Object.values(details).map((det) => {
        i++;
        return (
            <div className={`title${i}`} key={det}>{det}</div>
        )
        
    })

   

    return (
        <div className="accordion-header">
            <div className="titles">
                {accordionTitles}
                <div className="buttons">
                    { onDelete ? <button className="ui button"  onClick={onClick}>D</button> : <></>}
                </div>
            </div>
            
        </div>
        );
}

export default AccordionHeader;