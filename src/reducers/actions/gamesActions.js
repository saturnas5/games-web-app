import axios from "axios";
import {
    popularGamesURL,
    upcomingGamesURL,
    newGamesURL,
    currentGameURL,
    currentGameScreensURL,
    searchGameURL,
    gamesByPlatformURL,
    gamesByGenreURL,
    gamesByDateURL,
} from "../../api/api";
import {wait} from "@testing-library/user-event/dist/utils";


export const loadPopularGames = (page) => async (dispatch) => {
    dispatch({type: 'fetch-loading', payload: true})

    try {
        const popularGamesData = await axios.get(popularGamesURL(page));
        dispatch({
            type: 'fetch-popular-games',
            payload: popularGamesData.data.results
        });
    } catch (err) {
        console.log(err)
    }

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
    try {
        const currentGameData = await axios.get(currentGameURL(id));
        dispatch({
            type: 'fetch-current-game',
            payload: currentGameData.data
        });
    } catch (err) {
        console.log(err);
    }

}

export const loadCurrentScreens = (id) => async (dispatch) => {
    try {
        const currentGameData = await axios.get(currentGameScreensURL(id));
        dispatch({
            type: 'fetch-current-game-screens',
            payload: currentGameData.data
        });
    } catch (err) {
        console.log(err)
    }

}

export const loadSearchedGame = (game) => async (dispatch) => {
    dispatch({type: 'fetch-loading', payload: true});

    try {
        const searchedGameData = await axios.get(searchGameURL(game));
        dispatch({
            type: 'fetch-search-game',
            payload: searchedGameData.data.results
        });
    } catch (err) {
        console.log(err);
    }

    dispatch({type: 'fetch-loading', payload: false});
}

export const clearSearchedGame = () => (dispatch) => {
    dispatch({
        type: 'clear-search-game'
    })
}

export const loadGamesByPlatform = (platformId, page) => async (dispatch) => {
    dispatch({type: 'fetch-loading', payload: true})

    try {
        const gamesByPlatformData = await axios.get(gamesByPlatformURL(platformId, page));
        dispatch({
            type: 'fetch-games-by-platform',
            payload: gamesByPlatformData.data.results
        });
    } catch (err) {
        console.log(err)
    }


    dispatch({type: 'fetch-loading', payload: false})
}

export const clearGamesByPlatform = () => (dispatch) => {
    dispatch({
        type: 'clear-games-by-platform'
    })
}

export const loadGamesByGenre = (genre, page) => async (dispatch) => {
    dispatch({type: 'fetch-loading', payload: true});

    try {
        const gamesByGenreData = await axios.get(gamesByGenreURL(genre, page));
        dispatch({
            type: 'fetch-games-by-genre',
            payload: gamesByGenreData.data.results
        });
    } catch (err) {
        console.log(err)
    }


    dispatch({type: 'fetch-loading', payload: false});
};

export const clearGamesGenre = () => (dispatch) => {
    dispatch({
        type: 'clear-games-by-genre'
    })
}

export const loadGamesByDate = (to, from, page) => async (dispatch) => {
    dispatch({type: 'fetch-loading', payload: true});
    try {
        const gamesByDateData = await axios.get(gamesByDateURL(to, from, page));
        dispatch({
            type: 'fetch-games-by-date',
            payload: gamesByDateData.data.results
        })
    } catch (err) {
        console.log(err)
    }

    dispatch({type: 'fetch-loading', payload: false});
}

export const clearGamesByDate = () => (dispatch) => {
    dispatch({
        type: 'clear-games-by-date'
    })
}