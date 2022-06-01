import React, {useState, useRef, useEffect} from "react";
import { useDispatch, useSelector } from "react-redux";
import Game from "../Game";
import ScrollToTop from "../ScrollToTop";
import {loadNewGames, loadPopularGames, loadUpcomingGames} from "../../reducers/actions/gamesActions";

const Games = () => {
    const dispatch = useDispatch();
    const games = useSelector(state => state.games)
    const [showBy, setShowBy] = useState('popular');

    useEffect(() => {
        let isCancelled = false;

        dispatch(loadPopularGames(1))
        // dispatch(loadNewGames())
        // dispatch(loadUpcomingGames())

        return () => {
            isCancelled = true;
        }
    }, [])

    // intersection observer
    const loader = useRef();

    useEffect(() => {

        let options = {
            root: null,
            rootMargin: '0px',
            threshold: 1
        };

        let i = 2;
        function loadData() {
            dispatch(loadPopularGames(i))
            i++;
        }

        let observer = new IntersectionObserver((entities) => {
            const target = entities[0]
            if(target.isIntersecting) {
                loadData();
            }
        }, options)

        if(loader.current) {
            observer.observe(loader.current)
        }

    }, [])

    // intersection observer

    return (
        <section className='games'>
            <div className="games__sort">
                <select className='games__show-by' onChange={e => setShowBy(e.target.value)}>
                    <option value="popular">Popularity</option>
                    <option value="newGames">New Games</option>
                    <option value="upcoming">Upcoming</option>
                </select>
            </div>

            {games[showBy].map(game => {
                return <Game key={game.id} game={game} />
            })}
            <div className="load-more" ref={loader}></div>
            <ScrollToTop/>
        </section>
    );
};

export default Games;