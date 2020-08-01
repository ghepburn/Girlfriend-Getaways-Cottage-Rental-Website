import React, {Component} from "react";
import OneClickDualActionButton from "../../functional/OneClickDualActionButton";
import Attendee from "./Attendee";
import ValidationService from "../../services/ValidationService";

class AttendeeForm  extends Component {
	constructor(props) {
		super(props);
		this.state={
			firstName: "",
			lastName: "",
			payingSeparately: false,
			attendeeEmail: "",
			attendeeId: null,

			firstNameErrors: "",
			lastNameErrors: "",
			emailErrors: ""
		}

		this.handleChange = this.handleChange.bind(this);
		this.addAttendee = this.addAttendee.bind(this);
		this.updateAttendee = this.updateAttendee.bind(this);
	}

	componentDidMount() {
		if (this.props.user && this.props.user) {
			this.setState({firstName: this.props.user.firstName, lastName: this.props.user.lastName, email: this.props.user.email});
		}
	}

	handleChange(e) {
		if (e.target.name != "payingSeparately") {
			this.setState({[e.target.name]: e.target.value});
			
			let errors = ValidationService.getErrors(e.target.name, e.target.value);

			console.log("Errors are " + errors);

			let stateName = e.target.name + "Errors";
			this.setState({ [stateName]: errors });

		} else {
			this.setState({payingSeparately: !this.state.payingSeparately, emailErrors: ""});

		}
	}

	addAttendee() {
		let firstName = this.state.firstName; 
		let lastName = this.state.lastName; 
		let email = this.state.email;
		let payingSeparately = this.state.payingSeparately;
		let attendee = new Attendee(firstName, lastName, email, payingSeparately);
		this.setState({attendeeId: attendee.id});
		this.props.addAttendee(attendee);
	}

	updateAttendee() {
		let attendee = new Attendee(this.state.firstName, this.state.lastName, this.state.email, this.state.payingSeparately);
		attendee.id = this.state.attendeeId;
		this.props.updateAttendee(attendee);
	}


	render() {

		const email = this.state.payingSeparately ? <React.Fragment>Email: <input name="email" defaultValue={this.state.email} onChange={this.handleChange} /></React.Fragment> : ""; 
		const firstNameErrors = this.state.firstNameErrors.length > 1 ? <div><br />{this.state.firstNameErrors}<br /></div> : "";
		const lastNameErrors = this.state.lastNameErrors.length > 1 ? <div><br />{this.state.lastNameErrors}<br /></div> : "";
		const emailErrors = this.state.emailErrors.length > 1 ? <div><br />{this.state.emailErrors}<br /></div> : "";

		return(
		
		<div>
			Email Errors {this.state.emailErrors}
			{firstNameErrors}
			First Name: <input name="firstName" defaultValue={this.state.firstName} onChange={this.handleChange}/>
			{lastNameErrors}
			Last Name: <input name="lastName" defaultValue={this.state.lastName} onChange={this.handleChange} />
			Paying Separately?: <input type="checkbox" name="payingSeparately" onClick={this.handleChange}/>
			{emailErrors}
			{email}
			<OneClickDualActionButton onClick={this.addAttendee} offClick={this.updateAttendee} onButtonText="Update" offButtonText="Confirm" />
		</div>

		);
	}

}

export default AttendeeForm