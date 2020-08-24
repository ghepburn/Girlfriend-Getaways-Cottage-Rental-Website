import React, { Component } from "react";
import User from "./User";
import AdminService from "../services/AdminService";

export class UserList extends Component {
	constructor(props) {
		super(props);
		this.state = {
			users: []
		}
	}

	componentDidMount() {
		AdminService.getAllUsers()
		.then((response)=> {
			this.setState({users:response.data});
		}).catch((error)=>{
			console.log("ERROR...: " + error.message);
		})
	}

	render() {

		const users = this.state.users.map(user => 
				<User user={user} />
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
						<th></th>
					</tr>
					{users}
				</body>
			</table>

		);
	}
};

export default UserList;