import React, {useEffect, useState} from "react";
import logo from '../../img/logo-white.png';
import userImg from '../../img/user.jpg';
import {FaBell, FaPlus, FaEllipsisH} from 'react-icons/fa';
import {Link, useLocation} from 'react-router-dom';
import SearchInput from "../SearchInput";
import {useSelector, useDispatch} from "react-redux";
import {loadSearchedGame, clearSearchedGame} from "../../reducers/actions/gamesActions";
import {userLogOut} from "../../reducers/actions/userActions";

const Header = () => {
    const games = useSelector(state => state.games);
    const user = useSelector(state => state.user);
    const dispatch = useDispatch();
    const [searchTerm, setSearchTerm] = useState('');
    const [timer, setTimer] = useState(null);
    const [active, setActive] = useState(false)
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

    const handleLogout = () => {
        dispatch(userLogOut());
    }

    return (
        <header className='header'>
            <div className="header__logo">
                <Link to='/'><img src={logo} alt="Logo" className="header__logo-img"/></Link>
            </div>
            <SearchInput games={games} value={searchTerm} onInputChange={inputChanged}/>
            {user.token ? <nav className="header__user-nav">
                <ul className="header__user-nav-list">
                    <li className="header__user-nav-item">
                        <Link to='/user'><img src={userImg} alt="User photo" className="header__user-nav-item-img"/></Link>
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
                        <FaEllipsisH onClick={() => setActive(!active)} className='header__user-nav-icon'/>
                        <div className={`header__user-nav-item-settings ${active ? 'active' : ''}`}>
                            <Link className="header__user-nav-item-settings-link" to='/user'>Settings</Link>
                            <Link className="header__user-nav-item-settings-link" to='/'>Settings</Link>
                            <Link className="header__user-nav-item-settings-link" to='/'>Settings</Link>
                            <Link className="header__user-nav-item-settings-link" to='/'>Settings</Link>
                            <span onClick={() => handleLogout()} className="header__user-nav-item-settings-link">Log Out</span>
                        </div>
                    </li>
                </ul>
            </nav> : <div className='header__login-box'><Link className='header__login-link' to='/login'>Login</Link></div>}
        </header>
    )
}

export default Header;