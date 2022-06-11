import {auth, firestore} from "../../utils/firebase";
import { GoogleAuthProvider, createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut } from 'firebase/auth';
import {setDoc, doc, getDoc} from 'firebase/firestore';

export const userSignup = (email, password, firstName, lastName) => async (dispatch) => {
    try {
        const userCredential = await createUserWithEmailAndPassword(auth, email, password);
        const user = await userCredential.user
        localStorage.setItem('token', user.accessToken);
        console.log(user)
        await setDoc(doc(firestore, 'users', user.uid), {
            firstName: firstName,
            lastName: lastName,
            email: email,
            id: user.uid,
            created: new Date(),
        });
        dispatch({
            type: 'user-signin',
            payload: user.accessToken
        });
        dispatch({
            type: 'set-user-uid',
            payload: user.uid
        });
    } catch (err) {
        throw new Error('Something went wrong');
    }
}

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

export const userSignin = (email, password) => async (dispatch) => {
    try {
        const userCredential = await signInWithEmailAndPassword(auth, email, password);
        const user = await userCredential.user;

        localStorage.setItem('token', user.accessToken);
        dispatch({
            type: 'user-signin',
            payload: user.accessToken
        });
        dispatch({
            type: 'set-user-uid',
            payload: user.uid
        });
    } catch (err) {
        throw new Error('Something wet wrong');
    }
};

export const userLogOut = () => async (dispatch) => {
    await signOut(auth);
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

export const setGamePlatform = (game, platform) => (dispatch) => {
    dispatch({
        type: 'set-game-platform',
        payload: {
            game: game,
            platform: platform
        }
    });
};

export const addGameReviewExceptional = (game) => (dispatch) => {
    dispatch({
        type: 'add-game-review-exceptional',
        payload: game
    })
}

export const addGameReviewRecommended = (game) => (dispatch) => {
    dispatch({
        type: 'add-game-review-recommended',
        payload: game
    })
}

export const addGameReviewNotWorth = (game) => (dispatch) => {
    dispatch({
        type: 'add-game-review-notWorth',
        payload: game
    })
}

export const addGameReviewAwful = (game) => (dispatch) => {
    dispatch({
        type: 'add-game-review-awful',
        payload: game
    })
}