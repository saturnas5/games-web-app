import React, {useEffect, useState, useRef} from "react";
import SideMenu from "../../components/SideMenu";
import Games from "../../components/Games";
import {FaFilter} from "react-icons/fa";

const Main = () => {
    const [open, setOpen] = useState(false);
    const [fixed, setFixed] = useState(false);
    const mainMenuRef = useRef(null);
    const sideMenuRef = useRef(null);

    useEffect(() => {
        window.addEventListener('scroll', handleSideMenuFix);

        return () => {
            window.removeEventListener('scroll', handleSideMenuFix)
        }
    }, [])

    function handleSideMenuFix() {
        if (sideMenuRef.current.getBoundingClientRect().top < 65) {
            setFixed(true);
        }
        if (mainMenuRef.current.getBoundingClientRect().top >= 0) {
            setFixed(false)
        }
    }

    return (
        <main className='main' ref={mainMenuRef}>
            <div className={`main__menu ${open ? 'open' : ''}`}>
                <SideMenu ref={sideMenuRef} fixed={fixed}/>
                <div onClick={() => setOpen(!open)} className="main__menu-mobile-icon-box">
                    <FaFilter className="main__menu-mobile-icon"/>
                </div>
            </div>
            <div className="main__games">
                <Games/>
            </div>
        </main>
    );
};

export default Main;