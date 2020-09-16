import React, { useContext, useEffect, useState } from "react";
import CraftContext from "../../../globalState/craftContext/CraftContext";
import CraftManager from "../../../managers/CraftManager";
import Table from "../../../functional/tables/ArrayTable";


const AdminCrafts = (props) => {

	const craftContext = useContext(CraftContext);
	const [crafts, setCrafts] = useState(craftContext.crafts);	

	useEffect((async ()=>{
		const updatedCrafts = crafts.length > 0 ? crafts : await CraftManager.getAllCrafts();
		setCrafts(updatedCrafts);
	}), []);

	return (
		<div className="admin-crafts">
			<Table {...props} title="Crafts" inputs={crafts} buttonText="Edit" />
		</div>
	);
};

export default AdminCrafts;