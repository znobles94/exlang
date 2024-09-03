import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import NotificationContainer from './NotificationContainer.jsx';
import NotificationLinkContainer from './NotificationLinkContainer.jsx';

class NotificationPage extends React.Component {

	constructor() {
		super();
		this.state = {
		}
	}

	componentDidMount() {
		this.props.fetchMyNotifications();
	}

	render() {
		return (
			<div>
				<h1 className="display-4">{this.props.title}</h1>
				<ul className="list-group">
				{ this.props.notObj ? this.props.notObj.map((x) => <NotificationLinkContainer notLinkObj = {x} /> ) : 'You have no notifications at this time' }
				</ul>
			</div>
		)
	}
}


// PRESENTATIONAL COMPONENT

export default NotificationPage;
