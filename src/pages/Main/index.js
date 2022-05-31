import React, {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import {loadPopularGames, loadNewGames, loadUpcomingGames} from "../../reducers/actions/gamesActions";
import SideMenu from "../../components/SideMenu";
import Games from "../../components/Games";

const Main = () => {
    const dispatch = useDispatch();
    const games = useSelector(state => state.games)

    useEffect(() => {
        dispatch(loadPopularGames())
        dispatch(loadNewGames())
        dispatch(loadUpcomingGames())
    }, [])

    return (
        <main className='main'>
            <div className="main__menu">
                <SideMenu/>
            </div>
            <div className="main__games">
                <Games/>
            </div>
        </main>
    );
};

export default Main;