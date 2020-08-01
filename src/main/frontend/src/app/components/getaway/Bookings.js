import React, {Component} from "react";
import {Redirect} from "react-router-dom";
import UserContext from "../context/UserContext";
import CreateGetaway from "./CreateGetaway";
import UserService from "../services/UserService";
import Availabillity from "../availabillity/Availabillity";
import Notification from "../context/Notification";

class Bookings extends Component {
	static contextType = UserContext;

	constructor(props) {
		super(props);
		this.state={
			isBookingProcess: false,
			booking: null,
			showLoginRedirect: false,
			user: null
		}

		this.proceedWithBooking = this.proceedWithBooking.bind(this);
	}

	proceedWithBooking(booking) {
		if (booking.id > 0) {
			
			const {user} = this.context;
			
			if (user.isUserLoggedIn) {
				try {
					UserService.getUserByUsername(user.getUsername())
					.then((response)=>{
						booking.bookedBy = response.data;
						this.setState({user: response.data, booking: booking});
						this.setState({isBookingProcess: true});
					}).catch((error)=>{console.log(error.message)})
					this.props.sendNotification(new Notification("SUCCESS", "Booking identified.  Lets finalize your Getaway!", 1));
				} catch(error) {
					console.log(error.message);
				}
			} else {
				this.props.sendNotification(new Notification("FAILURE", "Please login or create an account to begin the booking process.", 2));
				return this.setState({showLoginRedirect: true});
			}
		}
	}

	render() {
		const loginRedirect = this.state.showLoginRedirect ? <Redirect to="/login" /> : ""
		const bookingProcess = this.state.isBookingProcess ? <CreateGetaway booking={this.state.booking} user={this.state.user}/> : <Availabillity proceedWithBooking={this.proceedWithBooking}/>;


		return(
			<div>
				{loginRedirect}
				{bookingProcess}
			</div>
		);
	}

}

export default Bookings