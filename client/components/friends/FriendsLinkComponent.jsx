import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const FriendsLinkComponent = (props) => {

	let myComponent;
	if(props.messLinkObj) { 
		myComponent = 
		<li className = "list-group-item top-level-message"> 
		<div className = "container">
		<div className = "row">
		<div className = "col-4">
		{props.messLinkObj.name}  
		</div>
		<div className = "col">
		<Link to ={'/messages/' + props.messLinkObj._id}>
		<button type="button" className="btn btn-outline-primary btn-sm">Message</button> 
		</Link>
		</div>
		<div className = "col">
		<Link to ={'/p/' + props.messLinkObj._id}>
		<button type="button" className="btn btn-outline-secondary btn-sm">View Profile</button> 
		</Link>
		</div>
		<div className = "col">
		<button type="button" className="btn btn-outline-danger btn-sm">Delete friend</button> 
		</div>
		</div>
		</div>
		</li>
	}
	return (
		<div className="FriendsLinkComponent">
				{myComponent}
		</div>
	)
}


// PRESENTATIONAL COMPONENT

export default FriendsLinkComponent;
