import React, { Component } from "react";
import SingleActionConditionalButton from "../functional/buttons/SingleActionConditionalButton";
import ValidationManager from "../managers/ValidationManager";

class RegistrationForm extends Component {
	constructor(props) {
		super(props);
		this.state = {
			username: "",
			firstName: "",
			lastName: "",
			email: "",
			password: "",
			confirmPassword: "",

			usernameErrors: "",
			firstNameErrors: "",
			lastNameErrors: "",
			emailErrors: "",
			passwordErrors: "",
			confirmPasswordErrors: "",

			disableButton: true
		}

		this.validateInput = this.validateInput.bind(this);
	};

	handleChange = (event) => {
		this.setState({[event.target.name]: event.target.value});
		this.validateInput(event.target.name, event.target.value)

	}

	async validateInput(name, value) {

		// get and set errors
		let errors = ValidationManager.getErrors(name, value);
		if (errors !== null) {
			let stateName = name + "Errors"
			await this.setState({[stateName]: errors});
		} 

		// disable button if errors
		if (this.errorFree()) {
				this.setState({disableButton: false});
		} else {
			this.setState({disableButton: true});
		}
	}

	errorFree = () => {
		let allInputs = [this.state.username, this.state.firstName, this.state.lastName, this.state.email, this.state.password, this.state.confirmPassword];
		let e1 = this.state.usernameErrors;
		let e2 = this.state.firstNameErrors;
		let e3 = this.state.lastNameErrors;
		let e4 = this.state.emailErrors;
		let e5 = this.state.passwordErrors;
		let e6 = this.state.confirmPasswordErrors;
		let allErrors = [e1, e2, e3, e4, e5, e6];
		
		let result = true;
		for (let count = 0; count < allErrors.length; count++){
			if (allErrors[count].length > 0 || allInputs[count].length < 1) {
				result = false
			}
		}
		return result 
	}

	handleSubmit = () => {
		this.props.registrationClicked(this.state.username, this.state.firstName, this.state.lastName, this.state.email, this.state.password, this.state.confirmPassword);
	}

	render() {

		return (
			<div>
				{this.props.generalErrors}
				{this.state.usernameErrors}
				<label>Username:</label><br />
				<input type="text" name="username" onChange={this.handleChange} /><br />
				{this.state.firstNameErrors}
				<label>First Name:</label><br />
				<input type="text" name="firstName" onChange={this.handleChange} /><br />
				{this.state.lastNameErrors}
				<label>Last Name:</label><br />
				<input type="text" name="lastName" onChange={this.handleChange} /><br />
				{this.state.emailErrors}
				<label>Email:</label><br />
				<input type="text" name="email" onChange={this.handleChange} /><br />
				{this.state.passwordErrors}
				<label>Password:</label><br />
				<input type="text" name="password" onChange={this.handleChange} /><br />
				{this.state.confirmPasswordErrors}
				<label>Confirm Password:</label><br />
				<input type="text" name="confirmPassword" onChange={this.handleChange} /><br />
				<SingleActionConditionalButton onClick={this.handleSubmit} onButtonText="Register" offButtonText="Register" disableButton={this.state.disableButton} />
			</div>
		);
	}
};

export default RegistrationForm;