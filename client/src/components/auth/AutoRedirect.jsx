import React from 'react';
import { Redirect, Route } from 'react-router-dom';
import { userLoggedIn } from '../../utils/auth';

const AutoRedirect = ({ component: Component, ...rest }) => (
  <Route
    {...rest}
    render={props => (!userLoggedIn() ? (
      <Component {...props} />
    ) : (
      <Redirect
        to={{
          pathname: '/jobs',
          state: { from: props.location },
        }}
      />
    ))
      }
  />
);

export default AutoRedirect;
