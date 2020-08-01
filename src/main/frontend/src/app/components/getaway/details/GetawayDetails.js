import React, {Component} from "react";
import Button from "../../functional/Button";

class GetawayDetails extends Component {
	constructor(props) {
		super(props);
		this.state = {
			numOfVehicles: 0,
			numOfPets: 0,
			desc: ""
		}
		this.handleChange = this.handleChange.bind(this);	
		this.setDetails = this.setDetails.bind(this);
	}

	handleChange(e) {
		this.setState({[e.target.name]: e.target.value});
	}

	setDetails() {
		this.props.setDetails(this.state.numOfVehicles, this.state.numOfPets, this.state.desc);
	}

	render() {
		return(

			<div>
				<h6>The details of your trip</h6>
				Number Of Vehicles: <input name="numOfVehicles" defaultValue={this.state.numOfVehicles} onChange={this.handleChange}/>
				<br />Number Of Pets: <input name="numOfPets" defaultValue={this.state.numOfPets} onChange={this.handleChange}/>\
				<br />Notes to owner: <textArea name="desc" rows="4" cols="50" onChange={this.handleChange}/>			
				<br /><Button onClick={this.setDetails} onButtonText="Update" offButtonText="Confirm" />
			</div>
		);
	}

}

export default GetawayDetails;