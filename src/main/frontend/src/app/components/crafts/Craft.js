import React, { Component } from "react";
import EditCraft from "./EditCraft";
import CraftService from "../services/CraftService";
import Button from "../functional/Button";


class Craft extends Component{

	constructor(props) {
		super(props);
		this.state = {
			showEditCraft: false
		}

		this.showEditCraft = this.showEditCraft.bind(this);
	}

	showEditCraft() {
		this.setState({showEditCraft: !this.state.showEditCraft});
	}

	render() {

		const editCraft = this.state.showEditCraft ? <EditCraft craft={this.props.craft} updateState={this.props.updateState} removeFromState={this.props.removeFromState}/> : "";
		const craftButton = this.props.admin === "true" ? <Button onClick={this.showEditCraft} onButtonText="Close" offButtonText="Edit"/> : "";


		return (
			<React.Fragment>
				<tr>
					<td>{this.props.craft.name}</td>
					<td>{this.props.craft.desc}</td>
					<td>{this.props.craft.difficulty}</td>
					<td>{this.props.craft.materialCost}</td>
					<td>{this.props.craft.hoursRequired}</td>
					<td>{this.props.craft.pricePerPerson}</td>
					<td>{craftButton}</td>
				</tr>
				{editCraft}
			</React.Fragment>
		)
	}
}


export default Craft;