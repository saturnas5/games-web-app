import React from "react";
import SideMenu from "../../components/SideMenu";
import {useSelector} from "react-redux";
import defaultPhoto from '../../img/default-user.png'
import {NavLink, Link, Switch, Route, useRouteMatch} from "react-router-dom";
import Library from "../../components/Library";
import Overview from "../../components/Overview";
import Reviews from "../../components/Reviews";

const User = () => {
    const user = useSelector(state => state.user);
    const match = useRouteMatch();

    return (
        <div className='user'>
            <div className="user__side-menu">
                <SideMenu/>
            </div>
            <div className="user__main">
                <div className="user__main-info">
                    <h3 className="user__title">
                        {user.firstName ? `Hello ${user.firstName} ${user.lastName}` : `Hello User`}
                    </h3>
                    <img src={user.settings.profileImg ? user.settings.profileImg : defaultPhoto} alt={user.firstName} className="user__profile-img"/>
                    <Link className="user__settings-btn" to='/user/settings'>Setings</Link>
                </div>
                <div className="user__nav">
                    <ul className="user__nav-list">
                        <li className="user__nav-item">
                            <NavLink exact className={isActive => 'user__nav-item-link' + (!isActive ? '' : '-active')} to={`${match.url}`}>Overview</NavLink>
                        </li>
                        <li className="user__nav-item">
                            <NavLink exact className={isActive => 'user__nav-item-link' + (!isActive ? '' : '-active')} to='/user/library'>Library</NavLink>
                        </li>
                        <li className="user__nav-item">
                            <NavLink exact className={isActive => 'user__nav-item-link' + (!isActive ? '' : '-active')} to='/user/wishlist'>Wishlist</NavLink>
                        </li>
                        <li className="user__nav-item">
                            <NavLink exact className={isActive => 'user__nav-item-link' + (!isActive ? '' : '-active')} to='/user/reviews'>Reviews</NavLink>
                        </li>
                        <li className="user__nav-item">
                            <NavLink exact className={isActive => 'user__nav-item-link' + (!isActive ? '' : '-active')} to='/user/collections'>Collections</NavLink>
                        </li>
                    </ul>
                </div>
                <div className="user__display-box">
                    <Switch>
                        <Route exact path={`${match.path}`}>
                            <Overview/>
                        </Route>
                        <Route exact path={`${match.path}/library`}>
                            <Library/>
                        </Route>
                        <Route exact path={`${match.path}/wishlist`}>
                            <h1>Wishlist</h1>
                        </Route>
                        <Route exact path={`${match.path}/reviews`}>
                            <Reviews/>
                        </Route>
                        <Route exact path={`${match.path}/collections`}>
                            <h1>Collections</h1>
                        </Route>
                    </Switch>
                </div>
            </div>
        </div>
    );
};

export default User;