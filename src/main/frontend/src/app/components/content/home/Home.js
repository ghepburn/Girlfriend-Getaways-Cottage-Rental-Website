import React, {useContext} from "react";
import SettingsContext from "../../globalState/settingsContext/SettingsContext";

const Home = () => {

	const settingsContext = useContext(SettingsContext);

	return (
		<div className="home">
			<div className="page-title">
				{settingsContext.settings.homeIntroduction}
			</div>
		</div>
	);
}

export default Home;