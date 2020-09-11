import React, { useContext } from "react";

import Form from "../functional/forms/Form";

import NotificationManager from "../managers/NotificationManager";
import AuthManager from "../managers/AuthManager";

import NotificationContext from "../globalState/notificationContext/NotificationContext";
import AuthContext from "../globalState/authContext/AuthContext";

import withNotificationContext from "../wrappers/withNotificationContext";
import withAuthContext from "../wrappers/withAuthContext";


const Login = (props) => {

	const authContext = useContext(AuthContext);
	const notificationContext = useContext(NotificationContext);

	const handleSubmit = async ({username, password}) => {
		let user = await AuthManager.authenticateUser(username, password);
		if (user.isAuthenticated) {
			authContext.loginUser(user);
			notificationContext.sendNotification(NotificationManager.getSuccessfulLoginNotification(username));
		} else {
			notificationContext.sendNotification(NotificationManager.getFailedLoginNotification(username));		
		}
	}

	const formInputs = [
		{name: "username", defaultValue: "greg"}, {name: "password"}
	]

	return (
		<div>
			<Form title="Login" action="Login" inputs={formInputs} handleSubmit={handleSubmit} />
		</div>
	);
};

export default Login;