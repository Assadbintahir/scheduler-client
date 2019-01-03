import React from 'react';
import { BrowserRouter as Router, Switch } from 'react-router-dom';
import SignIn from './containers/auth/signin';
import SignUp from './containers/auth/signup';
import CreateJob from './containers/jobs/createjob';
import Jobs from './containers/jobs/jobs';
import PrivateRoute from './components/auth/PrivateRoute';
import AutoRedirect from './components/auth/AutoRedirect';

const Routes = () => (
  <Router>
    <Switch>
      <AutoRedirect exact path="/" component={SignIn} />
      <AutoRedirect exact path="/signup" component={SignUp} />
      <PrivateRoute exact path="/create-job" component={CreateJob} />
      <PrivateRoute exact path="/jobs" component={Jobs} />
    </Switch>
  </Router>
);

export default Routes;
