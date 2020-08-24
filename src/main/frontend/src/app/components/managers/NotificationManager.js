import React, { Component } from "react";
import Notification from "../globalState/notificationContext/Notification";

class NotificationManager extends Component {

	static successAction = "SUCCESS";
	static failedAction = "FAILED";

	static createNotification(action, message, ttl) {
		return new Notification(action, message, ttl);
	}

	static getSuccessfulLoginNotification(username) {
		let action = this.successAction;
		let message = "Welcome " + username + "!";
		let ttl = 3;
		return this.createNotification(action, message, ttl);
	}
	static getFailedLoginNotification() {
		let action = this.failedAction;
		let message = "Incorrect login information.  Please try again.";
		let ttl = 1;
		return this.createNotification(action, message, ttl);
	}

	static getLogoutNotification(username) {
		let action = this.successAction;
		let message = "See you next time " + username + "!";
		let ttl = 2;
		return this.createNotification(action, message, ttl);
	}

	static getSuccessfulRegistrationNotification(username) {
		let action = this.successAction;
		let message = "Account successfully created for " + username + "!";
		let ttl = 3;
		return this.createNotification(action, message, ttl);
	}

	static getSuccessfulSettingsChangeNotification() {
		let action = this.successAction;
		let message = "Settings change applied.";
		let ttl = 3;
		return this.createNotification(action, message, ttl);
	}

	
}

export default NotificationManager