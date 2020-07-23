import React, { Component } from "react";
import {Link} from 'react-router-dom';
import AuthService from "../services/AuthService";
import AuthenticatedNavs from "./navs/AuthenticatedNavs";
import AnonymousNavs from "./navs/AnonymousNavs";
import AdminNavs from "./navs/AdminNavs";

import UserContext from "../context/UserContext";

export class Navbar extends Component {
	static contextType = UserContext;

	render() {
		const { user, loginUser, logoutUser } = this.context;
		const remainingNavs = user.getIsUserLoggedIn() ? <AuthenticatedNavs /> : <AnonymousNavs />;
		const adminNavs = user.getIsAdminLoggedIn() ? <AdminNavs /> : " "; 

		return (

			<nav id="primary-nav">

				<ul>
					<Link to="/">
						<li>Home</li>
					</Link>
					<Link to="/about">
						<li>About</li>
					</Link>
					<Link to="/availabillity">
						<li>Availabillity</li>
					</Link>
					{remainingNavs}
					{adminNavs}
				</ul>
			</nav>


		);
	}
};
// NavBar.contextType = AuthContext;

export default Navbar