import React, { Component } from "react";
import UserContext from "../../context/UserContext";
import BasicUserSettings from "./BasicUserSettings";

export class UserSettings extends Component {
	static contextType = UserContext;

	render() {
		const { user } = this.context;

		return (
			<div>
				<h5>{user.getUsername()}'s Settings</h5>
				<BasicUserSettings />
			</div>
		);
	}
};

export default UserSettings;