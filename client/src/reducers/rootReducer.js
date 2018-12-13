/*
 src/reducers/rootReducer.js
*/
import { combineReducers } from 'redux';
import authReducer from './auth.reducer';
import jobReducer from './job.reducer';


export default combineReducers({
  authReducer,
  jobReducer,
});
