import React, { Component } from "react";
import Form from "../functional/forms/Form";
import FormEntity from "../functional/forms/FormEntity";
import SingleActionConditionalButton from "../functional/buttons/SingleActionConditionalButton";
import ValidationManager from "../managers/ValidationManager";
import User from "../globalState/authContext/User";

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

	componentDidMount() {
		if (this.props.user) {
			this.setState({
				username: this.props.user.username,
				firstName: this.props.user.firstName,
				lastName: this.props.user.lastName,
				email: this.props.user.email,
			});
		}
	}

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
		let user = new User(this.state.username);
		user.firstName = this.state.firstName;
		user.lastName = this.state.lastName;
		user.email = this.state.email;
		this.props.saveClicked(user);
	}

	render() {

		let usernameDefault = this.props.user ? this.props.user.username : "";
		let firstNameDefault = this.props.user ? this.props.user.firstName : "";
		let lastNameDefault = this.props.user ? this.props.user.lastName : "";
		let emailDefault = this.props.user ? this.props.user.email : "";

		return (
			<Form>
				<div className="user-settings-form">
					{this.props.generalErrors}
					{this.state.firstNameErrors}
					<label>First Name:</label><br />
					<input type="text" name="firstName" onChange={this.handleChange} defaultValue={firstNameDefault} /><br />
					{this.state.lastNameErrors}
					<label>Last Name:</label><br />
					<input type="text" name="lastName" onChange={this.handleChange} defaultValue={lastNameDefault} /><br />
					{this.state.emailErrors}
					<label>Email:</label><br />
					<input type="text" name="email" onChange={this.handleChange} defaultValue={emailDefault} /><br />
					<SingleActionConditionalButton onClick={this.handleSubmit} onButtonText="Save" offButtonText="Save" disableButton={this.state.disableButton} />
				</div>
			</Form>
		);
	}
}

export default UserSettingsForm;