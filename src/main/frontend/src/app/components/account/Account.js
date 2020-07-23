import React, { Component } from "react";
import UserContext from "../context/UserContext";
import UserSettings from "./settings/UserSettings";
import UserGetawayList from "./getaways/UserGetawayList";
import UserService from "../services/UserService";

export class Account extends Component {
	static contextType = UserContext;

	constructor(props) {
		super(props);
		this.state={
			user: null,
			showUserSettings: false,
			showUserGetaways: false
		}

		this.showUserSettings = this.showUserSettings.bind(this);
		this.showUserGetaways = this.showUserGetaways.bind(this);
	} 

	componentDidMount() {
		const { user } = this.context;
		UserService.getUserByUsername(user.getUsername())
		.then((response)=> {
			this.setState({user:response.data});
		}).catch()
	}


	showUserSettings() {
		let currentState = this.state.showUserSettings;
		this.setState({ showUserSettings: !currentState });
		this.setState({ showUserGetaways: false });
	}

	showUserGetaways() {
		let currentState = this.state.showUserGetaways;
		this.setState({ showUserGetaways: !currentState });
		this.setState({ showUserSettings: false });
	}

	render() {
		const { user } = this.context;
		const userSettings = this.state.showUserSettings ? <UserSettings /> : "";
		const userGetaways = this.state.showUserGetaways ? <UserGetawayList /> : "";

		return (
			<div>
				<h1>{user.getUsername()}'s' Account Page</h1>
				<div>
					<button onClick={this.showUserSettings}>User Settings</button>
					<button onClick={this.showUserGetaways}>User Getaways</button>
				</div>
				{userSettings}
				{userGetaways}
			</div>
		);
	}
}

export default Account;