import React, {useState, useRef, useEffect} from "react";
import { useDispatch, useSelector } from "react-redux";
import Game from "../Game";
import ScrollToTop from "../ScrollToTop";
import {
    loadNewGames,
    loadPopularGames,
    loadUpcomingGames,
    loadGamesByPlatform,
    clearGamesByPlatform,
    loadGamesByGenre,
    clearGamesGenre,
    loadGamesByDate,
    clearGamesByDate,
} from "../../reducers/actions/gamesActions";
import Loader from "../Loader";
import {useParams, useLocation} from 'react-router-dom';
import ScrollTopButton from "../ScrollTopButton";

const Games = () => {
    const dispatch = useDispatch();
    const games = useSelector(state => state.games)
    const [showBy, setShowBy] = useState('popular');
    const params = useParams();
    const location = useLocation();
    const [visible, setVisible] = useState(false);

    const firstRenderRef = useRef(false)

    const toggleVisible = () => {
        const scrolled = document.documentElement.scrollTop;
        if(scrolled > 300) {
            setVisible(true)
        } else if(scrolled <= 300) {
            setVisible(false)
        }
    }

    useEffect(() => {
        window.addEventListener('scroll', toggleVisible)

        return () => {
            window.removeEventListener('scroll', toggleVisible);
        }
    }, [])

    useEffect(() => {
        window.document.title = `Best website for games info | YourWebsiteName.com`
    }, [])

    useEffect(() => {
        let isCancelled = false;

        if(location.pathname === '/' && !firstRenderRef.current) {
            dispatch(loadPopularGames(games.popular.page))
            firstRenderRef.current = true;
        } else if(params.name) {
            dispatch(clearGamesByPlatform());
            dispatch(loadGamesByPlatform(params.id, games.platformGames.page));
        } else if(params.genre) {
            dispatch(clearGamesGenre())
            dispatch(loadGamesByGenre(params.genre, games.genres.page))
        } else if(params.from && params.to) {
            dispatch(clearGamesByDate());
            dispatch(loadGamesByDate(params.to, params.from, games.date.page))
        }

        return () => {
            isCancelled = true;
        }
    }, [location, params, dispatch])

    // intersection observer
    const loader = useRef();
    function Observer() {
        useEffect(() => {

            let options = {
                root: null,
                rootMargin: '0px',
                threshold: .8
            };
            function loadData(platformId) {
                if(location.pathname === '/') {
                    dispatch(loadPopularGames(games.popular.page))
                } else if (params.name) {
                    dispatch(loadGamesByPlatform(platformId, games.platformGames.page))
                } else if (params.genre) {
                    dispatch(loadGamesByGenre(params.genre, games.genres.page))
                } else if (params.from && params.to) {
                    dispatch(loadGamesByDate(params.to, params.from, games.date.page))
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

            {/*   SHOW GAMES BASED ON DATE   */}

            { params.from && params.to ? games.date.games.map(game => {
                return <Game key={game.id} game={game} />
            }) : null }

            {/*   SHOW GAMES BASED ON DATE   */}

            {visible && <ScrollTopButton/>}
            {games.isLoading ? null : <Observer/>}
            {games[showBy].games && <div className="load-more" ref={loader}></div>}
            {games.isLoading ? <Loader/> : null}
            <ScrollToTop/>
        </section>
    );
};

export default Games;