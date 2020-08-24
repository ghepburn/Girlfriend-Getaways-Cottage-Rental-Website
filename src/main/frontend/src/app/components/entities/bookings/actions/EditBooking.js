import React, { Component } from "react";
import BookingForm from "../../../forms/BookingForm";
import BookingManager from "../../../managers/BookingManager";
import withBookingContext from "../../../wrappers/withBookingContext";
import withNotificationContext from "../../../wrappers/withNotificationContext";
import Notification from "../../../globalState/notificationContext/Notification";
import SingleActionButton from "../../../functional/buttons/SingleActionButton";

class EditBooking extends Component{

	handleClick = (booking) => {
		BookingManager.editBooking(booking);
		this.props.bookingContext.editBooking(booking);
		this.props.notificationContext.sendNotification(new Notification("SUCCESS", "Booking changed successfully.", 2))
	}

	handleDelete = () => {
		BookingManager.deleteBooking(this.props.booking.id);
		this.props.bookingContext.removeBooking(this.props.booking.id);
		this.props.notificationContext.sendNotification(new Notification("SUCCESS", "Booking deleted successfully.", 2))
	}

	render() {

		let deleteButton = <SingleActionButton onClick={this.handleDelete} offButtonText="Delete" onButtonText="Deleted" />

		return(
			<div>
				<BookingForm booking={this.props.booking} onClick={this.handleClick}/>
				{deleteButton}
			</div>

		);

	}
	
}


export default withNotificationContext(withBookingContext(EditBooking));