import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import { fetchCommunityList } from '../.././redux/actions/credActions';
import CommunityPage from './CommunityPage.jsx';

const mapStateToProps = state => {
  return ({
		username: state.username,
    title: 'Community page',
		commObj: state.commObj,
    lpmessage: '',
  })
}

const mapDispatchToProps = dispatch => {
  return ({
		fetchCommunityList: () => dispatch(fetchCommunityList()),
  })
}

const CommunityContainer = connect(mapStateToProps, mapDispatchToProps)(CommunityPage);
export default CommunityContainer;

