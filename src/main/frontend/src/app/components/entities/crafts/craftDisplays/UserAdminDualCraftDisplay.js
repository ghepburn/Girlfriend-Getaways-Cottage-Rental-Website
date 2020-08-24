import React, {Component} from "react";
import {Link} from "react-router-dom";
import SingleActionButton from "../../../functional/buttons/SingleActionButton";

class UserAdminDualCraftDisplay extends Component {
	

	render() {

		if (this.props.crafts != null) {
			
			let button = this.props.admin === "true" ? <Link to={"/admin/craft/" + this.props.craft.id}><button>View</button></Link> : <SingleActionButton onClick{this.props.onCraftClick} offButtonText="Choose" onButtonClick="Remove" />;

			return (

				<div>
					<tr>
						<td>{this.props.craft.name}</td>
						<td>{this.props.craft.desc}</td>
						<td>{this.props.craft.difficulty}</td>
						<td>{this.props.craft.hoursRequired}</td>
						<td>{this.props.craft.pricePerPerson}</td>
						<td>{button}</td>
					</tr> 
				</div>

			);

		} else {
			return (
				<div>
					No Crafts Available
				</div>
			);
		}
	}
}

export default UserAdminDualCraftsDisplay;