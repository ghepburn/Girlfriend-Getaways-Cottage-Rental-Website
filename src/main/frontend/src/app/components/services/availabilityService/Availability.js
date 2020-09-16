import React, { useContext } from "react";

import Table from "../../functional/tables/ArrayTable";

import BookingContext from "../../globalState/bookingContext/BookingContext";
import BookingManager from "../../managers/BookingManager";


const Availabillity = (props) => {
	const bookingContext = useContext(BookingContext);

	if (bookingContext.bookings.length > 0) {

		const doNotInclude = ["links"]



		return (
			<div>
				<Table {...props} title="Availabillity" inputs={bookingContext.bookings} toInclude={["startDate", "endDate"]} buttonText="Book Now" />
			</div>
		);

	} else {
		props.history.push("/")
		return null;
	}
};

	

export default Availabillity;