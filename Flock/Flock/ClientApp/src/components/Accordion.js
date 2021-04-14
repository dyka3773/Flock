import React, { useEffect, useState } from 'react';
import '../componentCSS/Accordion.css';
import dataToFormInputs from '../usefulFunctions/dataToFormInputs';
import AccordionHeader from '../components/AccordionHeader';
import Form from '../components/Form';

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


const Accordion = ({ items, editItems, onSelect, selectedItems, pageNum }) => {
    const [activeIndex, setActiveIndex] = useState(null);
    

    const onClick = (event, index) => {
        //ensures that clicking on a button or anchor element inside an AccordionItem will not trigger the opening or closing of the item
        if (event.target.tagName === 'BUTTON' || event.target.tagName === 'A' || event.target.tagName === 'INPUT')
            return;

        if (index === activeIndex)
            index = null;

        setActiveIndex(index);

    }

    useEffect(() => { setActiveIndex(null) }, [pageNum])
    
    
   
        

    const accordionItems = items.map(
        (item, index) => {

            const inputs = dataToFormInputs(item.details);

            const accordionHeader = onSelect && selectedItems ? 
                <AccordionHeader
                    details={item.details}
                    onSelect={() => onSelect(item.id)}
                    isSelected={selectedItems[item.id]}
                />
                :
                <AccordionHeader
                    details={item.details}
                />

            return (
                <div className="accordion-item" key={item.id}>

                    <div
                        className={`title ${activeIndex === index ? 'active' : ''}`}
                        onClick={(e) => onClick(e,index)}
                    >

                        {accordionHeader}

                    </div>

                    <div className={`content ${activeIndex === index ? 'active' : ''}`}>

                        <Form
                            inputs={inputs}
                            submit={{ label: "edit", onClick: (details) => editItems({ id: item.id, details: details }) }}
                        />

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