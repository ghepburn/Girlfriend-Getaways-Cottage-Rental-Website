import React, { Component } from "react";
import SingleActionButton from "../../../functional/buttons/SingleActionButton";

import UserList from "../../../entities/users/UserList";
import UserManager from "../../../managers/UserManager";


class AdminUsers extends Component {

	state={
		users: []
	}

	async componentDidMount() {
		let users = await UserManager.getUsers();
		this.setState({users: users});
	}

	render() {

		return (
			<div>
				<h3>Users</h3>
				<UserList users={this.state.users} admin="true" />
	
			</div>
		);
	}
};

export default AdminUsers;