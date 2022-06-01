const initState = {
    popular: [],
    newGames: [],
    upcoming: [],
    currentGame: {},
    currentGameScreens: {},
    searched: [],
}

const gamesReducer = (state = initState, action) => {
    switch (action.type) {
        case 'fetch-popular-games':
            return {...state, popular: action.payload}
        case 'fetch-new-games':
            return {...state, newGames: action.payload}
        case 'fetch-upcoming-games':
            return {...state, upcoming: action.payload}
        case 'fetch-current-game':
            return {...state, currentGame: action.payload}
        case 'fetch-current-game-screens':
            return {...state, currentGameScreens: action.payload}
        default:
            return state;
    }
}



export default gamesReducer;