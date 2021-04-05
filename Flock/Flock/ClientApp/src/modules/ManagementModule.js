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
    const ref = useRef();
    

    useEffect(
        () => {
           
            setItems(getItems(pageNum));
            window.scrollTo(0, 0);
        }
        , [pageNum]);



    const previousPage = () => {
        const { current } = pageNum;

        const goToPrevPage = pageNum - 1;
        if (goToPrevPage < 1) return;

        setPageNum(goToPrevPage);
        

    } 

    const nextPage = () => {
        

        const goToNextPage = pageNum + 1;
        if (goToNextPage > maxPage) return;

        setPageNum(goToNextPage);
        
    } 

    const maxPage = 3;

   
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
        <div className="management-module" >
            <div className="sidebar">

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
                <div className="list" >
                    <div className="head">
                        <h1>{listTitle}</h1>
                        <div className="column-titles">{columnTitles}</div>
                    </div>
                    <div className="list-items">
                        <Accordion items={accordionItems} />
                        <button onClick={previousPage}>previous page</button>
                        <button onClick={nextPage}>next page</button>
                    </div>
                </div>
            </div>
            <Modal ref={ref} onClose={closeAddNew}>
                <p>AAAAAAAAAAAAAA</p>
            </Modal>
        </>

    );
}

export default ManagementModule;