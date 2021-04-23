import React, { useState, useEffect, useRef } from 'react';

import Accordion from '../components/Accordion';
import Form from '../components/Form';
import AccordionHeader from '../components/AccordionHeader';
import Modal from '../components/Modal';
import GroupsList from '../components/GroupsList';

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




const ManagementModule = ({ getItems, editItems, listTitle, addNewModalContents}) => {

    
    const [searchValue, setSearchValue] = useState("");
    const [items, setItems] = useState([]);
    const [pageNum, setPageNum] = useState(1);

    const selectedItemsRef = useRef({});
    const addNewModalRef = useRef();
    const editGroupModalRef = useRef();

   
  
    useEffect(
        () => {
            setItems(getItems(pageNum));
            window.scrollTo(0, 0);
           
        }
        , [pageNum]);

    //console.log(items)
    const handleSelectGroups = (id) => {
        
        console.log(id);
    }

    const handleSelectItems = (id) => {

        

    }

    const onGroupEdit = (selectedGroupId) => {




        openEditGroupModal();
    }

    const onGroupDelete = (selectedGroupId) => {
        console.log("delete",selectedGroupId);
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



    const openAddNewModal = () => {
        
        addNewModalRef.current.style.display = "flex";

    }

    const closeEditGroupModal = (e) => {

        if (editGroupModalRef.current.firstChild.contains(e.target) && !(e.target.className.includes("close")))
            return;
        editGroupModalRef.current.style.display = "none";
    }

    const openEditGroupModal = () => {

        editGroupModalRef.current.style.display = "flex";

    }

    const closeAddNewModal = (e) => {

        if (addNewModalRef.current.firstChild.contains(e.target) && !(e.target.className.includes("close")))
            return;
        addNewModalRef.current.style.display = "none";
    }
    

    

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
                    <button className="ui button primary" id="add-new" onClick={openAddNewModal}>Add New</button>
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
                        <GroupsList
                            handleSelectGroups={handleSelectGroups}
                            onGroupEdit={onGroupEdit}
                            onGroupDelete={onGroupDelete}
                        />
                    </div>
                </div>
                <button className="sidebar-toggle" onClick={toggleSidebar}>{'>>'}</button>
                <div className="list" >
                    <div id="head">
                        <h1>{listTitle}</h1>
                        <button className="ui red button" onClick={() => console.log(selectedItemsRef.current)}>Delete</button>
                    </div>
                    <div className="list-items">
                        <div className="accordion-descriptor">
                            {accordionDescriptor()}
                        </div>

                        <Accordion items={items} selectedItems={selectedItemsRef.current} editItems={editItems} onSelect={handleSelectItems} pageNum={pageNum}/>
                        
                        <button onClick={previousPage}>previous page</button>
                        <button onClick={nextPage}>next page</button>
                    </div>
                </div>
            </div>
            <Modal ref={addNewModalRef} onClose={closeAddNewModal}>
                {addNewModalContents}
            </Modal>
            <Modal ref={editGroupModalRef} onClose={closeEditGroupModal}>
                
            </Modal>
        </>

    );
}

export default ManagementModule;