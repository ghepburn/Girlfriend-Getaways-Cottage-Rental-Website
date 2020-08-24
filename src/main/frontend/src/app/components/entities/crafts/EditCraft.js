import React, { Component } from "react";
import CraftService from "../services/CraftService";

class EditCraft extends Component{

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
		this.editCraft = this.editCraft.bind(this);
		this.deleteCraft = this.deleteCraft.bind(this);
	}

	componentDidMount() {
		this.setState({
			name: this.props.craft.name, desc: this.props.craft.desc, difficulty: this.props.craft.difficulty, materialCost: this.props.craft.materialCost, hoursRequired: this.props.hoursRequired, pricePerPerson: this.props.pricePerPerson
		});
	}

	handleChange(e) {
		this.setState({[e.target.name]: e.target.value});
	}

	editCraft() {
		CraftService.editCraft(this.props.craft.id, this.state.name, this.state.desc, this.state.difficulty, this.state.materialCost, this.state.hoursRequired, this.state.pricePerPerson)
		.then((response)=>{
			this.props.updateState(this.props.craft.id, this.state.name, this.state.desc, this.state.difficulty, this.state.materialCost, this.state.hoursRequired, this.state.pricePerPerson);
			this.setState({showSuccessMessage: true});
		}).catch((error)=>{console.log(error.message)})
	}

	updateCraftState(id, name, desc, difficulty, materialCost, hoursRequired, pricePerPerson) {
		this.updateState(id, name, desc, difficulty, materialCost, hoursRequired, pricePerPerson);
	}

	deleteCraft() {
		try {
			CraftService.deleteCraft(this.props.craft.id)
			.then(()=>{
				this.setState({showSuccessMessage:true});
				this.props.removeFromState(this.props.craft.id);
			})
		} catch(error) {
			
		}
	}

	render() {

		const successMessage = this.state.showSuccessMessage ? <tr><td>{this.state.successMessage}</td></tr> : "";

		return (
			<React.Fragment>
				<tr>
					<td><input name="name" defaultValue={this.props.craft.name} onChange={this.handleChange}></input></td>
					<td><input name="desc" defaultValue={this.props.craft.desc} onChange={this.handleChange}></input></td>
					<td><input name="difficulty" defaultValue={this.props.craft.difficulty} onChange={this.handleChange}></input></td>
					<td><input name="materialCost" defaultValue={this.props.craft.materialCost} onChange={this.handleChange}></input></td>
					<td><input name="hoursRequired" defaultValue={this.props.craft.hoursRequired} onChange={this.handleChange}></input></td>
					<td><input name="pricePerPerson" defaultValue={this.props.craft.pricePerPerson} onChange={this.handleChange}></input></td>
					<td><button onClick={this.editCraft}>Apply</button></td>
					<td><button onClick={this.deleteCraft}>Delete</button></td>
				</tr>
			</React.Fragment>
		)
	}
}


export default EditCraft;