import React, { useContext } from "react";

import AuthContext from "../globalState/authContext/AuthContext";

import withAuthContext from "../wrappers/withAuthContext";
import withNotificationContext from "../wrappers/withNotificationContext";

const Logout = ({logoutUser, sendNotification, history}) => {

	const authContext = useContext(AuthContext);
	const username = authContext.user.username;

	logoutUser();
	history.push("/");
	sendNotification("logout", username);
	
	return null;
		
};

export default withAuthContext(withNotificationContext(Logout));