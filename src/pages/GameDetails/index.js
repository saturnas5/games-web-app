import React, {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import {loadCurrentGame} from "../../reducers/actions/gamesActions";
import {useParams, useRouteMatch} from 'react-router-dom';

const GameDetails = () => {
    const dispatch = useDispatch();
    const game = useSelector(state => state.games.currentGame);
    const { id } = useParams();
    const match = useRouteMatch();
    console.log(game)

    useEffect(() => {
        dispatch(loadCurrentGame(id))
    }, [id, match])

    return (
        <div className='game-details' style={{backgroundImage: `linear-gradient(to bottom, rgba(0,0,0, .8), rgba(0,0,0, 1)), url(${game.background_image})`, }}>
            <div className="game-details__info" >
                <div className="game-details__video-box">

                </div>
                <div className="game-details__more-info">

                </div>
            </div>
        </div>
    );
};

export default GameDetails;