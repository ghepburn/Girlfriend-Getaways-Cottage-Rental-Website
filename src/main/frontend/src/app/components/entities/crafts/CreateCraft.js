import React, { Component } from "react";
import CraftService from "../services/CraftService";

class CreateCraft extends Component{

	constructor(props) {
		super(props);
		this.state = {
			name: "",
			desc:"",
			difficulty:"",
			materialCost:"",
			hoursRequired:"",
			pricePerPerson: "",

			showSuccessMessage: false,
			successMessage: "Change Made Successfully!"
		}

		this.handleChange = this.handleChange.bind(this);
		this.addCraft = this.addCraft.bind(this);
	}

	handleChange(e) {
		this.setState({[e.target.name]: e.target.value});
	}

	createCraft() {
		CraftService.createCraft(this.state.name, this.state.desc, this.state.difficulty, this.state.materialCost, this.state.hoursRequired, this.state.pricePerPerson)
		.then((response)=>{
			this.props.updateState(response.data);
			this.setState({showSuccessMessage: true});
		}).catch((error)=>{console.log(error.message)})
	}

	render() {

		const successMessage = this.state.showSuccessMessage ? <tr><td>{this.state.successMessage}</td></tr> : "";

		return (
			<table>
				<tr>
					<td>Name: <input name="name" onChange={this.handleChange}></input></td>
					<td>Description: <input name="desc" onChange={this.handleChange}></input></td>
					<td>Difficulty: <input name="difficulty" onChange={this.handleChange}></input></td>
					<td>Material Cost: <input name="materialCost" onChange={this.handleChange}></input></td>
					<td>Hours Required: <input name="hoursRequired" onChange={this.handleChange}></input></td>
					<td>Price Per Person: <input name="pricePerPerson" onChange={this.handleChange}></input></td>
					<td><button onClick={this.addCraft}>Create</button></td>
				</tr>
			</table>
		)
	}
}


export default CreateCraft;