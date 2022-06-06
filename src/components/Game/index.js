import React, {useState, useEffect, useRef} from "react";
import {useDispatch, useSelector} from "react-redux";
import {Link} from "react-router-dom";
import {
    FaPlus,
    FaListUl
} from "react-icons/fa";
import {setPlatforms} from "../../utils/_utils";
import {
    addGameToLibrary,
    addGameReviewExceptional,
    addGameReviewRecommended,
    addGameReviewNotWorth,
    addGameReviewAwful,
} from "../../reducers/actions/userActions";
import ToggleBox from "../ToggleBox";


const Game = ({ game:{ name, released, platforms, background_image, rating, ratings_count, genres, slug, id }, game  }) => {
    const dispatch = useDispatch();
    const user = useSelector(state => state.user);
    const [libraryBox, setLibraryBox] = useState(false);
    const [inLibrary, setInLibrary] = useState(false);
    const [rated, setRated] = useState(false)

    useEffect(() => {
        handleGameCheckForLibrary(game)
    }, [inLibrary])

    useEffect(() => {
        handleGameCheckForReview(game)
    }, [rated])

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

    const handleGameCheckForReview = (game) => {
        const reviewsKeys = Object.keys(user.reviews);
        for(let i = 0; i < reviewsKeys.length; i++) {
            let existing = user.reviews[reviewsKeys[i]].find(item => item.id === game.id)
            if(existing) {
                setRated(true)
            }
        }
    }

    const handleGameAddLibrary = (game) => {
        dispatch(addGameToLibrary(game))
        setInLibrary(true);
    }

    const handleGameRating = (review, game) => {
        switch (review) {
            case 'exceptional':
                return dispatch(addGameReviewExceptional(game))
            case 'recommended':
                return dispatch(addGameReviewRecommended(game))
            case 'notWorth':
                return dispatch(addGameReviewNotWorth(game))
            case 'awful':
                return dispatch(addGameReviewAwful(game))
        }
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
                        disabled={!user.token || inLibrary}
                        onClick={() => handleGameAddLibrary(game)}
                        className={`game__cta-btn ${inLibrary && user.token ? 'active' : ''}`}
                    >
                        <FaPlus className={`game__cta-btn-icon ${inLibrary && user.token ? 'active' : ''}`}/>
                        <span className='game__cta-btn-text' >{inLibrary && user.token ? `Added` : `Library`}</span>
                    </button>
                    <ToggleBox className='game__rate-toggle'>
                    <button className={`game__cta-btn ${rated ? 'active' : ''}`} disabled={rated || !user.token}>
                        <span>{rated ? 'Rated' :'Rate'}</span>
                    </button>
                        <div className="game__rate-box">
                            <span onClick={() => {handleGameRating('exceptional', game)}} className="game__rate-btn">Exceptional</span>
                            <span onClick={() => {handleGameRating('recommended', game)}} className="game__rate-btn">Recommended</span>
                            <span onClick={() => {handleGameRating('notWorth', game)}} className="game__rate-btn">Not worth time</span>
                            <span onClick={() => {handleGameRating('awful', game)}} className="game__rate-btn">Awful</span>
                            <span className="game__rate-skip">Don't Rate</span>
                        </div>
                    </ToggleBox>
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