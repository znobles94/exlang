import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import { fetchMyNotifications } from '../.././redux/actions/credActions';
import NotificationPage from './NotificationPage.jsx';

const mapStateToProps = state => {
  return ({
		username: state.username,
    title: 'Notifications ',
		notObj: state.notObj,
    lpmessage: '',
  })
}

const mapDispatchToProps = dispatch => {
  return ({
		fetchMyNotifications: () => dispatch(fetchMyNotifications()),
  })
}

const NotificationContainer = connect(mapStateToProps, mapDispatchToProps)(NotificationPage);
export default NotificationContainer;

