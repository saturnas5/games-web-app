import React, {useState, useRef, useEffect} from "react";
import { useDispatch, useSelector } from "react-redux";
import Game from "../Game";
import ScrollToTop from "../ScrollToTop";
import {loadNewGames, loadPopularGames, loadUpcomingGames} from "../../reducers/actions/gamesActions";
import Loader from "../Loader";

const Games = () => {
    const dispatch = useDispatch();
    const games = useSelector(state => state.games)
    const [showBy, setShowBy] = useState('popular');

    useEffect(() => {
        let isCancelled = false;

        dispatch(loadPopularGames(games.popular.page))
        // dispatch(loadNewGames())
        // dispatch(loadUpcomingGames())

        return () => {
            isCancelled = true;
        }
    }, [])


    // intersection observer
    const loader = useRef();
    function Observer() {
        useEffect(() => {

            let options = {
                root: null,
                rootMargin: '0px',
                threshold: 1
            };
            function loadData(page) {
                dispatch(loadPopularGames(page))
            }

            let observer = new IntersectionObserver((entities) => {
                const target = entities[0]
                if(target.isIntersecting) {
                    loadData(games.popular.page);
                }
            }, options)

            if(loader.current) {
                observer.observe(loader.current)
            }

            return () => observer.disconnect()

        }, [])

        return null;
    }



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

            {games[showBy].games.map((game, index) => {
                return <Game key={index} game={game} />
            })}
            {games.isLoading ? null : <Observer/>}
            {games[showBy].games && <div className="load-more" ref={loader}></div>}
            {games.isLoading ? <Loader/> : null}
            <ScrollToTop/>
        </section>
    );
};

export default Games;