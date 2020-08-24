import React, { Component } from "react";

import BookingDisplay from "./bookingDisplays/UserAdminDualBookingDisplay";
import BookingListDisplay from "./bookingListDisplays/RowBookingListDisplay";


class BookingList extends Component {

	render() {
		let displayedBookings = this.props.bookings.map(booking => <BookingDisplay booking={booking} admin={this.props.admin}/>);

		return (
			<div>

				<BookingListDisplay bookings={displayedBookings} />

			</div>
		);
	}
};

export default BookingList;