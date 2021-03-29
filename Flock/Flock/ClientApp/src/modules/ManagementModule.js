import React, { useState, useEffect } from 'react';
import '../modulesCSS/ManagementModule.css';
import Accordion from '../components/Accordion';
import AccordionHeader from '../components/AccordionHeader';
import getContacts from '../dataFetching/getContacts';


const ManagementModule = () => {

    const [searchValue, setSearchValue] = useState("");
    const [items, setItems] = useState([]);
    const [pageNum, setPageNum] = useState(1);

    const maxPage = 2;

    const changePage = (newPage) => {
        if (newPage > maxPage || newPage < 1)
            return;
        setPageNum(newPage);
    }

    const accordionItems = items.map(({ title, content, id }) => {
        return (
            {
                header: <AccordionHeader title={title} onDelete={() => console.log("deleted")} />,
                content: content,
                id: id
            }
        )

    });

    useEffect(
        () => {
             setItems(getContacts(pageNum));
        }
        , [pageNum]);

  


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
                <div className="page-controlls">
                    <button onClick={() => changePage(pageNum-1)}>Previous</button>
                    |
                    <button onClick={() => changePage(pageNum+1)}>Next</button>
                </div>
            </div>

        </div>


    );
}

export default ManagementModule;