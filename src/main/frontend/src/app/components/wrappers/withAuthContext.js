import React, { useContext } from "react";

import AuthContext from "../globalState/authContext/AuthContext";
import AuthManager from "../managers/AuthManager";

const withAuthContext = (WrappedComponent) => {
	return (props) => {

		const authContext = useContext(AuthContext);

		const user = authContext.user;
	
		const authenticateUser = async (username, password) => {
			const user =  await AuthManager.authenticateUser(username, password);
			return user;
		}

		const loginUser = (user) => {
			authContext.loginUser(user);
			return user;
		}

		const logoutUser = async (user) => {
			await authContext.logoutUser();
			return user;
		}

		const registerUser = async (user) => {
			const registeredUser = await AuthManager.registerUser(user);
			return registeredUser;
		}

		const usernameExists = async (username) => {
			console.log("in wrappers usernameExists");
			const exists = await AuthManager.usernameExists(username);
			console.log(exists);
			return exists;
		}

		return(
			<WrappedComponent {...props} user={user} authenticateUser={authenticateUser} loginUser={loginUser} logoutUser={logoutUser} registerUser={registerUser} usernameExists={usernameExists} />
		);
	};
}

export default withAuthContext;