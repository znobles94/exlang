import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { setNativeVisibility, setLearningVisibility, setGenderVisibility } from '../.././redux/actions/credActions';

class UserSearchComponent extends React.Component {

	constructor() {
		super()
		this.state = {
			lang_native_search: '',
			lang_learning_search: '',
			gender_search: ''
		}

		this.handleEditNative = this.handleEditNative.bind(this);
		this.handleEditLearning = this.handleEditLearning.bind(this);
		this.handleEditGender = this.handleEditGender.bind(this);
	}

	handleEditNative(evt) {
		this.setState({lang_native_search: evt.target.value})
		this.props.dispatch(setNativeVisibility(evt.target.value))
	}

	handleEditLearning(evt) {
		this.setState({lang_learning_search: evt.target.value})
		this.props.dispatch(setLearningVisibility(evt.target.value))
	}

	handleEditGender(evt) {
		this.setState({gender_search: evt.target.value})
		this.props.dispatch(setGenderVisibility(evt.target.value))
	}

	render() {
		let myComponent
		let lang_selection = ["English", "French", "Spanish", "Chinese", "German", "Russian" ]
		let gender = ["Male", "Female"]
		
		myComponent =
		<div className="container">
		<div className="row row-bordered">
		<h4>exlang community directory</h4>
		<div className="col-2">
		<select id="lang_native" className="custom-select" onChange={this.handleEditNative} value={this.state.lang_native_search}>
		<option selected disabled>Select a native language</option>
		<option selected value=''>{this.props.visNative ? this.props.visNative : 'Any language' }</option>
		{ this.props.visNative ? <option value=''>Any language</option> : '' }
		{lang_selection.map((x) => <option value = {x}>{x}</option>)}
		</select>
		</div>
		<div className="col-2">
		<select id="lang_learning" className="custom-select" onChange={this.handleEditLearning} value={this.state.lang_learning_search}>
		<option selected disabled>Select a learning language</option>
		<option selected value=''>{this.props.visLearning ? this.props.visLearning : 'Any language'}</option>
		{ this.props.visLearning ? <option value=''>Any language</option> : '' }
		{lang_selection.map((x) => <option value = {x}>{x}</option>)}
		</select>
		</div>
		<div className="col-2">
		<select id="gender" className="custom-select" onChange={this.handleEditGender} value={this.state.gender_search}>
		<option selected disabled>Select gender</option>
		<option selected value=''>{this.props.visGender ? this.props.visGender : 'Either gender'}</option>
		{ this.props.visGender ? <option value=''>Either gender</option> : '' }
		{gender.map((x) => <option value = {x}>{x}</option>)}
		</select>
		</div>
		</div>
		<br/>
		</div>
	 
		return (
			<div className="UserSearchComponent">
					
					{/*
					<Link to ={'/p/' + props.commLinkObj._id}> 
					{props.commLinkObj.name} <br/>
					Speaks: {props.commLinkObj.lang_native[0]}<br/>
					Learning: {props.commLinkObj.lang_learning[0]} <br/>
					Gender: {props.commLinkObj.seprops.commLinkObj} 
				</Link> 
				Garbage text
				*/}
					{myComponent}
			</div>
		)
	}
}

// PRESENTATIONAL COMPONENT

export default UserSearchComponent;
