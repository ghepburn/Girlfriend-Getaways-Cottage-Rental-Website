import React, { Component } from "react";
import BookingForm from "../../../forms/BookingForm";
import BookingManager from "../../../managers/BookingManager";
import withBookingContext from "../../../wrappers/withBookingContext";
import withNotificationContext from "../../../wrappers/withNotificationContext";
import Notification from "../../../globalState/notificationContext/Notification";

class CreateBooking extends Component{

	handleClick = (booking) => {
		BookingManager.addBooking(booking);
		this.props.bookingContext.addBooking(booking);
		this.props.notificationContext.sendNotification(new Notification("SUCCESS", "Booking created successfully.", 2))
	}

	render() {

		return(
			<div>
				<BookingForm onClick={this.handleClick}/>
			</div>

		);

	}
	
}


export default withNotificationContext(withBookingContext(CreateBooking));