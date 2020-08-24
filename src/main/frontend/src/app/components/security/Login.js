import React, { Component } from "react";
import LoginForm from "../forms/LoginForm";

import NotificationManager from "../managers/NotificationManager";
import AuthManager from "../managers/AuthManager";

import withNotificationContext from "../wrappers/withNotificationContext";
import withAuthContext from "../wrappers/withAuthContext";


class Login extends Component {
	constructor(props){
		super(props);
		this.state={
			generalErrors: ""
		}

		this.loginClicked = this.loginClicked.bind(this);
	}

	async loginClicked(username, password) {
		let user = await AuthManager.authenticateUser(username, password);
		if (user.isAuthenticated) {
			this.props.authContext.loginUser(user);
			this.props.notificationContext.sendNotification(NotificationManager.getSuccessfulLoginNotification(user.username));
		} else {
			this.setState({generalErrors: "Login failed.  Please try again."});
		}
	}

	render() {
			
		return (
			<div>
				<h3>Login</h3>
				<LoginForm loginClicked={this.loginClicked} generalErrors={this.state.generalErrors}/>
			</div>
		);
	}
};

export default withAuthContext(withNotificationContext(Login));