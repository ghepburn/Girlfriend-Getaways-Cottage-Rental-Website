import React, {Component} from "react";
import AttendeeForm from "./AttendeeForm";
import ConfirmedAttendeeList from "./ConfirmedAttendeeList";


class GetawayAttendees extends Component {
	
	constructor(props) {
		super(props);
		this.state = {
			numOfAttendees: 1,
			attendeeForms: []
		}

		this.updateNumOfAttendees = this.updateNumOfAttendees.bind(this);
		this.addAttendeeForm = this.addAttendeeForm.bind(this);
		this.removeAttendeeForm = this.removeAttendeeForm.bind(this);
	}

	componentDidMount() {
		let forms = [<AttendeeForm user={this.props.user} addAttendee={this.props.addAttendee} updateAttendee={this.props.updateAttendee}/>];
		this.setState({attendeeForms: forms});
	}

	updateNumOfAttendees(e) {
		this.setState({numOfAttendees: e.target.value});
		if (e.target.value > this.state.attendeeForms.length) {
			for (let count = this.state.attendeeForms.length; count < e.target.value; count ++) {
				this.addAttendeeForm();
			}
		} 
		if (e.target.value < this.state.attendeeForms.length && e.target.value > 0) {
			for (let count = this.state.attendeeForms.length; count > e.target.value; count --) {
				this.removeAttendeeForm();
			}
		}
	}

	addAttendeeForm() {
		let changedAttendeeForms = this.state.attendeeForms;
		changedAttendeeForms.push(<AttendeeForm addAttendee={this.props.addAttendee} updateAttendee={this.props.updateAttendee} />);
		this.setState({attendeeForms: changedAttendeeForms});
	}

	removeAttendeeForm() {
		let changedAttendeeForms = this.state.attendeeForms;
		changedAttendeeForms.pop();
		this.setState({attendeeForms: changedAttendeeForms});
	}

	render() {

		const attendeeForms = this.state.attendeeForms.map(attendeeForm => attendeeForm);
		
		return(

			<div>
	
				<h4>Your Friends Attending</h4>
				Number Of Total Attendees: <input defaultValue={this.state.numOfAttendees} name="numOfAttendees" onChange={this.updateNumOfAttendees} /> 
				<ConfirmedAttendeeList attendees={this.props.attendees} />
				{attendeeForms}
			</div>
		);
	}

}

export default GetawayAttendees;