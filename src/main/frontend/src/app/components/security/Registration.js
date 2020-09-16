import React, { useContext } from "react";

import withAuthContext from "../wrappers/withAuthContext";
import withNotificationContext from "../wrappers/withNotificationContext";

import Form from "../functional/forms/Form";

const Registration = ({sendNotification, registerUser, usernameExists, history}) => {

	const handleSubmit = async (user) => {
		let exists = false;
		exists = await usernameExists(user.username);

		if (exists) {
			sendNotification("usernameExists", user.username);
		} else {
			
			const registeredUser = await registerUser(user);
			if (registeredUser) {
				history.push("/");
				sendNotification("successfulRegistration", user.username);
			} else {
				sendNotification("failedRegistration");
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
			<Form title="Registration" action="Register" inputs={inputValues} handleSubmit={handleSubmit} />
		</div>
	);
};

export default withAuthContext(withNotificationContext(Registration));