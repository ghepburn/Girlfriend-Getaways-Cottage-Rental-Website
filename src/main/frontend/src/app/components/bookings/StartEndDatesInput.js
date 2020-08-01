import React, {Component} from "react";
import BookingService from "../services/BookingService";

class StartEndDatesInput extends Component {
	
	constructor(props) {
		super(props);
		this.state = {
			booking: "",
			startDate: "",
			endDate: ""
		}

		this.handleChange = this.handleChange.bind(this);
		this.changeStartEndDates = this.changeStartEndDates.bind(this);
	}

	componentDidMount() {
		this.setState({startDate: this.props.booking.startDate});
		this.setState({endDate: this.props.booking.endDate});
	}

	handleChange(e) {
		this.setState({[e.target.name]:e.target.value});
	}

	changeStartEndDates() {
		let booking = this.props.booking;
		booking.startDate = this.state.startDate;
		booking.endDate = this.state.endDate;
		try {
			BookingService.changeStartEndDates(booking)
			.then((response)=>{
				this.props.updateBookingState(response.data);
				this.props.showSuccessMessage();
			}).catch((error)=>{console.log(error.message)})
		} catch(error) {
			console.log(error.message);
		}
	}

	render() {
		return(
			<tr>
				<input onChange={this.handleChange} defaultValue={this.props.booking.startDate} name="startDate"></input>
				<input onChange={this.handleChange} defaultValue={this.props.booking.endDate} name="endDate"></input>
				<button onClick={this.changeStartEndDates}>Apply</button>
			</tr>
		);
	}
}

export default StartEndDatesInput