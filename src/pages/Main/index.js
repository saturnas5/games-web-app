import React, {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import {loadPopularGames, loadNewGames, loadUpcomingGames} from "../../reducers/actions/gamesActions";

const Main = () => {
    const dispatch = useDispatch();
    const games = useSelector(state => state.games)

    useEffect(() => {
        // dispatch(loadPopularGames())
        // dispatch(loadNewGames())
        // dispatch(loadUpcomingGames())
    }, [])

    return (
        <main className='main'>

        </main>
    );
};

export default Main;