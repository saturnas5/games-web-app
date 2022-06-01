import React from "react";
import {Link} from 'react-router-dom';
import {
    FaCalendarAlt,
    FaHotjar,
    FaFastForward,
    FaCalendarCheck,
    FaAward,
    FaChartLine,
    FaCrown,
    FaWindows,
    FaPlaystation,
    FaXbox,
    FaApple,
    FaAndroid,
    FaGamepad
} from "react-icons/fa";

const SideMenuButton = ({ text, link, icon }) => {

    function iconPicker(icon) {
        switch (icon) {
            case 'calendar':
                return <FaCalendarAlt className="side-button__icon"/>
            case 'hot':
                return <FaHotjar className="side-button__icon"/>
            case 'forward':
                return <FaFastForward className="side-button__icon"/>
            case 'release':
                return <FaCalendarCheck className="side-button__icon"/>
            case 'best':
                return <FaAward className="side-button__icon"/>
            case 'chart':
                return <FaChartLine className="side-button__icon"/>
            case 'crown':
                return <FaCrown className="side-button__icon"/>
            case 'pc':
                return <FaWindows className="side-button__icon"/>
            case 'playstation':
                return <FaPlaystation className="side-button__icon"/>
            case 'xbox':
                return <FaXbox className="side-button__icon"/>
            case 'ios':
                return <FaApple className="side-button__icon"/>
            case 'android':
                return <FaAndroid className="side-button__icon"/>
            case 'nintendo':
                return <FaGamepad className="side-button__icon"/>
        }
    }

    return (
        <div className="side-button">
            <Link to={link} className='side-button__link'>
                <div className="side-button__icon-box">
                    {iconPicker(icon)}
                </div>
                <span className="side-button__text">{text}</span>
            </Link>
        </div>
    )
};

export default SideMenuButton;