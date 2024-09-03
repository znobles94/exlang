import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import { fetchMyDetails } from '../.././redux/actions/credActions';
import EditProfilePage from './EditProfilePage.jsx';

const mapStateToProps = state => {
  return ({
		username: state.username,
    title: 'Edit Profile ',
		profile: state.profile,
    lpmessage: '',
  })
}

const mapDispatchToProps = dispatch => {
  return ({
		dispatch,
		fetchMyDetails: () => dispatch(fetchMyDetails()),
  })
}

const ProfileContainer = connect(mapStateToProps, mapDispatchToProps)(EditProfilePage);
export default ProfileContainer;
