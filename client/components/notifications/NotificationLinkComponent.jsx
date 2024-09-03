import React from 'react';
import PropTypes from 'prop-types';
import { addMyFriend, rejectFriendRequest, fetchMyNotifications } from '../.././redux/actions/credActions';
import { Link } from 'react-router-dom';

// const NotificationLinkComponent = (this.props) => {
class NotificationLinkComponent extends React.Component {

	constructor() {
		super()
		

		this.acceptFriend = this.acceptFriend.bind(this)
		this.rejectFriend = this.rejectFriend.bind(this)
	}

	acceptFriend() {
		this.props.dispatch(addMyFriend({user_id_one: this.props.notLinkObj.not_owner, user_id_two: this.props.notLinkObj.not_from_id}))
		// this is just to delete the notification
		this.props.dispatch(rejectFriendRequest({not_id: this.props.notLinkObj._id}))
		this.props.dispatch(fetchMyNotifications())
	}

	rejectFriend() {
		this.props.dispatch(rejectFriendRequest({not_id: this.props.notLinkObj._id}))
		this.props.dispatch(fetchMyNotifications())
	}

//	let myComponent;
	/*
	if(this.props.notLinkObj.name && this.props.notLinkObj.lang_native[0] && this.props.notLinkObj.lang_learning[0] && this.props.notLinkObj.sex) {
		if((this.props.visNative != null && this.props.visNative != '') && this.props.visNative != this.props.notLinkObj.lang_native[0]) {
			myComponent = null
		}
		else if((this.props.visLearning != null && this.props.visLearning != '') && this.props.visLearning != this.props.notLinkObj.lang_learning[0]) {
			myComponent = null
		}
		else if((this.props.visGender != null && this.props.visGender != '') && this.props.visGender != this.props.notLinkObj.sex) {
			myComponent = null
		}
		else {
			myComponent = 
			<li className = "list-group-item notunity-member"> 
			<Link to ={'/p/' + this.props.notLinkObj._id}>
			{this.props.notLinkObj.name} <br/> 
			Speaks: {this.props.notLinkObj.lang_native[0]}<br/> 
			Learning: {this.props.notLinkObj.lang_learning[0]} <br/> 
			Gender: {this.props.notLinkObj.sex} </Link>
			</li> 
		}
	}
	else {
		myComponent = null
	}
	*/
	render() {
		let myAcceptFriendButton = <button type="button" className="btn btn-outline-success btn-sm float-right" onClick={this.acceptFriend}>Accept Friend Request</button>;
		let myRejectFriendButton = <button type="button" className="btn btn-outline-danger btn-sm float-right" onClick={this.rejectFriend}>Reject Friend Request</button>;
		var messageDate = new Date(this.props.notLinkObj.sent_time);
		let myComponent = 
		<li className = "list-group-item user-notification"> 
		<div className="container">
		<div className="row">
		<div className="col-2">
		From: 
		</div>
		<div className="col">
		{this.props.notLinkObj.not_from} <br/> 
		</div>
		</div>
		<div className="row">
		<div className="col-2">
		Time: 
		</div>
		<div className="col">
		{messageDate.toDateString()} <br/> 
		</div>
		</div>
		<div className="row">
		<div className="col-2">
		Title: 
		</div>
		<div className="col">
		{this.props.notLinkObj.not_title}<br/> 
		</div>
		</div>
		<div className="row">
		<div className="col-2">
		Message: 
		</div>
		<div className="col">
		{this.props.notLinkObj.not_message}
		</div>
		</div>
		<div className="row">
		<div className="col-2">
		{this.props.notLinkObj.not_friend_request ? myAcceptFriendButton : '' }
		</div>
		<div className="col-2">
		{this.props.notLinkObj.not_friend_request ? myRejectFriendButton : '' }
		</div>
		<div className="col-2">
		<Link to ={'/p/' + this.props.notLinkObj.not_from_id}> 
		<button type = "button" className = "btn btn-outline-info btn-sm">View their profile</button>
		</Link>
		</div>
		</div>
		</div>
		</li> 
		return (
			<div className="NotificationLinkComponent">
					
					{/*
					<Link to ={'/p/' + this.props.notLinkObj._id}> 
						{this.props.notLinkObj.name} <br/>
						Speaks: {this.props.notLinkObj.lang_native[0]}<br/>
						Learning: {this.props.notLinkObj.lang_learning[0]} <br/>
						Gender: {this.props.notLinkObj.sethis.props.notLinkObj} 
					</Link> 
				Garbage text
				*/}
				{myComponent}
			</div>
		)
	}
}


// PRESENTATIONAL COMPONENT

export default NotificationLinkComponent;
