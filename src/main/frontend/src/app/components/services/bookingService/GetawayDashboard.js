import React, {Component} from "react";

import Getaway from "../../globalState/getawayContext/Getaway";

import BookingProgressTracker from "./progressTracker/BookingProgressTracker";
import GetawayBooking from "./getawayBooking/GetawayBooking";
import GetawayAttendees from "./getawayAttendees/GetawayAttendees";
import GetawaySummary from "./getawaySummary/GetawaySummary";

class GetawayDashboard extends Component {
	constructor(props) {
		super(props);
		this.state = {
			getaway: new Getaway(),
			
			bookingQueue: [],
			currentIndex: 0,

			disableButton: true
		}
	}

	componentDidMount() {
		
		const getawayBooking = <GetawayBooking getaway={this.state.getaway} updateState={this.updateState} bookingId={this.props.match.params.bookingId}/>;
		const getawayAttendees = <GetawayAttendees getaway={this.state.getaway} updateState={this.updateState} />;
		const getawaySummary = <GetawaySummary getaway={this.state.getaway} />;
		
		let bookingQueue = [getawayBooking, getawayAttendees, getawaySummary];

		this.setState({bookingQueue: bookingQueue});		
	}

	updateState = (getaway) => {
		this.setState({getaway: getaway});
		this.moveIndexForward();
	}

	moveIndexForward = () => {
		this.setState({currentIndex: this.state.currentIndex+1})
	}

	moveIndexBackward = () => {
		this.setState({currentIndex: this.state.currentIndex-1})	
	}

	render() {

		let currentView = this.state.bookingQueue[this.state.currentIndex]
		let backwardButton = this.state.currentIndex > 0 ? <button onClick={this.moveIndexBackward}>Back</button> : "";


		return(
			<div>
				<h3>Getaway Dashboard</h3>
				<BookingProgressTracker getaway={this.state.getaway} />
				
				{currentView}

				{backwardButton}
			</div>
		);
	}
}

export default GetawayDashboard;