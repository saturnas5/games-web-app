import React from "react";
import {countGamesGenresInLibrary} from "../../utils/_utils";

const InfoStatsBar = ({ title, percentage, count }) => {

    return (
        <div className="info-stats-bar">
            <span className="info-stats-bar__title">
                {`${title} :`}
            </span>
            <div className="info-stats-bar__slide-box">
                <span className="info-stats-bar__slide-info">
                    {`In library: ${count}`}
                </span>
                <div className="info-stats-bar__slide-body">
                    <div className="info-stats-bar__slide" style={{width: `${percentage}%`}} >

                    </div>
                </div>
            </div>
        </div>
    )
};

export default InfoStatsBar;