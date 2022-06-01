import React from "react";
import {Link} from "react-router-dom";
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


const Game = ({ game:{ name, released, platforms, background_image, rating, ratings_count, genres, slug, id }  }) => {
    function setPlatforms(platform) {
        switch (platform) {
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

    return (
        <div className="game">
            <Link to={`/game/${slug}/${id}`}>
                <img src={background_image} alt="" className="game__img"/>
                <div className="game__platforms">
                    {/*{platforms.map(platform => {*/}
                    {/*    return setPlatforms(platform.platform.slug)*/}
                    {/*})}*/}
                </div>
                <h3 className='game__title'>{name}</h3>
            </Link>
                <div className="game__cta">
                    <button className="game__cta-btn"><FaPlus className="game__cta-btn-icon"/><span>Library</span></button>
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