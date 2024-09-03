import React from 'react';
import { Switch, Route, Link } from 'react-router-dom';
import { sendMyMessage, fetchUserDetails } from '../.././redux/actions/credActions';
import MessageContainer from './MessageContainer.jsx';

class MessageChainPage extends React.Component {

	constructor() {
		super()
		this.state = {
			response: '',
		}
		this.handleResponseChange = this.handleResponseChange.bind(this);
		this.sendMessage = this.sendMessage.bind(this);
	}

	componentDidMount() {
		this.props.dispatch(fetchUserDetails({user_id: this.props.match.params.user_id}));
	}

	handleResponseChange(evt) {
		this.setState({response: evt.target.value});
	}

	sendMessage() {
		this.props.dispatch(sendMyMessage({sender_id: this.props.profile._id, receiver_id: this.props.match.params.user_id, msg_content: this.state.response}));
		this.setState({response: ''});
		this.props.fetchMyMessages();
	}

	render() {
		let message_chain = [];

		if(this.props.myMessages) {
			this.props.myMessages.map((x) => {
				if(x.sender_id == this.props.match.params.user_id) {
					message_chain.push(x);
				}
				else if(x.receiver_id== this.props.match.params.user_id) {
					message_chain.push(x);
				}
			});
		}

		if(message_chain) {
			message_chain.sort((b, a) => { return new Date(b.sent_time) - new Date(a.sent_time) })
		}

		return (
			<div>
				<div className="container">
				<h1 className="display-4">{ this.props.selectedUser ? this.props.selectedUser.name : '' }</h1>
				<ul>
				{ message_chain ? message_chain.map((x) => <MessageContainer message={x}  />) : 'No messages exist' }
				</ul>
				<div className="form-group">
				<label htmlFor="message_response">Message input: </label>
				<textarea className="form-control" rows="3" value={this.state.response} onChange={this.handleResponseChange}></textarea>
				</div>
				<button type="button" className="btn btn-outline-primary" onClick={this.sendMessage}>Send message</button>
				
				</div>
			</div>
		)
	}
}

export default MessageChainPage;
