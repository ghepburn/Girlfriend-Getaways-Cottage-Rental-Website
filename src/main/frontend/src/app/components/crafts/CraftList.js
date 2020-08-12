import React, { Component } from "react";
import CraftService from "../services/CraftService";
import SingleActionButton from "../functional/buttons/SingleActionButton";
import CreateCraft from "./CreateCraft";
import Craft from "./Craft";

export class CraftList extends Component {
	constructor(props) {
		super(props);
		this.state = {
			crafts: [],
			showCreateCraft: false
		}

		this.updateState = this.updateState.bind(this);
		this.showCreateCraft = this.showCreateCraft.bind(this);
		this.addToState = this.addToState.bind(this);
		this.removeFromState = this.removeFromState.bind(this);
	}

	componentDidMount() {
		CraftService.getAllCrafts()
		.then((response)=> {
			this.setState({crafts:response.data});
		}).catch((error)=>{
			console.log("ERROR...: " + error.message);
		})
	}

	updateState(id, name, desc, difficulty, materialCost, hoursRequired, pricePerPerson) {
		let changedCrafts = this.state.crafts;
		for (let count=0; count < changedCrafts.length; count++){
			if (changedCrafts[count].id === id) {
				changedCrafts[count].name = name;
				changedCrafts[count].desc = desc;
				changedCrafts[count].difficulty = difficulty;
				changedCrafts[count].materialCost = materialCost;
				changedCrafts[count].hoursRequired = hoursRequired;
				changedCrafts[count].pricePerPerson = pricePerPerson;
				this.setState({crafts: changedCrafts});
			}
		}
	}

	addToState(craft) {
		let changedCrafts = this.state.crafts;
		changedCrafts.push(craft);
		this.setState({crafts: changedCrafts});
	}

	removeFromState(id) {
		let changedCrafts =this.state.crafts.filter(craft=> craft.id != id);
		this.setState({crafts: changedCrafts});
	}

	showCreateCraft() {
		this.setState({showCreateCraft: !this.state.showCreateCraft});
	}

	render() {

		const crafts = this.state.crafts.map(craft => 
				<Craft craft={craft} updateState={this.updateState} removeFromState={this.removeFromState} admin={this.props.admin}/>
			); 

		const createCraft = this.state.showAddCraft ? <CreateCraft updateState={this.addToState}/> : "";
		const createCraftButton = this.props.admin ==="true" ? <SingleActionButton onClick={this.showcreateCraft} onButtonText="Close" offButtonText="Create Craft" /> : "";

		return (
			<div>
				<table>
					<body>
						<tr>
							<th>name</th>
							<th>Description</th>
							<th>Difficulty</th>
							<th>Material Cost</th>
							<th>Hours Requuired</th>
							<th>Price Per Person</th>
							<th></th>
						</tr>
						{crafts}
					</body>
				</table>
				{createCraftButton}
				{createCraft}
			</div>

		);
	}
};

export default CraftList;