import React from 'react';
import Recaptcha from 'react-gcaptcha';

import { registerUser } from '../.././redux/actions/credActions';

 // import { verifyCaptcha } from '../.././lib/verifyCaptcha.js';

class RegisterPage extends React.Component {

  constructor() {
    super();
    this.state = {
      inputEmail: '',
      inputPass: '',
			captcha: false,
			message: ''
    }

    this.handleEmailChange = this.handleEmailChange.bind(this);
    this.handlePassChange = this.handlePassChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.showTempMessage = this.showTempMessage.bind(this);

		this.handleRecaptcha = this.handleRecaptcha.bind(this);
  }

  handleEmailChange (evt) {
    this.setState({inputEmail: evt.target.value});
  }
  handlePassChange (evt) {
    this.setState({inputPass: evt.target.value});
  }
	handleRecaptcha (key) {
		console.log('mykey ' + key)
		//verifyCaptcha(key, '6Lf2CykUAAAAAMv03m_pvF8DL9Wph8fnW14SEwaN')
		//	.then((x) => console.log(x))
		this.setState({captcha: true})
	}

	handleSubmit (evt) {
		evt.preventDefault()
		const newUser = {email: this.state.inputEmail, pass: this.state.inputPass}
		this.state.captcha ? this.props.dispatch(registerUser(newUser)) : ''
		this.state.captcha ? this.showTempMessage (this.props.message) : ''
		this.setState({captcha: false})
	}

	showTempMessage (msg) {
		setTimeout(() => this.props.history.push('/'), 5000)
	}

	render () {
		return (
			<div>
				<h2>{this.props.title}</h2>
				<form>
					<div className="form-group inpfield">
						<label htmlFor="inpEmail">Email address</label>
						<input type="email" className="form-control" id="inpEmail" placeholder="Email" onChange={this.handleEmailChange} value={this.state.inputEmail}/>
						<small id="emailHelp" className="form-text text-muted">We will never share your email with tanyone else.</small>
					</div>
					<div className="form-group inpfield">
						<label htmlFor="inpPass">Password</label>
						<input type="password" className="form-control" id="inpPass" placeholder="Password" onChange={this.handlePassChange} value={this.state.inputPass}/>
					</div>
					<Recaptcha
						sitekey='6Lf2CykUAAAAAB_oB_wPueIqrIjZq8sdb5ml4ox9'
						verifyCallback={this.handleRecaptcha}
						theme="dark"
					/>

					<button className="btn btnfield" onClick={this.handleSubmit}>Send</button>
				</form>
				{this.props.message}
			</div>
		)
	}
}

RegisterPage.propTypes = {
  inputEmail: React.PropTypes.string.isRequired,
  inputPass: React.PropTypes.string.isRequired,
  handlePassChange: React.PropTypes.func,
  handleEmailChange: React.PropTypes.func
}


export default RegisterPage;
