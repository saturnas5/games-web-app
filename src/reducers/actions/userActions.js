

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