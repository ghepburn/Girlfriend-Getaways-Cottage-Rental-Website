import React, {Component} from "react";
import {Redirect} from "react-router-dom";
import GetawaySummary from "./GetawaySummary";
import GetawayInputs from "./GetawayInputs";
import Getaway from "./Getaway";
import Notification from "../globalState/notificationContext/Notification";
import NotificationContext from "../globalState/notificationContext/NotificationContext";
import GetawayService from "../services/GetawayService";

class CreateGetaway extends Component {
	static contextType = NotificationContext;

	constructor(props) {
		super(props);
		this.state = {
			getaway: new Getaway(null, [], 0, 0, null), 
			finalizingGetaway: false,
			showRedirect: false
		}

		this.createGetaway = this.createGetaway.bind(this);
		this.confirmGetaway = this.confirmGetaway.bind(this);
	}

	createGetaway(booking, attendees, numOfVehicles, numOfPets, desc) {
		let getaway = new Getaway(booking, attendees, numOfVehicles, numOfPets, desc);
		this.setState({getaway: getaway});
		this.setState({finalizingGetaway: true});
	}

	confirmGetaway() {
		let getaway = this.state.getaway;
		getaway.crafts = [];
		delete getaway.booking.bookedBy._links;
		delete getaway.booking.links;
		
		GetawayService.createGetaway(getaway)
		.then((response)=>{
			const {sendNotification} = this.context;
			sendNotification(new Notification("SUCCESS", "Getaway created successfully!", 2))
			this.setState({showRedirect: true});
		}).catch((error)=>{console.log(error.message)})
	}	


	render() {

		const getawayInputs = <GetawayInputs booking={this.props.booking} user={this.props.user} createGetaway={this.createGetaway}/>;
		const bookingProcess = this.state.finalizingGetaway ? <GetawaySummary getaway={this.state.getaway} /> : getawayInputs; 
		const confirmGetaway = this.state.finalizingGetaway ? <button onClick={this.confirmGetaway}>Confirm Getaway</button>: "";
		const redirect = this.state.showRedirect ? <Redirect to="/" /> : "";

		return(

			<div>
				{redirect}
				{bookingProcess}
				{confirmGetaway}
			</div>
		);
	}

}

export default CreateGetaway;
