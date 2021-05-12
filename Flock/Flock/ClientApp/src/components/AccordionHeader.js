import React, { useState} from 'react';
import '../componentCSS/AccordionHeader.css';

const AccordionHeader = ({headerValues, onSel, isSelected}) => {

    const [selected, setSelected] = useState(isSelected ? isSelected : false);
   
    const onCheckClick = (e) => {
        
        onSel();
        setSelected(!selected);
       
    }

    return (
        <div className="accordion-header">
            <div className={`titles ${selected ? "selected" : ""}`} >
                {headerValues ?
                    <>
                        <div className={`title1`} key={0}>{headerValues[0]}</div>
                        <div className={`title2`} key={1}>{headerValues[1]}</div>
                        <div className={`title3`} key={2}>{headerValues[2]}</div></>
                    :
                    <></>
                    }
                
                <div className="buttons">
                    {onSel ? <input className="ui button" type="checkbox" onChange={onCheckClick} checked={selected} /> : <></>}
                </div>
            </div>
            
        </div>
        );
}

export default AccordionHeader;