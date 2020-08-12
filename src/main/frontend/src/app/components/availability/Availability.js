import React, { Component } from "react";
import BookingContext from "../globalState/bookingContext/BookingContext";
import Booking from "./Booking";
import BookingService from "../services/BookingService";

class Availabillity extends Component {
	static contextType = BookingContext;

	async componentDidMount() {
		let bookings = this.context.bookings;
		if (bookings.length === 0) {
			// set bookings
			let updatedBookings = await BookingService.getAllBookings();
			this.context.setBookings(updatedBookings);
		}

		console.log(this.context);
	}

	render() {

		const bookings = this.context.bookings.length === 0 ? "" : this.context.bookings.map((booking)=>
			<Booking booking={booking} />
		);

		return (
			<div>
				<h3>Availabillity</h3>
				{bookings}
			</div>
		);
	}
};

export default Availabillity;