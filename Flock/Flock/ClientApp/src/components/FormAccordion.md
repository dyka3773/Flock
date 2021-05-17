This Accordion component is a bit specific in its nature. Its used to display an array of similar items as editable entries. The user can view each items values and edit them. Every item gets rendered as an accordion item with a header and a Form component.

It receives the following props:

* **items**: An array of items which get displayed in a form. Each item is validated internaly and if its a valid it will get displayed, if its not valid, it will be ignored.
* **selectedItems**: An array of already selected items. its useful if the parent component of the accordion needs to control which selected items are being displayed as already selected
* **editItems**: A callback function that is called when the form component of an item is submited
* **onSelect**: A callback function that is called when an item is selected
* **accordionHeadersConfig**: A configuration object that is used to display the titles of each column on the accordion title
 
This is simple example of how this component might be used in a "Contacts page"


```js

    import AccordionHeader from './AccordionHeader';
    import Accordion from './FormAccordion';

    const [selectedItems, setSelectedItems] = React.useState([2,4]);

    headerValues = ["Title1","Title2","Title3"]

    const accordionHeadersConfig = {
        fullName: "Full Name",
        email: "Email"
    }

    const items = [1,2,3,4,5].map((it, index)=>{
        return {
            id:it,
            fullName:`StefTouf${it}${it}${it}`,
            email:`stefetoufe@gmail.com${it}${it}${it}`
        }
    });
    
      const handleSelectItems = (id) => {

        if (selectedItems.includes(id)) {
            setSelectedItems(selectedItems.filter(it=>it!==id))            
        }
        else {
            setSelectedItems([...selectedItems, id])
        }
      
    }
    

<>
    <FormAccordion                   
        items={items}
        selectedItems={selectedItems}
        editItems={()=>{}}
        onSelect={handleSelectItems}
        accordionHeadersConfig={accordionHeadersConfig}
    />

    <span><i>Current Selected Items: {selectedItems.map(it=>`${it}, `)}</i></span>
</>
```