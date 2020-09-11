import React, { useContext } from "react";

import AuthManager from "../managers/AuthManager";
import NotificationManager from "../managers/NotificationManager";

import NotificationContext from "../globalState/notificationContext/NotificationContext";

import Form from "../functional/forms/Form";

const Registration = (props) => {

	const notificationContext = useContext(NotificationContext);

	const handleSubmit = async (user) => {
		let usernameExists = await AuthManager.usernameExists(user.username);
		if (usernameExists) {
			notificationContext.sendNotification(NotificationManager.sendUsernameExistsNotification(user.username));
		} else {
			let registeredUser = await AuthManager.registerUser(user);
			if (registeredUser) {
				notificationContext.sendNotification(NotificationManager.getSuccessfulRegistrationNotification(user.username));
				props.history.push("/login");
			} else {
				notificationContext.sendNotification(NotificationManager.getFailedRegistrationNotification());
			}	
		}
	}

	let inputValues = [
		{name: "username"}, 
		{name:"first_Name"},
		{name: "last_Name"},
		{name: "email"},
		{name: "password"},
		{name: "confirm_Password"}
	]

	return (
		<div>
			<Form title="Registration" action="register" inputs={inputValues} handleSubmit={handleSubmit} />
		</div>
	);
};

export default Registration;