import React, { useState } from 'react'; 
import InputField from './InputField';

/* Form expects a label prop , inputs Array prop and optinally a cancel and submit object prop.
 * If the optional objects are present it will create buttons with the provided label(buttonLabel) and the provided event handler method
 * Submit event handler passes all input values as parameter
 * The Form will by default call the onSubmit event handler if the  enter key is pressed by the user
 * The Form creates input fields based on the inputs array prop (every {label:"",id:""} object is rendered as one input). 
 * Example use
 * inputs= [
 *       {
            label: "label1",
            id:"1"
        },
        {
            label: "label2",
            id: "2"
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

const Form = ({ label, cancel, submit, inputs} ) => {

    //every fields value is stored as state in the values state object
    const [values, setValues] = useState({});
    const handleFieldChange = (id, value) => {
        setValues({ ...values, [id]: value });
    };

    //when submit button or enter key are pressed
    const onSubmit = (e) => {
        e.preventDefault();
        const { onClick } = submit;
        onClick(values);
    }

    //when cancel button is pressed
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
                <InputField label={input.label} key={input.id} onChange={(value) => handleFieldChange(input.id, value)} value={val||''}/>
            )
        });

    return (
        <form className="ui form segment" onSubmit={onSubmit}>
            <h4 className="ui dividing header">{label}</h4>
            <div>{items}</div>
            <div>{submitBtn()}{cancelBtn()}</div>
        </form>
    );


}

export default Form;