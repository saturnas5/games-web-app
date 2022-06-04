import React, {useState} from "react";
import SideMenu from "../../components/SideMenu";
import Games from "../../components/Games";
import {Switch, Route} from 'react-router-dom';
import {FaFilter} from "react-icons/fa";

const Main = () => {
    const [open, setOpen] = useState(false);

    return (
        <main className='main'>
            <div className={`main__menu ${open ? 'open' : ''}`}>
                <SideMenu/>
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