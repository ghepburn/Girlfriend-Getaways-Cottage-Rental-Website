import React, { Component } from "react";

import CraftDisplay from "./craftDisplays/UserAdminDualCraftDisplay";
import CraftListDisplay from "./craftListDisplays/RowCraftListDisplay";


class CraftList extends Component {

	render() {
		let displayedCrafts = this.props.crafts.map(craft => <CraftDisplay craft={craft} admin={this.props.admin} onCraftClick={this.props.onCraftClick}/>);

		return (
			<div>

				<CraftListDisplay crafts={displayedCrafts} />

			</div>
		);
	}
};

export default CraftList;