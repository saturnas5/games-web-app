import React, {useEffect, useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {loadCurrentGame, loadCurrentScreens} from "../../reducers/actions/gamesActions";
import {Link, useParams, useRouteMatch} from 'react-router-dom';

import {
    FaWindows,
    FaPlaystation,
    FaXbox,
    FaApple,
    FaGamepad,
    FaLinux,
    FaAndroid,
    FaPlus,
    FaListUl
} from "react-icons/fa";
import Loader from "../../components/Loader";
import ScrollToTop from "../../components/ScrollToTop";

const GameDetails = () => {
    const dispatch = useDispatch();
    const {currentGame, currentGameScreens} = useSelector(state => state.games);
    const { id } = useParams();
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
    }, [id, match])

    function test() {
        setTimeout(() => {
            setIsLoading(false)
        }, 1000)
    }

    function setPlatforms(platform) {
        switch (platform) {
            case 'playstation3':
                return <FaPlaystation key='playstation3' className='game__platforms-icon'/>;
            case 'playstation4':
                return <FaPlaystation key='playstation4' className='game__platforms-icon'/>;
            case 'playstation5':
                return <FaPlaystation key='playstation5' className='game__platforms-icon'/>
            case 'xbox-one':
                return <FaXbox key='xbox-one' className='game__platforms-icon'/>;
            case 'xbox-series-x':
                return <FaXbox key='xbox-series-x' className='game__platforms-icon'/>;
            case 'nintendo-switch':
                return <FaGamepad key='nintendo-switch' className='game__platforms-icon'/>;
            case 'nintendo-3ds':
                return <FaGamepad key='nintendo-3ds' className='game__platforms-icon'/>;
            case 'ios':
                return <FaApple key='ios' className='game__platforms-icon'/>;
            case 'macos':
                return <FaApple key='macos' className='game__platforms-icon'/>;
            case 'pc':
                return <FaWindows key='pc' className='game__platforms-icon'/>;
            case 'linux':
                return <FaLinux key='linux' className='game__platforms-icon'/>;
            case 'android':
                return <FaAndroid key='android' className='game__platforms-icon'/>;
        }
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
                        {currentGame.developers.map(dev => {
                            return <Link key={dev.id} className="game-details__developers-link" to={`/developers/${dev.slug}`}>{dev.name}</Link>
                        })}
                    </div>
                </div>
                <div className="game-details__more-info">
                    <div className="game-details__platforms">
                        {currentGame.released && <span>{currentGame.released}</span>}
                        {currentGame.platforms.map(platform => {
                            return setPlatforms(platform.platform.slug)
                        })}
                    </div>
                    <h1 className='game-details__title'>{currentGame.name}</h1>
                    <div className="game-details__genres">
                        {currentGame.genres.map(genre => {
                            return <Link key={genre.id} className='game-details__genres-link' to={`/genres/${genre.slug}`}>{genre.name}</Link>
                        })}
                    </div>
                    <div className="game-details__screens">
                        {currentGameScreens.results.map((screen, index) => {
                            return (
                                <img onClick={() => setMainImage(screen.image)} key={screen.id} src={screen.image} alt={`${currentGame.name} image-${index + 1}`}/>
                            )
                        })}
                    </div>
                </div>
                <div className="game-details__description">
                    <p>{currentGame.description_raw}</p>
                </div>
            </div>
            <ScrollToTop/>
            <HandleTitleChange/>
        </div>
    );
};

export default GameDetails;