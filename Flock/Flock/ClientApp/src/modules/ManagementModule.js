import React, { useState } from 'react';
import '../modulesCSS/ManagementModule.css';
import Accordion from '../components/Accordion';
import AccordionHeader from '../components/AccordionHeader';
import Form from '../components/Form';

const formInputs = [
    {
        label: "Enter your name",
        id: "name"
    },
    {
        label: "Enter your surname",
        id: "surname"
    },
];

const items = [
    {
        title: "Stefanos",
        content: <Form

            inputs={formInputs}
            submit={{ label: "submit", onClick: (s) => console.log(s) }}
        />,
        id: "1"
    },
    {
        title: "Thanos",
        content: <Form
            label="Basic Form Exampol"
            inputs={formInputs}
            submit={{ label: "submit", onClick: (s) => console.log(s) }}
        />,
        id: "2"
    },
    {
        title: "Kwstas",
        content: <Form
            label="Basic Form Exampol"
            inputs={formInputs}
            submit={{ label: "submit", onClick: (s) => console.log(s) }}
        />,
        id: "3"
    },
    {
        title: "Stratos",
        content: <Form
            label="Basic Form Exampol"
            inputs={formInputs}
            submit={{ label: "submit", onClick: (s) => console.log(s) }}
        />,
        id: "4"
    },
    {
        title: "Stavros",
        content: <Form
            label="Basic Form Exampol"
            inputs={formInputs}
            submit={{ label: "submit", onClick: (s) => console.log(s) }}
        />,
        id: "5"
    },
    {
        title: "Kwsths",
        content: <Form
            label="Basic Form Exampol"
            inputs={formInputs}
            submit={{ label: "submit", onClick: (s) => console.log(s) }}
        />,
        id: "6"
    },
    {
        title: "Kwstantinos",
        content: <Form
            label="Basic Form Exampol"
            inputs={formInputs}
            submit={{ label: "submit", onClick: (s) => console.log(s) }}
        />,
        id: "7"
    },
    {
        title: "Thanasis",
        content: <Form
            label="Basic Form Exampol"
            inputs={formInputs}
            submit={{ label: "submit", onClick: (s) => console.log(s) }}
        />,
        id: "8"
    },
    {
        title: "Stelios",
        content: <Form
            label="Basic Form Exampol"
            inputs={formInputs}
            submit={{ label: "submit", onClick: (s) => console.log(s) }}
        />,
        id: "9"
    },
    {
        title: "Stefanos1",
        content: <Form

            inputs={formInputs}
            submit={{ label: "submit", onClick: (s) => console.log(s) }}
        />,
        id: "10"
    },
    {
        title: "Thanos1",
        content: <Form
            label="Basic Form Exampol"
            inputs={formInputs}
            submit={{ label: "submit", onClick: (s) => console.log(s) }}
        />,
        id: "11"
    },
    {
        title: "Kwstas",
        content: <Form
            label="Basic Form Exampol"
            inputs={formInputs}
            submit={{ label: "submit", onClick: (s) => console.log(s) }}
        />,
        id: "12"
    },
    {
        title: "Stratos1",
        content: <Form
            label="Basic Form Exampol"
            inputs={formInputs}
            submit={{ label: "submit", onClick: (s) => console.log(s) }}
        />,
        id: "13"
    },
    {
        title: "Stavros1",
        content: <Form
            label="Basic Form Exampol"
            inputs={formInputs}
            submit={{ label: "submit", onClick: (s) => console.log(s) }}
        />,
        id: "14"
    },
    {
        title: "Kwsths1",
        content: <Form
            label="Basic Form Exampol"
            inputs={formInputs}
            submit={{ label: "submit", onClick: (s) => console.log(s) }}
        />,
        id: "15"
    },
    {
        title: "Kwstantinos1",
        content: <Form
            label="Basic Form Exampol"
            inputs={formInputs}
            submit={{ label: "submit", onClick: (s) => console.log(s) }}
        />,
        id: "16"
    },
    {
        title: "Thanasis1",
        content: <Form
            label="Basic Form Exampol"
            inputs={formInputs}
            submit={{ label: "submit", onClick: (s) => console.log(s) }}
        />,
        id: "17"
    },
    {
        title: "Stelios",
        content: <Form
            label="Basic Form Exampol"
            inputs={formInputs}
            submit={{ label: "submit", onClick: (s) => console.log(s) }}
        />,
        id: "18"
    },
]


const ManagementModule = () => {

    const [searchValue, setSearchValue] = useState("");
    console.log("rerender");

    const accordionItems = items.reduce((accumulator, { title, content, id }) => {

        var regex = new RegExp(searchValue, "i");
        const n = title.search(regex);
        //console.log(n);
        if (n != 0) return accumulator;

        const alteredValue = {
            header: <AccordionHeader title={title} onDelete={() => console.log("deleted")} />,
            content: content,
            id: id

        };

        accumulator.push(alteredValue);
        return accumulator;

    }, []);


    return (

        <div className="ui grid management-module" >
            <div className="three wide column sidebar">

                <div className="ui search ">
                    <div className="ui icon input fluid">
                        <input
                            className="prompt "
                            type="text"
                            placeholder="Search..."
                            value={searchValue}
                            onChange={(e) => setSearchValue(e.target.value)} />
                        <i className="search icon"></i>
                    </div>
                </div>

            </div>
            <div className="thirteen wide column list" >
                <h1 className="ui top attached header">Contact List</h1>
                <div className="ui scroll-container attached segment">
                    <div className="column-titles">name tags date</div>
                    <Accordion items={accordionItems} />
                </div>

            </div>
        </div>


    );
}

export default ManagementModule;