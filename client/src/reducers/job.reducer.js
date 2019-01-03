/*
 src/reducers/job.reducer.js
*/
import * as JobActionTypes from '../actions/job.actions';

const initialState = {
  jobs: [],
};


export default (state = initialState, action) => {
  switch (action.type) {
    case JobActionTypes.FETCH_JOBS:
      return {
        ...state,
        jobs: action.payload,
      };
    case JobActionTypes.CREATE_JOB:
      return {
        ...state,
        jobs: action.payload,
      };
    case JobActionTypes.DELETE_JOB:
      return {
        ...state,
        jobs: action.payload,
      };
    case JobActionTypes.ENABLE_JOB:
      return {
        ...state,
        jobs: action.payload,
      };
    case JobActionTypes.DISABLE_JOB:
      return {
        ...state,
        jobs: action.payload,
      };
    default:
      return state;
  }
};

export const getJobList = jobs => jobs.map((job) => {
  job.status = (job.isActive) ? 'Active' : 'Not Active';
  return job;
});
