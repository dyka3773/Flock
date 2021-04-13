﻿import React, { useState } from 'react';
import '../componentCSS/Accordion.css';
import dataToSelectAccordionConvert from '../usefulFunctions/dataToSelectAccordionItemsConvert'
/*Accordion receives an array of objects following the below structure
 * const accordionItems = [
    {
        header: item //Component or JSX,
        content: item //Component or JSX,
        id: "id"
    },
    {
        header: item //Component or JSX,
        content: item //Component or JSX,
        id: "id"
    },
    ...
]
 <Accordion items={accordionItems}/>
for each array item one accordion item is rendered
*/


const Accordion = ({ items, editItems, onSelect, selectedItems }) => {
    const [activeIndex, setActiveIndex] = useState(null);
    

    const onClick = (event, index) => {
        //ensures that clicking on a button or anchor element inside an AccordionItem will not trigger the opening or closing of the item
        if (event.target.tagName === 'BUTTON' || event.target.tagName === 'A' || event.target.tagName === 'INPUT')
            return;

        if (index === activeIndex)
            index = null;

        setActiveIndex(index);

    }

   
    

    const accordionItems = dataToSelectAccordionConvert(items, editItems, onSelect, selectedItems).map(
        (item, index) => {
            return (
                <div className="accordion-item" key={item.id}>
                    <div
                        className={`title ${activeIndex === index ? 'active' : ''}`}
                        onClick={(e) => onClick(e,index)}
                    >
                        {item.header}
                    </div>
                    <div className={`content ${activeIndex === index ? 'active' : ''}`}>
                       {item.details}
                    </div>
                </div>
            );
        }
    );

    return (
        <div className="ui fluid accordion">
            {accordionItems}
        </div>
    );


}

export default Accordion;