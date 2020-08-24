import React, {Component} from "react";
import {Link} from "react-router-dom";

class UserAdminDualBookingDisplay extends Component {
	

	render() {

		if (this.props.booking != null) {
			
			let button = this.props.admin === "true" ? <Link to={"/admin/booking/" + this.props.booking.id}><button>View</button></Link> : <Link to={"/booknow/"+ this.props.booking.id}><button>Book Now!</button></Link>;

			return (

				<div>
					<tr>
						<td>{this.props.booking.startDate}</td>
						<td>{this.props.booking.endDate}</td>
						<td>NA</td>
						<td>{button}</td>
					</tr> 
				</div>

			);

		} else {
			return (
				<div>
					No Bookings Available
				</div>
			);
		}
	}
}

export default UserAdminDualBookingDisplay;