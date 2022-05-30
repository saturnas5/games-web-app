const initState = {
    popular: [],
    newGames: [],
    upcoming: [],
    searched: []
}

const gamesReducer = (state = initState, action) => {
    switch (action.type) {
        case 'fetch-popular-games':
            return {...state, popular: action.payload}
        case 'fetch-new-games':
            return {...state, newGames: action.payload}
        case 'fetch-upcoming-games':
            return {...state, upcoming: action.payload}
        default:
            return state;
    }
}



export default gamesReducer;