import React from "react";
import withBookingContext from "../wrappers/withBookingContext";

const GetawayBooking = ({booking}) => {

	return(
		<div>
			Start: {booking.startDate}
			End: {booking.endDate}
		</div>
	)
}

export default withBookingContext(GetawayBooking);