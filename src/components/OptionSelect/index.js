import React from "react";

const OptionSelect = ({ options, label }) => {
    return (
        <label htmlFor={label.toLowerCase().replaceAll(' ', '-')}>
            {label}
        <select>
            {options.map(option => {
                return <option id={label.toLowerCase().replaceAll(' ', '-')} value={option.toLowerCase().replaceAll(' ', '-')}>{option}</option>
            })}
        </select>
        </label>
    );
};

export default OptionSelect;