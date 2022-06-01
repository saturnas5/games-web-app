import React, {useEffect} from "react";
import {useLocation} from 'react-router-dom';

const ScrollToTop = () => {
    const location = useLocation();

    useEffect(() => {
        window.scroll({
            top: 0,
            behavior: 'smooth'
        })
    }, [location.pathname])

    return null;
};

export default ScrollToTop;