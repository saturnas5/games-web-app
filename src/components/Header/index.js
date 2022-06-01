import React, {useEffect, useState} from "react";
import logo from '../../img/logo-white.png';
import user from '../../img/user.jpg';
import {FaBell, FaPlus, FaEllipsisH} from 'react-icons/fa';
import {Link, useLocation} from 'react-router-dom';
import SearchInput from "../SearchInput";
import {useSelector, useDispatch} from "react-redux";
import {loadSearchedGame, clearSearchedGame} from "../../reducers/actions/gamesActions";

const Header = () => {
    const games = useSelector(state => state.games);
    const dispatch = useDispatch();
    const [searchTerm, setSearchTerm] = useState('');
    const [timer, setTimer] = useState(null);
    const location = useLocation();

    useEffect(() => {
        setSearchTerm('')
        dispatch(clearSearchedGame())
    }, [location.pathname])

    const inputChanged = e => {
        setSearchTerm(e);

        clearTimeout(timer);

        const newTimer = setTimeout(() => {
            dispatch(loadSearchedGame(searchTerm))
        }, 1000);

        setTimer(newTimer);
    };

    return (
        <header className='header'>
            <div className="header__logo">
                <Link to='/'><img src={logo} alt="Logo" className="header__logo-img"/></Link>
            </div>
            <SearchInput games={games} value={searchTerm} onInputChange={inputChanged}/>
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