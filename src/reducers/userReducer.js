import React from "react";
import {formatDate} from "../utils/_utils";
import anton from '../img/anton.jpg'

const initState = {
    userUid: null,
    isLoggedIn : false,
    token: null,
    wishList: [],
    library: {
        uncategorized: [],
        playing: [],
        completed: [],
        played: [],
        wantPlay: []
    },
    reviews: {
        exceptional: [],
        recommended: [],
        notWorth: [],
        awful: [],
    },
    messages: [],
    settings: {
        username: null,
        firstName: 'Anton',
        lastName: 'Chigurh',
        email: null,
        password: null,
        profileImg: anton,
    },
};

const userReducer = (state = initState, action) => {
    switch (action.type) {
        case 'local-signin':
            return {...state, isLoggedIn: true, token: action.payload}
        case 'user-signin':
            return {...state, isLoggedIn: true, token: action.payload}
        case 'set-user-uid':
            return {...state, isLoggedIn: true, userUid: action.payload}
        case 'user-logout':
            return {...state, isLoggedIn: false, token: null, userUid: null}
        case 'remove-from-uncategorized-library':
            return {...state, library: {...state.library, uncategorized: state.library.uncategorized.filter(game => game.id !== action.payload.id)}}
        case 'remove-from-playing-library':
            return {...state, library: {...state.library, playing: state.library.playing.filter(game => game.id !== action.payload.id)}}
        case 'remove-from-completed-library':
            return {...state, library: {...state.library, completed: state.library.completed.filter(game => game.id !== action.payload.id)}}
        case 'remove-from-played-library':
            return {...state, library: {...state.library, played: state.library.played.filter(game => game.id !== action.payload.id)}}
        case 'remove-from-wanted-library':
            return {...state, library: {...state.library, wantPlay: state.library.wantPlay.filter(game => game.id !== action.payload.id)}}
        case 'add-game-to-library':
            return {...state, library: {...state.library, uncategorized: [...state.library.uncategorized, {...action.payload, library: 'uncategorized', date_added: formatDate(new Date())}]}}
        case 'add-game-to-playing-library':
            return {...state, library: {...state.library, playing: [...state.library.playing, {...action.payload, library: 'playing', date_added: formatDate(new Date())}]}}
        case 'add-game-to-completed-library':
            return {...state, library: {...state.library, completed: [...state.library.completed, {...action.payload, library: 'completed', date_added: formatDate(new Date())}]}}
        case 'add-game-to-played-library':
            return {...state, library: {...state.library, played: [...state.library.played, {...action.payload, library: 'played', date_added: formatDate(new Date())}]}}
        case 'add-game-to-wanted-library':
            return {...state, library: {...state.library, wantPlay: [...state.library.wantPlay, {...action.payload, library: 'wantPlay', date_added: formatDate(new Date())}]}}
        case 'add-game-review-exceptional':
            return {...state, reviews: {...state.reviews, exceptional: [...state.reviews.exceptional, {...action.payload, review: 'exceptional', date_reviewed: formatDate(new Date())}]}}
        case 'add-game-review-recommended':
            return {...state, reviews: {...state.reviews, recommended: [...state.reviews.recommended, {...action.payload, review: 'recommended', date_reviewed: formatDate(new Date())}]}}
        case 'add-game-review-notWorth':
            return {...state, reviews: {...state.reviews, notWorth: [...state.reviews.notWorth, {...action.payload, review: 'notWorth', date_reviewed: formatDate(new Date())}]}}
        case 'add-game-review-awful':
            return {...state, reviews: {...state.reviews, awful: [...state.reviews.awful, {...action.payload, review: 'awful', date_reviewed: formatDate(new Date())}]}}
        default:
            return state;
    };
};

export default userReducer;