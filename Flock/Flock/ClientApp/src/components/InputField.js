import React, { useState } from 'react';


const InputField = ({ label, onChange, value }) => {
    
    const handleChange = event => {
        const value = event.target.value;
        onChange(value);
    };
   
    return (

        <>
            <label>{label}</label>
            <input type="text" onChange={handleChange} value={value}/>
        </>
    );

}

export default InputField;