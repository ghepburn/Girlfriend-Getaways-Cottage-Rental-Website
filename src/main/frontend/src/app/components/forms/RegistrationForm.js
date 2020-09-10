import React, { Component } from "react";
import Form from "../functional/forms/Form";
import FormEntity from "../functional/forms/FormEntity";
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

			disableButton: false
		}

		this.validateInput = this.validateInput.bind(this);
	};

	handleChange = (name, value) => {
		this.setState({name: value});
		this.validateInput(name, value)

	}

	async validateInput(name, value) {

		// get and set errors
		let errors = ValidationManager.getErrors(name, value);
		let stateName = name + "Errors";
		await this.setState({[stateName]: errors});

		// disable button if errors
		this.errorFree() ? this.enabeButton() : this.disableButton();
	}

	enableButton = () => {
		this.setState({disableButton: false});
	}

	disableButton = () => {
		this.setState({disableButton: true});
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
		return result;
	}

	handleSubmit = () => {
		this.props.registrationClicked(this.state.username, this.state.firstName, this.state.lastName, this.state.email, this.state.password, this.state.confirmPassword);
	}

	render() {

		return (
			<Form>
				<div className="registration-form">
					{this.props.generalErrors}

					<FormEntity name="username" error={this.state.usernameErrors} handleChange={this.handleChange}/>
					<FormEntity name="first_Name" error={this.state.firstNameErrors} handleChange={this.handleChange}/>
					<FormEntity name="last_Name" error={this.state.lastNameErrors} handleChange={this.handleChange}/>
					<FormEntity name="email" error={this.state.emailErrors} handleChange={this.handleChange}/>
					<FormEntity name="password" error={this.state.passwordErrors} handleChange={this.handleChange}/>
					<FormEntity name="confirm_Password" error={this.state.confirmPasswordErrors} handleChange={this.handleChange}/>
					
					<SingleActionConditionalButton onClick={this.handleSubmit} onButtonText="Register" offButtonText="Register" disableButton={this.state.disableButton} />
				</div>
			</Form>
		);
	}
}

export default RegistrationForm;