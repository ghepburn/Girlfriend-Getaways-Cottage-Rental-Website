import React, {useContext} from "react";
import SettingsContext from "../../globalState/settingsContext/SettingsContext";

const Home = () => {

	const settingsContext = useContext(SettingsContext);
	console.log(settingsContext);

	return (
		<div className="home">
			<div className="home-title">
			</div>
			<div className="centered-wording">
				{settingsContext.settings.homeIntroduction}
			</div>
		</div>
	);
}

export default Home;