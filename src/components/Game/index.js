import React, {useState, useEffect, useRef} from "react";
import {useDispatch, useSelector} from "react-redux";
import {Link} from "react-router-dom";
import {
    FaPlus,
    FaListUl
} from "react-icons/fa";
import {setPlatforms} from "../../utils/_utils";
import {addGameToLibrary} from "../../reducers/actions/userActions";


const Game = ({ game:{ name, released, platforms, background_image, rating, ratings_count, genres, slug, id }, game  }) => {
    const dispatch = useDispatch();
    const user = useSelector(state => state.user);
    const [libraryBox, setLibraryBox] = useState(false);
    const [inLibrary, setInLibrary] = useState(false);

    useEffect(() => {
        handleGameCheckForLibrary(game)
    }, [inLibrary])

    const handleGameCheckForLibrary = (game) => {
        let inUncategorized = user.library.uncategorized.find(item => item.id === game.id);
        let inPlaying = user.library.playing.find(item => item.id === game.id);
        let inCompleted = user.library.completed.find(item => item.id === game.id);
        let inPlayed = user.library.played.find(item => item.id === game.id);
        let inWantPlay = user.library.wantPlay.find(item => item.id === game.id);
        if(inUncategorized || inPlaying || inCompleted || inPlayed || inWantPlay) {
            setInLibrary(true)
        }
    }

    const handleGameAddLibrary = (game) => {
        dispatch(addGameToLibrary(game))
        setInLibrary(true);
    }

    return (
        <div className="game">
            <Link to={`/game/${slug}/${id}`}>
                <img src={background_image} alt="" className="game__img"/>
                <div className="game__platforms">
                    {platforms.map(platform => {
                        return setPlatforms(platform.platform.slug)
                    })}
                </div>
                <h3 className='game__title'>{name}</h3>
            </Link>
                <div className="game__cta">
                    <button
                        disabled={!user.token}
                        onClick={() => handleGameAddLibrary(game)}
                        className={`game__cta-btn ${inLibrary && user.token ? 'active' : ''}`}
                    >
                        <FaPlus className={`game__cta-btn-icon ${inLibrary && user.token ? 'active' : ''}`}/>
                        <span className='game__cta-btn-text' >{inLibrary && user.token ? `Added` : `Library`}</span>
                    </button>
                    <button className="game__cta-btn"><span>Rate</span></button>
                    <button className="game__cta-btn"><FaListUl className="game__cta-btn-icon"/><span>Wish list</span></button>
                </div>
                <div className="game__info">
                    <div className="game__info-released">
                        <span>Released:</span>
                        <span>{released}</span>
                    </div>
                    <div className="game__info-rating">
                        <span>Rating:</span>
                        <span>{rating} from {ratings_count} votes</span>
                    </div>
                    <div className="game__info-genres">
                        <span>Genres:</span>
                        <div className="game__info-genres-box">
                            {genres.map(genre => {
                                return <Link key={genre.name} className="game__info-genres-link" to={`/genres/${genre.slug}`}>{genre.name}</Link>
                            })}
                        </div>
                    </div>
                </div>
        </div>
    );
};

export default Game;