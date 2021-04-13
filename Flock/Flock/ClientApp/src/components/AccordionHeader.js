import React from 'react';
import '../componentCSS/AccordionHeader.css';

const AccordionHeader = ({title, details, onDelete}) => {

    const onClick = (e) => {
        e.preventDefault();
        onDelete();
    }

    let i = 0;

    const items = title ? title : details;

    const accordionTitles = Object.values(items).map((it) => {
        i++;
        return (
            <div className={`title${i}`} key={it}>{it}</div>
        )
        
    })

   

    return (
        <div className="accordion-header">
            <div className="titles">
                {accordionTitles}
                <div className="buttons">
                    { onDelete ? <input className="ui button" type="checkbox" onClick={onClick}/> : <></>}
                </div>
            </div>
            
        </div>
        );
}

export default AccordionHeader;