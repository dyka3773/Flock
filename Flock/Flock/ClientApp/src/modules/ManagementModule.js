import React, { useState, useEffect, useRef } from 'react';

import Accordion from '../components/Accordion';
import AccordionHeader from '../components/AccordionHeader';
import Modal from '../components/Modal';

import dataToAccordionConvert from '../usefulFunctions/dataToAccordionItemsConvert'
import getGroups from '../dataRequests/getGroups';

import '../modulesCSS/ManagementModule.css';

/* Params:
 *  -getItems: the function it will use to retrieve the items that will be managed in the module. These items will fill the accordion component.
 *      E.g if its used to manage contacts then pass getContacts and the component will fill all the accordion items with the contacts. For each accordion item
 *      there is a header where the item is described with its basic information and the details which is a form that is used to edit the details of the item 
 *      (eg the name, surname and email of a contact). The form is prefilled with the existing details of the item.
 * 
 *  -editItems: The function that is called when the form of a specific accordion item is submited. It passes the values of the form as a parameter. A function 
 *      that updates a specific item in the database can be passed as editItems
 *      
 *  -listTitle: The displayed title that describes the contents of the accordion
 *  
 *  -columnTitles:
 *  
 *  -addNewForm:
 * */


const ManagementModule = ({ getItems, editItems, listTitle, columnTitles, modalContents}) => {

    const [searchValue, setSearchValue] = useState("");
    const [items, setItems] = useState([]);
    const [pageNum, setPageNum] = useState(1);
    const selectedGroupsRef = useRef({});
    const ref = useRef();


    useEffect(
        () => {
            setItems(getItems(pageNum));
            window.scrollTo(0, 0);
        }
        , [pageNum]);

    const handleSelect = (id) => {

        selectedGroupsRef.current[id] ?
            selectedGroupsRef.current = (
                { ...selectedGroupsRef.current, [id]: !selectedGroupsRef.current[id]}
            )            
            :
            selectedGroupsRef.current = (
                { ...selectedGroupsRef.current, [id]: true }
            )

        console.log(selectedGroupsRef.current);
    }

    const initSelect = (id) => {
        selectedGroupsRef.current = (
            { ...selectedGroupsRef.current, [id]: false }
        )

    }

    const toggleSidebar = () => {
        const sidebar = document.querySelector(".sidebar");
        sidebar.classList.contains("toggled") ?
            sidebar.classList.remove("toggled")
            :
            sidebar.classList.add("toggled");
    }


    const previousPage = () => {
        const goToPrevPage = pageNum - 1;
        if (goToPrevPage < 1) return;
        setPageNum(goToPrevPage);
    }

    const nextPage = () => {
        const goToNextPage = pageNum + 1;
        if (goToNextPage > maxPage) return;
        setPageNum(goToNextPage);
    }

    const maxPage = 5;



    const openAddNew = () => {
        
        ref.current.style.display = "flex";

    }

    const closeAddNew = (e) => {

        if (ref.current.firstChild.contains(e.target) && !(e.target.className.includes("close")))
            return;
        ref.current.style.display = "none";
    }

    const accordionItems = dataToAccordionConvert(items, editItems);

    const groups = getGroups().map(({ name, id }) => {
        initSelect(id, false);//initialize selectedGroupsRef to be false 
        return (
            <div className="field" key={id}>
                <div className="ui checkbox">
                    <input type="checkbox" id={id} onInput={() => handleSelect(id)}/>
                    <label htmlFor={id}>{name}</label>
                </div>
            </div>
            );
    });

    const accordionDescriptor = () => {
        if (!items[0]) return;
        const keys = Object.keys(items[0].details);
        return <AccordionHeader details={keys} />;
    }

    return (
        <>
            <div className="management-module" >
                <div className="sidebar">
                    <button className="ui basic button close" onClick={toggleSidebar}>
                        X
                    </button>
                    <button className="ui button primary" id="add-new" onClick={openAddNew}>Add New</button>
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
                    <div className="ui segment groups">
                        <h5>Groups:</h5>
                        {groups}
                    </div>
                </div>
                <button className="sidebar-toggle" onClick={toggleSidebar}>{'>>'}</button>
                <div className="list" >
                    <div className="head">
                        <h1>{listTitle}</h1>
                    </div>
                    <div className="list-items">
                        <div className="accordion-descriptor">
                            {accordionDescriptor()}
                        </div>
                        <Accordion items={accordionItems} />
                        
                        <button onClick={previousPage}>previous page</button>
                        <button onClick={nextPage}>next page</button>
                    </div>
                </div>
            </div>
            <Modal ref={ref} onClose={closeAddNew}>
                {modalContents}
            </Modal>
        </>

    );
}

export default ManagementModule;