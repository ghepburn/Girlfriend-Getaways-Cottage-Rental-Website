import React, { Component } from "react";
import BookingService from "../services/BookingService";
import BookingList from "../bookings/BookingList";

export class Availabillity extends Component {

	render() {
		return (
			<div>
				<h1>Availabillity Page</h1>
				<BookingList admin="false" proceedWithBooking={this.props.proceedWithBooking}/>
			</div>
		);
	}
};

export default Availabillity;