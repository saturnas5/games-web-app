import React from "react";

const FormInput = ({ label, type, value, onInputChange, placeholder }) => {

    return (
        <div className='form-input'>
            <input value={value} onChange={e => onInputChange(e.target.value)} className='form-input__input' type={type} placeholder={placeholder}/>
            <label className='form-input__label' htmlFor="">{label}</label>
        </div>
    );
}

export default FormInput