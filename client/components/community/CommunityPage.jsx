import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import UserLinkComponent from './UserLinkComponent.jsx';
import UserLinkContainer from './UserLinkContainer.jsx';
import UserSearchContainer from './UserSearchContainer.jsx';

class CommunityPage extends React.Component {

	constructor() {
		super();
		this.state = {
		}
	}

	componentDidMount() {
		this.props.fetchCommunityList();
	}

	mapUserLinks(x) {

	}

	render() {
		return (
			<div>
				<UserSearchContainer title={this.props.title}/>
				
				<ul className="list-group">
				{/* this.props.fetchCommunityList().then((x) => { x.map((y) => <li className="list-group-item member"><Link to={'/p/' + y._id.toString()}>{y.name.toString()}</Link></li>)}) */}
				{ console.log(this.props.commObj) }
				{/* this.props.commObj ? this.props.commObj.map((x) => <li className = "list-group-item community-member"> <Link to ={'/p/' + x._id}> {x.name} <br/>Speaks: {x.lang_native[0]}<br/>Learning: {x.lang_learning[0]} <br/>Gender: {x.sex} </Link> </li> ) : '' */}
				{ this.props.commObj ? this.props.commObj.map((x) => <UserLinkContainer commLinkObj = {x} /> ) : '' }
				</ul>
			</div>
		)
	}
}


// PRESENTATIONAL COMPONENT

export default CommunityPage;
