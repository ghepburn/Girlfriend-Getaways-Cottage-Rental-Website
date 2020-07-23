import React, { Component } from "react";
import AuthService from "../../services/AuthService";
import NotificationService from "../../services/NotificationService";
import ValidationService from "../../services/ValidationService";
import UserContext from "../../context/UserContext";

export class LoginForm extends Component {

	constructor(props) {
		super(props);
		this.state = {
			username: null,
			password: null,
			errors: {
				username: "",
				password: ""
			}
		};

		this.handleChange = this.handleChange.bind(this);
		this.loginClicked = this.loginClicked.bind(this);
	}

	handleChange(event) {
		this.setState({[event.target.name]: event.target.value});
	}

	loginClicked() {
		this.props.loginClicked(this.state.username, this.state.password);
	}

	render() {

		const usernameErrors = this.state.errors.username;
		const passwordErrors = this.state.errors.password; 

		return (
			<div>
				<h2>Login Page</h2>
				{this.props.generalErrors}
				{usernameErrors}
				<br /><br />
				Username:
				<input type="text" name="username" onChange={this.handleChange} /><br />
				{passwordErrors}
				Password:
				<input type="text" name="password" onChange={this.handleChange} /><br />
				<button onClick={this.loginClicked}>Login</button>
			</div>
		);
	}
};

export default LoginForm;