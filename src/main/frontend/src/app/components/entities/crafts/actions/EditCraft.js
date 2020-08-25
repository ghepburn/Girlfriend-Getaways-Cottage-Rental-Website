import React, { Component } from "react";
import CraftForm from "../../../forms/CraftForm";
import CraftManager from "../../../managers/CraftManager";
import withCraftContext from "../../../wrappers/withCraftContext";
import withNotificationContext from "../../../wrappers/withNotificationContext";
import Notification from "../../../globalState/notificationContext/Notification";
import SingleActionButton from "../../../functional/buttons/SingleActionButton";

class EditCraft extends Component{

	handleClick = (Craft) => {
		CraftManager.editCraft(Craft);
		this.props.craftContext.editCraft(Craft);
		this.props.notificationContext.sendNotification(new Notification("SUCCESS", "Craft changed successfully.", 2))
	}

	handleDelete = () => {
		CraftManager.deleteCraft(this.props.Craft.id);
		this.props.craftContext.removeCraft(this.props.craft.id);
		this.props.notificationContext.sendNotification(new Notification("SUCCESS", "Craft deleted successfully.", 2))
	}

	render() {

		let deleteButton = <SingleActionButton onClick={this.handleDelete} offButtonText="Delete" onButtonText="Deleted" />

		return(
			<div>
				<CraftForm craft={this.props.craft} onClick={this.handleClick}/>
				{deleteButton}
			</div>

		);

	}
	
}


export default withNotificationContext(withCraftContext(EditCraft));