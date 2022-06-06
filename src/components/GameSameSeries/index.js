import React from "react";
import {useSelector} from "react-redux";

const GameSameSeries = ({ game }) => {

    return (
        <div className='game-same-series'>
            <img className='game-same-series__img' src={game.background_image} alt=""/>
        </div>
    )
};

export default GameSameSeries;