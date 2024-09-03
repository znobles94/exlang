import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import { editMyProfile } from '../../redux/actions/credActions';

class EditProfilePage extends React.Component {
	constructor() {
		super()

		this.state = {
			lang_selection: [ "English", "French", "Spanish", "Chinese", "German", "Russian" ],
			sex: ["Male", "Female"],
			profile: { name: 'originalname', lang_native: [''], lang_learning: [''], bday: '', loc: '', sex: '', pic: '', about_me: '' }
		}
		this.handleEditName = this.handleEditName.bind(this);
		this.handleEditNative = this.handleEditNative.bind(this);	
		this.handleEditNative2 = this.handleEditNative2.bind(this);	
		this.handleEditNative3 = this.handleEditNative3.bind(this);	
		this.handleEditLearning = this.handleEditLearning.bind(this);	
		this.handleEditLearning2 = this.handleEditLearning2.bind(this);	
		this.handleEditLearning3 = this.handleEditLearning3.bind(this);	
		this.handleEditBday = this.handleEditBday.bind(this);	
		this.handleEditLoc = this.handleEditLoc.bind(this);	
		this.handleEditSex= this.handleEditSex.bind(this);	
		this.handleEditPic = this.handleEditPic.bind(this);	
		this.handleEditAboutMe= this.handleEditAboutMe.bind(this);	
		
		this.updateProfile = this.updateProfile.bind(this);
		this.handleEditProfile = this.handleEditProfile.bind(this)
	}

	componentDidMount() {

		// load profile API onto edit fields
		this.props.profile ? this.setState({profile: this.props.profile}) : '';

	}

	handleEditName(evt) { 
		var tempProf = this.state.profile;
		tempProf.name = evt.target.value;
		this.updateProfile(tempProf);
	}

	handleEditNative(evt) { 
		var tempProf = this.state.profile;
		tempProf.lang_native[0] = evt.target.value;
		this.updateProfile(tempProf);
	}

	handleEditNative2(evt) { 
		var tempProf = this.state.profile;
		tempProf.lang_native[1] = evt.target.value;
		this.updateProfile(tempProf);
	}

	handleEditNative3(evt) { 
		var tempProf = this.state.profile;
		tempProf.lang_native[2] = evt.target.value;
		this.updateProfile(tempProf);
	}

	handleEditLearning(evt) { 
		var tempProf = this.state.profile;
		tempProf.lang_learning[0] = evt.target.value;
		this.updateProfile(tempProf);
	}

	handleEditLearning2(evt) { 
		var tempProf = this.state.profile;
		tempProf.lang_learning[1] = evt.target.value;
		this.updateProfile(tempProf);
	}

	handleEditLearning3(evt) { 
		var tempProf = this.state.profile;
		tempProf.lang_learning[2] = evt.target.value;
		this.updateProfile(tempProf);
	}

	handleEditBday(evt) { 
		var tempProf = this.state.profile;
		tempProf.bday = evt.target.value;
		this.updateProfile(tempProf);
	}

	handleEditSex(evt) { 
		var tempProf = this.state.profile;
		tempProf.sex = evt.target.value;
		this.updateProfile(tempProf);
	}

	handleEditLoc(evt) { 
		var tempProf = this.state.profile;
		tempProf.loc = evt.target.value;
		this.updateProfile(tempProf);
	}

	handleEditPic(evt) { 
		var tempProf = this.state.profile;
		tempProf.pic = evt.target.value;
		this.updateProfile(tempProf);
	}

	handleEditAboutMe(evt) { 
		var tempProf = this.state.profile;
		tempProf.about_me= evt.target.value;
		this.updateProfile(tempProf);
	}

	updateProfile(newProf) { 
		this.setState({profile: newProf})
	}

	handleEditProfile () {
		// pass args to profile edit API
		this.props.dispatch(editMyProfile(this.state.profile))
		this.props.fetchMyDetails()
		this.props.history.push('/')
		//window.location.href='/p';
	}

	render() {
		let ProfileName =
		<div className="form-group row"> 
		<label htmlFor="name_field" className="col-5 col-form-label">Profile Name</label> 
		<div className="col-4">
		<input className="form-control" type="text" onChange={this.handleEditName} value={this.state.profile.name} id="profile_name_field"/>
		</div>
		</div>
		let Location = 
		<div className="form-group row">
		<label htmlFor="loc_field" className="col-5 col-form-label">Location</label>
		<div className="col-4">
		<input className="form-control" type="text" onChange={this.handleEditLoc } value={this.state.profile.loc} id="loc_field"/>
		</div>
		</div>
		let NativeLang = 
		<select id="lang_native" className="custom-select" onChange={this.handleEditNative} value={this.state.profile.lang_native[0]}>
		<option selected>{this.state.profile.lang_native[0]}</option>
		{this.state.lang_selection.map((x) => <option value = {x}>{x}</option>)}
		</select>
		let NativeLang1 = 
		<select id="lang_native2" className="custom-select" onChange={this.handleEditNative2} value={this.state.profile.lang_native[1]}>
		<option selected>{this.state.profile.lang_native[1] ? this.state.profile.lang_native[1] : '' }</option>
		<option value=''>No additional language</option>
		{this.state.lang_selection.map((x) => <option value = {x}>{x}</option>)}
		</select>
		let NativeLang2 =
		<select id="lang_native3" className="custom-select" onChange={this.handleEditNative3} value={this.state.profile.lang_native[2]}>
		<option selected>{this.state.profile.lang_native[2] ? this.state.profile.lang_native[2] : '' }</option>
		<option value=''>No additional language</option>
		{this.state.lang_selection.map((x) => <option value = {x}>{x}</option>)}
		</select>
		let LearningLang = 
		<select id="lang_learning" className="custom-select" onChange={this.handleEditLearning} value={this.state.profile.lang_learning[0]}>
		<option selected>{this.state.profile.lang_learning}</option>
		{this.state.lang_selection.map((x) => <option value = {x}>{x}</option>)}
		</select>
		let LearningLang1 = 
		<select id="lang_learning2" className="custom-select" onChange={this.handleEditLearning2} value={this.state.profile.lang_learning[1]}>
		<option selected>{this.state.profile.lang_learning[1] ? this.state.profile.lang_learning[1] : '' }</option>
		<option value=''>No additional language</option>
		{this.state.lang_selection.map((x) => <option value = {x}>{x}</option>)}
		</select>
		let LearningLang2 = 
		<select id="lang_learning3" className="custom-select" onChange={this.handleEditLearning3} value={this.state.profile.lang_learning[2]}>
		<option selected>{this.state.profile.lang_learning[2] ? this.state.profile.lang_learning[2] : '' }</option>
		<option value=''>No additional language</option>
		{this.state.lang_selection.map((x) => <option value = {x}>{x}</option>)}
		</select>
		let SexOption =
		<div className="form-group row">
		<label htmlFor="sex_field" className="col-5 col-form-label">Gender</label>
		<div className="col-2">
		<select id="sex" className="custom-select" onChange={this.handleEditSex} value={this.state.profile.sex}>
		<option selected>{this.state.profile.sex}</option>
		{this.state.sex.map((x) => <option value = {x}>{x}</option>)}
		</select>
		</div>
		</div>
		let BDayOption =
		<div className="form-group row">
		<label htmlFor="bday_field" className="col-5 col-form-label">Birthday</label>
		<div className="col-4">
		<input className="form-control" type="date" onChange={this.handleEditBday} value={this.state.profile.bday} id="bday_select"/>
		</div>
		</div>
		let AboutMe = 
		<div className="form-group">
		<label htmlFor="aboutMeText">A little about yourself</label>
		<textarea className="form-control" rows="3" value={this.state.profile.about_me} onChange={this.handleEditAboutMe}></textarea>
		</div>
		let SubmitChange =
		<button type="submit" className="btn btn-outline-primary" onClick={this.handleEditProfile}>Submit Changes</button>
	



		return (
			<div>
				<h1 className="display-4">{this.props.title ? this.props.title : ''}</h1>
				{ProfileName}
				{Location}
				<div className="form-group row">
					<label htmlFor="lang_native_field" className="col-5 col-form-label">Native language(s)</label>
					<div className="col-2">{ NativeLang }</div>
					<div className="col-2">{ this.state.profile.lang_native[0] ? NativeLang1 : ''}</div>
					<div className="col-2">{ this.state.profile.lang_native[1] ? NativeLang2 : ''}</div>
				</div>
				<div className="form-group row">
					<label htmlFor="lang_learning_field" className="col-5 col-form-label">Learning language(s)</label>
					<div className="col-2">{ LearningLang }</div>
					<div className="col-2">{ this.state.profile.lang_learning[0] ? LearningLang1 : ''}</div>
					<div className="col-2">{ this.state.profile.lang_learning[1] ? LearningLang2 : ''}</div>
				</div>
				{SexOption}
				{BDayOption}
				{AboutMe}
				{SubmitChange}
			</div>
		)
	}
}

export default EditProfilePage;
