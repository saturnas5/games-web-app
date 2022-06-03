import {generate_token} from "../../utils/_utils";


export const tryLocalSignin = () => async (dispatch) => {
    try {
        const token = await localStorage.getItem('token');
        if(token) {
            dispatch({
                type: 'local-signin',
                payload: token
            });
        }
    } catch (err) {
        console.log(err);
    };
};

export const userSignin = () => (dispatch) => {
    const token = generate_token();
    localStorage.setItem('token', token);
    dispatch({
        type: 'user-signin',
        payload: token
    });
};

export const userLogOut = () => (dispatch) => {
    localStorage.removeItem('token');
    dispatch({
        type: 'user-logout',
    });
};

export const removeGameFromUncategorizedLibrary = (game) => (dispatch) => {
    dispatch({
        type: 'remove-from-uncategorized-library',
        payload: game
    })
};

export const removeGameFromPlayingLibrary = (game) => (dispatch) => {
    dispatch({
        type: 'remove-from-playing-library',
        payload: game
    })
}

export const removeGameFromCompletedLibrary = (game) => (dispatch) => {
    dispatch({
        type: 'remove-from-completed-library',
        payload: game
    })
}

export const removeGameFromPlayedLibrary = (game) => (dispatch) => {
    dispatch({
        type: 'remove-from-played-library',
        payload: game
    })
}

export const removeGameFromWantedLibrary = (game) => (dispatch) => {
    dispatch({
        type: 'remove-from-wanted-library',
        payload: game
    })
}

export const addGameToLibrary = (game) => (dispatch) => {
    dispatch({
        type: 'add-game-to-library',
        payload: game
    });
};

export const addGameToPlayingLibrary = (game) => (dispatch) => {

    dispatch({
        type: 'add-game-to-playing-library',
        payload: game
    });

};

export const addGameToCompletedLibrary = (game) => (dispatch) => {

    dispatch({
        type: 'add-game-to-completed-library',
        payload: game
    });
};

export const addGameToPlayedLibrary = (game) => (dispatch) => {

    dispatch({
        type: 'add-game-to-played-library',
        payload: game
    });
};

export const addGameToWantPlayLibrary = (game) => (dispatch) => {

    dispatch({
        type: 'add-game-to-wanted-library',
        payload: game
    });
};