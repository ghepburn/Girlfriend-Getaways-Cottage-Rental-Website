import React, { Component } from "react";
import axios from "axios";
import Member from "./Member";

class Getaway extends Component{
	constructor(props) {
		super(props);
		this.state = {
			booking: []
		};
	}

	componentDidMount() {
		axios.get(this.props.getaway._links.booking.href)
			.then((response) => this.setState( {booking: response.data} )
		);
	}

	render() {
		
		const members = this.props.getaway.details.members.map(member => 
				<Member member={member} />
			);

		return (
			<tr>
				<td>{this.state.booking.startDate}</td>
				<td>{this.state.booking.endDate}</td>
				<td>{this.state.booking.bookedDate}</td>
				<td>{this.props.getaway.details.numOfVehicles}</td>
				<td>{this.props.getaway.details.numOfPets}</td>
				<td>{members}</td>
				<td>{this.props.getaway.details.desc}</td>
			</tr>
		)
	}
}


export default Getaway;