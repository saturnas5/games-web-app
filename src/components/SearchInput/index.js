import React, {useState, useEffect} from "react";
import {Link} from 'react-router-dom';

const SearchInput = ({ value, onInputChange, games }) => {


    return (
        <div className="header__search">
            <input value={value} onChange={e => onInputChange(e.target.value)} type="text" className="header__search-input" placeholder='Search'/>
            <div className="header__search-output">
                {games.searched.map(game => {
                    return (
                        <div className="header__search-output-item">
                            <Link className="header__search-output-item-link" to={`/game/${game.slug}/${game.id}`}>
                                <img src={game.background_image} alt={game.name}/>
                                <span>{game.name}</span>
                            </Link>
                        </div>
                    )
                })}
            </div>
        </div>
    );
};

export default SearchInput;