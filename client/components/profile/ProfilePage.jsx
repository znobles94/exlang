import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';

class ProfilePage extends React.Component {

	componentDidMount() {
//		!this.props.username ? window.location.href='/login' : console.log('profile loaded')
		this.props.fetchMyDetails();
	}

	render() {

	let EditProfile =
	<div className="col-2">
	<Link to='/p/edit'><button type="button" className="btn btn-outline-primary btn-sm">Edit profile</button></Link>
	</div>
	let ViewNotifications =
	<div className="col-2">
	<Link to='/notifications'><button type="button" className="btn btn-outline-primary btn-sm">View notifications</button></Link>
	</div>
	let ViewFriends =
	<div className="col-2">
	<Link to='/friends'><button type="button" className="btn btn-outline-primary btn-sm">View friends</button></Link>
	</div>
	let Name = '';
	let NativeLang = '';
	let LearningLang = '';
	if(this.props.profile) {
    Name = this.props.profile.name;
		if(this.props.profile.lang_native[0]) {
			NativeLang+=this.props.profile.lang_native[0] + ' '
		}
		if(this.props.profile.lang_native[1]) {
			NativeLang+=this.props.profile.lang_native[1] + ' '
		}
		if(this.props.profile.lang_native[2]) {
			NativeLang+=this.props.profile.lang_native[2]
		}

		if(this.props.profile.lang_learning[0]) {
			LearningLang+=this.props.profile.lang_learning[0] + ' '
		}
		if(this.props.profile.lang_learning[1]) {
			LearningLang+=this.props.profile.lang_learning[1] + ' '
		}
		if(this.props.profile.lang_learning[2]) {
			LearningLang+=this.props.profile.lang_learning[2]
		}
	}
			
		


		return (
			<div>
				<div className="container">
				<h1 className="display-4">{ Name }</h1>
				<div className ="row">
					{EditProfile}
					{ViewFriends}
					{ViewNotifications}
				</div>
				{ /* <Route path = '/view/:num' component = { ProfileView }/> */ }
				<div className ="row">
				<div className = "col-2">Native language(s):  </div>
				<div className = "col"> {NativeLang} </div>
				</div>
				<div className ="row">
				<div className = "col-2">Learning language(s): </div>
				<div className = "col"> {LearningLang} </div>
				</div>
				<div className ="row">
				<div className='col-2'>Birthday: </div>
				<div className="col">{ this.props.profile ? this.props.profile.bday : '' }</div>
				</div>
				<div className ="row">
				<div className='col-2'>Location: </div>
				<div className="col">{ this.props.profile ? this.props.profile.loc : '' }</div>
				</div>
				<div className ="row">
				<div className='col-2'>Gender: </div>
				<div className="col">{ this.props.profile ? this.props.profile.sex : '' }</div>
				</div>
				<div className ="row">
				<div className='col-2'>About me: </div>
				<div className="col">{ this.props.profile ? this.props.profile.about_me: '' }</div>
				</div>
				</div>
			</div>
		)
	}
}

export default ProfilePage;
