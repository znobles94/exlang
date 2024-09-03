import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import NotificationLinkComponent from './NotificationLinkComponent.jsx';

const mapStateToProps = state => {
  return ({
  })
}

const mapDispatchToProps = dispatch => {
  return ({
		dispatch, 
  })
}

const NotificationLinkContainer = connect(mapStateToProps, null)(NotificationLinkComponent);
export default NotificationLinkContainer;

