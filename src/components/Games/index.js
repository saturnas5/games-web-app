import React, {useState} from "react";
import {useSelector} from "react-redux";
import Game from "../Game";

const Games = () => {
    const games = useSelector(state => state.games)
    const [showBy, setShowBy] = useState('newGames');
    console.log(games)

    return (
        <section className='games'>
            <div className="games__sort">
                <select className='games__show-by' onChange={e => setShowBy(e.target.value)}>
                    <option value="newGames">New Games</option>
                    <option value="upcoming">Upcoming</option>
                    <option value="popular">Popularity</option>
                </select>
            </div>

            {games[showBy].map(game => {
                return <Game key={game.id} game={game} />
            })}
        </section>
    );
};

export default Games;