import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const MessageComponent = (props) => {

	let myComponent;

	if(props.message && props.selectedUser) { 
		let sentDate = new Date(props.message.sent_time);
		myComponent = 
		<li className = "list-group-item top-level-message"> 
		<div className = "container">
		<div className = "row">
		<div className = "col"><small>
		{props.selectedUser._id == props.message.sender_id ? props.selectedUser.name : 'You ' } said on {sentDate.toDateString()}  
		</small>
		</div>
		</div>
		<div className = "row">
		<div className = "col">
		{props.message.msg_content}
		</div>
		</div>
		</div>
		</li>
	}
	return (
		<div className="MessageComponent">
				{myComponent}
		</div>
	)
}


// PRESENTATIONAL COMPONENT

export default MessageComponent;
