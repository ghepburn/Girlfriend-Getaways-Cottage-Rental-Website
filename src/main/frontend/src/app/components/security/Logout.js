import React, { Component } from "react";
import {Redirect} from "react-router-dom";
import withAuthContext from "../wrappers/withAuthContext";
import withNotificationContext from "../wrappers/withNotificationContext";
import NotificationManager from "../managers/NotificationManager";



class Logout extends Component {
	state={
		username: "",
		loggedOut: false
	}

	async componentDidMount() {
		let username = this.props.authContext.user.username;
		await this.props.authContext.logoutUser();
		this.setState({username: username, loggedOut: true});
		await this.props.notificationContext.sendNotification(NotificationManager.getLogoutNotification(this.state.username));
	}
	
	render() {
		if (this.state.loggedOut) {
			return <Redirect to="/" />;
		} else {
			return null;
		}	
	}
};

export default withAuthContext(withNotificationContext(Logout));