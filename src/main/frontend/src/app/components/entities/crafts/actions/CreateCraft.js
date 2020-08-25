import React, { Component } from "react";
import CraftForm from "../../../forms/CraftForm";
import CraftManager from "../../../managers/CraftManager";
import withCraftContext from "../../../wrappers/withCraftContext";
import withNotificationContext from "../../../wrappers/withNotificationContext";
import Notification from "../../../globalState/notificationContext/Notification";

class CreateCraft extends Component{

	handleClick = (craft) => {
		CraftManager.addCraft(craft);
		this.props.craftContext.addCraft(craft);
		this.props.notificationContext.sendNotification(new Notification("SUCCESS", "Craft created successfully.", 2))
	}

	render() {

		return(
			<div>
				<CraftForm onClick={this.handleClick}/>
			</div>

		);

	}
	
}


export default withNotificationContext(withCraftContext(CreateCraft));