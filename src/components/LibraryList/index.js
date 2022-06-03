import React, {useState} from "react";
import {useSelector} from "react-redux";
import { FaThumbsUp, FaAngleRight } from "react-icons/fa";

const LibraryList = ({ label }) => {
    const user = useSelector(state => state.user)
    const [active, setActive] = useState(false);
    const [open, setOpen] = useState(false);

    return (
        <div className='library-list'>
            <div className="library-list__label">
                <FaThumbsUp className="library-list__icon"/>
                <span className="library-list__title">{label}</span>
                <div className="library-list__status-icon-box">
                    <FaAngleRight onClick={() => setOpen(!open)} className={`library-list__status-icon ${open ? 'open' : ''}`}/>
                </div>
            </div>
            <div className={`library-list__results-box ${open ? 'open' : ''}`}>

            </div>
        </div>
    );
};

export default LibraryList;