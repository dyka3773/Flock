import React, { useState } from 'react';

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

    const onClick = (index) => {
        if (index === activeIndex)
            index = null;
        setActiveIndex(index);

    }


    const items = props.items.map(
        (item, index) => {
            return (
                <React.Fragment key={item.id}>
                    <div
                        className={`title ${activeIndex === index ? 'active' : ''}`}
                        onClick={() => onClick(index)}
                    >
                        {item.header}
                    </div>
                    <div className={`content ${activeIndex === index ? 'active' : ''}`}>
                       {item.content}
                    </div>
                </React.Fragment>
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