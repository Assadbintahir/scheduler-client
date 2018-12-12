import React from 'react';
import { Link } from 'react-router-dom';
import AuthBase from '../../components/auth/authbase';

const SignUp = () => (
  <AuthBase>
    <div className="page-ath-form">
      <h2 className="page-ath-heading">
        Sign up
        <small>Create New Account</small>
      </h2>
      <form action="#">
        <div className="input-item"><input type="text" placeholder="Your Email" className="input-bordered" /></div>
        <div className="input-item"><input type="password" placeholder="Password" className="input-bordered" /></div>
        <div className="input-item"><input type="password" placeholder="Repeat Password" className="input-bordered" /></div>
        <button type="button" className="btn btn-primary btn-block">Create Account</button>
      </form>
      <div className="form-note">
        Already have an account ?
        <Link to="/">
          <strong>Sign in instead</strong>
        </Link>
      </div>
    </div>
  </AuthBase>
);


export default SignUp;
