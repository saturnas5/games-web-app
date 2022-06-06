import React from "react";
import {Link} from 'react-router-dom'

const Review = ({ userImg, user, game }) => {
    
    return (
        <div className="review">
            <div className="review__box">
                <img className="review__img" src={userImg} alt={user}/>
                <span className="review__text">
                    {user} rated the game
                    <Link className="review__link" to={`/game/${game.slug}/${game.id}`}>
                        {` ${game.name}`}
                    </Link> as: {game.review}
                </span>
            </div>
            <span className="review__date">
                {`Review added: ${game.date_reviewed}`}
            </span>
        </div>
    );
}

export default Review;