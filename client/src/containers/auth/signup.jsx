import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { signUp } from '../../thunks/auth.thunks';
import SignUpComponent from '../../components/auth/SignUpComponent';

const SignUp = ({ signup }) => (
  <SignUpComponent signup={signup} />
);

const mapDispatchToProps = dispatch => bindActionCreators({
  signup: signUp,
}, dispatch);

export default connect(() => ({}), mapDispatchToProps)(SignUp);
