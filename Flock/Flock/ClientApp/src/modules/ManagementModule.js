import React, { useState, useEffect, useRef, useContext } from 'react';

import Accordion from '../components/Accordion';
import Form from '../components/Form';
import AccordionHeader from '../components/AccordionHeader';
import Modal from '../components/Modal';
import GroupsList from '../components/GroupsList';

import NewGroupCreation from './NewGroupCreation';

import context from '../contexts/context';

import { addGroup } from '../dataRequests/addGroup';

import useDidMountEffect from '../customHooks/useDidMountEffect'

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




const ManagementModule = ({ getItems, editItems, listTitle, modalContents, accordionHeadersConfig, getMaxPage }) => {


    const [searchValue, setSearchValue] = useState("");
    const [items, setItems] = useState([]);
    const [pageNum, setPageNum] = useState(1);
    const [modalCont, setModalCont] = useState(modalContents);

    const maxPage = useRef(0);
    const selectedItemsRef = useRef({});
    const ref = useRef();

    const token = useContext(context);

    const fetchItems = async () => {

        console.log("pageNum", pageNum);
        const itemss = await getItems(token, pageNum - 1, searchValue,50);

        setItems(itemss.data);
        window.scrollTo(0, 0);
    }

    const fetchMaxPage = async () => {
        const maxP = await getMaxPage(token, searchValue,50);
        maxPage.current = maxP.data;

        console.log("maxPage.current", maxPage.current);

    }

    useEffect(
        () => {
            fetchMaxPage();
            fetchItems();
            
        }
        , []);

    useDidMountEffect(() => {

        fetchItems();
    }, [pageNum]);


    useDidMountEffect(() => {

        const fetchI = async () => {
            if (!(pageNum === 1)) {
                setPageNum(1);
                fetchMaxPage();
            } 
            else {
                fetchItems();
                fetchMaxPage();
            }


        }

        const timeOut = setTimeout(() => {
            fetchI();

        }, 500)



        return () => clearTimeout(timeOut);

    }, [searchValue]);




    //console.log(items)
    const handleSelectGroups = (id) => {

        console.log(id);
    }

    const handleSelectItems = (id) => {
        if (selectedItemsRef.current[id]) {
            selectedItemsRef.current = { ...selectedItemsRef.current, [id]: !selectedItemsRef.current[id] }
        }
        else {
            selectedItemsRef.current = { ...selectedItemsRef.current, [id]: true }
        }
    }

    const onGroupEdit = (selectedGroup) => {

        const inputs = [

            {
                label: "Old Name",
                id: "oldName",
                value: selectedGroup.name,
                readOnly: true
            },
            {
                label: "New Name",
                id: "newName",
                value: selectedGroup.name,

            },

        ]
        setModalCont(
            <>
                <h1>Edit Group</h1>
                <Form
                    inputs={inputs}
                    submit={{ label: "submit", onClick: (sub) => console.log(sub) }}
                />
            </>

        )
        openModal();
    }

    const onGroupAdd = (selectedGroup) => {

       
        setModalCont(
            <>
                <NewGroupCreation />

            </>

        )
        openModal();
    }

    const onGroupDelete = (selectedGroupId) => {
        console.log("delete", selectedGroupId);
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
        if (goToNextPage > maxPage.current) return;
        setPageNum(goToNextPage);
    }

    const openModal = () => {

        ref.current.style.display = "flex";

    }

    const closeModal = (e) => {

        if (ref.current.firstChild.contains(e.target) && !(e.target.className.includes("close")))
            return;
        ref.current.style.display = "none";
    }



    return (
        <>
            <div className="management-module" >
                <div className="sidebar">
                    <button className="ui basic button close" onClick={toggleSidebar}>
                        X
                    </button>
                    <button className="ui button primary" id="add-new" onClick={() => { setModalCont(modalContents); openModal(); }}>Add New</button>
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
                            onGroupAdd={onGroupAdd}
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
                            <AccordionHeader headerValues={Object.values(accordionHeadersConfig)} />
                        </div>

                        <Accordion
                            items={items}
                            selectedItems={selectedItemsRef.current}
                            editItems={editItems}
                            onSelect={handleSelectItems}
                            pageNum={pageNum}
                            accordionHeadersConfig={accordionHeadersConfig}

                        />

                        <button onClick={previousPage}>previous page</button>
                        <button onClick={nextPage}>next page</button>
                    </div>
                </div>
            </div>

            <Modal ref={ref} onClose={closeModal}>
                {modalCont}
            </Modal>

        </>

    );
}

export default ManagementModule;