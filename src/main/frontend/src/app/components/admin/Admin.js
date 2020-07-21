import React, { Component } from "react";
import AdminService from "../services/AdminService";
import UserList from "./users/UserList";
import GetawayList from "./getaways/GetawayList";

export class Admin extends Component {
	constructor(props) {
		super(props);
		this.state = {
			users: [],
			getaways: [],
			authorities: []
		};
	}

	componentDidMount() {
		AdminService.getAllUsers()
			.then((response) => {
				console.log(response);
				this.setState({users: response.data});
			});
		// axios.interceptors.response.use(res=>{console.log(res.request_header)});
		// axios.get(getawaysApiEndpoint)
		// 	.then((response) => this.setState({getaways: response.data._embedded.getaways}));
		// axios.get(authorityApiEndpoint)
		// 	.then((response) => this.setState({authorities: response.data._embedded.authorities}));	
	}

	render() {
		// const users = this.state.users.map(user => <p>{users.firstName}</p>);
		return (
			<div>

				<h1>Admin Page</h1>

				
				<div>
					<h3>Active Users Baby</h3>
					<UserList users={this.state.users}/>
				</div>
				// <div>
				// 	<h3>Getaways</h3>
				// 	<GetawayList getaways={this.state.getaways} />
				// </div>
			
			</div>
		);
	}
};

export default Admin;