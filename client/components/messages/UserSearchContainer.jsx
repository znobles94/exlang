import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import UserSearchComponent from './UserSearchComponent.jsx';

const mapStateToProps = state => {
  return ({
		visNative: state.visNative,
		visLearning: state.visLearning,
		visGender: state.visGender,
  })
}

const mapDispatchToProps = dispatch => {
  return ({
  })
}

const UserSearchContainer = connect(mapStateToProps, null)(UserSearchComponent);
export default UserSearchContainer;

