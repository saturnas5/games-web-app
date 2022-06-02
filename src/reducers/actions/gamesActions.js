import axios from "axios";
import {
    popularGamesURL,
    upcomingGamesURL,
    newGamesURL,
    currentGameURL,
    currentGameScreensURL,
    searchGameURL,
    gamesByPlatform
} from "../../api/api";


export const loadPopularGames = (page) => async (dispatch) => {
    dispatch({type: 'fetch-loading', payload: true})
    const popularGamesData = await axios.get(popularGamesURL(page));

    dispatch({
        type: 'fetch-popular-games',
        payload: popularGamesData.data.results
    });
    dispatch({type: 'fetch-loading', payload: false})
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

export const loadCurrentGame = (id) => async (dispatch) => {
    const currentGameData = await axios.get(currentGameURL(id))

    dispatch({
        type: 'fetch-current-game',
        payload: currentGameData.data
    })
}

export const loadCurrentScreens = (id) => async (dispatch) => {
    const currentGameData = await axios.get(currentGameScreensURL(id))

    dispatch({
        type: 'fetch-current-game-screens',
        payload: currentGameData.data
    })
}

export const loadSearchedGame = (game) => async (dispatch) => {
    dispatch({type: 'fetch-loading', payload: true});
    const searchedGameData = await axios.get(searchGameURL(game));

    dispatch({
        type: 'fetch-search-game',
        payload: searchedGameData.data.results
    });

    dispatch({type: 'fetch-loading', payload: false});
}

export const clearSearchedGame = () => (dispatch) => {
    dispatch({
        type: 'clear-search-game'
    })
}

export const loadGamesByPlatform = (platformId, page) => async (dispatch) => {
    dispatch({type: 'fetch-loading', payload: true})
    const gamesByPlatformData = await axios.get(gamesByPlatform(platformId, page))

    dispatch({
        type: 'fetch-games-by-platform',
        payload: gamesByPlatformData.data.results
    })

    dispatch({type: 'fetch-loading', payload: false})
}

export const clearGamesByPlatform = () => (dispatch) => {
    dispatch({
        type: 'clear-games-by-platform'
    })
}