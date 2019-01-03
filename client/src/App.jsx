import React, { Fragment } from 'react';
import { ToastContainer } from 'react-toastify';
import Routes from './Routes';
import 'react-toastify/dist/ReactToastify.css';

const App = () => (
  <Fragment>
    <ToastContainer />
    <Routes />
  </Fragment>
);
export default App;
