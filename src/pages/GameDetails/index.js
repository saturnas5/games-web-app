import React, {useEffect, useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {loadCurrentGame, loadCurrentGameSeries, loadCurrentScreens} from "../../reducers/actions/gamesActions";
import {Link, useParams, useRouteMatch} from 'react-router-dom';
import {setPlatforms} from "../../utils/_utils";
import Loader from "../../components/Loader";
import ScrollToTop from "../../components/ScrollToTop";
import GameSameSeries from "../../components/GameSameSeries";
import Game from "../../components/Game";


const GameDetails = () => {
    const dispatch = useDispatch();
    const { currentGame, currentGameScreens, currentGameSeries } = useSelector(state => state.games);
    const { id, slug } = useParams();
    const match = useRouteMatch();
    const [mainImage, setMainImage] = useState('');
    const [isLoading, setIsLoading] = useState(true);

    function HandleTitleChange() {
        useEffect(() => {
            window.document.title = `${currentGame.name} | YourWebsiteName.com`
        }, [])
        return null;
    }

    useEffect(() => {
        setMainImage(currentGame.background_image_additional || currentGame.background_image)
    }, [currentGame])

    useEffect(() => {
        test()
        dispatch(loadCurrentGame(id))
        dispatch(loadCurrentScreens(id))
        dispatch(loadCurrentGameSeries(slug))
    }, [id, match, dispatch])

    function test() {
        setTimeout(() => {
            setIsLoading(false)
        }, 1000)
    }

    if(isLoading) {
        return (
            <div className="loader-box">
                <Loader/>
            </div>
        )
    }
    return (
        <div className='game-details' style={{backgroundImage: `linear-gradient(to bottom, rgba(0,0,0, .7), rgba(0,0,0, 1)), url(${currentGame.background_image})`, }}>
            <div className="game-details__info" >
                <div className="game-details__video-box">
                    <img src={mainImage} alt={currentGame.name}/>
                    <div className="game-details__developers">
                        <h4 className="game-details__developers-title">Developers</h4>
                        {currentGame.developers && currentGame.developers.map(dev => {
                            return <Link key={dev.id} className="game-details__developers-link" to={`/developers/${dev.slug}`}>{dev.name}</Link>
                        })}
                    </div>
                </div>
                <div className="game-details__more-info">
                    <div className="game-details__platforms">
                        {currentGame.released && <span>{currentGame.released}</span>}
                        {currentGame.platforms && currentGame.platforms.map(platform => {
                            return setPlatforms(platform.platform.slug)
                        })}
                    </div>
                    <h1 className='game-details__title'>{currentGame.name}</h1>
                    <div className="game-details__genres">
                        {currentGame.genres && currentGame.genres.map(genre => {
                            return <Link key={genre.id} className='game-details__genres-link' to={`/genres/${genre.slug}`}>{genre.name}</Link>
                        })}
                    </div>
                    <div className="game-details__screens">
                        {currentGameScreens.results && currentGameScreens.results.map((screen, index) => {
                            return (
                                <img onClick={() => setMainImage(screen.image)} key={screen.id} src={screen.image} alt={`${currentGame.name} image-${index + 1}`}/>
                            )
                        })}
                    </div>
                </div>
                <div className="game-details__description">
                    <p>{currentGame.description_raw}</p>
                </div>
                <div className="game-details__same-series">
                    {currentGameSeries.length > 0 && currentGameSeries.map(game => {
                        return (
                            <div className='game-details__same-series-wrap' key={game.id}>
                                {/*<GameSameSeries key={game.id} game={game} />*/}
                                <Game game={game} />
                            </div>
                        )
                    })}
                </div>
            </div>
            <ScrollToTop/>
            <HandleTitleChange/>
        </div>
    );
};

export default GameDetails;

