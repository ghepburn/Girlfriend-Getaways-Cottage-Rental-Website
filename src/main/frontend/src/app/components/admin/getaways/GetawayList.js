import React, { Component } from "react";
import Getaway from "./Getaway";

export class GetawayList extends Component {
	render() {

		const getaways = this.props.getaways.map(getaway => 
				<Getaway getaway={getaway} />
			); 

		return (
			<table>
				<body>
					<tr>
						<th>Start Date</th>
						<th>End Date</th>
						<th>Booked Date</th>
						<th>numOfVehicles</th>
						<th>numOfCars</th>
						<th>Members</th>
						<th>desc</th>
					</tr>
					{getaways}
				</body>
			</table>
		);
	}
};

export default GetawayList;