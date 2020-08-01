import React, {Component} from "react";
import GetawayBooking from "./booking/GetawayBooking";
import GetawayAttendees from "./attendees/GetawayAttendees";
import GetawayDetails from "./details/GetawayDetails";
import CraftList from "../crafts/CraftList";


class GetawayInputs extends Component {

	constructor(props) {
		super(props);
		this.state = {
			booking: null,
			attendees: [],
			numOfVehicles: null,
			numOfPets: null,
			desc: ""
		}

		this.addAttendee = this.addAttendee.bind(this);
		this.updateAttendee = this.updateAttendee.bind(this);
		this.createGetaway = this.createGetaway.bind(this);
		this.setDetails = this.setDetails.bind(this);
	}

	componentDidMount() {
		this.setState({booking: this.props.booking});
	}

	addAttendee(attendee) {
		let changedAttendees = this.state.attendees;
		changedAttendees.push(attendee);
		this.setState({attendees: changedAttendees});
	}

	updateAttendee(attendee) {
		let changedAttendees = this.state.attendees;
		for (let count=0; count < changedAttendees.length; count++) {
			if (attendee.id === changedAttendees[count].id) {
				changedAttendees[count].firstName = attendee.firstName;
				changedAttendees[count].lastName = attendee.lastName;
				changedAttendees[count].email = attendee.email;
				changedAttendees[count].payingSeparatey = attendee.payingSeparatey;
			}
		}
		this.setState({attendees: changedAttendees});
	}

	setDetails(numOfVehicles, numOfPets, desc) {
		this.setState({numOfVehicles: numOfVehicles, numOfPets: numOfPets, desc:desc});
	}

	createGetaway() {
		try {
			this.props.createGetaway(this.state.booking, this.state.attendees, this.state.numOfVehicles, this.state.numOfPets, this.state.desc);
		} catch(error) {
			console.log(error.message);
		}
	}


	render() {
		return(

			<div>
				<h2>Creating a Girlfriend Getaway</h2>
				<GetawayBooking booking={this.props.booking}/>
				<GetawayAttendees user={this.props.user} addAttendee={this.addAttendee} updateAttendee={this.updateAttendee} attendees={this.state.attendees}/>
				<GetawayDetails setDetails={this.setDetails}/>
				<button onClick={this.createGetaway}>Proceed</button>
			</div>
		);
	}

}

export default GetawayInputs;
