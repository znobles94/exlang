import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import accConfirmPage from './accConfirmPage.jsx';

const mapStateToProps = state => {
  return ({
    title: 'Confirmation page',
		message: state.message,
  })
}

const mapDispatchToProps = dispatch => {}

const accConfirmContainer = connect(mapStateToProps, null)(accConfirmPage);
export default accConfirmContainer;

