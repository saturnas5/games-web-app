import React from "react";
import {Link} from "react-router-dom";
import {
    FaPlus,
    FaListUl
} from "react-icons/fa";
import {setPlatforms} from "../../utils/_utils";


const Game = ({ game:{ name, released, platforms, background_image, rating, ratings_count, genres, slug, id }  }) => {

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