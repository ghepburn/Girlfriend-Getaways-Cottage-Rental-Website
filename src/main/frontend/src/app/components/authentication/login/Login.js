import React, { Component } from "react";
import { Redirect } from "react-router-dom";
import LoginForm from "./LoginForm";
import NotificationService from "../../services/NotificationService";
import AuthService from "../../services/AuthService";
import Notification from "../../context/Notification";
import UserContext from "../../context/UserContext";


class Login extends Component {
	static contextType = UserContext;

	constructor(props) {
		super(props);
		this.state = {
			showRedirect: false,
			generalErrors: ""
		}
		
		this.loginClicked = this.loginClicked.bind(this);
	}

	loginClicked(username, password) {
		AuthService.authenticateUser(username, password)
		.then((response)=>{
			const { user, loginUser, logoutUser } = this.context;
			AuthService.loginUser(response, username, user, loginUser);
			let notification = NotificationService.getSuccessfulLoginNotification(username);
			this.props.sendNotification(notification);
			this.setState({showRedirect: true});

		}).catch(()=>{

			this.setState(
				{generalErrors: "username or password is incorrect.  Please check the inputs and try again."}
				);
			let notification = NotificationService.getFailedLoginNotification();
			this.props.sendNotification(notification);
		})		
			
	}

	render() {
		const redirect = this.state.showRedirect ? <Redirect to="/" /> : " ";
		
		return (
			<div>
				{redirect}
				<LoginForm loginClicked={this.loginClicked} generalErrors={this.state.generalErrors}/>
			</div>
		);
	}
};

export default Login;