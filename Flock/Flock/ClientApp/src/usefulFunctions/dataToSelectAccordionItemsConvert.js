/*gets data in the form:
 * {
        title: "Stefanos",
        details: {
            name: "Stefanos",
            surname: "Toufexis",
            email:"stefetoufe@gmail.com"
        },
        id: "1"
    },
    {
        title: "Thanos",
        details: {
            name: "Stefanos",
            surname: "Toufexis",
            email: "stefetoufe@gmail.com"
        },
        id: "2"
    },

    And converts it into an accordion
 * */
import AccordionHeader from '../components/AccordionHeader';
import Form from '../components/Form';
import React from 'react';


const dataToSelectAccordionConvert = (items, editItems, onSelect, selectedItems) => {

    

    const accordionItems = items.map(({details, id }) => {

        const inputs = Object.keys(details).map((cont) => {

            const type = cont === "email" ? "email" : "text"; //used for validation

            return {
                label: cont,
                id: cont,
                value: details[cont],
                type:type
            }
        });


        return (
            {
                header: <AccordionHeader details={details} onSelect={() => onSelect(id)} isSelected={selectedItems[id]} />,
                details: <Form
                    inputs={inputs}
                    submit={{ label: "edit", onClick: (details) => editItems({ id: id, details: details }) }}
                />
                ,
                id: id
            }
        )

    });

    return accordionItems;

}

export default dataToSelectAccordionConvert;