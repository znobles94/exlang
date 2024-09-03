import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import { loginUser, fetchMyDetails } from '../.././redux/actions/credActions';
import LoginPage from './LoginPage.jsx';

const mapStateToProps = state => {
  return ({
		username: state.username,
    title: 'Login page',
    lpmessage: 'Please log in',
  })
}

const mapDispatchToProps = dispatch => {
  return ({
		fetchMyDetails: () => dispatch(fetchMyDetails()),
		dispatch: dispatch,
  })
}

const LoginContainer = connect(mapStateToProps, mapDispatchToProps)(LoginPage);
export default LoginContainer;

