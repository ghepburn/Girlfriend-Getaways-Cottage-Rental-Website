import React, { Component } from "react";
import {Link} from 'react-router-dom';

export class AnonymousNavs extends Component {

	render() {

		return (
			<div>
				<Link to="/register">
					<li>Register</li>
				</Link>
				<Link to="/login">
					<li>Login</li>
				</Link>
			</div>
		);
	}
};

export default AnonymousNavs