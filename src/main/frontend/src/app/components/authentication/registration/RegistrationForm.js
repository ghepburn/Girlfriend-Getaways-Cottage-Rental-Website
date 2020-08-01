import React, { Component } from "react";
import { Redirect } from "react-router-dom";
import ValidationService from "../../services/ValidationService";


export class Register extends Component {
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
			confirmPasswordErrors: ""
		}

		this.handleChange = this.handleChange.bind(this);
		this.registerClicked = this.registerClicked.bind(this);
		this.disableButton = this.disableButton.bind(this);
	}

	handleChange(e) {
		let name = e.target.name;
		this.setState({[name]: e.target.value});

		let errors = ValidationService.getErrors(e.target.name, e.target.value);
		
		if (name=="confirmPassword") {
			errors += ValidationService.validatePasswordMatch(this.state.password, e.target.value);
		}

		let stateName = name + "Errors";
		this.setState({[stateName]: errors});
	}

	registerClicked() {
		console.log("disabledButton says..." + this.disableButton());
		if (!this.disableButton()) {
			console.log("clicking!");
			this.props.registerClicked(this.state.username, this.state.firstName, this.state.lastName, this.state.email, this.state.password, this.state.confirmPassword);
		} else {
			console.log("click denied");
		}
	}

	disableButton() {
		if (ValidationService.isValid(this.state.username, this.state.usernameErrors) && ValidationService.isValid(this.state.email, this.state.emailErrors) && ValidationService.isValid(this.state.password, this.state.passwordErrors) && ValidationService.isValid(this.state.confirmPasswordErrors, this.state.confirmPasswordErrors)) {
			return false;
		} else {
			return true;
		}
	}

	render() {
			
		return (
			
			<div>
				<h1>Register Page</h1>

				<br />{this.props.generalErrors}<br />

				{this.state.usernameErrors}<br />
				Username: <br />
				<input type="text" name="username" onChange={this.handleChange} /><br /><br />
				
				{this.state.firstNameErrors}<br />
				First Name: <br />
				<input type="text" name="firstName" onChange={this.handleChange} /><br /><br />
				
				{this.state.lastNameErrors}<br />
				Last Name:<br />
				<input type="text" name="lastName" onChange={this.handleChange} /><br /><br />
				
				{this.state.emailErrors}<br />
				Email: <br />
				<input type="text" name="email" onChange={this.handleChange} /><br /><br />
				
				{this.state.passwordErrors}<br />
				Password: <br />
				<input type="text" name="password" onChange={this.handleChange} /><br /><br />
				
				{this.state.confirmPasswordErrors}<br />
				Confirm Password: <br />
				<input type="text" name="confirmPassword" onChange={this.handleChange} /><br /><br />
				
				<button onClick={this.registerClicked}>Register</button>
			</div>
		);
	}
};

export default Register;