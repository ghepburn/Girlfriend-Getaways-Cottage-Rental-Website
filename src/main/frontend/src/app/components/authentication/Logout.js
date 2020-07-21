import React, { Component } from "react";
import UserService from "../services/UserService";
import {Redirect} from "react-router-dom";
import UserContext from "../context/UserContext";

export class Logout extends Component {
	static contextType = UserContext;

	render() {

		const { user, loginUser, logoutUser } = this.context;
		console.log("in logout...");
		console.log(user, logoutUser);
		logoutUser();
		return <Redirect to="/" />;

	}
};

export default Logout;