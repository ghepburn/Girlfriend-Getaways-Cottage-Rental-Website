import React, { Component } from "react";
import AdminBookings from "./adminBookings/AdminBookings";
import AdminCrafts from "./adminCrafts/AdminCrafts";
import AdminUsers from "./adminUsers/AdminUsers";
import AdminSettings from "./adminSettings/AdminSettings";


class Admin extends Component {
	constructor(props) {
		super(props);
		this.state = {
			showUsers: false,
			showGetaways: false,
			showCrafts: false,
			showBookings: false,
			showSettings: false
		};

		this.handleClick =  this.handleClick.bind(this);
	}

	handleClick(e) {
		this.setState({
			showUsers: false, showGetaways: false, showCrafts: false, showBookings: false, showSettings: false
		});
		this.setState({[e.target.name]: true});
	}

	render() {

		const users = this.state.showUsers ? <AdminUsers /> : "";
		const getaways = this.state.showGetaways ? "getaways": ""; 
		const crafts = this.state.showCrafts ? <AdminCrafts  /> : ""; 
		const bookings = this.state.showBookings ? <AdminBookings />: ""; 
		const settings = this.state.showSettings ? <AdminSettings /> : "";

		return (
			<div className="admin">

				<h1>Admin Page</h1>	
				<div className="admin-navigation">
					<button name="showUsers" onClick={this.handleClick}>Users</button>
					<button name="showGetaways" onClick={this.handleClick}>Getaways</button>
					<button name="showCrafts" onClick={this.handleClick}>Crafts</button>
					<button name="showBookings" onClick={this.handleClick}>Bookings</button>
					<button name="showSettings" onClick={this.handleClick}>Settings</button>
				</div>
				<div className="admin-content">
					{users}
					{getaways}
					{crafts}
					{bookings}
					{settings}
				</div>
			
			</div>
		);
	}
};

export default Admin;