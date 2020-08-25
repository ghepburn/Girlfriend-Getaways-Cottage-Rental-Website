import React, { Component } from "react";
import UserDetails from "./UserDetails";

export class UserList extends Component {

	render() {

		const users = this.props.users.map(user => 
				<UserDetails user={user} admin="true"/>
			); 

		return (
			<table>
				<body>
					<tr>
						<th>Username</th>
						<th>First Name</th>
						<th>Last Name</th>
						<th>Email</th>
						<th>Role</th>
						<th>Enabled</th>
						<th>Role</th>
						<th></th>
					</tr>
					{users}
				</body>
			</table>

		);
	}
};

export default UserList;