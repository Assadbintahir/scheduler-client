import React from 'react';
import { Link } from 'react-router-dom';
import { Formik } from 'formik';
import AuthBase from './authbase';

const SignInComponent = ({ signin }) => (
  <AuthBase>
    <div className="page-ath-form">
      <h2 className="page-ath-heading">
              Sign In
        <small>Login To Your Account</small>
      </h2>
      <Formik
        initialValues={{ email: '', password: '' }}
        validate={(values) => {
          const errors = {};

          if (!values.email) {
            errors.email = 'Required';
          }
          if (!values.password) {
            errors.password = 'Required';
          }
          if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
            errors.email = 'Invalid email address';
          }

          return errors;
        }}
        onSubmit={(values) => {
          signin({
            user: {
              email: values.email,
              password: values.password,
            },
          });
        }}
        render={props => (
          <form onSubmit={props.handleSubmit}>
            <div className="input-item">
              <input
                type="text"
                placeholder="Your Email"
                className="input-bordered"
                onChange={props.handleChange}
                value={props.values.email}
                name="email"
              />
              {props.errors.email && <span style={{ color: 'red' }}>{props.errors.email}</span>}
            </div>
            <div className="input-item">
              <input
                type="password"
                placeholder="Password"
                className="input-bordered"
                onChange={props.handleChange}
                value={props.values.password}
                name="password"
              />
              {props.errors.password && <span style={{ color: 'red' }}>{props.errors.password}</span>}
            </div>
            <button type="submit" className="btn btn-primary btn-block">Sign In</button>
          </form>
        )}
      />
      <div className="form-note">
              Dont have an account ?
        <Link to="/signup">
          <strong>Sign up instead</strong>
        </Link>
      </div>
    </div>
  </AuthBase>
);

export default SignInComponent;
