/*
 src/actions/job.actions.js
*/

export const FETCH_JOBS = 'FETCH_JOBS';
export const CREATE_JOB = 'CREATE_JOB';
export const DELETE_JOB = 'DELETE_JOB';
export const DISABLE_JOB = 'DISABLE_JOB';
export const ENABLE_JOB = 'ENABLE_JOB';

export const FetchJobsAction = payload => ({
  type: FETCH_JOBS,
  payload,
});

export const CreateJobAction = payload => ({
  type: CREATE_JOB,
  payload,
});

export const DeleteJobAction = payload => ({
  type: DELETE_JOB,
  payload,
});

export const DisableJobAction = payload => ({
  type: DISABLE_JOB,
  payload,
});

export const EnableJobAction = payload => ({
  type: ENABLE_JOB,
  payload,
});
