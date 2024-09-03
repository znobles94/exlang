import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import UserLinkComponent from './UserLinkComponent.jsx';

const mapStateToProps = state => {
  return ({
		profile: state.profile,
		visNative: state.visNative,
		visLearning: state.visLearning,
		visGender: state.visGender,
  })
}

const mapDispatchToProps = dispatch => {
  return ({
  })
}

const UserLinkContainer = connect(mapStateToProps, null)(UserLinkComponent);
export default UserLinkContainer;

