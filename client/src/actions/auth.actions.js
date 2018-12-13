/*
 src/actions/auth.actions.js
*/

export const LOGIN_USER = 'LOGIN_USER';
export const LOGOUT_USER = 'LOGOUT_USER';

export const LoginAction = () => ({
  type: LOGIN_USER,
});

export const LogoutAction = () => ({
  type: LOGOUT_USER,
});
