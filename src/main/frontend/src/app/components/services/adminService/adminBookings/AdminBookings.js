import React, { useContext, useState } from "react";
import BookingContext from "../../../globalState/bookingContext/BookingContext";

import Table from "../../../functional/tables/ArrayTable";


const AdminBookings = (props) => {

	const bookingContext = useContext(BookingContext);
	const [bookings, setBookings] = useState(bookingContext.bookings);	

	return (
		<div className="admin-bookings">
			<Table {...props} title="Bookings" inputs={bookings} buttonText="Edit" toInclude={["startDate", "endDate", "isBooked", "isAvailable", "bookedDate", "bookedBy"]}/>
		</div>
	);
};

export default AdminBookings;