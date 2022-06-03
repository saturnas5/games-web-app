import React, {useState, useEffect} from "react";
import {useSelector} from "react-redux";
import {
    FaThumbsUp,
    FaGamepad,
    FaAward,
    FaBasketballBall,
    FaBinoculars,
    FaAngleRight,
} from "react-icons/fa";
import LibraryGame from "../LibraryGame";

const LibraryList = ({ label, library, icon }) => {
    const user = useSelector(state => state.user)
    const [active, setActive] = useState(false);
    const [open, setOpen] = useState(false);

    const libraryGamesCount = (library) => {
        return user.library[library].length
    }

    useEffect(() => {
        if(user.library[library].length === 0){
            setOpen(false);
        }
    }, [user.library])

    return (
        <div className='library-list'>
            <div className="library-list__label">
                {icon === 'thumb' && <FaThumbsUp className="library-list__icon"/>}
                {icon === 'game' && <FaGamepad className="library-list__icon"/>}
                {icon === 'completed' && <FaAward className="library-list__icon"/>}
                {icon === 'played' && <FaBasketballBall className="library-list__icon"/>}
                {icon === 'wanted' && <FaBinoculars className="library-list__icon"/>}
                <span className="library-list__title">{label} {libraryGamesCount(library)}</span>
                <div className="library-list__status-icon-box">
                    <FaAngleRight onClick={() => setOpen(!open)} className={`library-list__status-icon ${open ? 'open' : ''}`}/>
                </div>
            </div>
            <div className={`library-list__results-box ${open ? 'open' : ''}`}>

                {library === 'uncategorized' && user.library.uncategorized.map(game => {
                    return <LibraryGame key={game.id} game={game} />
                })}

                {library === 'playing' && user.library.playing.map(game => {
                    return <LibraryGame key={game.id} game={game} />
                })}

                {library === 'completed' && user.library.completed.map(game => {
                    return <LibraryGame key={game.id} game={game} />
                })}

                {library === 'played' && user.library.played.map(game => {
                    return <LibraryGame key={game.id} game={game} />
                })}

                {library === 'wantPlay' && user.library.wantPlay.map(game => {
                    return <LibraryGame key={game.id} game={game} />
                })}
            </div>
        </div>
    );
};

export default LibraryList;