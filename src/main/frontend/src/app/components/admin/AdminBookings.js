import React, { Component } from "react";
import BookingList from "../bookings/BookingList";
import CreateBooking from "../bookings/CreateBooking";

export class AdminBookings extends Component {

	constructor(props) {
		super(props);
		this.state = {
			showCreateBookingButton: "Add Booking",
			showCreateBooking: false
		}

		this.showCreateBooking = this.showCreateBooking.bind(this);
	}

	showCreateBooking() {
		if (this.state.showCreateBooking) {
			this.setState({showCreateBooking: false, showCreateBookingButton: "Add Booking"});
		} else {
			this.setState({showCreateBooking: true, showCreateBookingButton: "Cancel"});
		}
	}

	render() {

		const createBooking = this.state.showCreateBooking ? <CreateBooking /> : "";

		return (
			<div>
				<BookingList admin="true"/>
				<button onClick={this.showCreateBooking}>{this.state.showCreateBookingButton}</button>
				{createBooking}
			</div>

		);
	}
};

export default AdminBookings;