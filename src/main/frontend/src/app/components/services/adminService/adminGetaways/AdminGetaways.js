import React, { useContext, useEffect, useState } from "react";
import GetawayContext from "../../../globalState/getawayContext/GetawayContext";
import GetawayManager from "../../../managers/GetawayManager";
import Table from "../../../functional/tables/ArrayTable";


const AdminGetaways = (props) => {

	const getawayContext = useContext(GetawayContext);
	const [getaways, setGetaways] = useState(GetawayContext.getaways);	

	useEffect((async ()=>{
		const updatedGetaways = getaways.length > 0 ? getaways : await GetawayManager.getAllGetaways();
		setGetaways(updatedGetaways);
	}), []);

	return (
		<div className="admin-getaways">
			<Table {...props} title="Getaways" inputs={getaways} buttonText="Edit" />
		</div>
	);
};

export default AdminGetaways;