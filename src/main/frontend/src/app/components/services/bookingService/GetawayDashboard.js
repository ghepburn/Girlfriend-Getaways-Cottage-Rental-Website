import React, {Component} from "react";
import withAuthContext from "../wrappers/withAuthContext";
import SingleActionConditionalButton from "../functional/buttons/SingleActionConditionalButton";

import GetawayBooking from "./booking/GetawayBooking";
import GetawayAttendees from "./attendees/GetawayAttendees";

class GetawayDashboard extends Component {
	constructor(props) {
		super(props);
		this.state = {
			booking: null,
			attendees: null,
			details: null,

			showGetawayBooking: true,
			showGetawayAttendees: false,
			showGetawayDetails: false,

			disableButton: true
		}

		this.updateState = this.updateState.bind(this);
	}

	createGetaway = () => {
		let getaway = (this.state.booking, this.state.members, this.state.details, this.state.crafts);
		this.props.onClick(getaway);
	}

	async updateState(name, value) {
		await this.setState({[name]: value, showGetawayBooking: false, showGetawayAttendees: false, showGetawayDetails: false});
		this.validateState();
		this.changeDisplay();
	}

	validateState = () => {
		let data = [this.state.booking, this.state.attendees];
		let noErrors = true
		for (let count = 0; count < data.length; count ++) {
			if (data[count] === null) {
				noErrors = false;
				this.setState({showGetawayBooking: false, showGetawayAttendees: false, showGetawayDetails: false});
				if (count === 1) {
					stateName = "showGetawayAttendees";
				}  else {
					stateName = "showGetawayDetails";
				}
				this.setState({[stateName]: true});
				break;
			}
		}
		this.setState({disableButton: !noErrors});
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
				{getawayBooking}
				{getawayAttendees}
				<SingleActionConditionalButton onClick={this.createGetaway} offButtonText="Confirm Getaway" onButtonText="Confirmed" disableButton={this.state.disableButton} />
			}
			</div>
		);
	}
}

export default withAuthContext(GetawayDashboard);