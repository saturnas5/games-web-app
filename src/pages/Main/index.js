import React from "react";
import SideMenu from "../../components/SideMenu";
import Games from "../../components/Games";

const Main = () => {

    return (
        <main className='main'>
            <div className="main__menu">
                <SideMenu/>
            </div>
            <div className="main__games">
                <Games/>
            </div>
        </main>
    );
};

export default Main;