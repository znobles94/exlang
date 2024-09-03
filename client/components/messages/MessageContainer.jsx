import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import MessageComponent from './MessageComponent.jsx';

const mapStateToProps = state => {
  return ({
		profile: state.profile,
		selectedUser: state.selectedUser,
  })
}

const mapDispatchToProps = dispatch => {
  return ({
  })
}

const MessageContainer = connect(mapStateToProps, null)(MessageComponent);
export default MessageContainer;

