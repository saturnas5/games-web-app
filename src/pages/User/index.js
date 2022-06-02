import React from "react";
import SideMenu from "../../components/SideMenu";
import {useSelector} from "react-redux";

const User = () => {
    const user = useSelector(state => state.user);

    return (
        <div className='user'>
            <div className="user__side-menu">
                <SideMenu/>
            </div>
            <div className="user__main">
                <div className="user__main-info">
                    <h3 className="user__title">
                        {`${user.firstName} ${user.lastName}`}
                    </h3>
                </div>
            </div>
        </div>
    );
};

export default User;