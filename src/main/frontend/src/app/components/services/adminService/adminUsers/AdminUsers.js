import React, { useState, useEffect } from "react";

import Table from "../../../functional/tables/ArrayTable";
import UserManager from "../../../managers/UserManager";


const AdminUsers = (props) => {

	const [users, setUsers] = useState([]);

	useEffect(async ()=>{
		const users = await UserManager.getUsers();
		setUsers(users);
	}, []);

	return (
		<div className="admin-users">		
			<Table {...props} inputs={users} title="Users" toInclude={["username", "firstName", "lastName", "email"]} buttonText="View" />
		</div>
	);
}

export default AdminUsers;