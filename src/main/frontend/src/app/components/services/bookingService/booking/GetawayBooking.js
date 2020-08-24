import React from "react";
import withBookingContext from "../../wrappers/withBookingContext";
import SingleActionButton from "../../functional/buttons/SingleActionButton";

const GetawayBooking = (props) => {

	let booking = props.bookingContext.getBooking(props.bookingId);
	booking.book(props.user);
	
	return(
		<div>
			<div>
				<table>
					<tr>
						<td>Start Date: </td>
						<td>{booking.startDate}</td>
					</tr>
					<tr>
						<td>End Date: </td>
						<td>{booking.endDate}</td>
					</tr>
					<tr>
						<td>Point Of Contact: </td>
						<td>{booking.bookedBy.username} @ {booking.bookedBy.email}</td>
					</tr>
				</table>
			</div>
			<SingleActionButton onClick={()=>{props.confirm(props.name, booking)}} onButtonText="Confirmed" offButtonText="Confirm"/>
		</div>
	)
}

export default withBookingContext(GetawayBooking);