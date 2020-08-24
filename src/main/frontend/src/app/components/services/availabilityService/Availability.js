import React, { Component } from "react";
import BookingContext from "../../globalState/bookingContext/BookingContext";
import AvailabilityBooking from "./AvailabilityBooking";
import BookingManager from "../../managers/BookingManager";

import BookingList from "../../entities/bookings/BookingList";

class Availabillity extends Component {
	static contextType = BookingContext;

	async componentDidMount() {
		let bookings = this.context.bookings;
		if (bookings.length === 0) {
			// set bookings
			let updatedBookings = await BookingManager.getAllBookings();
			this.context.setBookings(updatedBookings);
		}
	}

	render() {

		return (
			<div>
				<h3>Availabillity</h3>
				<BookingList bookings={this.context.bookings} admin="false" />

			</div>
		);
	}
};

export default Availabillity;