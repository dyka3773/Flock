import React, { useState } from 'react';


const InputField = ({ label, onChange,value }) => {
    
    const handleChange = event => {
        const value = event.target.value;
        onChange(value);
    };
   
    return (

        <div className="field">
            <label>{label}</label>
            <input type="text" onChange={handleChange} value={value} />
        </div>
    );

}

export default InputField;