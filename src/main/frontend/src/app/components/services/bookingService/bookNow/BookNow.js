import React, {Component} from "react";
import GetawayDashboard from "../GetawayDashboard";
import GetawaySummary from "./GetawaySummary";


class BookNow extends Component {
	state = {
		event: null,
		eventCreated: false
	}

	componentDidMount() {
		console.log(this.props.match.params.bookingId);
	}

	createEvent = (event) => {
		this.setState({event: event, eventCreated: true});
	}

	render() {

		const bookingDisplay = this.state.eventCreated ? <GetawaySummary /> : <GetawayDashboard onClick={this.createEvent} bookingId={this.props.match.params.bookingId} />

		return(

			<div>
				{bookingDisplay}
			</div>
		);
	}
}

export default BookNow;