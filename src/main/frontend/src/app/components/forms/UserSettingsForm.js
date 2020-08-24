import React, { Component } from "react";
import SingleActionConditionalButton from "../functional/buttons/SingleActionConditionalButton";
import ValidationManagers from "../managers/ValidationManagers";

class UserSettingsForm extends Component {
	constructor(props) {
		super(props);
		this.state = {
			username: "",
			firstName: "",
			lastName: "",
			email: "",

			usernameErrors: "",
			firstNameErrors: "",
			lastNameErrors: "",
			emailErrors: "",

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
		let errors = ValidationManagers.getErrors(name, value);
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
		let allInputs = [this.state.username, this.state.firstName, this.state.lastName, this.state.email];
		let e1 = this.state.usernameErrors;
		let e2 = this.state.firstNameErrors;
		let e3 = this.state.lastNameErrors;
		let e4 = this.state.emailErrors;
		let allErrors = [e1, e2, e3, e4];
		
		let result = true;
		for (let count = 0; count < allErrors.length; count++){
			if (allErrors[count].length > 0 || allInputs[count].length < 1) {
				result = false
			}
		}
		return result 
	}

	handleSubmit = () => {
		this.props.saveClicked(this.state.username, this.state.firstName, this.state.lastName, this.state.email);
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
				<SingleActionConditionalButton onClick={this.handleSubmit} onButtonText="Save" offButtonText="Save" disableButton={this.state.disableButton} />
			</div>
		);
	}
}

export default UserSettingsForm;