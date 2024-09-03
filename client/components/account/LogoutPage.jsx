import React from 'react';
import Recaptcha from 'react-gcaptcha';

class LogoutPage extends React.Component {

	componentDidMount() {
		this.props.logoutUser();
		setTimeout(() => this.props.history.push('/'), 5000);
	}

	render () {
		return (
			<div>
				<h2>{this.props.title ? this.props.title : ''}</h2>
				{this.props.message ? this.props.message : ''}
			</div>
		)
	}
}

LogoutPage.propTypes = {
}

export default LogoutPage;
