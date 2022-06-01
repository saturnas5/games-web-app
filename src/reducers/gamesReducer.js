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
    isLoading: false
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
        default:
            return state;
    }
}



export default gamesReducer;