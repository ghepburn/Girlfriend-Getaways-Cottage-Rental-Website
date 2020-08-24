import React, {Component} from "react";
import withBookingContext from "../../../wrappers/withBookingContext";
import withAuthContext from "../../../wrappers/withAuthContext";

import BookingContactView from "./viewDetails/BookingContactView";
import BookingDetailsView from "./viewDetails/BookingDetailsView";
import BookingGetawayView from "./viewDetails/BookingGetawayView";

class UserAdminFullBookingView extends Component {

	state={
		booking: null
	}

	componentDidMount() {
		let bookingId = this.props.match.params.bookingId;
		let booking = this.props.bookingContext.getBooking(bookingId);
		this.setState({booking: booking});
	}

	render() {

		if (this.state.booking !== null) {

			let bookingContactView = this.state.booking.bookedBy === null ? "" : <BookingContactView booking={this.state.booking} admin={this.props.admin} />;
			let bookingGetawayView = this.state.booking.getawayId === null ? "" : <BookingGetawayView booking={this.state.booking} admin={this.props.admin} />;

			return(

				<div>
					Booking View
					<h6>ID: {this.state.booking.id}</h6>
					<BookingDetailsView booking={this.state.booking} admin={this.props.authContext.user.isAdmin}/>
					{bookingContactView}
					{bookingGetawayView}
				</div>

			);

		} else {
			return (
				<div>No Booking Found</div>
			);
		}

	}

}

export default withAuthContext(withBookingContext(UserAdminFullBookingView));