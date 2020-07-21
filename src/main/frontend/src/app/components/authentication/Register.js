import React, { Component } from "react";
import UserService from "../services/UserService";

export class Register extends Component {
	constructor(props) {
		super(props);
		this.state = {
			username: null,
			firstName: null,
			lastName: null,
			email: null,
			password: null,
			confirmPassword: null,

			showFailMessage: false,
			showSuccessMessage: false,
			showValdiationMessage: false

		}

		this.registerClicked = this.registerClicked.bind(this);
		this.handleChange = this.handleChange.bind(this);
	}

	handleChange(e) {
		this.setState({
			[e.target.name]: e.target.value
		});

	}

	registerClicked() {
		// // Validate user information
		// registeringUser = ValidationService.validateUserRegistration(this.state.username, this.state.firstName, this.state.lastName, this.state.email, this.state.password, this.state.confirmPassword);
		// if (registeringUser.isValidated()) {

		// 	// create & login user
		// 	UserService.registerUser(registeringUser)
		// 	.then().catch()
		// } else {

		// 	// display errors
		// 	this.setState({errorMessages: registeringUser.getErrors()});
		// 	this.setState({showErrorMessages: true});
		// }

		// POST to create new user
		UserService.createUser(this.state.username, this.state.firstName, this.state.lastName, this.state.email, this.state.password, this.state.confirmPassword)
		.then((response) => {
			this.setState({showSuccessMessage:true});
			this.setState({showFailMessage:false});
		}).catch(() => {
			this.setState({showSuccessMessage:false});
			this.setState({showFailMessage:true});
			console.log("Failed User Creation");
		})
	}

	render() {

		const failMessage = this.state.showFailMessage ? "FAILED" : "";
		const successMessage = this.state.showSuccessMessage ? "SUCCESS" : "";
		// const validationMessage = this.state.showValdiationMessage ? : "";

		return (
			<div>
				<h1>Register Page</h1>

				<br />{failMessage}{successMessage}<br />

				Username: <br />
				<input type="text" name="username" onChange={this.handleChange} /><br /><br />
				First Name: <br />
				<input type="text" name="firstName" onChange={this.handleChange} /><br /><br />
				Last Name: <br />
				<input type="text" name="lastName" onChange={this.handleChange} /><br /><br />
				Email: <br />
				<input type="text" name="email" onChange={this.handleChange} /><br /><br />
				Password: <br />
				<input type="text" name="password" onChange={this.handleChange} /><br /><br />
				Confirm Password: <br />
				<input type="text" name="confirmPassword" onChange={this.handleChange} /><br /><br />
				<button onClick={this.registerClicked}>Register</button>
			</div>
		);
	}
};

export default Register;