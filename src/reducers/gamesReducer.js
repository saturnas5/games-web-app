const initState = {
    popular: {
        games: [],
        page: 1
    },
    newGames: [],
    upcoming: [],
    currentGame: {},
    currentGameScreens: {},
    searched: [],
    isLoading: false,
    platformGames: {
        games: [],
        page: 1
    },
    genres : {
        games: [],
        page: 1
    }
}

const gamesReducer = (state = initState, action) => {
    switch (action.type) {
        case 'fetch-popular-games':
            return {...state, popular: {...state.popular, games: [...state.popular.games, ...action.payload], page: state.popular.page + 1}}
        case 'fetch-new-games':
            return {...state, newGames: action.payload}
        case 'fetch-upcoming-games':
            return {...state, upcoming: action.payload}
        case 'fetch-current-game':
            return {...state, currentGame: action.payload}
        case 'fetch-current-game-screens':
            return {...state, currentGameScreens: action.payload}
        case 'fetch-loading':
            return {...state, isLoading: action.payload}
        case 'fetch-search-game':
            return {...state, searched: action.payload}
        case 'clear-search-game':
            return {...state, searched: []}
        case 'fetch-games-by-platform':
            return {...state, platformGames: {...state.platformGames, games: [...state.platformGames.games, ...action.payload], page: state.platformGames.page + 1}}
        case 'clear-games-by-platform':
            return {...state, platformGames: {...state.platformGames, games: []}, page: 1}
        case 'fetch-games-by-genre':
            return {...state, genres: {...state.genres, games: [...state.genres.games, ...action.payload], page: state.genres.page + 1}}
        case 'clear-games-by-genre':
            return {...state, genres: {...state.genres, games: []}, page: 1}
        default:
            return state;
    }
}



export default gamesReducer;