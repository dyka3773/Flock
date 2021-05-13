The Form is a dynamic component that can be configured to render tons of different html forms.

Form Expects the following props:
* **label** : The label of the form displayed on top

* **cancel** : an object based on which a button is rendered with the following properties
    * **label** : The label of the button
    * **onClick** : A callback function that is called when the Cancel button is cliked
    
* **submit** : an object based on which a button is rendered with the following properties
    * **label** : The label of the button
    * **onClick** : A callback function that is called when the submit button is cliked or the form is submited in any other way (e.g. Enter key). The submit callback function is passed the values of the inputs as the first argument
* **inputs** : An array of objects representing each input field that will be rendered. Form creates one input field for every object literal in the inputs array.

Every input object can be assigned the following properties
* **label** : The html label tag displayed above the input
* **type** : Describes the html type
* **value** : Assigns the default value of the input field. (Will be rendered as either value or placeholder depending of readonly is true or false)
* **readOnly** : Describes weather the input field will be editable by the user. Readonly fields appear disabled-like to the user
* **required** : Sets the html Required attribute. Its validated on form submission
* **id** : A unique id used for the internal identification of react components, can be anything but it must be unique in the inputs array
 


```js

const formInputs = [
    {
        label: "Enter your name",
        id: "name",
        required:true,
        value:"This Value acts as a placeholder"
    },
    {
        label: "Enter your surname",
        id: "surname",
        required:true 
    },
    {
        label: "Email",
        id: "email",
        required:true,
        type:'email' 
    },
    {
        label: "Password",
        id:"password",
        type:"password", //optional   
        required:true 
    },
    {
        label: "Readonly field",
        id: "2",
        value:"Cant touch this",
        readOnly:true //optional
    },
];

<Form className=""
            label="Basic Form Exampol"
            inputs={formInputs}
            cancel={{ label: "cancel", onClick: ()=>{} }}
            submit={{ label: "submit", onClick: ()=>{} }}
        />




```