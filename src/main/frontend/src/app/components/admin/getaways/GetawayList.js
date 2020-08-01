import React, { Component } from "react";
import Getaway from "./Getaway";
import AdminService from "../../services/AdminService";

export class GetawayList extends Component {
	constructor(props) {
		super(props);
		this.state = {
			getaways: []
		}
	}

	componentDidMount() {
		AdminService.getAllGetaways()
			.then((response) => {
				this.setState({getaways: response.data});
			});

	}

	render() {

		const getaways = this.state.getaways.map(getaway => 
				<Getaway getaway={getaway} />
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
					{getaways}
				</body>
			</table>
		);
	}
};

export default GetawayList;