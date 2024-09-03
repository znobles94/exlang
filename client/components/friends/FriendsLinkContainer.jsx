import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import FriendsLinkComponent from './FriendsLinkComponent.jsx';

const mapStateToProps = state => {
  return ({
  })
}

const mapDispatchToProps = dispatch => {
  return ({
  })
}

const FriendsLinkContainer = connect(mapStateToProps, null)(FriendsLinkComponent);
export default FriendsLinkContainer;

