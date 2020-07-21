import React, { Component } from "react";
import UserService from "../services/UserService";
import ValidationService from "../services/ValidationService";
import UserContext from "../context/UserContext";

export class Login extends Component {
	static contextType = UserContext;

	constructor(props) {
		super(props);
		this.state = {
			username: null,
			password: null,
			showFailMessage: false,
			showSuccessMessage: false
		};

		this.handleChange = this.handleChange.bind(this);
		this.loginClicked = this.loginClicked.bind(this);
	}

	handleChange(event) {
		this.setState({[event.target.name]: event.target.value});
	}

	loginClicked() {
		UserService.authenticateUser(this.state.username, this.state.password)
		.then((response)=>{
			const { user, loginUser, logoutUser } = this.context;
			UserService.loginUser(response, this.state.username, user, loginUser);
			this.setState({showFailMessage: false});
			this.setState({showSuccessMessage: true});
		}).catch(()=>{
			this.setState({showFailMessage: true});
			this.setState({showSuccessMessage: false});
		})			
	}

	render() {

		const failMessage = this.state.showFailMessage ? ValidationService.getLoginFailureMessage() : " ";
		const successMessage = this.state.showSuccessMessage ? ValidationService.getLoginSuccessMessage() : " ";

		return (
			<div>
				<h2>Login Page</h2>
				{failMessage}
				{successMessage}
				<br />
				Username:
				<input type="text" name="username" onChange={this.handleChange} /><br />
				Password:
				<input type="text" name="password" onChange={this.handleChange} /><br />
				<button onClick={this.loginClicked}>Login</button>
			</div>
		);
	}
};

export default Login;