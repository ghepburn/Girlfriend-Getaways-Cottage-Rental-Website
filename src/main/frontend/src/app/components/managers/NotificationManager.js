import React, { Component } from "react";
import Notification from "../globalState/notificationContext/Notification";
import notificationContext from "../globalState/notificationContext/NotificationContext";

class NotificationManager {

	static defaultTTL = 1;
	static defaultMessage = "";

	static successAction = "SUCCESS";
	static failedAction = "FAILED";

	// MESSAGES
		// auth
	static failedLoginMessage = "Login failed. Please check the username and password and try again.";
	static successfulLoginMessage = (username) => {return `Hi ${username}!`;};
	static logoutMessage = username => {return `See you next time ${username}!`};
	static successfulRegistrationMessage = username => {return `Registration successful. Welcome ${username}.`};
	static failedRegistrationMessage = "Registration failed. Please check your provided information and try again.";
	static usernameExistsMessage = username => `${username} username already exists. Please choose a different username.`;
		// changes
	static successfulSettingsChangedMessage = setting => `${setting} changed successfully.`;


	static createFailedNotification = (message) => {
		return new Notification(this.failedAction, message, this.defaultTTL);
	}

	static createSuccessNotification = (message) => {
		return new Notification(this.successAction, message, this.defaultTTL);
	}

	static getNotification = (type, input) => {
		let messageType = type.toLowerCase();
		switch(messageType) {
			
			// auth
			case "successfullogin":
				return this.createSuccessNotification(this.successfulLoginMessage(input));
			case "failedlogin":
				return this.createFailedNotification(this.failedLoginMessage);
			case "logout":
				return this.createSuccessNotification(this.logoutMessage(input));
			case "successfulregistration":
				return this.createSuccessNotification(this.successfulRegistrationMessage(input));
			case "failedregistration":
				return this.createFailedNotification(this.failedRegistrationMessage());
			case "usernameexists":
				return this.createFailedNotification(this.usernameExistsMessage(input));

			// changes

			case "successfulsettingschange":
				return this.createSuccessNotification(this.successfulSettingsChangedMessage(input));
			
			default:
				return this.createSuccessNotification(this.defaultMessage);
		}
	}
	
}

export default NotificationManager