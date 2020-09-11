import React, { Component } from "react";
import Form from "../functional/forms/Form";
import FormEntity from "../functional/forms/FormEntity";
import SingleActionConditionalButton from "../functional/buttons/SingleActionConditionalButton";
import ValidationManager from "../managers/ValidationManager";

class LoginForm extends Component {
	constructor(props) {
		console.log(props);
		super(props);
		this.state = {
			username: "",
			password: "",

			usernameErrors: "",
			passwordErrors: "",

			disableButton: false
		}

		this.validateInput = this.validateInput.bind(this);
	};

	handleChange = (name, value) => {
		this.setState({name: value});
		this.validateInput(name, value);
	}

	async validateInput(name, value) {
		let errors = ValidationManager.getErrors(name, value);
		if (errors !== null) {
			let stateName = name + "Errors"
			await this.setState({[stateName]: errors});
		} 
		if (this.errorFree()) {
			this.setState({disableButton: false});
		} else {
			this.setState({disableButton: true});
		}
	}

	errorFree = () => {
		let e1 = this.state.usernameErrors;
		let e2 = this.state.passwordErrors;
		console.log(e1 + " " + e2);
		let result = e1.length == 0 && e2.length == 0 ? true : false;
		return result 
	}

	handleSubmit = () => {
		this.props.loginClicked(this.state.username, this.state.password);
	}

	render() {

		return (
			<Form>
				<div className="login-form">
					<p className="form-title">Login</p>
					{this.props.generalErrors}
					<FormEntity type="text" error={this.state.usernameErrors} name="username" handleChange={this.handleChange} />
					<FormEntity type="text" error={this.state.passwordErrors} name="password" handleChange={this.handleChange} />
					<button className="button form-button" onClick={this.handleSubmit}>Login</button>
				</div>
			</Form>
		);
	}
};

export default LoginForm;