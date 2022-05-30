import axios from "axios";
import {popularGamesURL, upcomingGamesURL, newGamesURL} from "../../api/api";

export const loadPopularGames = () => async (dispatch) => {
    const popularGamesData = await axios.get(popularGamesURL());

    dispatch({
        type: 'fetch-popular-games',
        payload: popularGamesData.data.results
    });
};

export const loadNewGames = () => async (dispatch) => {
    const newGamesData = await axios.get(newGamesURL());

    dispatch({
        type: 'fetch-new-games',
        payload: newGamesData.data.results
    });
};

export const loadUpcomingGames = () => async (dispatch) => {
    const upcomingGamesData = await axios.get(upcomingGamesURL());

    dispatch({
        type: 'fetch-upcoming-games',
        payload: upcomingGamesData.data.results
    });
};