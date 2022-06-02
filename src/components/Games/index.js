import React, {useState, useRef, useEffect} from "react";
import { useDispatch, useSelector } from "react-redux";
import Game from "../Game";
import ScrollToTop from "../ScrollToTop";
import {
    loadNewGames,
    loadPopularGames,
    loadUpcomingGames,
    loadGamesByPlatform,
    clearGamesByPlatform, loadGamesByGenre, clearGamesGenre
} from "../../reducers/actions/gamesActions";
import Loader from "../Loader";
import {useParams, useLocation} from 'react-router-dom';

const Games = () => {
    const dispatch = useDispatch();
    const games = useSelector(state => state.games)
    const [showBy, setShowBy] = useState('popular');
    const params = useParams();
    const location = useLocation();

    console.log('params', params)
    console.log('location', location)

    useEffect(() => {
        window.document.title = `Best website for games info | YourWebsiteName.com`
    }, [])

    useEffect(() => {
        let isCancelled = false;

        if(location.pathname === '/') {
            dispatch(loadPopularGames(games.popular.page))
        } else if(params.name) {
            dispatch(clearGamesByPlatform());
            dispatch(loadGamesByPlatform(params.id, games.platformGames.page));
        } else if(params.genre) {
            dispatch(clearGamesGenre())
            dispatch(loadGamesByGenre(params.genre, games.genres.page))
        } else if(params.time) {
            console.log('time')
        }

        return () => {
            isCancelled = true;
        }
    }, [location, params])


    // intersection observer
    const loader = useRef();
    function Observer() {
        useEffect(() => {

            let options = {
                root: null,
                rootMargin: '0px',
                threshold: 1
            };
            function loadData(platformId) {
                if(location.pathname === '/') {
                    dispatch(loadPopularGames(games.popular.page))
                } else if (params.name) {
                    dispatch(loadGamesByPlatform(platformId, games.platformGames.page))
                } else if (params.genre) {
                    dispatch(loadGamesByGenre(params.genre, games.genres.page))
                }

            }

            let observer = new IntersectionObserver((entities) => {
                const target = entities[0]
                if(target.isIntersecting) {
                    loadData(params.id);

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

            {/*    SHOW GAMES MAIN PAGE      */}

            { location.pathname === '/' ? games[showBy].games.map(game => {
                return <Game key={game.id} game={game} />
            }) : null }

            {/*    SHOW GAMES MAIN PAGE      */}

            {/* SHOW GAMES BASED ON PLATFORM */}

            { params.name === 'pc' ? games.platformGames.games.map(game => {
                return <Game key={game.id} game={game} />
            }) : null }

            { params.name === 'playstation' ? games.platformGames.games.map(game => {
                return <Game key={game.id} game={game} />
            }) : null }

            { params.name === 'xbox' ? games.platformGames.games.map(game => {
                return <Game key={game.id} game={game} />
            }) : null }

            { params.name === 'nintendo' ? games.platformGames.games.map(game => {
                return <Game key={game.id} game={game} />
            }) : null }

            { params.name === 'ios' ? games.platformGames.games.map(game => {
                return <Game key={game.id} game={game} />
            }) : null }

            { params.name === 'android' ? games.platformGames.games.map(game => {
                return <Game key={game.id} game={game} />
            }) : null }

            {/* SHOW GAMES BASED ON PLATFORM */}

            {/*  SHOW GAMES BASED ON GENRE   */}

            { params.genre ? games.genres.games.map(game => {
                return <Game key={game.id} game={game} />
            }) : null }

            {/*  SHOW GAMES BASED ON GENRE   */}

            {games.isLoading ? null : <Observer/>}
            {games[showBy].games && <div className="load-more" ref={loader}></div>}
            {games.isLoading ? <Loader/> : null}
            <ScrollToTop/>
        </section>
    );
};

export default Games;