import React, { useContext, useState } from "react";
import SettingsContext from "../../../globalState/settingsContext/SettingsContext";
import Table from "../../../functional/tables/ObjectTable";
import HiddenComponent from "../../../functional/objects/HiddenComponent";


const AdminSettings = (props) => {

	const settingsContext = useContext(SettingsContext);
	const [settings, setSettings] = useState(settingsContext.settings);	

	return (
		<div className="admin-settingss">
			<Table {...props} title="Settings" inputs={settings} buttonText="Edit" />
		</div>
	);
};

export default AdminSettings;