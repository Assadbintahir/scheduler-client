/*
 src/reducers/auth.reducer.js
*/

import * as AuthActionTypes from '../actions/auth.actions';

const initialState = {
  user: [],
};

export default (state = initialState, action) => {
  switch (action.type) {
    case AuthActionTypes.LOGIN_USER:
      return {
        ...state,
        user: action.payload,
      };
    case AuthActionTypes.LOGOUT_USER:
      return {
        ...state,
        user: [],
      };
    default:
      return state;
  }
};
