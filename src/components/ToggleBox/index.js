import React, {useState} from "react";

const ToggleBox = ({ children, className }) => {
    const [open, setOpen] = useState(false);

    return (
        <div onClick={() => setOpen(!open)} className={`${className} ${open ? 'open' : ''}`}>
            {children}
        </div>
    );
};

export default ToggleBox;