import React, { Component } from "react";

class ConfirmedAttendeeList extends Component {

	render() {
		
		const confirmedAttendees = this.props.attendees.map(attendee => 
			<li>{attendee.firstName} {attendee.lastName}</li>	
		);
		return(

			<div>
				{confirmedAttendees}
			</div>

		);
	}

}

export default ConfirmedAttendeeList