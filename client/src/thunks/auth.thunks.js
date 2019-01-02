import apiCaller from '../utils/api';
import { LoginAction } from '../actions/auth.actions';

export const signUp = userInfo => (dispatch) => {
  apiCaller.post('users/register', userInfo)
    .then((response) => {
      dispatch(LoginAction(response.data.user));
    });
};

export const signIn = userCredentials => (dispatch) => {
  apiCaller.post('users/login', userCredentials)
    .then((response) => {
      dispatch(LoginAction(response.data.user));
    });
};
