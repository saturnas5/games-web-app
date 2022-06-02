import React from "react";
import { FaAngleUp } from "react-icons/fa";

const ScrollTopButton = () => {

    function handleScrollToTop() {
        window.scroll({
            top: 0,
            behavior: 'smooth'
        })
    }

    return (
        <div onClick={() => handleScrollToTop()} className='scroll-top-btn'>
            <FaAngleUp className='scroll-top-btn-icon'/>
        </div>
    )
};

export default ScrollTopButton;