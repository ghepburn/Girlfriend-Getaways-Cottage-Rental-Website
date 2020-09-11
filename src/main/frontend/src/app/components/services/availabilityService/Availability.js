import React, { Component } from "react";

import Table from "../../functional/tables/Table";
import TableEntity from "../../functional/tables/TableEntity";

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

		const doNotInclude = ["startDate"]

		return (
			<div>
				<Table title="Availabillity" inputs={this.context.bookings} doNotInclude={doNotInclude} />
			</div>
		);
	}
};

export default Availabillity;