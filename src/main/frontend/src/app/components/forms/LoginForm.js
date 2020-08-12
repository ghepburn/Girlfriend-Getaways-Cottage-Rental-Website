import React, { Component } from "react";
import SingleActionConditionalButton from "../functional/buttons/SingleActionConditionalButton";
import ValidationService from "../services/ValidationService";

class LoginForm extends Component {
	constructor(props) {
		super(props);
		this.state = {
			username: "",
			password: "",

			usernameErrors: "",
			passwordErrors: "",

			disableButton: true
		}

		this.validateInput = this.validateInput.bind(this);
	};

	handleChange = (event) => {
		this.setState({[event.target.name]: event.target.value});
		this.validateInput(event.target.name, event.target.value)
	}

	async validateInput(name, value) {
		let errors = ValidationService.getErrors(name, value);
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
			<div>
				{this.props.generalErrors}
				{this.state.usernameErrors}
				<label>Username:</label><br />
				<input type="text" name="username" onChange={this.handleChange} /><br />
				{this.state.passwordErrors}
				<label>Password:</label><br />
				<input type="text" name="password" onChange={this.handleChange} /><br />
				<SingleActionConditionalButton onClick={this.handleSubmit} onButtonText="Login" offButtonText="Login" disableButton={this.state.disableButton} />
			</div>
		);
	}
};

export default LoginForm;