import React, { Component } from "react";

class AdminBookingView extends Component {

	render() {
		return(

			<div>
				{this.props.match.params.bookingId}
			</div>
		);
	}

}

export default AdminBookingView;