import { toast } from 'react-toastify';
import apiCaller from '../utils/api';
import { LoginAction } from '../actions/auth.actions';
import { loginUser } from '../utils/auth';

export const signUp = userInfo => (dispatch) => {
  apiCaller.post('users/register', userInfo)
    .then((response) => {
      loginUser(response.data.user);
      dispatch(LoginAction(response.data.user));
    })
    .catch((err) => {
      console.log('Error', err);
      toast.error('Failed to sign up');
    });
};

export const signIn = userCredentials => (dispatch) => {
  apiCaller.post('users/login', userCredentials)
    .then((response) => {
      loginUser(response.data.user);
      dispatch(LoginAction(response.data.user));
    })
    .catch((err) => {
      console.log('Error', err);
      toast.error('Failed to sign in');
    });
};
