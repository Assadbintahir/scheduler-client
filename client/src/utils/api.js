import axios from 'axios';


const apiCaller = axios.create({
  baseURL: 'http://localhost:8000/api/v1/',
  timeout: 1000,
  headers: { 'Content-Type': 'application/json' },
});

apiCaller.interceptors.response.use(
  (res) => {
    console.log('%c Request Success:', 'color: #4CAF50; font-weight: bold', res);
    return res;
  },

  (err) => {
    console.log('%c Request Error:', 'color: #EC6060; font-weight: bold', err);
    return Promise.reject(err);
  },
);

export default apiCaller;
