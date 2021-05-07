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
import next from '../images/icons/Next.png';
import previous from '../images/icons/Previous.png';


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
    const [maxPage, setMaxPage] = useState(0);

    const selectedItemsRef = useRef([]);
    const ref = useRef();

    const token = useContext(context);

    const fetchItems = async () => {

        console.log("fetchItems", pageNum);
        const itemss = await getItems(token, pageNum - 1, searchValue, 50);
        console.log(itemss);
        setItems(itemss.data);
        window.scrollTo(0, 0);
    }

    const fetchMaxPage = async () => {
        const maxP = await getMaxPage(token, searchValue, 50);
        setMaxPage(maxP.data);

        console.log("getMaxPage", maxP);

    }

    useEffect(
        () => {
            
            fetchItems();
            fetchMaxPage();

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



    const deleteItems = () => {

        const length = selectedItemsRef.current.length;

        if (length === 0) {
            window.alert("No items selected.")
            return;
        }

        if (window.confirm(`You are about to delete ${length} items. Proceed?`)) {
            console.log('Deleted', selectedItemsRef.current)
        } else {
            
        }

       
       
    }

    const handleSelectGroups = (id) => {

        console.log(id);
    }

    const handleSelectItems = (id) => {

        if (selectedItemsRef.current.includes(id)) {
            selectedItemsRef.current = selectedItemsRef.current.filter(it=>it!==id)            
        }
        else {
            selectedItemsRef.current = [...selectedItemsRef.current, id]
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
        if (goToNextPage > maxPage) return;
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
                        <button className="ui red button" onClick={deleteItems}>Delete</button>
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
                        <div className="pagination-buttons">
                            <button
                                onClick={previousPage}
                                className="icon-button"
                            >
                                <img src={previous} />
                            </button>
                            <span>{pageNum} / {maxPage}</span>
                            <button
                                className="icon-button"
                                onClick={nextPage}
                            >
                                <img src={next} />
                            </button>
                        </div>
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