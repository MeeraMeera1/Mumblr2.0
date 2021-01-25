import { fetch } from './csrf';

const NEW_USER = 'session/newUser';
const REMOVE_USER = 'session/removeUser';

const newUser = (user) => {
    return {
        type: NEW_USER,
        payload: user,
    };
};

// const removeUser = () => {
//     return {
//         type: REMOVE_USER,
//     }
// }

export const login = user => async (dispatch) => {
    const { credential, password } = user;
    const res = await fetch('/api/session', {
        method: 'POST',
        body: JSON.stringify({ 
            credential, 
            password,
         }),
    });
    dispatch(newUser(res.data.user));
    return res;
};

// export const restoreUser = () => async(dispatch) => {
//     const res = await fetch('api/session');
//     dispatch(newUser(res.data.user));
//     return res;
// };

// export const signup = (user) => async(dispatch) => {
//     const { username, email, password } = user;
//     const res = await fetch('api/users', {
//         method: 'POST',
//         body: JSON.stringify({
//             username,
//             email,
//             password
//         })
//     });

//     dispatch(newUser(res.data.user));
//     return res;
// };

// export const logout = () => async (dispatch) => {
//     const res = await fetch('api/session', {
//         method: 'DELETE',
//     })

//     dispatch(removeUser());
//     return res;
// };

const initialState = { user: null };

const sessionReducer = (state = initialState, action) => {
    let newState;
    switch(action.type) {
        case NEW_USER:
            newState = Object.assign({}, state);
            newState.user = action.payload;
            return newState;
        case REMOVE_USER:
            newState = Object.assign({}, state);
            newState.user = null;
            return newState;
        default:
            return state;
    };
};

export default sessionReducer;