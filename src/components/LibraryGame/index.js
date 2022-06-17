import React, {useState} from "react";
import {setPlatforms} from "../../utils/_utils";
import {Link} from 'react-router-dom';
import {useDispatch, useSelector} from "react-redux";
import {
    removeGameFromUncategorizedLibrary,
    removeGameFromPlayingLibrary,
    removeGameFromCompletedLibrary,
    removeGameFromPlayedLibrary,
    removeGameFromWantedLibrary,
    addGameToPlayingLibrary,
    addGameToCompletedLibrary,
    addGameToPlayedLibrary,
    addGameToWantPlayLibrary,
    setGamePlatform
} from "../../reducers/actions/userActions";

const LibraryGame = ({ game }) => {
    const dispatch = useDispatch();
    const user = useSelector(state => state.user);
    const [platform, setPlatform] = useState('');

    const handleRemoveDispatch = (existingLib, game) => {
        switch (existingLib) {
            case 'uncategorized':
                return removeGameFromUncategorizedLibrary(game);
            case 'playing':
                return removeGameFromPlayingLibrary(game);
            case 'completed':
                return removeGameFromCompletedLibrary(game);
            case 'played':
                return removeGameFromPlayedLibrary(game);
            case 'wantPlay':
                return removeGameFromWantedLibrary(game);
        }
    }

    const handleGameAddingToLibrary = (library, game) => {
        let existingGame = user.library[library].find(item => item.id === game.id);
        let gameLibrary = game.library;
        if(!existingGame) {
            if(library === 'playing') {
                // dispatch(handleRemoveDispatch(gameLibrary, game))
                dispatch(addGameToPlayingLibrary(game, user.userUid));
            } else if(library === 'completed') {
                dispatch(handleRemoveDispatch(gameLibrary, game))
                dispatch(addGameToCompletedLibrary(game, user.userUid));
            } else if(library === 'played') {
                dispatch(handleRemoveDispatch(gameLibrary, game))
                dispatch(addGameToPlayedLibrary(game, user.userUid));
            } else if(library === 'wantPlay') {
                dispatch(handleRemoveDispatch(gameLibrary, game))
                dispatch(addGameToWantPlayLibrary(game, user.userUid));
            }
        }
    };

    const handleGameRemoveFromLibrary = (game) => {
        let gameLibrary = game.library;
        dispatch(handleRemoveDispatch(gameLibrary, game));
    };

    return (
        <div className="library-game">
            <img src={game.background_image} alt="" className="library-game__img"/>
            <div className="library-game__platforms">
                {game.platforms.map(platform => {
                    return setPlatforms(platform.platform.slug)
                })}
            </div>
            <Link to={`/game/${game.slug}/${game.id}`} className="library-game__title">{game.name}</Link>
            <div className="library-game__add-info">
                <span className="library-game__release">{game.released}</span>
                <span className="library-game__rating">{game.rating}</span>
            </div>
            <span className="library-game__btn">Library</span>
            <div className="library-game__library-select-box">
                <span className="library-game__library-select-box-title">Select library</span>
                <span onClick={() => handleGameAddingToLibrary('playing', game)} className="library-game__library-select-link">Currently playing</span>
                <span onClick={() => handleGameAddingToLibrary('completed', game)} className="library-game__library-select-link">Completed</span>
                <span onClick={() => handleGameAddingToLibrary('played', game)} className="library-game__library-select-link">Played</span>
                <span onClick={() => handleGameAddingToLibrary('wantPlay', game)} className="library-game__library-select-link">Want play</span>
                <span onClick={() => handleGameRemoveFromLibrary(game)} className="library-game__library-select-remove">Remove Game</span>
            </div>
            <select onChange={e => dispatch(setGamePlatform(game, e.target.value))} className='library-game__platform-select'>
                <option className='library-game__platform-select-option' value="none">Select platform </option>
                {game.platforms.map(platform => {
                    return <option className='library-game__platform-select-option' value={platform.platform.slug} >{platform.platform.name}</option>
                })}
            </select>
        </div>
    );
};

export default LibraryGame;