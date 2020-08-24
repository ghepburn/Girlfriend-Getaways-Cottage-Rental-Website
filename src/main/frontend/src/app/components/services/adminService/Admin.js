import React, { Component } from "react";
import AdminBookings from "./adminBookings/AdminBookings";


class Admin extends Component {
	constructor(props) {
		super(props);
		this.state = {
			showUsers: false,
			showGetaways: false,
			showCrafts: false,
			showBookings: false
		};

		this.handleClick =  this.handleClick.bind(this);
	}

	handleClick(e) {
		this.setState({
			showUsers: false, showGetaways: false, showCrafts: false, showBookings: false
		});
		this.setState({[e.target.name]: true});
	}

	render() {

		const users = this.state.showUsers ? "<UserList />" : "";
		const getaways = this.state.showGetaways ? "getaways": ""; 
		const crafts = this.state.showCrafts ? "<CraftList  />" : ""; 
		const bookings = this.state.showBookings ? <AdminBookings />: ""; 

		return (
			<div>

				<h1>Admin Page</h1>	
				<div>
					<button name="showUsers" onClick={this.handleClick}>Users</button>
					<button name="showGetaways" onClick={this.handleClick}>Getaways</button>
					<button name="showCrafts" onClick={this.handleClick}>Crafts</button>
					<button name="showBookings" onClick={this.handleClick}>Bookings</button>
				</div>
				<div>
					{users}
					{getaways}
					{crafts}
					{bookings}
				</div>
			
			</div>
		);
	}
};

export default Admin;