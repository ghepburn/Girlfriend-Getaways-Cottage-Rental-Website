import React, {Component} from "react";
import withCraftContext from "../../../wrappers/withCraftContext";
import withAuthContext from "../../../wrappers/withAuthContext";

import CraftDetailView from "./CraftDetailView";

class UserAdminFullCraftView extends Component {

	state={
		craft: null
	}

	componentDidMount() {
		let craftId = this.props.match.params.craftId;
		let craft = this.props.craftContext.getCraft(craftId);
		this.setState({craft: craft});
		console.log(craft);
	}

	render() {

		if (this.state.craft !== null) {

			
			return(

				<div>
					Craft View
					<h6>ID: {this.state.craft.id}</h6>
					<CraftDetailView craft={this.state.craft} admin={this.props.authContext.user.isAdmin}/>
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