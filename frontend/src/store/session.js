import { fetch } from './csrf';

const NEW_USER = 'session/newUser';
const REMOVE_USER = 'session/removeUser';

const newUser = (user) => {
    return {
        type: NEW_USER,
        payload: user,
    };
};

const removeUser = () => {
    return {
        type: REMOVE_USER,
    }
}

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

export const restoreUser = () => async(dispatch) => {
    const res = await fetch('/api/session');
    dispatch(newUser(res.data.user));
    return res;
};

export const signup = (user) => async (dispatch) => {
  const { images, image, username, email, password } = user;
  const formData = new FormData();
  formData.append("username", username);
  formData.append("email", email);
  formData.append("password", password);

  // for multiple files
  if (images && images.length !== 0) {
    for (var i = 0; i < images.length; i++) {
      formData.append("images", images[i]);
    }
  }

  // for single file
  if (image) formData.append("image", image);

  const res = await fetch(`/api/users/`, {
    method: "POST",
    body: formData,
  });

  dispatch(newUser(res.data.user));
  return res;
};

export const logout = () => async (dispatch) => {
    const res = await fetch('api/session', {
        method: 'DELETE',
    })

    dispatch(removeUser());
    return res;
};

const initialState = {};

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