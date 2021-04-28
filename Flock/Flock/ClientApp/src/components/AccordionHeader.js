import React, { useState} from 'react';
import '../componentCSS/AccordionHeader.css';

const AccordionHeader = ({ title, details, onSelect, isSelected}) => {

    const [selected, setSelected] = useState(isSelected ? isSelected : false);
   
    const onCheckClick = (e) => {
        
        onSelect();
        setSelected(!selected);
       
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
            <div className={`titles ${selected ? "selected" : "" }`} >
                {accordionTitles}
                <div className="buttons">
                    {onSelect ? <input className="ui button" type="checkbox" onChange={onCheckClick} checked={selected} /> : <></>}
                </div>
            </div>
            
        </div>
        );
}

export default AccordionHeader;