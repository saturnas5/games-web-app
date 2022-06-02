const initState = {
    userId: null,
    isLoggedIn : false,
    token: null,
    wishList: [],
    library: {
        liked: [],
        disliked: [],
        played: [],
        wantToPlay: []
    },
    messages: [],
    settings: {
        username: null,
        firstName: null,
        lastName: null,
        email: null,
        password: null,
        profileImg: null,
    },
};

const userReducer = (state = initState, action) => {
    switch (action.type) {
        case 'local-signin':
            return {...state, isLoggedIn: true, token: action.payload}
        case 'user-signin':
            return {...state, isLoggedIn: true, token: action.payload}
        case 'user-logout':
            return {...state, isLoggedIn: false, token: null}
        default:
            return state;
    };
};

export default userReducer;