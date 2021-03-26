import React, {useState} from 'react';
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

const accordionItems = [
    {
        header: <AccordionHeader title="title1" onDelete={() => console.log("deleted")} />,
        content: <Form

            inputs={formInputs}
            submit={{ label: "submit", onClick: (s) => console.log(s) }}
        />,
        id: "1"
    },
    {
        header: <AccordionHeader title="title2" onDelete={() => console.log("deleted")} />,
        content: <Form
            label="Basic Form Exampol"
            inputs={formInputs}
            submit={{ label: "submit", onClick: (s) => console.log(s) }}
        />,
        id: "2"
    },
    {
        header: <AccordionHeader title="title3" onDelete={() => console.log("deleted")} />,
        content: <Form
            label="Basic Form Exampol"
            inputs={formInputs}
            submit={{ label: "submit", onClick: (s) => console.log(s) }}
        />,
        id: "3"
    }, {
        header: <AccordionHeader title="title1" onDelete={() => console.log("deleted")} />,
        content: <Form

            inputs={formInputs}
            submit={{ label: "submit", onClick: (s) => console.log(s) }}
        />,
        id: "1"
    },
    {
        header: <AccordionHeader title="title2" onDelete={() => console.log("deleted")} />,
        content: <Form
            label="Basic Form Exampol"
            inputs={formInputs}
            submit={{ label: "submit", onClick: (s) => console.log(s) }}
        />,
        id: "2"
    },
    {
        header: <AccordionHeader title="title3" onDelete={() => console.log("deleted")} />,
        content: <Form
            label="Basic Form Exampol"
            inputs={formInputs}
            submit={{ label: "submit", onClick: (s) => console.log(s) }}
        />,
        id: "3"
    }, {
        header: <AccordionHeader title="title1" onDelete={() => console.log("deleted")} />,
        content: <Form

            inputs={formInputs}
            submit={{ label: "submit", onClick: (s) => console.log(s) }}
        />,
        id: "1"
    },
    {
        header: <AccordionHeader title="title2" onDelete={() => console.log("deleted")} />,
        content: <Form
            label="Basic Form Exampol"
            inputs={formInputs}
            submit={{ label: "submit", onClick: (s) => console.log(s) }}
        />,
        id: "2"
    },
    {
        header: <AccordionHeader title="title3" onDelete={() => console.log("deleted")} />,
        content: <Form
            label="Basic Form Exampol"
            inputs={formInputs}
            submit={{ label: "submit", onClick: (s) => console.log(s) }}
        />,
        id: "3"
    }, {
        header: <AccordionHeader title="title1" onDelete={() => console.log("deleted")} />,
        content: <Form

            inputs={formInputs}
            submit={{ label: "submit", onClick: (s) => console.log(s) }}
        />,
        id: "1"
    },
    {
        header: <AccordionHeader title="title2" onDelete={() => console.log("deleted")} />,
        content: <Form
            label="Basic Form Exampol"
            inputs={formInputs}
            submit={{ label: "submit", onClick: (s) => console.log(s) }}
        />,
        id: "2"
    },
    {
        header: <AccordionHeader title="title3" onDelete={() => console.log("deleted")} />,
        content: <Form
            label="Basic Form Exampol"
            inputs={formInputs}
            submit={{ label: "submit", onClick: (s) => console.log(s) }}
        />,
        id: "3"
    },
    {
        header: <AccordionHeader title="title1" onDelete={() => console.log("deleted")} />,
        content: <Form

            inputs={formInputs}
            submit={{ label: "submit", onClick: (s) => console.log(s) }}
        />,
        id: "1"
    },
    {
        header: <AccordionHeader title="title2" onDelete={() => console.log("deleted")} />,
        content: <Form
            label="Basic Form Exampol"
            inputs={formInputs}
            submit={{ label: "submit", onClick: (s) => console.log(s) }}
        />,
        id: "2"
    },
    {
        header: <AccordionHeader title="title3" onDelete={() => console.log("deleted")} />,
        content: <Form
            label="Basic Form Exampol"
            inputs={formInputs}
            submit={{ label: "submit", onClick: (s) => console.log(s) }}
        />,
        id: "3"
    }, {
        header: <AccordionHeader title="title1" onDelete={() => console.log("deleted")} />,
        content: <Form

            inputs={formInputs}
            submit={{ label: "submit", onClick: (s) => console.log(s) }}
        />,
        id: "1"
    },
    {
        header: <AccordionHeader title="title2" onDelete={() => console.log("deleted")} />,
        content: <Form
            label="Basic Form Exampol"
            inputs={formInputs}
            submit={{ label: "submit", onClick: (s) => console.log(s) }}
        />,
        id: "2"
    },
    {
        header: <AccordionHeader title="title3" onDelete={() => console.log("deleted")} />,
        content: <Form
            label="Basic Form Exampol"
            inputs={formInputs}
            submit={{ label: "submit", onClick: (s) => console.log(s) }}
        />,
        id: "3"
    }, {
        header: <AccordionHeader title="title1" onDelete={() => console.log("deleted")} />,
        content: <Form

            inputs={formInputs}
            submit={{ label: "submit", onClick: (s) => console.log(s) }}
        />,
        id: "1"
    },
    {
        header: <AccordionHeader title="title2" onDelete={() => console.log("deleted")} />,
        content: <Form
            label="Basic Form Exampol"
            inputs={formInputs}
            submit={{ label: "submit", onClick: (s) => console.log(s) }}
        />,
        id: "2"
    },
    {
        header: <AccordionHeader title="title3" onDelete={() => console.log("deleted")} />,
        content: <Form
            label="Basic Form Exampol"
            inputs={formInputs}
            submit={{ label: "submit", onClick: (s) => console.log(s) }}
        />,
        id: "3"
    }, {
        header: <AccordionHeader title="title1" onDelete={() => console.log("deleted")} />,
        content: <Form

            inputs={formInputs}
            submit={{ label: "submit", onClick: (s) => console.log(s) }}
        />,
        id: "1"
    },
    {
        header: <AccordionHeader title="title2" onDelete={() => console.log("deleted")} />,
        content: <Form
            label="Basic Form Exampol"
            inputs={formInputs}
            submit={{ label: "submit", onClick: (s) => console.log(s) }}
        />,
        id: "2"
    },
    {
        header: <AccordionHeader title="title3" onDelete={() => console.log("deleted")} />,
        content: <Form
            label="Basic Form Exampol"
            inputs={formInputs}
            submit={{ label: "submit", onClick: (s) => console.log(s) }}
        />,
        id: "3"
    },
]


const ManagementModule = () => {

    const [searchValue, setSearchValue] = useState("");

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
                <h1 className="title">Current</h1>
                <div className="scroll-container segment">
                    <div className="column-titles">name tags date</div>
                    <Accordion items={accordionItems} />
                </div>
                
            </div>
        </div>


    );
}

export default ManagementModule;