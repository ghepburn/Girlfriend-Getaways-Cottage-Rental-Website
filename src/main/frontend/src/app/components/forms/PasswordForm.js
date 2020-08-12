import React, { Component } from "react";
import SingleActionConditionalButton from "../functional/buttons/SingleActionConditionalButton";
import ValidationService from "../services/ValidationService";

class RegistrationForm extends Component {
	constructor(props) {
		super(props);
		this.state = {
			currentPassword: "",
			password: "",
			confirmPassword: "",

			passwordErrors: "",

			disableButton: true
		}

		this.validateInput = this.validateInput.bind(this);
	};

	handleChange = (event) => {
		this.setState({[event.target.name]: event.target.value}, this.validateInput());

	}

	async validateInput() {

		// get and set errors
		let errors = ValidationService.confirmPassword(this.state.password, this.state.confirmPassword);
		if (errors !== null) {
			await this.setState({passwordErrors: errors});
		} 

		// disable button if errors
		if (this.errorFree()) {
				this.setState({disableButton: false});
		} else {
			this.setState({disableButton: true});
		}
	}

	errorFree = () => {
		let result = true;
		if (this.state.passwordErrors.length > 0) {
			result = false;
		}
		return result; 
	}

	handleSubmit = () => {
		this.props.saveClicked(this.state.password, this.state.confirmPassword);
	}

	render() {

		return (
			<div>
				{this.props.generalErrors}
				<label>Current Password:</label><br />
				<input type="text" name="currentPassword" onChange={this.handleChange} /><br />
				{this.state.passwordErrors}
				<label>Password:</label><br />
				<input type="text" name="password" onChange={this.handleChange} /><br />
				{this.state.confirmPasswordErrors}
				<label>Confirm Password:</label><br />
				<input type="text" name="confirmPassword" onChange={this.handleChange} /><br />
				<SingleActionConditionalButton onClick={this.handleSubmit} onButtonText="Save" offButtonText="Save" disableButton={this.state.disableButton} />
			</div>
		);
	}
};

export default RegistrationForm;