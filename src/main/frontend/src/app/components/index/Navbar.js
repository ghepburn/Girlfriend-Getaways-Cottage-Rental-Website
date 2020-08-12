import React, { Component } from "react";
import {Link} from 'react-router-dom';
import AuthService from "../services/AuthService";
import AuthenticatedNavs from "./navs/AuthenticatedNavs";
import AnonymousNavs from "./navs/AnonymousNavs";
import AdminNavs from "./navs/AdminNavs";

import AuthContext from "../globalState/authContext/AuthContext";
import withAuthContext from "../wrappers/withAuthContext";

const Navbar = (props) => {
	let user = props.authContext.user;
	const remainingNavs = user.isAuthenticated ? <AuthenticatedNavs user={user}/> : <AnonymousNavs />;
	const adminNavs = user.isAdmin ? <AdminNavs /> : " ";

	return (

		<nav id="primary-nav">

			<ul>
				<Link to="/">
					<li>Home</li>
				</Link>
				<Link to="/about">
					<li>About</li>
				</Link>
				<Link to="/availability">
					<li>Availability</li>
				</Link>
				{remainingNavs}
				{adminNavs}
			</ul>
		</nav>


	);
};

export default withAuthContext(Navbar);