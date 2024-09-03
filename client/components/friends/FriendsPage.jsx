import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import FriendsLinkContainer from './FriendsLinkContainer.jsx';
//import MessageSearchContainer from './MessageSearchContainer.jsx';

class FriendsPage extends React.Component {

	constructor() {
		super();
		this.state = {
		}
	}

	componentDidMount() {
//		this.props.fetchMyFriendsProfiles();
	}

	render() {
		//<MessageSearchContainer title={this.props.title}/>

		return (
			<div>
			<h1 className="display-4">{this.props.title}</h1>
			<p>Click on a friend to start messaging</p>
				<ul className="list-group">
				{ this.props.myFriendsProfilesObj ? this.props.myFriendsProfilesObj.map((x) => <FriendsLinkContainer messLinkObj = {x} /> ) : '' }
				</ul>
			</div>
		)
	}
}


// PRESENTATIONAL COMPONENT

export default FriendsPage;
