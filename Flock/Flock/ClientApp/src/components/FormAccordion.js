import React, { useContext, useEffect, useState } from 'react';
import '../componentCSS/Accordion.css';
import { dataToFormInputs, dataToAccordionHeaders } from '../usefulFunctions/configs';
import AccordionHeader from './AccordionHeader';
import Form from './Form';
import context from '../contexts/context'

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




const FormAccordion = ({ items, editItems, onSelect, selectedItems, pageNum, accordionHeadersConfig, selectedGroup }) => {
    const [activeIndex, setActiveIndex] = useState(null);

    const token = useContext(context);


    const onClick = (event, index) => {
        //ensures that clicking on a button or anchor element inside an AccordionItem will not trigger the opening or closing of the item
        if (event.target.tagName === 'BUTTON' || event.target.tagName === 'A' || event.target.tagName === 'INPUT')
            return;

        if (index === activeIndex)
            index = null;

        setActiveIndex(index);

    }

    useEffect(() => { setActiveIndex(null) }, [pageNum, selectedGroup])
    

    
        

    const accordionItems = items.map(
        (item, index) => {

            
            const inputs = [];
           
            const headerValues = [];

            
           

            for (let key of Object.keys(item)) {
                if (dataToFormInputs[key]) {
                    const dataToForm = dataToFormInputs[key];
                    const inp = {...dataToForm, ["value"]:item[key]};
                    inputs.push(inp);
                    if (accordionHeadersConfig[key]) {
                        headerValues.push(inp.value);
                    } 
                } 
                
            }
             
           // console.log("inputs", inputs);
           

            const getSelectedItem = () => {
                return selectedItems.indexOf(item.id)===-1 ? false : true
            }

            

            const accordionHeader = onSelect && selectedItems ? 
                <AccordionHeader
                    headerValues={headerValues}
                    onSel={() => onSelect(item.id)}
                    isSelected={getSelectedItem()}
                />
                :
                <AccordionHeader
                    headerValues={headerValues}
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
                            submit={{
                                label: "edit",
                                onClick: (sub) => {
                                    editItems(token, { ...sub, ["id"]: item.id })
                                        .then(() => window.alert("Done"))
                                        .catch(() => window.alert("There was a problem, please try again later"));
                                }}}
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

export default FormAccordion;