import React, { Component } from "react";
import {Link} from "react-router-dom";

export class MobileNav extends Component {
	render() {
		return (
			<div>

				<Link to="">
					<h1 className="logo">Nav</h1>
				</Link>

				<a className="to-nav">Menu</a>
			</div>
		);
	}
};

export default MobileNav;