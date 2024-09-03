import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import { fetchMyFriendsProfiles } from '../.././redux/actions/credActions';
import FriendsPage from './FriendsPage.jsx';

const mapStateToProps = state => {
  return ({
		username: state.username,
    title: 'Friends ',
		profile: state.profile,
		myFriendsProfilesObj: state.myFriendsProfilesObj,
    lpmessage: '',
  })
}

const mapDispatchToProps = dispatch => {
  return ({
		fetchMyFriendsProfiles: () => dispatch(fetchMyFriendsProfiles()),
  })
}

const FriendsContainer = connect(mapStateToProps, mapDispatchToProps)(FriendsPage);
export default FriendsContainer;

