import React, { Component } from "react";
import withAuthContext from "../wrappers/withAuthContext";
import withNotificationContext from "../wrappers/withNotificationContext";
import UserService from "../services/UserService";
import NotificationService from "../services/NotificationService";
import AccountSettings from "./AccountSettings";
import SingleActionButton from "../functional/buttons/SingleActionButton";

export class Account extends Component {
	constructor(props) {
		super(props);
		this.state={
			toggleView: false,
			generalError: ""
		}
		this.saveUser = this.saveUser.bind(this);
	}

	async saveUser(user) {
		let savedUser = await UserService.saveUser(user);
		if (savedUser.isAuthenticated) {
			this.props.authContext.changeUser(savedUser);
			this.props.notificationContext.sendNotification(NotificationService.getSuccessfulSettingsChangeNotification());
		} else {
			this.setState({generalError: "changes not saved. Please try again."});
		}
	}

	handleClick = () => {
		this.setState({toggleView: !this.state.toggleView});
	}

	render() {

		const settings = this.state.toggleView ? <AccountSettings user={this.props.authContext.user} generalErrors={this.state.generalErrors} saveUser={this.saveUser}/> : ""

		return(
			<div>
				<h3>Hi {this.props.authContext.user.username}!</h3>
				<div>
					<SingleActionButton onClick={this.handleClick} onButtonText="Close" offButtonText="Settings"/> 
				</div>
				{settings}
			</div>
		);
	}
}

export default withNotificationContext(withAuthContext(Account));