import React, { Component } from "react";
import BookingContext from "../../../globalState/bookingContext/BookingContext";
import BookingManager from "../../../managers/BookingManager";
import SingleActionButton from "../../../functional/buttons/SingleActionButton";

import BookingList from "../../../entities/bookings/BookingList";
import CreateBooking from "../../../entities/bookings/actions/CreateBooking";


class AdminBookings extends Component {
	static contextType = BookingContext;

	state = {
		showCreateBooking: false
	}

	async componentDidMount() {
		let bookings = this.context.bookings;
		if (bookings.length === 0) {
			// set bookings
			let updatedBookings = await BookingManager.getAllBookings();
			this.context.setBookings(updatedBookings);
		}
	}

	toggleCreateBooking = () => {
		this.setState({showCreateBooking: !this.state.showCreateBooking});
	}

	render() {

		let createBooking = this.state.showCreateBooking ? <CreateBooking /> : "";

		return (
			<div>
				<h3>Bookings</h3>

				<BookingList bookings={this.context.bookings} admin="true" />
				<SingleActionButton onClick={this.toggleCreateBooking} offButtonText="Add Booking" onButtonText="Close"/>
				{createBooking}
			</div>
		);
	}
};

export default AdminBookings;