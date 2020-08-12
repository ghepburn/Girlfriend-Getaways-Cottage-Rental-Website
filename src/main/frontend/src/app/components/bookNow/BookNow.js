import React, {Component} from "react";
import Getaway from "./Getaway";
import CreateGetaway from "./CreateGetaway";
import GetawaySummary from "./GetawaySummary";


class BookNow extends Component {
	state = {
		getaway: new Getaway(null, null, null),
		getawayComplete: false
	}

	createGetaway = (getaway) => {
		this.setState({getaway: getaway, getawayComplete: true});
	}

	componentDidMount() {
		console.log(this.props.match.params.bookingId);
	}

	render() {

		return(

			<div>
				<CreateGetaway createGetaway={this.createGetaway} bookingId={this.props.match.params.bookingId} />
			</div>
		);
	}
}

export default BookNow;