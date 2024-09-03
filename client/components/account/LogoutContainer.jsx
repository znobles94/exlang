import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import { logoutUser } from '../.././redux/actions/credActions';

import LogoutPage from './LogoutPage.jsx';

const mapStateToProps = state => {
  return ({
		username: state.username,
    title: 'Logout page',
		message: state.message,
  })
}

const mapDispatchToProps = dispatch => {
  return ({
    logoutUser: () => dispatch(logoutUser()),
  })
}

const LogoutContainer = connect(mapStateToProps, mapDispatchToProps)(LogoutPage);
export default LogoutContainer;

