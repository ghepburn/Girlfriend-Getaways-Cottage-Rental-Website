import React, { useContext } from "react";

import Form from "../functional/forms/Form";

import withNotificationContext from "../wrappers/withNotificationContext";
import withAuthContext from "../wrappers/withAuthContext";


const Login = ({authenticateUser, loginUser, sendNotification, history}) => {

	const handleSubmit = async ({username, password}) => {
		let user = await authenticateUser(username, password);
		if (user.isAuthenticated) {
			console.log(user);
			loginUser(user);
			history.push("/");
			sendNotification("successfulLogin", user.username);
		} else {
			sendNotification("failedLogin");
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

export default withNotificationContext(withAuthContext(Login));