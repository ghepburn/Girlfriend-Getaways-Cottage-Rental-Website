import React, { Component } from "react";
import { Redirect, withRouter } from "react-router-dom";
import EditBooking from "./EditBooking";
import Button from "../functional/Button";
import BookingService from "../services/BookingService";

class Booking extends Component {

	constructor(props) {
		super(props);
		this.state = {
			showRedirect: false,
			showEditBooking: false
		}

		this.bookNow = this.bookNow.bind(this);
		this.editBooking = this.editBooking.bind(this);
	}

	bookNow() {
		this.props.proceedWithBooking(this.props.booking);
	}

	editBooking() {
		this.setState({showEditBooking: !this.state.showEditBooking});
	}

	render() {
		const bookNowButton = this.props.booking.isAvailable ? <Button onClick={this.bookNow} onButtonText="Book Now" offButtonText="Book Now" /> : <button disabled="true">Booked</button>;
		const button = this.props.admin === "true" ? <Button onClick={this.editBooking} offButtonText="Edit" onButtonText="Close"/> : bookNowButton;
		const editBooking = this.state.showEditBooking ? <EditBooking booking={this.props.booking} updateBookingState={this.props.updateState} removeBookingFromState={this.props.removeFromState}/>: "";
		const isAvailable = this.props.booking.isAvailable ? "Available" : "Not Available" ;

		return (
			<div>
				<tr>
					<td>{isAvailable}</td>
					<td>{this.props.booking.startDate}</td>
					<td>{this.props.booking.endDate}</td>
					<td>some price</td>
					<td>{button}</td>
				</tr>
				{editBooking}
			</div>

		)
	}
}

export default withRouter(Booking);