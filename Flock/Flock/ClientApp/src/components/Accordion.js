import React, { useState } from 'react';
import '../componentCSS/Accordion.css';
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


const Accordion = (props) => {
    const [activeIndex, setActiveIndex] = useState(null);

    const onClick = (event, index) => {
        if (event.target.tagName === 'BUTTON' || event.target.tagName === 'A')
            return;
        console.log(event.target.tagName);
        if (index === activeIndex)
            index = null;
        setActiveIndex(index);

    }


    const items = props.items.map(
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
                       {item.content}
                    </div>
                </div>
            );
        }
    );

    return (
        <div className="ui fluid accordion">
            {items}
        </div>
    );


}

export default Accordion;