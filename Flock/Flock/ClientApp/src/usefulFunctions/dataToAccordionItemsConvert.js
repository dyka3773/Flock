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


const dataToAccordionConvert = (items,editItems) => {

    const accordionItems = items.map(({ title, details, id }) => {

        const inputs = Object.keys(details).map((cont) => {

            const type = cont === "email" ? "email" : "text";

            return {
                label: cont,
                id: cont,
                value: details[cont],
                type:type
            }
        });


        return (
            {
                header: <AccordionHeader title={title} onDelete={() => console.log("deleted")} />,
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

export default dataToAccordionConvert;