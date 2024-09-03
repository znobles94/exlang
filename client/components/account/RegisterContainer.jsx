import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import { loginUser } from '../.././redux/actions/credActions';
import RegisterPage from './RegisterPage.jsx';

const mapStateToProps = state => {
  return ({
		username: state.username,
    title: 'Register page',
    lpmessage: 'Please register',
  })
}

const mapDispatchToProps = dispatch => {
  return ({
    accountAction: () => dispatch(loginUser),
		dispatch: dispatch,
  })
}

const RegisterContainer = connect(mapStateToProps, null)(RegisterPage);
export default RegisterContainer;

