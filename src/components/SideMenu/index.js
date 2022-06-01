import React from "react";
import SideMenuButton from "../SideMenuButton";

const SideMenu = () => {
    const currentYear = new Date().getFullYear();

    return (
        <div className="side-menu">
            <div className="side-menu__submenu">
                <span className="side-menu__submenu-title">New Releases</span>
                <SideMenuButton icon='calendar' text='Last 30 days' link=''/>
                <SideMenuButton icon='hot' text='This week' link=''/>
                <SideMenuButton icon='forward' text='Next week' link=''/>
                <SideMenuButton icon='release' text='Release calendar' link=''/>
            </div>
            <div className="side-menu__submenu">
                <span className="side-menu__submenu-title">Top</span>
                <SideMenuButton icon='best' text='Best of the year' link=''/>
                <SideMenuButton icon='chart' text={`Popular in ${currentYear - 1}`}link=''/>
                <SideMenuButton icon='crown' text='All time top 250' link=''/>
            </div>
            <div className="side-menu__submenu">
                <span className="side-menu__submenu-title">Platforms</span>
                <SideMenuButton icon='pc' text='PC' link=''/>
                <SideMenuButton icon='playstation' text='Playstation' link=''/>
                <SideMenuButton icon='xbox' text='Xbox' link=''/>
                <SideMenuButton icon='nintendo' text='Nintendo' link=''/>
                <SideMenuButton icon='ios' text='iOS' link=''/>
                <SideMenuButton icon='android' text='Android' link=''/>
            </div>
        </div>
    )
};

export default SideMenu;