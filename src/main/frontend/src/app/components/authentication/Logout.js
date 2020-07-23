import React, { Component } from "react";
import {Redirect} from "react-router-dom";
import UserContext from "../context/UserContext";
import AuthService from "../services/AuthService";
import NotificationService from "../services/NotificationService";

export class Logout extends Component {
	static contextType = UserContext;

	render() {

		const { user, loginUser, logoutUser } = this.context;
		AuthService.logoutUser(logoutUser);
		let notification = NotificationService.getLogoutNotification(user.getUsername());
		this.props.sendNotification(notification);
		return <Redirect to="/" />;

	}
};

export default Logout;