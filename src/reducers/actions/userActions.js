import {auth, firestore} from "../../utils/firebase";
import { GoogleAuthProvider, createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut } from 'firebase/auth';
import { collection, doc, setDoc, getDoc, getDocs, query, where, collectionGroup } from "firebase/firestore";

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
            library: {
                uncategorized: [],
                playing: [],
                completed: [],
                played: [],
                wantPlay: []
            },
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
        const uid = await localStorage.getItem('uid')
        if(token) {
            dispatch({
                type: 'local-signin',
                payload: token
            });
            dispatch({
                type: 'set-user-uid',
                payload: uid
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
        localStorage.setItem('uid', user.uid)
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
    localStorage.removeItem('uid');
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

export const addGameToLibrary = (game) => async (dispatch) => {
    // const userRef = doc(firestore, 'users', userId);
    // const snap = await getDoc(userRef);
    //
    // await setDoc(doc(firestore, 'users', userId), {
    //     ...snap.data(),
    //     library: {
    //         ...snap.data().library,
    //         uncategorized: [...snap.data().library.uncategorized, game]
    //     }
    // });

    dispatch({
        type: 'add-game-to-library',
        payload: game
    });
};

export const addGameToPlayingLibrary = (game, userId) => async (dispatch) => {

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

// firebase data upload ====================>>

export const handleFirebaseLibraryFetch = (userId) => async (dispatch) => {
    const userRef = doc(firestore, 'users', userId);
    const snap = await getDoc(userRef);
    console.log(snap.data())

    dispatch({
        type: 'fetch-state-from-firebase',
        payload: snap.data().library
    });
}