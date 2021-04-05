import React, { useState, useEffect, useMemo } from 'react'; 
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
            type:"password" //optional
        },
        {
            label: "label2",
            id: "2",
            value:"default value" //optional
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
 * */

const Form = ({ label, cancel, submit, inputs, children}) => {

    //every field's value is stored as state in the values state object
    const [values, setValues] = useState(() => {

        let defaultValues;

        for (var input of inputs) {
            defaultValues = { ...defaultValues, [input.id]: input.value}
        }

        return defaultValues;

    });
    const handleFieldChange = (id, value) => {
        setValues({ ...values, [id]: value });
    };

    useEffect(() => {
       Array.from(document.getElementsByClassName("email")).forEach(
            inp => {
                inp.addEventListener("input", (event) => {
                    if (inp.validity.typeMismatch) {
                        inp.setCustomValidity("I am expecting an e-mail address!");
                    } else {
                        inp.setCustomValidity("");
                    }
                });
            }
        )

    }, []);


    //when submit button or enter key are pressed the onClick function of the submit object provided is 
    //triggered with the values of the inputs as a parameter
    const onSubmit = (e) => {
        e.preventDefault();
        const { onClick } = submit;
        onClick(values);
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
            return <input className="ui button" type="button" value={label} onClick={onCancel} />;
        }
       
    };

    const submitBtn = () => {
        if (submit) {
            const { label } = submit;
            return <input className="ui primary button" type="submit" value={label}/>;
        }

    };

    const items = inputs.map(
        (input) => {
            const val = values[input.id];
            
            return (
                <React.Fragment key={input.id}>
                    <label>{input.label}</label>
                    <input
                        type={input.type ? input.type : "text"}
                        onChange={(e) => handleFieldChange(input.id, e.target.value)}
                        value={val || input.value || ''}
                        className={input.type}
                        required
                    />
                </React.Fragment>
            )
        });

    return (
        <form className="ui form segment" onSubmit={onSubmit}>

            {label ? <h4 className="ui dividing header">{label}</h4> : <></>}

            <div className="inputs">{items}</div>

            {children ? children : <></>}

            {submitBtn()}{cancelBtn()}
            
        </form>
    );


}

export default Form;