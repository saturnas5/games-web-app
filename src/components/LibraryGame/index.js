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

    console.log(platform)

    // Reikes perrasyti funkcija, kad nereiketu atlikti nereikalingu veiksmu.
    const handleGameAddingToLibrary = (library, game) => {
        let existingGame = user.library[library].find(item => item.id === game.id)
        if(!existingGame) {
            if(library === 'playing') {
                dispatch(removeGameFromUncategorizedLibrary(game))
                dispatch(removeGameFromCompletedLibrary(game))
                dispatch(removeGameFromPlayedLibrary(game))
                dispatch(removeGameFromWantedLibrary(game))
                dispatch(addGameToPlayingLibrary(game));
            } else if(library === 'completed') {
                dispatch(removeGameFromUncategorizedLibrary(game))
                dispatch(removeGameFromPlayingLibrary(game))
                dispatch(removeGameFromPlayedLibrary(game))
                dispatch(removeGameFromWantedLibrary(game))
                dispatch(addGameToCompletedLibrary(game));
            } else if(library === 'played') {
                dispatch(removeGameFromUncategorizedLibrary(game))
                dispatch(removeGameFromPlayingLibrary(game))
                dispatch(removeGameFromCompletedLibrary(game))
                dispatch(removeGameFromWantedLibrary(game))
                dispatch(addGameToPlayedLibrary(game));
            } else if(library === 'wantPlay') {
                dispatch(removeGameFromUncategorizedLibrary(game))
                dispatch(removeGameFromPlayingLibrary(game))
                dispatch(removeGameFromCompletedLibrary(game))
                dispatch(removeGameFromPlayedLibrary(game))
                dispatch(addGameToWantPlayLibrary(game));
            }
        }
    }

    const handleGameRemoveFromLibrary = (game) => {
        dispatch(removeGameFromUncategorizedLibrary(game))
        dispatch(removeGameFromPlayingLibrary(game))
        dispatch(removeGameFromCompletedLibrary(game))
        dispatch(removeGameFromPlayedLibrary(game))
        dispatch(removeGameFromWantedLibrary(game))
    }

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