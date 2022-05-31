import React from "react";
import logo from '../../img/logo-white.png';
import user from '../../img/user.jpg';
import {FaBell, FaPlus, FaEllipsisH} from 'react-icons/fa';
import {Link} from 'react-router-dom';

const Header = () => {

    return (
        <header className='header'>
            <div className="header__logo">
                <Link to='/'><img src={logo} alt="Logo" className="header__logo-img"/></Link>
            </div>
            <div className="header__search">
                <input type="text" className="header__search-input" placeholder='Search'/>
            </div>
            <nav className="header__user-nav">
                <ul className="header__user-nav-list">
                    <li className="header__user-nav-item">
                        <Link to='/'><img src={user} alt="User photo" className="header__user-nav-item-img"/></Link>
                    </li>
                    <li className="header__user-nav-item">
                        <Link to='/'><span>My library</span></Link>
                    </li>
                    <li className="header__user-nav-item">
                        <Link to='/'><FaBell className='header__user-nav-icon'/></Link>
                    </li>
                    <li className="header__user-nav-item">
                        <Link to='/'><FaPlus className='header__user-nav-icon'/></Link>
                    </li>
                    <li className="header__user-nav-item">
                        <Link to='/'><FaEllipsisH className='header__user-nav-icon'/></Link>
                    </li>
                </ul>
            </nav>
        </header>
    )
}

export default Header;