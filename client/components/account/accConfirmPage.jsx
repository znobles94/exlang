// react libraries
import React from 'react';
import { Route } from 'react-router-dom';
import { confirmMyAccount } from '../.././redux/actions/credActions';

// components

class accConfirmPage extends React.Component {

	componentDidMount() {
		this.props.dispatch(confirmMyAccount({confUrl: this.props.match.params.user_id}))
	}

	render() {
		return (
			<div className = "confirmationPage">
				<h3>Account Confirmation</h3>
				{this.props.message ? this.props.message : ''}
			</div>
		);
	}
}

export default accConfirmPage
