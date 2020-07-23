import React, { Component } from "react";
import Notification from "../context/Notification";

export class Home extends Component {

	constructor(props) {
		super(props);
		this.createNotification = this.createNotification.bind(this);
	} 

	createNotification() {
		if (!this.props.notification.getIsNotification()) {
			let currentUser = this.props.user;
			this.props.sendNotification(new Notification("SUCCESS", "MADE A NOTI...WITH " + currentUser, 2));
		} else {
			this.props.removeNotification();
		}	

	}

	render() {
		return (
			<div>
				<h1>Home Page</h1><br></br>
				<button onClick={this.createNotification}>Create Notification</button>
			</div>
		);
	}
};

export default Home;