import React from 'react';
import { Link } from 'react-router-dom';
import AuthBase from './authbase';

const SignInComponent = () => (
  <AuthBase>
    <div className="page-ath-form">
      <h2 className="page-ath-heading">
              Sign In
        <small>Login To Your Account</small>
      </h2>
      <form action="#">
        <div className="input-item"><input type="text" placeholder="Email" className="input-bordered" /></div>
        <div className="input-item"><input type="password" placeholder="Password" className="input-bordered" /></div>
        <button type="button" className="btn btn-primary btn-block">Sign In</button>
      </form>
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
