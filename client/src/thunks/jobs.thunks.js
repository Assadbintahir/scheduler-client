import { toast } from 'react-toastify';
import apiCaller from '../utils/api';
import { FetchJobsAction } from '../actions/job.actions';

export const fetchJobs = () => (dispatch) => {
  apiCaller.get('jobs')
    .then((response) => {
      dispatch(FetchJobsAction(response.data.payload));
    })
    .catch((err) => {
      console.log(err);
      toast.error('Failed to fetch jobs');
    });
};

export const fetchJobDetail = jobId => (dispatch) => {

};

export const deleteJob = jobId => (dispatch) => {

};
