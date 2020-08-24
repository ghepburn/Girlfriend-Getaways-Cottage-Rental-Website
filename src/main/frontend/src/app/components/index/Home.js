import React, { Component } from "react";
import SingleActionConditionalButton from "../functional/buttons/SingleActionConditionalButton";
import Notification from "../globalState/notificationContext/Notification";
import withNotificationContext from "../wrappers/withNotificationContext";
import withAuthContext from "../wrappers/withAuthContext";

import LoginForm from "../forms/LoginForm";

class Home extends Component {

	render() {

		const username = this.props.authContext.user.username == null ? <p>"its null"</p> : this.props.authContext.user.username; 

		return (
			<div>
				Home Page
				<p>{username}</p>
				{this.props.authContext.user.email}
			</div>
		);
	}
}

export default withAuthContext(withNotificationContext(Home));