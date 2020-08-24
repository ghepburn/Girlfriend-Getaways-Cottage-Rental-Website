import React, {Component} from "react";
import withCraftContext from "../../../wrappers/withCraftContext";
import withAuthContext from "../../../wrappers/withAuthContext";

import CraftDetailsView from "./CraftDetailsView";

class UserAdminFullCraftView extends Component {

	state={
		craft: null
	}

	componentDidMount() {
		let CraftId = this.props.match.params.CraftId;
		let craft = this.props.craftContext.getCraft(CraftId);
		this.setState({craft: craft});
	}

	render() {

		if (this.state.craft !== null) {

			let CraftContactView = this.state.craft.bookedBy === null ? "" : <CraftContactView craft={this.state.craft} admin={this.props.admin} />;
			let CraftGetawayView = this.state.craft.getawayId === null ? "" : <CraftGetawayView craft={this.state.craft} admin={this.props.admin} />;

			return(

				<div>
					Craft View
					<h6>ID: {this.state.craft.id}</h6>
					<CraftDetailsView craft={this.state.craft} admin={this.props.authContext.user.isAdmin}/>
					{CraftContactView}
					{CraftGetawayView}
				</div>

			);

		} else {
			return (
				<div>No Craft Found</div>
			);
		}

	}

}

export default withAuthContext(withCraftContext(UserAdminFullCraftView));