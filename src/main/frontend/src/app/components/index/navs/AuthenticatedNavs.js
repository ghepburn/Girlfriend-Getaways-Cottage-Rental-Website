import React, { Component } from "react";
import {Link} from 'react-router-dom';

export class AuthenticatedNavs extends Component {

	render() {

		return (				
			<div>	
				<Link to="/logout">
					<li>Logout</li>
				</Link>
				<Link to={"/account/" + this.props.user.username}>
					<li>Account</li>
				</Link>
			</div>
		);
	}
};

export default AuthenticatedNavs;