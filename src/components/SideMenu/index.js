import React from "react";
import SideMenuButton from "../SideMenuButton";
import {currentYear, currentDate, lastMonth, currentMonth} from "../../api/api";
import { getLastWeek, getNextWeek, formatDate } from "../../utils/_utils";

const SideMenu = () => {

    return (
        <div className="side-menu">
            <div className="side-menu__submenu">
                <span className="side-menu__submenu-title">New Releases</span>
                <SideMenuButton icon='calendar' text='Last 30 days' link={`/new-releases/${currentDate}/${formatDate(lastMonth)}`}/>
                <SideMenuButton icon='hot' text='This week' link={`/new-releases/${currentDate}/${formatDate(getLastWeek())}`}/>
                <SideMenuButton icon='forward' text='Next week' link={`/new-releases/${formatDate(getNextWeek())}/${currentDate}`}/>
            </div>
            <div className="side-menu__submenu">
                <span className="side-menu__submenu-title">Top</span>
                <SideMenuButton icon='best' text='Best of the year' link=''/>
                <SideMenuButton icon='chart' text={`Popular in ${currentYear - 1}`}link=''/>
                <SideMenuButton icon='crown' text='All time top 250' link=''/>
            </div>
            <div className="side-menu__submenu">
                <span className="side-menu__submenu-title">Platforms</span>
                <SideMenuButton icon='pc' text='PC' link='/games/platforms/pc/4'/>
                <SideMenuButton icon='playstation' text='Playstation' link='/games/platforms/playstation/18,187,16'/>
                <SideMenuButton icon='xbox' text='Xbox' link='/games/platforms/xbox/1,186'/>
                <SideMenuButton icon='nintendo' text='Nintendo' link='/games/platforms/nintendo/7'/>
                <SideMenuButton icon='ios' text='iOS' link='/games/platforms/ios/5'/>
                <SideMenuButton icon='android' text='Android' link='/games/platforms/android/21'/>
            </div>
        </div>
    )
};

export default SideMenu;