import React, { useState, useEffect, useRef } from 'react'; 
import '../componentCSS/Form.css';

/* Form expects a label prop , inputs Array prop and optinally a cancel and submit object prop.
 * If the optional objects are present it will create buttons with the provided label(buttonLabel) and the provided event handler method
 * Submit event handler passes all input values as parameter
 * The Form will by default call the onSubmit event handler if the  enter key is pressed by the user
 * The Form creates input fields based on the inputs array prop (every {label:"",id:"", type:"",value:""} object is rendered as one input field). 
 * Type describes the type attribute of the rendered input and it defaults to "text" if not provided.
 * Value describes the default value of the input field and it defaults to "" if not provided
 * Example use
 * inputs= [
 *       {
            label: "label1",
            id:"1",
            type:"password", //optional
            
        },
        {
            label: "label2",
            id: "2",
            value:"default value" //optional,
            readOnly:true //optional
        },
        ...
 * ]
 * 
 * <Form
        label="Basic Form Exampol"
        inputs={inputs}
        cancel={{ label:"cancel", onClick: onCancel}}
        submit={{ label: "submit", onClick: onSubmit}}
            />
*
 * Form returns altered values + default values on submit
 * 
 * */
const Form = ({ label, cancel, submit, inputs, children}) => {

    //every field's value is stored as state in the values state object
    const [values, setValues] = useState({});

    const handleFieldChange = (id, value) => {
        setValues({ ...values, [id]: value });
    };

    //when submit button or enter key are pressed the onClick function of the submit object provided is 
    //triggered with the values of the inputs as a parameter
    const onSubmit = (e) => {
        e.preventDefault();
        let ar = {};
        const { onClick } = submit;
        for (let i of inputs) {
                ar = { ...ar, [i.id]: i.value }
        }

        for (let i of Object.keys(values)) {
            ar = {...ar, [i]:values[i]}
        }

        onClick(ar);
    }

    //when cancel button is pressed the onClick function of the cancel object provided is triggered
    
    const onCancel = (e) => {
        e.preventDefault();
        const { onClick } = cancel;
        onClick();
    }

    const cancelBtn = () => {
        if (cancel) {
            const { label } = cancel;
            return <input className="ui button cancel-button"  type="button" value={label} onClick={onCancel} />;
        }
       
    };

    const submitBtn = () => {
        if (submit) {

            const { label } = submit;
            return <input className="ui primary button submit-button" type="submit" value={label}/>;
        }

    };
   
    const items = inputs.map(
        
        (input, index) => {
            
            const val = values[input.id];
            if (input.type === 'date') {
                const d = new Date(input.value);

                input.value = `${d.getUTCDate()+1}/${d.getUTCMonth()+1}/${d.getUTCFullYear()}`;
            }

            const inputField = input.readOnly ? <input
                value={input.value}
                className={input.type}
                readOnly={true}
                />
                :
                <input
                    type={input.type ? input.type : "text"}
                    onChange={(e) => handleFieldChange(input.id, e.target.value)}
                    value={val || ''}
                    className={input.type}
                    readOnly={false}
                    placeholder={input.value}
                    required={input.required ? true : false}
                />


            return (
                <React.Fragment key={index}>
                    <label>{input.label}</label>
                    {inputField}
                </React.Fragment>
            )
        });

    return (
        <form className="ui form segment" onSubmit={onSubmit}>

            {label ? <h1 className="ui dividing header">{label}</h1> : <></>}

            <div className="inputs">{items ? items : "Loading..."}</div>
            <div className="form-children">
                {children ? children : <></>}
            </div>
            <div className="buttons">
                {submitBtn()}{cancelBtn()}
            </div>
        </form>
    );


}

export default Form;