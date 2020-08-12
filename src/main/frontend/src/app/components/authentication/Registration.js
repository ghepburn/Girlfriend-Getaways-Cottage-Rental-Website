import React, { Component } from "react";
import {Redirect} from "react-router-dom";
import AuthService from "../services/AuthService";
import NotificationService from "../services/NotificationService";
import RegistrationForm from "../forms/RegistrationForm";
import withNotificationContext from "../wrappers/withNotificationContext";

export class Registration extends Component {
	constructor(props) {
		super(props);
		this.state = {
			generalErrors: "",
			showRedirect: false
		}

		this.registrationClicked = this.registrationClicked.bind(this);
	}

	async registrationClicked(username, firstName, lastName, email, password, confirmPassword) {
		let usernameExists = await AuthService.usernameExists(username);
		if (usernameExists) {
			let errorMsg = "Username '" + username + "' already exists.  Please choose another."
			this.setState({generalErrors: errorMsg});
		} else {
			let user = await AuthService.registerUser(username, firstName, lastName, email, password, confirmPassword);
			if (user.username != null) {
				let notification = NotificationService.getSuccessfulRegistrationNotification(username);
				await this.props.notificationContext.sendNotification(notification); 
				this.props.history.push("/login");
			} else {
				this.setState({generalErrors: "Registration failed.  Please try again."});
			}	
		}
	}

	render() {

		const redirect = this.state.showRedirect ? <Redirect to="/login" /> : ""; 

		return (
			<div>
				{redirect}
				<RegistrationForm registrationClicked={this.registrationClicked} generalErrors={this.state.generalErrors}/>
			</div>
		);
	}
};

export default withNotificationContext(Registration);