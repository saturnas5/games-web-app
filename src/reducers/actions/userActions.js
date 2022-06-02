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
    }
};

export const userSignin = () => (dispatch) => {
    const token = generate_token();
    localStorage.setItem('token', token);
    dispatch({
        type: 'user-signin',
        payload: token
    })
}

export const userLogOut = () => (dispatch) => {
    localStorage.removeItem('token');
    dispatch({
        type: 'user-logout',
    })
}