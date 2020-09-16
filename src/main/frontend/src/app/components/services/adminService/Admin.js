import React, { Component } from "react";

import Button from "../../functional/buttons/Button";
import HiddenComponent from "../../functional/objects/HiddenComponent";

import AdminBookings from "./adminBookings/AdminBookings";
import AdminCrafts from "./adminCrafts/AdminCrafts";
import AdminUsers from "./adminUsers/AdminUsers";
import AdminSettings from "./adminSettings/AdminSettings";
import AdminGetaways from "./adminGetaways/AdminGetaways";


class Admin extends Component {
	state = {
		hideUsers: true,
		hideGetaways: true,
		hideCrafts: true,
		hideBookings: true,
		hideSettings: true
	};

	handleClick = (e)  => {
		this.setState({
			hideUsers: true, hideGetaways: true, hideCrafts: true, hideBookings: true, hideSettings: true
		});
		this.setState({[e.target.name]: !this.state[e.target.name]});
	}

	render() {

		return (
			<div className="admin">
				<p className="page-title">Admin Page</p>	
				
				<div className="admin-navigation">
					<Button name="hideUsers" onClick={this.handleClick} >Users</Button>
					<Button name="hideGetaways" onClick={this.handleClick} >Getaways</Button>
					<Button name="hideCrafts" onClick={this.handleClick} >Crafts</Button>
					<Button name="hideBookings" onClick={this.handleClick} >Bookings</Button>
					<Button name="hideSettings" onClick={this.handleClick} >Settings</Button>
				</div>

				<div className="admin-content">

					<HiddenComponent isHidden={this.state.hideUsers}>
						<AdminUsers />
					</HiddenComponent>

					<HiddenComponent isHidden={this.state.hideCrafts}>
						<AdminCrafts />
					</HiddenComponent>

					<HiddenComponent isHidden={this.state.hideBookings}>
						<AdminBookings />
					</HiddenComponent>

					<HiddenComponent isHidden={this.state.hideSettings}>
						<AdminSettings />
					</HiddenComponent>




					
				</div>
			
			</div>
		);
	}
};

export default Admin;