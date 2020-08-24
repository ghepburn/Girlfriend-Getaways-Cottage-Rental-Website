import React, { Component } from "react";
import CraftContext from "../../../globalState/craftContext/CraftContext";
import CraftManager from "../../../managers/CraftManager";
import SingleActionButton from "../../../functional/buttons/SingleActionButton";

import CraftList from "../../../entities/crafts/CraftList";
import CreateCraft from "../../../entities/crafts/actions/CreateCraft";


class AdminCrafts extends Component {
	static contextType = CraftContext;

	state = {
		showCreateCraft: false
	}

	async componentDidMount() {
		let crafts = this.context.crafts;
		if (crafts.length === 0) {
			// set Crafts
			let updatedCrafts = await CraftManager.getAllCrafts();
			this.context.setCrafts(updatedCrafts);
		}
	}

	toggleCreateCraft = () => {
		this.setState({showCreateCraft: !this.state.showCreateCraft});
	}

	render() {

		let createCraft = this.state.showCreateCraft ? <CreateCraft /> : "";

		return (
			<div>
				<h3>Crafts</h3>

				<CraftList Crafts={this.context.crafts} admin="true" />
				<SingleActionButton onClick={this.toggleCreateCraft} offButtonText="Add Craft" onButtonText="Close"/>
				{createCraft}
			</div>
		);
	}
};

export default AdminCrafts;