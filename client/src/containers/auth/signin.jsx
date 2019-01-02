import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { signIn } from '../../thunks/auth.thunks';
import SignInComponent from '../../components/auth/SignInComponent';

const SignIn = ({ signin }) => (
  <SignInComponent signin={signin} />
);

const mapDispatchToProps = dispatch => bindActionCreators({
  signin: signIn,
}, dispatch);


export default connect(() => ({}), mapDispatchToProps)(SignIn);
