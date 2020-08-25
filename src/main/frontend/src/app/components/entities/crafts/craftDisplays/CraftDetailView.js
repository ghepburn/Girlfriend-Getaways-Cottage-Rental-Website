import React, {Component} from "react";
import SingleActionButton from "../../../functional/buttons/SingleActionButton";
import EditCraft from "../actions/EditCraft";

class CraftDetailView extends Component {

	state={
		showEdit: false
	}

	handleClick = () => {
		this.setState({showEdit: !this.state.showEdit});
	}

	render() {

		let button = this.props.admin === "true" ? <SingleActionButton onClick={this.handleClick} offButtonText="Edit" onButtonText="Close" /> : "";
		let edit = this.state.showEdit ? <EditCraft craft={this.props.craft} /> : "";

		return(
			<div>
				Craft Details <br />
				Name: {this.props.craft.name} <br />
				Desc: {this.props.craft.desc}  <br />
				Difficulty: {this.props.craft.Difficulty} <br />
				Hours Required: {this.props.craft.hoursrequired} <br />
				Price Per Person: {this.props.craft.pricePerPerson} <br />
				{button} <br />
				{edit}
			</div>
		);

	}

}

export default CraftDetailView;