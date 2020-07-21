import React, { Component } from "react";
import {Link} from 'react-router-dom';

export class AdminNavs extends Component {

	render() {

		return (
			<Link to="/admin">
				<li>Admin</li>
			</Link>
		);
	}
};

export default AdminNavs