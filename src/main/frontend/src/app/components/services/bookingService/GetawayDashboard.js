import React, {Component} from "react";
import withAuthContext from "../wrappers/withAuthContext";
import SingleActionConditionalButton from "../functional/buttons/SingleActionConditionalButton";
import Getaway from "../globalState/getawayContext/Getaway";

import GetawayBooking from "./getawayBooking/GetawayBooking";
import GetawayAttendees from "./getawayAttendees/GetawayAttendees";

class GetawayDashboard extends Component {
	constructor(props) {
		super(props);
		this.state = {
			getaway: null,
			booking: null,
			attendees: null,
			details: null,

			disableButton: true
		}

		this.createGetaway = this.createGetaway.bind(this);
		this.updateState = this.updateState.bind(this);
		this.validateState = this.validateState.bind(this);
	}

	async createGetaway() {
		let getaway = new Getaway(this.state.booking, this.state.attendees, this.state.details);
		await this.setState({getaway: getaway});
		this.validateState();
	}

	async updateState(name, value) {
		await this.setState({[name]: value});
		this.validateState();
	}

	validateState = () => {
		let data = [this.state.getaway, this.state.booking, this.state.attendees, this.state.details];
		for (let count = 0; count < data.length; count ++) {
			if (data[count] === null) {
				noErrors = false;
			}
		}
		if (noErrors) {
			this.setState({disableButton: false});
		}
	}

	changeDisplay = () => {
		let factors = [showGetawayBooking, showGetawayAttendees, showGetawayDetails];		
		if (this.state.booking != null) {

		}
	}

	render() {

		const getawayBooking = this.state.showGetawayBooking ? <GetawayBooking bookingId={this.props.bookingId} user={this.props.authContext.user} name="booking" confirm={this.updateState}/><br /> : "";
		const getawayAttendees = this.state.showGetawayAttendees ? <GetawayAttendees user={this.props.authContext.user} name="attendees" confirm={this.updateState} /> : "";

		return(
			<div>
				<h3>Getaway Dashboard</h3>
				{getawayBooking}
				{getawayAttendees}
				<SingleActionConditionalButton onClick={this.createGetaway} offButtonText="Confirm Getaway" onButtonText="Confirmed" disableButton={this.state.disableButton} />
			}
			</div>
		);
	}
}

export default withAuthContext(GetawayDashboard);