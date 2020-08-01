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
		this.setState({ showUserSettings: !this.state.showUserSettings, showUserGetaways: false });
	}

	showUserGetaways() {
		this.setState({ showUserSettings: false, showUserGetaways: !this.state.showUserGetaways });
	}

	render() {
		const {user} = this.context;
		const userSettings = this.state.showUserSettings ? <UserSettings user={this.state.user}/> : "";
		const userGetaways = this.state.showUserGetaways ? <UserGetawayList user={this.state.user}/> : "";

		return (
			<div>
				<h1>{user.getUsername()}'s' Account Page</h1>
				<div>
					<button onClick={this.showUserSettings}>Settings</button>
					<button onClick={this.showUserGetaways}>Getaways</button>
				</div>

				{userSettings}
				{userGetaways}

			</div>
		);
	}
}

export default Account;