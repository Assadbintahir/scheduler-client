import authReducer from '../auth.reducer';
import * as actionTypes from '../../actions/auth.actions';
import * as mockData from '../__mocks__/data';

describe('auth reducer', () => {
  const initialState = {
    user: [],
  };
  it('should return the initial state', () => {
    expect(authReducer(undefined, {})).toEqual(initialState);
  });
  it('should handle LOGIN_USER', () => {
    const loginAction = {
      type: actionTypes.LOGIN_USER,
      payload: mockData.loginUserPayload,
    };
    expect(authReducer(initialState, loginAction))
      .toMatchObject({ user: mockData.loginUserPayload });
  });
  it('should handle LOGOUT_USER');
});
