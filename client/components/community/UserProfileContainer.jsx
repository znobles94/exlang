import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import { fetchMyFriends } from '../.././redux/actions/credActions';
import UserProfilePage from './UserProfilePage.jsx';

const mapStateToProps = state => {
  return ({
		username: state.username,
    title: 'User Details page',
		profile: state.profile,
		selectedUser: state.selectedUser,
		myFriendsProfilesObj: state.myFriendsProfilesObj,
		alreadyRequested: state.alreadyRequested,
  })
}

const mapDispatchToProps = dispatch => {
  return ({
		dispatch,
		fetchMyFriends: () => dispatch(fetchMyFriends()),
  })
}

const UserProfileContainer = connect(mapStateToProps, mapDispatchToProps)(UserProfilePage);
export default UserProfileContainer;

