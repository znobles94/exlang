import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import { fetchMyDetails } from '../.././redux/actions/credActions';
import ProfilePage from './ProfilePage.jsx';

const mapStateToProps = state => {
  return ({
		username: state.username,
    title: 'Profile page',
		profile: state.profile,
    lpmessage: '',
  })
}

const mapDispatchToProps = dispatch => {
  return ({
		fetchMyDetails: () => dispatch(fetchMyDetails()),
  })
}

const ProfileContainer = connect(mapStateToProps, mapDispatchToProps)(ProfilePage);
export default ProfileContainer;
