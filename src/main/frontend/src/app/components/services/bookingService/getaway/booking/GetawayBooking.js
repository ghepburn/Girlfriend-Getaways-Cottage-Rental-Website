import React from "react";

const GetawayBooking = (props) => {
	if (props.booking != null) {
		return (
			<div>
				Start: {props.booking.startDate}<br />
				End: {props.booking.endDate}<br />
				Main Point Of Contact: {props.booking.bookedBy.username} @ {props.booking.bookedBy.email}<br />
				Price Per Person: NA<br /> 
			</div>
		)
	} else {
		return <div></div>
	}
}

export default GetawayBooking;