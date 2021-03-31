import React, { useState, useEffect, useRef } from 'react';
import '../modulesCSS/ManagementModule.css';
import Accordion from '../components/Accordion';
import Modal from '../components/Modal';
import dataToAccordionConvert from '../usefulFunctions/dataToAccordionItemsConvert'




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


const ManagementModule = ({getItems,editItems,listTitle,columnTitles,addNewForm}) => {

    const [searchValue, setSearchValue] = useState("");
    const [items, setItems] = useState([]);
    const [pageNum, setPageNum] = useState(1);

    useEffect(
        () => {
            setItems(getItems(pageNum));
        }
        , [pageNum]);

    const ref = useRef();

    const maxPage = 2;

    const changePage = (newPage) => {
        if (newPage > maxPage || newPage < 1)
            return;
        setPageNum(newPage);
    }


    const accordionItems = dataToAccordionConvert(items,editItems);
    
    

    const openAddNew = () => {
        //console.log(ref.current);
        ref.current.style.display = "block";
       
    }

    const closeAddNew = (e) => {
        //console.log(ref.current);

        
        
        if (ref.current.firstChild.contains(e.target) && !(e.target.className.includes("close")))
            return;

        ref.current.style.display = "none";
        
    }


    return (
        <>
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
                    <button className="ui button primary" onClick={openAddNew}>Add New</button>

            </div>
            <div className="thirteen wide column list" >
                <h1 className="ui top attached header">{listTitle}</h1>
                <div className="ui scroll-container attached segment">
                    <div className="column-titles">{columnTitles}</div>
                    <Accordion items={accordionItems} />
                </div>
                <div className="page-controlls">
                    <button className="ui button"  onClick={() => changePage(pageNum-1)}>Previous</button>
                    |
                    <button className="ui button"  onClick={() => changePage(pageNum+1)}>Next</button>
                </div>
                </div>
            </div>
            <Modal ref={ref} onClose={closeAddNew}/>
        </>

    );
}

export default ManagementModule;